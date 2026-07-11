import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { ogFooterRight, ogSectionCopy } from "@/lib/og-sections";
import { site } from "@/lib/site";

export const alt = `${site.brand} — Special classes`;
export const size = ogSize;
export const contentType = ogContentType;

const Image = () =>
  renderOg({
    ...ogSectionCopy("en", "specials"),
    footerRight: ogFooterRight("en"),
  });

export default Image;
