import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} — ${site.tagline.en}`;
export const size = ogSize;
export const contentType = ogContentType;

const Image = () =>
  renderOg(
    "Speak English with confidence",
    site.tagline.en,
    "Personalized lessons with Zaida Armenta. In-person or online.",
  );

export default Image;
