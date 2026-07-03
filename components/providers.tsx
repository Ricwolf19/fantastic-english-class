"use client";

import { I18nProvider } from "@/lib/i18n";

/**
 * Client provider tree. Solo i18n (el locale se auto-deriva de la URL), así el
 * root layout se mantiene estático. No hay theme provider: un único esquema.
 */
export const Providers = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider>{children}</I18nProvider>
);
