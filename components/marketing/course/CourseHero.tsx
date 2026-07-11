import Link from "next/link";
import { NavArrowLeft } from "iconoir-react";

import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { createT, type Locale } from "@/lib/i18n/config";
import type { TranslationKey } from "@/lib/i18n/es";
import { ROUTES } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

/** Encabezado de una página de curso: back-link, eyebrow, título, intro y CTA. */
export const CourseHero = ({
  locale,
  eyebrowKey,
  titleKey,
  subtitleKey,
  introKey,
}: {
  locale: Locale;
  eyebrowKey: TranslationKey;
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  introKey?: TranslationKey;
}) => {
  const t = createT(locale);

  return (
    <section className="border-line bg-surface-sunken halftone border-b">
      <Container className="py-14 sm:py-20">
        <Link
          href={ROUTES.home[locale]}
          className="text-ink-500 hover:text-brand inline-flex items-center gap-1 text-sm font-medium transition-colors"
        >
          <NavArrowLeft className="size-4" aria-hidden />
          {t("course.backHome")}
        </Link>
        <p className="font-display text-brand mt-6 text-sm font-extrabold tracking-widest uppercase">
          {t(eyebrowKey)}
        </p>
        <h1 className="font-display text-ink-900 mt-3 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          {t(titleKey)}
        </h1>
        <p className="text-ink-700 mt-4 max-w-2xl text-lg text-pretty">
          {t(subtitleKey)}
        </p>
        {introKey && (
          <p className="text-ink-500 mt-4 max-w-2xl text-pretty">
            {t(introKey)}
          </p>
        )}
        <div className="mt-8">
          <Link
            href={ROUTES.contact[locale]}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {t("course.cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
};
