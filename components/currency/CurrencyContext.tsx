"use client";

import { createContext, useContext, useMemo, useState } from "react";

import type { Currency } from "@/lib/pricing";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  toggle: () => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

/**
 * Estado global de moneda (MXN/USD). Primer render en MXN. Vive en el árbol de
 * providers, así el toggle persiste entre navegaciones durante la sesión.
 */
export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currency, setCurrency] = useState<Currency>("mxn");

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      setCurrency,
      toggle: () => setCurrency((c) => (c === "mxn" ? "usd" : "mxn")),
    }),
    [currency],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextValue => {
  const ctx = useContext(CurrencyContext);
  if (!ctx)
    throw new Error("useCurrency must be used within <CurrencyProvider>.");
  return ctx;
};
