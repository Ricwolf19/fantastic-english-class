import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} — ${site.tagline.es}`;
export const size = ogSize;
export const contentType = ogContentType;

const Image = () =>
  renderOg({
    eyebrow: site.tagline.es,
    title: "Habla inglés con confianza",
    description: `Clases personalizadas con ${site.teacher.shortName}, maestra certificada.`,
    tags: ["Particulares", "Niños", "Conversación"],
    accent: "pink",
  });

export default Image;
