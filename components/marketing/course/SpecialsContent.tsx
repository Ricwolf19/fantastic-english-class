import { Sparks } from "iconoir-react";

import { Section } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

import { CourseCta } from "./CourseCta";
import { CourseHero } from "./CourseHero";

/** Página de cursos especiales / festivales (Sección 5). */
export const SpecialsContent = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);

  return (
    <>
      <CourseHero
        locale={locale}
        eyebrowKey="specials.eyebrow"
        titleKey="specials.title"
        subtitleKey="specials.subtitle"
      />

      <Section>
        <div className="space-y-8">
          <h2 className="font-display text-ink-900 text-2xl font-bold">
            {t("specials.listTitle")}
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.specials.map((special) => (
              <li
                key={special.en}
                className="group rounded-card border-line bg-surface-raised shadow-soft hover:shadow-card flex items-center gap-4 border p-5 transition-all hover:-translate-y-1"
              >
                <span className="rounded-field bg-accent-amber/15 text-accent-amber inline-flex size-11 shrink-0 items-center justify-center">
                  <Sparks className="size-6" aria-hidden />
                </span>
                <span className="font-display text-ink-900 font-bold text-pretty">
                  {special[locale]}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-ink-500 text-sm">{t("specials.note")}</p>
        </div>
      </Section>

      <CourseCta locale={locale} />
    </>
  );
};
