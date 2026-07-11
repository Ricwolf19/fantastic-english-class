import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { ogFooterRight, ogSectionCopy } from "@/lib/og-sections";
import { site } from "@/lib/site";

export const alt = `${site.brand} — Regular classes`;
export const size = ogSize;
export const contentType = ogContentType;

const Image = () =>
  renderOg({
    ...ogSectionCopy("en", "regular"),
    footerRight: ogFooterRight("en"),
  });

export default Image;
