import {
  ClockIcon,
  GraduationIcon,
  LaptopIcon,
  SparkleIcon,
} from "@/components/icons";
import { Section, SectionHeading } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import type { TranslationKey } from "@/lib/i18n/es";

type Point = {
  icon: typeof SparkleIcon;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  fill: string;
};

/** Puntos verídicos tomados de los requerimientos de la maestra (sin inventar). */
const POINTS: readonly Point[] = [
  {
    icon: LaptopIcon,
    titleKey: "highlights.online.title",
    descKey: "highlights.online.desc",
    fill: "bg-accent-sky",
  },
  {
    icon: ClockIcon,
    titleKey: "highlights.exam.title",
    descKey: "highlights.exam.desc",
    fill: "bg-brand",
  },
  {
    icon: GraduationIcon,
    titleKey: "highlights.groups.title",
    descKey: "highlights.groups.desc",
    fill: "bg-accent-lime",
  },
  {
    icon: SparkleIcon,
    titleKey: "highlights.intro.title",
    descKey: "highlights.intro.desc",
    fill: "bg-accent-amber",
  },
];

/** Sección de valor (datos reales), reemplaza el viejo "por qué elegirme". */
export const Highlights = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "why" : "por-que";

  return (
    <Section id={anchor} surface="sunken" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow={t("highlights.eyebrow")}
        title={t("highlights.title")}
        subtitle={t("highlights.subtitle")}
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map(({ icon: Icon, titleKey, descKey, fill }) => (
          <li
            key={titleKey}
            className="rounded-card border-line bg-surface-raised shadow-soft border p-5"
          >
            <span
              className={`rounded-field text-ink-950 inline-flex size-11 items-center justify-center ${fill}`}
            >
              <Icon className="size-6" />
            </span>
            <h3 className="font-display text-ink-900 mt-4 font-bold">
              {t(titleKey)}
            </h3>
            <p className="text-ink-600 mt-1.5 text-sm text-pretty">
              {t(descKey)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
