"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo } from "react";

import { type Locale, type TFunction, translate } from "./config";

type I18nContextValue = {
  locale: Locale;
  t: TFunction;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Client provider. With path-based i18n the locale IS the URL — derived from the
 * pathname so it stays correct across client navigations (/ ↔ /en) without extra
 * state. ES is the default; EN only under `/en`. `<html lang>` is synced here.
 */
export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const locale: Locale =
    pathname === "/en" || pathname?.startsWith("/en/") ? "en" : "es";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, t: (key, vars) => translate(locale, key, vars) }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>.");
  return ctx;
};
