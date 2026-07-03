/**
 * Next.js instrumentation hook — runs once at server startup. Validates the
 * environment so a misconfigured deploy warns loudly in the logs.
 */
export const register = async (): Promise<void> => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { validateEnv } = await import("@/lib/env");
    validateEnv();
  }
};
