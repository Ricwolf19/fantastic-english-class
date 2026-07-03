import { isLocale } from "@/lib/i18n/config";
import { renderOg } from "@/lib/og";
import {
  isOgSection,
  ogFooterRight,
  ogSectionCopy,
  OG_SECTIONS,
} from "@/lib/og-sections";

/**
 * OG image por sección: `/og/<locale>/<section>` (p. ej. `/og/es/servicios` no
 * — el id es el interno: services/about/why/credentials/contact/home). Artefacto
 * compartible; la landing es one-page, así que estas imágenes son para
 * posts/campañas, no las sirve un scraper por ancla.
 */
export const dynamicParams = false;

export const generateStaticParams = () =>
  (["es", "en"] as const).flatMap((locale) =>
    OG_SECTIONS.map((section) => ({ locale, section })),
  );

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ locale: string; section: string }> },
) => {
  const { locale, section } = await params;

  if (!isLocale(locale)) return new Response("Not found", { status: 404 });
  if (!isOgSection(section)) {
    return new Response("Not found", { status: 404 });
  }

  const copy = ogSectionCopy(locale, section);
  return renderOg({ ...copy, footerRight: ogFooterRight(locale) });
};
