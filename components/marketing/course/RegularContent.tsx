import { Section } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

import { ActivityList } from "./ActivityList";
import { CourseCta } from "./CourseCta";
import { CourseFaq } from "./CourseFaq";
import { CourseHero } from "./CourseHero";
import { LevelTabs } from "./LevelTabs";
import { PriceTable } from "./PriceTable";

/** Página de contenido del curso Regular — adultos y adolescentes (Sección 2). */
export const RegularContent = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const regular = site.courses.regular;

  const levels = regular.levels.map((level, i) => ({
    id: `level-${i}`,
    label: level.label[locale],
    day: level.day[locale],
    time: level.time,
    topics: level.topics.map((topic) => topic[locale]),
  }));

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
      body: t("course.zoomNote"),
    },
  ];

  return (
    <>
      <CourseHero
        locale={locale}
        eyebrowKey="regular.eyebrow"
        titleKey="regular.title"
        subtitleKey="regular.subtitle"
        introKey="regular.intro"
      />

      <Section>
        <div className="space-y-6">
          <h2 className="font-display text-ink-900 text-2xl font-bold">
            {t("regular.levelsTitle")}
          </h2>
          <LevelTabs
            levels={levels}
            scheduleLabel={t("course.scheduleTitle")}
            topicsLabel={t("course.topicsTitle")}
            onlineLabel={t("course.online")}
          />
          <p className="text-ink-500 text-sm">{t("course.otherSchedule")}</p>
        </div>
      </Section>

      <Section surface="sunken">
        <ActivityList
          locale={locale}
          title={t("course.activitiesTitle")}
          items={regular.activities}
        />
      </Section>

      <Section>
        <div className="space-y-14">
          <PriceTable locale={locale} pricing={regular.pricing} />
          <CourseFaq title={t("course.faqTitle")} items={faq} />
        </div>
      </Section>

      <CourseCta locale={locale} />
    </>
  );
};
