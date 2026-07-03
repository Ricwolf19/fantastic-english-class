import type { Locale } from "@/lib/i18n/config";

/** Payload que el formulario envía al server action `sendContactMessage`. */
export type ContactInput = {
  name: string;
  email: string;
  message: string;
  /** Token de reCAPTCHA v3; `null` cuando reCAPTCHA no está configurado. */
  token: string | null;
  locale: Locale;
};
