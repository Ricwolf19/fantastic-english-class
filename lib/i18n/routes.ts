import type { Metadata } from "next";

import type { Locale } from "./config";

/**
 * Mapa de rutas — única fuente de verdad que empareja la URL en español (raíz)
 * y en inglés (/en) de cada página. Alimenta nav, el toggle de idioma, los
 * alternates hreflang y el sitemap. Al ser una landing one-page el mapa es
 * mínimo, pero escala agregando entradas si más adelante hay más páginas.
 */
export type RouteId = "home";

type RouteEntry = { es: string; en: string };

/** ES es la raíz (mercado primario); EN vive bajo /en. */
export const ROUTES: Record<RouteId, RouteEntry> = {
  home: { es: "/", en: "/en" },
};

/**
 * `alternates` de Metadata: canonical + hreflang (es, en) + x-default.
 * x-default apunta a ES por ser el mercado principal.
 */
export const metaAlternates = (
  id: RouteId,
  locale: Locale,
): Metadata["alternates"] => ({
  canonical: ROUTES[id][locale],
  languages: {
    es: ROUTES[id].es,
    en: ROUTES[id].en,
    "x-default": ROUTES[id].es,
  },
});

/** URL hermana del pathname actual (para el toggle de idioma). */
export const alternatePathname = (pathname: string, target: Locale): string => {
  if (target === "en") return pathname.startsWith("/en") ? pathname : "/en";
  return "/";
};
