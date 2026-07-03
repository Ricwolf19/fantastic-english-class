import type { MetadataRoute } from "next";

import { ROUTES } from "@/lib/i18n/routes";
import { absoluteUrl } from "@/lib/utils";

/** Sitemap one-page: home ES (raíz) + EN (/en) con alternates hreflang. */
const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: absoluteUrl(ROUTES.home.es),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        es: absoluteUrl(ROUTES.home.es),
        en: absoluteUrl(ROUTES.home.en),
      },
    },
  },
];

export default sitemap;
