import type { Locale } from "@/lib/i18n/config";

/** Tipo de mensaje: contacto formal (con nombre/correo) o comentario libre. */
type ContactKind = "contact" | "suggestion";

/** Payload que el formulario envía al server action `sendContactMessage`. */
export type ContactInput = {
  name: string;
  email: string;
  message: string;
  /** Token de reCAPTCHA v3; `null` cuando reCAPTCHA no está configurado. */
  token: string | null;
  locale: Locale;
  /** `"contact"` por defecto; `"suggestion"` hace opcionales nombre y correo. */
  kind?: ContactKind;
};
