"use client";

import { useCurrency } from "@/components/currency/CurrencyContext";
import type { Currency } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const OPTIONS: readonly { value: Currency; label: string }[] = [
  { value: "mxn", label: "MXN" },
  { value: "usd", label: "USD" },
];

/**
 * Toggle vistoso de moneda (MXN/USD). Click en cada moneda para intercambiar; el
 * pill activo se desliza con el color de marca. Controla todos los `<Price>`.
 */
export const CurrencyToggle = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="group"
      aria-label="Moneda"
      className="rounded-pill border-line bg-surface-sunken relative inline-flex items-center border p-1"
    >
      {/* Indicador deslizante */}
      <span
        aria-hidden
        className={cn(
          "bg-brand shadow-brand rounded-pill absolute top-1 bottom-1 w-[calc(50%-0.25rem)] transition-transform duration-300 ease-out",
          currency === "usd" && "translate-x-full",
        )}
      />
      {OPTIONS.map((option) => {
        const active = currency === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setCurrency(option.value)}
            aria-pressed={active}
            className={cn(
              "rounded-pill relative z-10 w-14 py-1.5 text-sm font-bold transition-colors",
              active ? "text-brand-ink" : "text-ink-500 hover:text-ink-900",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
