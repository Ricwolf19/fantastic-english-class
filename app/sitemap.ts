import type { MetadataRoute } from "next";

import { ROUTES } from "@/lib/i18n/routes";
import { absoluteUrl } from "@/lib/utils";

/**
 * Sitemap: una entrada por ruta (URL ES, raíz del mercado primario) con sus
 * alternates hreflang ES/EN. Enumera `ROUTES`, así nuevas páginas entran solas.
 * Home mantiene prioridad 1; las páginas de curso, 0.8.
 */
const sitemap = (): MetadataRoute.Sitemap =>
  Object.entries(ROUTES).map(([id, entry]) => ({
    url: absoluteUrl(entry.es),
    changeFrequency: "monthly",
    priority: id === "home" ? 1 : 0.8,
    alternates: {
      languages: {
        es: absoluteUrl(entry.es),
        en: absoluteUrl(entry.en),
      },
    },
  }));

export default sitemap;
