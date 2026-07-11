import { Section } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

import { ActivityList } from "./ActivityList";
import { ChipList } from "./ChipList";
import { CourseCta } from "./CourseCta";
import { CourseFaq } from "./CourseFaq";
import { CourseHero } from "./CourseHero";
import { PriceTable } from "./PriceTable";
import { ScheduleCards } from "./ScheduleCards";

/** Página de contenido del curso Kids (Sección 1). */
export const KidsContent = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const kids = site.courses.kids;

  const faq = [
    { id: "exam", title: t("course.examTitle"), body: t("course.examNote") },
    {
      id: "absence",
      title: t("course.absenceTitle"),
      body: t("course.absenceNote"),
    },
    {
      id: "format",
      title: t("course.formatTitle"),
      body: `${t("course.zoomNote")} ${t("kids.cameraNote")}`,
    },
  ];

  return (
    <>
      <CourseHero
        locale={locale}
        eyebrowKey="kids.eyebrow"
        titleKey="kids.title"
        subtitleKey="kids.subtitle"
        introKey="kids.intro"
      />

      <Section>
        <div className="space-y-6">
          <ScheduleCards
            locale={locale}
            title={t("kids.groupsTitle")}
            items={kids.groups}
            accent="sky"
          />
          <p className="text-ink-500 text-sm">{t("course.otherSchedule")}</p>
          <p className="rounded-card border-line bg-surface-raised text-ink-600 border p-4 text-sm text-pretty">
            {t("kids.advancedNote")}
          </p>
        </div>
      </Section>

      <Section surface="sunken">
        <div className="space-y-14">
          <ChipList
            locale={locale}
            title={t("course.topicsTitle")}
            items={kids.topics}
          />
          <ActivityList
            locale={locale}
            title={t("course.activitiesTitle")}
            items={kids.activities}
          />
        </div>
      </Section>

      <Section>
        <div className="space-y-14">
          <PriceTable locale={locale} pricing={kids.pricing} />
          <CourseFaq title={t("course.faqTitle")} items={faq} />
        </div>
      </Section>

      <CourseCta locale={locale} />
    </>
  );
};
