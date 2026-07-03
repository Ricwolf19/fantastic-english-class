"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useI18n } from "@/lib/i18n";
import { alternatePathname } from "@/lib/i18n/routes";

/**
 * Toggle ES/EN. Enlaza a la URL hermana del pathname actual (no un botón con
 * estado): así es un `<a>` real, crawlable y sin JS para navegar.
 */
export const LocaleToggle = () => {
  const { locale, t } = useI18n();
  const pathname = usePathname() ?? "/";
  const target = locale === "es" ? "en" : "es";
  const href = alternatePathname(pathname, target);

  return (
    <Link
      href={href}
      aria-label={t("nav.langLabel")}
      className="rounded-pill border-ink-300 text-ink-600 hover:border-brand hover:text-brand inline-flex items-center gap-1 border px-3 py-1.5 text-xs font-bold transition-colors"
    >
      <span className={locale === "es" ? "text-brand" : ""}>ES</span>
      <span className="text-ink-300">/</span>
      <span className={locale === "en" ? "text-brand" : ""}>EN</span>
    </Link>
  );
};
