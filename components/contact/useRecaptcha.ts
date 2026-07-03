"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * reCAPTCHA v3 (invisible, basado en score). El script carga en el mount, así
 * solo pesa en la página de contacto — nunca en el resto del sitio ni su CWV.
 * Degrada con elegancia: sin site key, `execute` devuelve null y el servidor
 * omite la verificación (dev), de modo que el form sigue funcionando localmente.
 */
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "recaptcha-v3-script";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export const useRecaptcha = () => {
  const injected = useRef(false);

  useEffect(() => {
    if (!SITE_KEY || injected.current) return;
    injected.current = true;
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const execute = useCallback(
    async (action: string): Promise<string | null> => {
      const grecaptcha = window.grecaptcha;
      if (!SITE_KEY || !grecaptcha) return null;
      return new Promise((resolve) => {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(SITE_KEY, { action })
            .then(resolve)
            .catch(() => resolve(null));
        });
      });
    },
    [],
  );

  return { execute, enabled: Boolean(SITE_KEY) };
};
