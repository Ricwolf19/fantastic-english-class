import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/** Web manifest — served at /manifest.webmanifest. */
const manifest = (): MetadataRoute.Manifest => ({
  name: `${site.brand} — ${site.tagline.es}`,
  short_name: site.brand,
  description: site.tagline.es,
  id: "/",
  start_url: "/",
  display: "standalone",
  background_color: "#120f23",
  theme_color: "#120f23",
  scope: "/",
  lang: "es",
  dir: "ltr",
  categories: ["education"],
  icons: [
    { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    {
      src: "/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
});

export default manifest;
