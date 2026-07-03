import { createT, type Locale } from "@/lib/i18n/config";
import { site, waLink } from "@/lib/site";
import { absoluteUrl, siteUrl } from "@/lib/utils";

/**
 * Structured data para SEO local + E-E-A-T. Todo se alimenta de `lib/site.ts`,
 * así que actualizar los datos del cliente actualiza el schema automáticamente.
 */

const sameAs = (): string[] =>
  [site.social.facebook, site.social.instagram, site.social.tiktok].filter(
    (url): url is string => Boolean(url),
  );

/**
 * LanguageSchool — subtipo de EducationalOrganization + LocalBusiness. Es el
 * núcleo del SEO local: permite dirección, área de servicio, teléfono e idiomas
 * que enseña. Lo que ayuda a aparecer en el paquete local de Google.
 */
export const languageSchoolSchema = (locale: Locale) => {
  const t = createT(locale);
  return {
    "@context": "https://schema.org",
    "@type": "LanguageSchool",
    "@id": `${siteUrl}/#school`,
    name: site.brand,
    description: t("hero.subtitle").replace("{teacher}", site.teacher.name),
    url: siteUrl,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/og.png"),
    telephone: site.contact.whatsappDisplay,
    email: site.contact.email,
    areaServed: site.location.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: site.location.country,
    },
    knowsLanguage: ["en", "es"],
    availableLanguage: ["en", "es"],
    sameAs: sameAs(),
  };
};

/**
 * Person — la maestra. E-E-A-T: quién enseña y su autoridad. Las credenciales
 * se agregan cuando `site.credentials` tenga datos reales.
 */
export const personSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#teacher`,
  name: site.teacher.name,
  jobTitle: site.teacher.role[locale],
  worksFor: { "@id": `${siteUrl}/#school` },
  knowsLanguage: ["en", "es"],
  ...(site.credentials.length
    ? {
        hasCredential: site.credentials.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c[locale],
        })),
      }
    : {}),
});

/** WebSite — la entidad del sitio, con acción de contacto por WhatsApp. */
export const websiteSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: site.brand,
  url: siteUrl,
  inLanguage: ["es", "en"],
  publisher: { "@id": `${siteUrl}/#school` },
  potentialAction: {
    "@type": "CommunicateAction",
    target: waLink(createT(locale)("contact.whatsappPrefill")),
  },
});
