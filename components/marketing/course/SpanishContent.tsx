import { Section } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

import { CourseCta } from "./CourseCta";
import { CourseFaq } from "./CourseFaq";
import { CourseHero } from "./CourseHero";
import { PriceTable } from "./PriceTable";
import { ScheduleCards } from "./ScheduleCards";

/** Página de contenido de Fantastic Spanish Class — español (Sección 3). */
export const SpanishContent = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const spanish = site.courses.spanish;

  const faq = [
    {
      id: "format",
      title: t("course.formatTitle"),
      body: t("course.zoomNote"),
    },
  ];

  return (
    <>
      <CourseHero
        locale={locale}
        eyebrowKey="spanish.eyebrow"
        titleKey="spanish.title"
        subtitleKey="spanish.subtitle"
        introKey="spanish.intro"
      />

      <Section>
        <div className="space-y-6">
          <ScheduleCards
            locale={locale}
            title={t("spanish.scheduleTitle")}
            items={[{ day: spanish.schedule.day, time: spanish.schedule.time }]}
            accent="lime"
          />
          <p className="text-ink-500 text-sm">{t("course.otherSchedule")}</p>
        </div>
      </Section>

      <Section surface="sunken">
        <div className="space-y-14">
          <PriceTable locale={locale} pricing={spanish.pricing} />
          <CourseFaq title={t("course.faqTitle")} items={faq} />
        </div>
      </Section>

      <CourseCta locale={locale} />
    </>
  );
};
