import { Section, SectionHeading } from "@/components/shared/Section";
import {
  BookIcon,
  BriefcaseIcon,
  ChatIcon,
  GraduationIcon,
  SmileIcon,
  UserIcon,
} from "@/components/icons";
import { createT, type Locale } from "@/lib/i18n/config";
import type { TranslationKey } from "@/lib/i18n/es";

type Service = {
  icon: typeof UserIcon;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  /** Color del icono + su fondo tintado (variedad comic, un color por tarjeta). */
  icon_color: string;
  chip: string;
};

const SERVICES: readonly Service[] = [
  {
    icon: UserIcon,
    titleKey: "services.private.title",
    descKey: "services.private.desc",
    icon_color: "text-brand",
    chip: "bg-brand/12",
  },
  {
    icon: SmileIcon,
    titleKey: "services.kids.title",
    descKey: "services.kids.desc",
    icon_color: "text-accent-sky",
    chip: "bg-accent-sky/12",
  },
  {
    icon: ChatIcon,
    titleKey: "services.conversation.title",
    descKey: "services.conversation.desc",
    icon_color: "text-accent-lime",
    chip: "bg-accent-lime/12",
  },
  {
    icon: GraduationIcon,
    titleKey: "services.exam.title",
    descKey: "services.exam.desc",
    icon_color: "text-accent-grape",
    chip: "bg-accent-grape/12",
  },
  {
    icon: BriefcaseIcon,
    titleKey: "services.business.title",
    descKey: "services.business.desc",
    icon_color: "text-accent-amber",
    chip: "bg-accent-amber/12",
  },
  {
    icon: BookIcon,
    titleKey: "services.school.title",
    descKey: "services.school.desc",
    icon_color: "text-accent-tangerine",
    chip: "bg-accent-tangerine/12",
  },
];

export const Services = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "classes" : "servicios";

  return (
    <Section id={anchor}>
      <SectionHeading
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, titleKey, descKey, icon_color, chip }) => (
          <li
            key={titleKey}
            className="group rounded-card border-line bg-surface-raised shadow-soft hover:shadow-card border p-6 transition-all hover:-translate-y-1"
          >
            <span
              className={`rounded-field inline-flex size-12 items-center justify-center ${chip} ${icon_color}`}
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
