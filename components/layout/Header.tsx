"use client";

import { useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Enlaces de navegación por ancla, resueltos según el locale activo. */
const useNavLinks = () => {
  const { locale, t } = useI18n();
  const base = locale === "en" ? "/en" : "/";
  const ids =
    locale === "en"
      ? { about: "about", services: "classes", why: "why", contact: "contact" }
      : {
          about: "sobre-mi",
          services: "servicios",
          why: "por-que",
          contact: "contacto",
        };
  return [
    { href: `${base}#${ids.about}`, label: t("nav.about") },
    { href: `${base}#${ids.services}`, label: t("nav.services") },
    { href: `${base}#${ids.why}`, label: t("nav.why") },
    { href: `${base}#${ids.contact}`, label: t("nav.contact") },
  ];
};

export const Header = () => {
  const { t } = useI18n();
  const links = useNavLinks();
  const [open, setOpen] = useState(false);
  const wa = waLink(t("contact.whatsappPrefill"));

  return (
    <header className="border-line bg-surface/85 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink-600 hover:text-ink-900 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleToggle />
          <a
            href={wa}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-field bg-brand text-brand-ink shadow-brand hidden items-center gap-2 px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            {t("nav.cta")}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-field border-ink-300 text-ink-800 inline-flex size-10 items-center justify-center border md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={cn(
          "border-line overflow-hidden border-t transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-field text-ink-700 hover:bg-ink-100 px-3 py-2.5 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-field bg-brand text-brand-ink mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold"
          >
            <WhatsAppIcon className="size-4" />
            {t("nav.cta")}
          </a>
        </nav>
      </div>
    </header>
  );
};
