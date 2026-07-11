import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { ogFooterRight, ogSectionCopy } from "@/lib/og-sections";
import { site } from "@/lib/site";

export const alt = `${site.brand} — Cursos especiales`;
export const size = ogSize;
export const contentType = ogContentType;

const Image = () =>
  renderOg({
    ...ogSectionCopy("es", "specials"),
    footerRight: ogFooterRight("es"),
  });

export default Image;
