/**
 * Environment-variable gate. Keeps a landing honest about what it needs without
 * crashing dev where secrets are absent.
 *
 * Severity:
 *  - **production** → missing recommended var WARNS (the landing still renders;
 *    only the contact form degrades). Nothing here is fatal — a marketing site
 *    must never fail to serve because an email key is missing.
 *  - **development** → warns too.
 *  - **`next build`** → no-op (static generation runs with no secrets).
 *
 * Note: without RESEND_API_KEY the form returns a clean error instead of
 * sending; without the reCAPTCHA keys the bot check is skipped (fail-open) —
 * both are surfaced here so a prod deploy doesn't degrade silently.
 */

/** Vars recomendadas para producción. Su ausencia degrada, no rompe. */
const RECOMMENDED: ReadonlyArray<readonly [key: string, why: string]> = [
  ["RESEND_API_KEY", "envía los mensajes del formulario de contacto"],
  [
    "RECAPTCHA_SECRET_KEY",
    "verifica el captcha en el servidor — SIN esto el captcha es fail-open",
  ],
  [
    "NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
    "token de reCAPTCHA en el cliente — el form no está protegido sin esto",
  ],
];

const isSet = (key: string): boolean => !!process.env[key]?.trim();

/** Avisa (nunca lanza) sobre vars recomendadas ausentes; no-op en build. */
export const validateEnv = (): void => {
  if (process.env.NEXT_PHASE === "phase-production-build") return;

  const warnings = RECOMMENDED.filter(([key]) => !isSet(key)).map(
    ([key, why]) => `${key} — ${why}`,
  );

  if (warnings.length) {
    console.warn(
      `\n[env] ${warnings.length} var(s) recomendada(s) ausente(s):\n  - ${warnings.join("\n  - ")}\n`,
    );
  }
};
