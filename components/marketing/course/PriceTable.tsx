import { Star } from "iconoir-react";

import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { Price } from "@/components/currency/Price";
import { SectionHeading } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import type { Money } from "@/lib/pricing";

type Pricing = { firstClass: Money; perClass: Money; monthly: Money };

/**
 * Tabla de precios de un curso: primera clase (intro), por clase y paquete
 * mensual (destacado). Los montos salen de `site.courses` y reaccionan al toggle
 * de moneda (MXN/USD, primer render en MXN). Notas de política debajo.
 */
export const PriceTable = ({
  locale,
  pricing,
}: {
  locale: Locale;
  pricing: Pricing;
}) => {
  const t = createT(locale);

  const tiers = [
    {
      key: "firstClass",
      label: t("pricing.firstClass"),
      price: pricing.firstClass,
      note: t("pricing.firstClassNote"),
      featured: false,
    },
    {
      key: "perClass",
      label: t("pricing.perClass"),
      price: pricing.perClass,
      note: null,
      featured: false,
    },
    {
      key: "monthly",
      label: t("pricing.monthly"),
      price: pricing.monthly,
      note: t("pricing.packageFree"),
      featured: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow={t("pricing.title")}
          title={t("pricing.title")}
          subtitle={t("pricing.subtitle")}
          align="left"
        />
        <CurrencyToggle />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.key}
            className={
              tier.featured
                ? "rounded-card border-brand/40 bg-brand/10 shadow-brand relative border-2 p-6"
                : "rounded-card border-line bg-surface-raised shadow-soft border p-6"
            }
          >
            {tier.featured && (
              <span className="rounded-pill bg-brand text-brand-ink absolute -top-3 left-6 inline-flex items-center gap-1 px-3 py-1 text-xs font-bold">
                <Star className="size-3.5" aria-hidden />
                {t("pricing.monthly")}
              </span>
            )}
            <p className="text-ink-500 text-sm font-semibold tracking-wide uppercase">
              {tier.label}
            </p>
            <Price
              money={tier.price}
              className="font-display text-ink-900 mt-2 block text-2xl font-extrabold"
            />
            {tier.note && (
              <p className="text-ink-500 mt-3 text-sm text-pretty">
                {tier.note}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="text-ink-500 mt-5 text-sm">{t("pricing.payBefore")}</p>
      <p className="text-ink-400 mt-1 text-xs">{t("pricing.approxNote")}</p>
    </div>
  );
};
