import Link from "next/link";

import {
  ArrowRightIcon,
  ChatIcon,
  GraduationIcon,
  SmileIcon,
  SparkleIcon,
} from "@/components/icons";
import { Section, SectionHeading } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import type { TranslationKey } from "@/lib/i18n/es";
import { Price } from "@/components/currency/Price";
import { type RouteId, ROUTES } from "@/lib/i18n/routes";
import { type Money } from "@/lib/pricing";
import { site } from "@/lib/site";

type CourseCard = {
  id: Extract<RouteId, "kids" | "regular" | "spanish" | "specials">;
  icon: typeof SmileIcon;
  titleKey: TranslationKey;
  metaKey: TranslationKey;
  descKey: TranslationKey;
  /** Precio "desde" (primera clase); `null` en especiales (varía). */
  price: Money | null;
  iconColor: string;
  chip: string;
};

const CARDS: readonly CourseCard[] = [
  {
    id: "kids",
    icon: SmileIcon,
    titleKey: "kids.title",
    metaKey: "home.kidsMeta",
    descKey: "home.kidsCard",
    price: site.courses.kids.pricing.firstClass,
    iconColor: "text-accent-sky",
    chip: "bg-accent-sky/12",
  },
  {
    id: "regular",
    icon: GraduationIcon,
    titleKey: "regular.title",
    metaKey: "home.regularMeta",
    descKey: "home.regularCard",
    price: site.courses.regular.pricing.firstClass,
    iconColor: "text-accent-grape",
    chip: "bg-accent-grape/12",
  },
  {
    id: "spanish",
    icon: ChatIcon,
    titleKey: "spanish.title",
    metaKey: "home.spanishMeta",
    descKey: "home.spanishCard",
    price: site.courses.spanish.pricing.firstClass,
    iconColor: "text-leaf",
    chip: "bg-leaf/12",
  },
  {
    id: "specials",
    icon: SparkleIcon,
    titleKey: "specials.title",
    metaKey: "home.specialsMeta",
    descKey: "home.specialsCard",
    price: null,
    iconColor: "text-accent-amber",
    chip: "bg-accent-amber/12",
  },
];

/** Resumen de cursos en el home: una card por curso que enlaza a su página. */
export const CoursesSummary = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "courses" : "cursos";

  return (
    <Section id={anchor} className="py-12 sm:py-16">
      <SectionHeading
        eyebrow={t("home.coursesEyebrow")}
        title={t("home.coursesTitle")}
        subtitle={t("home.coursesSubtitle")}
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {CARDS.map(
          ({
            id,
            icon: Icon,
            titleKey,
            metaKey,
            descKey,
            price,
            iconColor,
            chip,
          }) => (
            <li key={id}>
              <Link
                href={ROUTES[id][locale]}
                className="group rounded-card border-line bg-surface-raised shadow-soft hover:shadow-card flex h-full flex-col border p-5 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-field inline-flex size-11 shrink-0 items-center justify-center ${chip} ${iconColor}`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-ink-900 text-lg font-bold">
                    {t(titleKey)}
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-pill border-line text-ink-600 border px-2.5 py-1 text-xs font-medium">
                    {t(metaKey)}
                  </span>
                  {price && (
                    <span className="rounded-pill bg-brand/12 text-brand px-2.5 py-1 text-xs font-semibold">
                      {t("home.fromPrice")} <Price money={price} />
                    </span>
                  )}
                </div>

                <p className="text-ink-600 mt-3 flex-1 text-sm text-pretty">
                  {t(descKey)}
                </p>
                <span className="text-brand mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                  {t("home.learnMore")}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
};
