"use client";

import { CurrencyProvider } from "@/components/currency/CurrencyContext";
import { I18nProvider } from "@/lib/i18n";

/**
 * Client provider tree. i18n (el locale se auto-deriva de la URL) + moneda
 * (toggle MXN/USD global). El root layout se mantiene estático.
 */
export const Providers = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider>
    <CurrencyProvider>{children}</CurrencyProvider>
  </I18nProvider>
);
