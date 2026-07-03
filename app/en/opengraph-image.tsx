import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} — ${site.tagline.en}`;
export const size = ogSize;
export const contentType = ogContentType;

const Image = () =>
  renderOg({
    eyebrow: site.tagline.en,
    title: "Speak English with confidence",
    description: `Personalized lessons with ${site.teacher.shortName}, a certified teacher.`,
    tags: ["Private", "Kids", "Conversation"],
    footerRight: "In-person or online",
    accent: "pink",
  });

export default Image;
