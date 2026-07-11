"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "@/lib/contact/send";
import { useI18n } from "@/lib/i18n";

import { useRecaptcha } from "./useRecaptcha";

type Fields = { name: string; email: string; message: string };
const EMPTY: Fields = { name: "", email: "", message: "" };

/**
 * Buzón "Coméntanos lo que sea": nombre y correo opcionales, comentario
 * requerido. Reusa el server action con `kind: "suggestion"` y reCAPTCHA v3.
 */
export const SuggestionForm = () => {
  const { t, locale } = useI18n();
  const { execute } = useRecaptcha();

  const [values, setValues] = useState<Fields>(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<Partial<Fields>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof Fields, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFieldErrors({});
    setLoading(true);
    try {
      const token = await execute("suggestion");
      const res = await sendContactMessage({
        ...values,
        token,
        locale,
        kind: "suggestion",
      });
      if (res.ok) {
        setSent(true);
        setValues(EMPTY);
        return;
      }
      if (res.error.fieldErrors) setFieldErrors(res.error.fieldErrors);
      setFormError(res.error.message);
    } catch {
      setFormError(t("contact.errorGeneric"));
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-card border-leaf/40 bg-leaf/10 border p-8 text-center"
      >
        <p className="font-display text-ink-900 text-lg font-bold">
          {t("comments.success")}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-leaf mt-3 text-sm font-medium hover:underline"
        >
          {t("comments.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="suggestion-name">{t("comments.nameLabel")}</Label>
          <Input
            id="suggestion-name"
            autoComplete="name"
            value={values.name}
            placeholder={t("contact.namePlaceholder")}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="suggestion-email">{t("comments.emailLabel")}</Label>
          <Input
            id="suggestion-email"
            type="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={Boolean(fieldErrors.email)}
            placeholder={t("contact.emailPlaceholder")}
            onChange={(e) => set("email", e.target.value)}
          />
          {fieldErrors.email && (
            <p className="text-accent-pink text-xs font-medium">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="suggestion-message">{t("comments.messageLabel")}</Label>
        <Textarea
          id="suggestion-message"
          required
          rows={5}
          value={values.message}
          aria-invalid={Boolean(fieldErrors.message)}
          placeholder={t("comments.messagePlaceholder")}
          onChange={(e) => set("message", e.target.value)}
        />
        {fieldErrors.message && (
          <p className="text-accent-pink text-xs font-medium">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {formError && (
        <p role="alert" className="text-accent-pink text-sm font-medium">
          {formError}
        </p>
      )}

      <Button type="submit" loading={loading} className="w-full">
        {loading ? t("comments.sending") : t("comments.submit")}
      </Button>
    </form>
  );
};
