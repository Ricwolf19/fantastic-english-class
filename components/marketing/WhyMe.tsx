import { Section, SectionHeading } from "@/components/shared/Section";
import {
  ClockIcon,
  LaptopIcon,
  SparkleIcon,
  AwardIcon,
} from "@/components/icons";
import { createT, type Locale } from "@/lib/i18n/config";
import type { TranslationKey } from "@/lib/i18n/es";

type Point = {
  icon: typeof SparkleIcon;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  /** Fill del icono (variedad comic, uno por tarjeta). Texto oscuro encima. */
  fill: string;
};

const POINTS: readonly Point[] = [
  {
    icon: SparkleIcon,
    titleKey: "why.point1.title",
    descKey: "why.point1.desc",
    fill: "bg-brand",
  },
  {
    icon: ClockIcon,
    titleKey: "why.point2.title",
    descKey: "why.point2.desc",
    fill: "bg-accent-sky",
  },
  {
    icon: AwardIcon,
    titleKey: "why.point3.title",
    descKey: "why.point3.desc",
    fill: "bg-accent-lime",
  },
  {
    icon: LaptopIcon,
    titleKey: "why.point4.title",
    descKey: "why.point4.desc",
    fill: "bg-accent-amber",
  },
];

export const WhyMe = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "why" : "por-que";

  return (
    <Section id={anchor} surface="sunken">
      <SectionHeading
        eyebrow={t("why.eyebrow")}
        title={t("why.title")}
        subtitle={t("why.subtitle")}
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map(({ icon: Icon, titleKey, descKey, fill }, i) => (
          <li
            key={titleKey}
            className="rounded-card border-line bg-surface-raised shadow-soft relative border p-6"
          >
            <span
              aria-hidden
              className="font-display text-ink-100 absolute top-4 right-5 text-4xl font-extrabold"
            >
              {i + 1}
            </span>
            <span
              className={`rounded-field text-ink-950 inline-flex size-12 items-center justify-center ${fill}`}
            >
              <Icon className="size-6" />
            </span>
            <h3 className="font-display text-ink-900 mt-5 text-lg font-bold">
              {t(titleKey)}
            </h3>
            <p className="text-ink-600 mt-2 text-sm text-pretty">
              {t(descKey)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
