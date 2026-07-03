import { createT, type Locale } from "@/lib/i18n/config";
import type { OgAccent } from "@/lib/og";
import { site } from "@/lib/site";

/**
 * Secciones one-page que exponen una OG image propia bajo `/og/<locale>/<id>`.
 * No son rutas navegables (la landing es one-page): son artefactos compartibles
 * para posts / campañas / WhatsApp Business, un color de acento por sección.
 * El copy sale de los diccionarios (`createT`) — no se hardcodea aquí.
 */
export const OG_SECTIONS = [
  "home",
  "services",
  "about",
  "why",
  "credentials",
  "contact",
] as const;

export type OgSection = (typeof OG_SECTIONS)[number];

export const isOgSection = (value: string): value is OgSection =>
  (OG_SECTIONS as readonly string[]).includes(value);

type OgSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  tags?: string[];
  accent: OgAccent;
};

const footerRight = (locale: Locale) =>
  locale === "en" ? "In-person or online" : "Presencial u online";

/** Copy + acento de cada sección, tomando el texto de los diccionarios. */
export const ogSectionCopy = (
  locale: Locale,
  section: OgSection,
): OgSectionCopy => {
  const t = createT(locale);

  switch (section) {
    case "services":
      return {
        eyebrow: t("services.eyebrow"),
        title: t("services.title"),
        description: t("services.subtitle"),
        tags:
          locale === "en"
            ? ["Private", "Kids", "Exam prep"]
            : ["Particulares", "Niños", "Exámenes"],
        accent: "sky",
      };
    case "about":
      return {
        eyebrow: t("about.eyebrow"),
        title: t("about.title", { teacher: site.teacher.shortName }),
        description: t("about.body2"),
        accent: "grape",
      };
    case "why":
      return {
        eyebrow: t("why.eyebrow"),
        title: t("why.title"),
        description: t("why.subtitle"),
        accent: "lime",
      };
    case "credentials":
      return {
        eyebrow: t("credentials.eyebrow"),
        title: t("credentials.title"),
        description: t("credentials.subtitle"),
        accent: "amber",
      };
    case "contact":
      return {
        eyebrow: t("contact.eyebrow"),
        title: t("contact.title"),
        description: t("contact.subtitle"),
        tags: [site.location.areaServed],
        accent: "tangerine",
      };
    case "home":
    default:
      return {
        eyebrow: site.tagline[locale],
        title:
          locale === "en"
            ? "Speak English with confidence"
            : "Habla inglés con confianza",
        description: t("hero.subtitle", { teacher: site.teacher.shortName }),
        tags:
          locale === "en"
            ? ["Private", "Kids", "Conversation"]
            : ["Particulares", "Niños", "Conversación"],
        accent: "pink",
      };
  }
};

/** Sufijo de footer por locale, reexpuesto para los route handlers. */
export const ogFooterRight = footerRight;
