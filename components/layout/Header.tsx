"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

/** Enlaces de navegación (todas rutas dedicadas), por locale. */
const useNavLinks = () => {
  const { locale, t } = useI18n();
  return [
    { href: ROUTES.kids[locale], label: t("nav.kids") },
    { href: ROUTES.regular[locale], label: t("nav.regular") },
    { href: ROUTES.spanish[locale], label: t("nav.spanish") },
    { href: ROUTES.specials[locale], label: t("nav.specials") },
    { href: ROUTES.contact[locale], label: t("nav.contact") },
  ];
};

export const Header = () => {
  const links = useNavLinks();
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="border-line bg-surface/85 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-1 py-2 text-sm font-medium transition-colors",
                  active ? "text-ink-900" : "text-ink-600 hover:text-ink-900",
                )}
              >
                {l.label}
                {active && (
                  <span
                    aria-hidden
                    className="bg-brand absolute inset-x-1 -bottom-px h-0.5 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleToggle />
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
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-field px-3 py-2.5 text-sm font-medium",
                  active
                    ? "bg-brand/10 text-brand"
                    : "text-ink-700 hover:bg-ink-100",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
