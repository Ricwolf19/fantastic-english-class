import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} — ${site.tagline.es}`;
export const size = ogSize;
export const contentType = ogContentType;

const Image = () =>
  renderOg(
    "Habla inglés con confianza",
    site.tagline.es,
    "Clases personalizadas con Zaida Armenta. Presencial u online.",
  );

export default Image;
