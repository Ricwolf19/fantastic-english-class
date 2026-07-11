import type { Metadata } from "next";

import type { Locale } from "./config";

/**
 * Mapa de rutas — única fuente de verdad que empareja la URL en español (raíz)
 * y en inglés (/en) de cada página. Alimenta nav, el toggle de idioma, los
 * alternates hreflang, el sitemap y la detección de idioma (`proxy.ts`). Para
 * agregar una página basta con sumar una entrada aquí (más su carpeta en `app/`).
 */
export type RouteId =
  "home" | "kids" | "regular" | "spanish" | "specials" | "contact";

type RouteEntry = { es: string; en: string };

/** ES es la raíz (mercado primario); EN vive bajo /en. Slugs sin trailing slash. */
export const ROUTES: Record<RouteId, RouteEntry> = {
  home: { es: "/", en: "/en" },
  kids: { es: "/ninos", en: "/en/kids" },
  regular: { es: "/cursos-regulares", en: "/en/regular" },
  spanish: { es: "/clases-espanol", en: "/en/spanish" },
  specials: { es: "/especiales", en: "/en/special-classes" },
  contact: { es: "/contacto", en: "/en/contact" },
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

/**
 * URL hermana del pathname actual (para el toggle de idioma). Busca la ruta
 * cuyo slug ES o EN coincide con el pathname y devuelve su par en `target`; si
 * no la reconoce (ruta suelta), cae a la raíz del idioma destino.
 */
export const alternatePathname = (pathname: string, target: Locale): string => {
  const match = Object.values(ROUTES).find(
    (entry) => entry.es === pathname || entry.en === pathname,
  );
  if (match) return match[target];
  return target === "en" ? "/en" : "/";
};
