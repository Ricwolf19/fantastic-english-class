/**
 * reCAPTCHA v3 server-side verification.
 *
 * Posts the user-supplied token to Google's siteverify and enforces a score
 * threshold.
 *
 * When `RECAPTCHA_SECRET_KEY` is unset: logs a warning and returns `ok: true`
 * (lets local dev run without keys). In production the key MUST be set — the
 * env gate warns when it's missing so the captcha isn't silently fail-open.
 */
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

/** Score below this is treated as a bot (0 = bot, 1 = human). */
const MIN_RECAPTCHA_SCORE = 0.5;

type VerificationResult =
  | { ok: true }
  | {
      ok: false;
      reason: "missing_token" | "low_score" | "verify_failed";
      codes?: string[];
    };

export type VerifyRecaptchaOptions = {
  /** Override the minimum score (mostly useful for tests). */
  minScore?: number;
};

/**
 * Verify a reCAPTCHA v3 token server-side. Returns a discriminated
 * `VerificationResult` (never throws) so callers translate it to a response.
 */
export const verifyRecaptcha = async (
  token: string | null | undefined,
  opts: VerifyRecaptchaOptions = {},
): Promise<VerificationResult> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn(
      "[captcha] RECAPTCHA_SECRET_KEY not set — skipping bot verification.",
    );
    return { ok: true };
  }

  if (!token) return { ok: false, reason: "missing_token" };

  const res = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  if (!res.ok) return { ok: false, reason: "verify_failed" };

  const data = (await res.json()) as {
    success: boolean;
    score?: number;
    "error-codes"?: string[];
  };
  const min = opts.minScore ?? MIN_RECAPTCHA_SCORE;
  if (!data.success || (data.score ?? 0) < min) {
    return { ok: false, reason: "low_score", codes: data["error-codes"] };
  }
  return { ok: true };
};
