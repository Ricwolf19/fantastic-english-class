"use server";

import { Resend } from "resend";

import { verifyRecaptcha } from "@/lib/captcha/verify";
import { ExternalServiceError, ForbiddenError } from "@/lib/errors";
import { createT, type Locale } from "@/lib/i18n/config";
import { type Result, safeAsync } from "@/lib/result";
import { site } from "@/lib/site";
import { asString, EMAIL_RE, ensureValid } from "@/lib/validation";

import type { ContactInput } from "./types";

// Resend's shared sender (test mode) works without domain verification; swap to
// a verified sender via CONTACT_FROM_EMAIL in production.
const DEFAULT_FROM = "Fantastic English Class <onboarding@resend.dev>";

/**
 * Valida, verifica el captcha y envía por email un mensaje del formulario.
 * Devuelve un `Result` tipado y nunca lanza: los errores de campo/validación/
 * servicio vuelven como `{ ok: false, error }`; los inesperados se loguean en
 * el servidor y se enmascaran con un mensaje genérico.
 */
export const sendContactMessage = async (
  input: ContactInput,
): Promise<Result<{ delivered: true }>> =>
  safeAsync(async () => {
    const locale: Locale = input.locale === "en" ? "en" : "es";
    const t = createT(locale);
    const isSuggestion = input.kind === "suggestion";

    const name = asString(input.name);
    const email = asString(input.email);
    const message = asString(input.message);

    ensureValid({
      // El buzón de comentarios (suggestion) hace opcionales nombre y correo;
      // el correo, si se escribe, se sigue validando.
      ...(isSuggestion
        ? email.length > 0
          ? {
              email: [
                {
                  valid: EMAIL_RE.test(email),
                  message: t("contact.errorEmail"),
                },
              ],
            }
          : {}
        : {
            name: [
              { valid: name.length >= 2, message: t("contact.errorName") },
              {
                valid: name.length <= 100,
                message: t("contact.errorNameLong"),
              },
            ],
            email: [
              { valid: email.length > 0, message: t("contact.errorRequired") },
              { valid: EMAIL_RE.test(email), message: t("contact.errorEmail") },
            ],
          }),
      message: [
        { valid: message.length >= 10, message: t("contact.errorMessage") },
        {
          valid: message.length <= 5000,
          message: t("contact.errorMessageLong"),
        },
      ],
    });

    const captcha = await verifyRecaptcha(input.token);
    if (!captcha.ok) {
      throw new ForbiddenError(t("contact.errorCaptcha"));
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY not set — cannot send email.");
      throw new ExternalServiceError(t("contact.errorGeneric"));
    }

    const resend = new Resend(apiKey);
    const subject = isSuggestion
      ? `[fantasticenglishclass] Nuevo comentario`
      : `[fantasticenglishclass] Nuevo mensaje de ${name}`;
    const text = isSuggestion
      ? `Tipo: Comentario / sugerencia\nNombre: ${name || "—"}\nEmail: ${
          email || "—"
        }\nIdioma: ${locale}\n\n${message}`
      : `Nombre: ${name}\nEmail: ${email}\nIdioma: ${locale}\n\n${message}`;
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM,
      to: process.env.CONTACT_TO_EMAIL ?? site.contact.email,
      ...(email ? { replyTo: email } : {}),
      subject,
      text,
    });
    if (error) {
      throw new ExternalServiceError(t("contact.errorGeneric"), error.message);
    }

    return { delivered: true as const };
  });
