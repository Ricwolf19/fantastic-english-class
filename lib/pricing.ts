/**
 * Precios multi-moneda. Un precio lleva su monto nativo en `mxn` y/o `usd`. El
 * toggle de moneda (`components/currency`) muestra el equivalente convirtiendo
 * con el tipo de cambio aproximado de `site.exchangeRate` cuando falta el nativo.
 */
export type Money = { mxn?: number; usd?: number };
export type Currency = "mxn" | "usd";

/** Monto en la moneda destino: usa el nativo si existe, si no convierte. */
export const convert = (
  money: Money,
  to: Currency,
  usdToMxn: number,
): number => {
  const native = money[to];
  if (native != null) return native;
  if (to === "mxn" && money.usd != null)
    return Math.round(money.usd * usdToMxn);
  if (to === "usd" && money.mxn != null)
    return Math.round(money.mxn / usdToMxn);
  return 0;
};

const LABEL: Record<Currency, string> = { mxn: "MXN", usd: "USD" };

/** "$1,075 MXN" */
export const formatCurrency = (amount: number, currency: Currency): string =>
  `$${amount.toLocaleString("en-US")} ${LABEL[currency]}`;

/** ¿El precio tiene su monto nativo en esta moneda (no es una conversión)? */
export const isNative = (money: Money, currency: Currency): boolean =>
  money[currency] != null;
