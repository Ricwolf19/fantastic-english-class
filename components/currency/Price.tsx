"use client";

import { useCurrency } from "@/components/currency/CurrencyContext";
import { convert, formatCurrency, isNative, type Money } from "@/lib/pricing";
import { site } from "@/lib/site";

/**
 * Muestra un precio en la moneda activa. Si el monto es una conversión (no el
 * nativo), lo antecede con "≈" para dejar claro que es aproximado.
 */
export const Price = ({
  money,
  className,
}: {
  money: Money;
  className?: string;
}) => {
  const { currency } = useCurrency();
  const amount = convert(money, currency, site.exchangeRate.usdToMxn);
  const approx = !isNative(money, currency);

  return (
    <span className={className}>
      {approx && <span aria-hidden>≈ </span>}
      {formatCurrency(amount, currency)}
    </span>
  );
};
