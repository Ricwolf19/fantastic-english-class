import { Section, SectionHeading } from "@/components/shared/Section";
import { AwardIcon, GraduationIcon, CheckIcon } from "@/components/icons";
import { createT, type Locale } from "@/lib/i18n/config";
import type { TranslationKey } from "@/lib/i18n/es";

type Cert = { titleKey: TranslationKey; descKey: TranslationKey };
type Exp = {
  yearKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
};

const CERTS: readonly Cert[] = [
  { titleKey: "credentials.cert1.title", descKey: "credentials.cert1.desc" },
  { titleKey: "credentials.cert2.title", descKey: "credentials.cert2.desc" },
  { titleKey: "credentials.cert3.title", descKey: "credentials.cert3.desc" },
];

const EXPERIENCE: readonly Exp[] = [
  {
    yearKey: "credentials.exp1.year",
    titleKey: "credentials.exp1.title",
    descKey: "credentials.exp1.desc",
  },
  {
    yearKey: "credentials.exp2.year",
    titleKey: "credentials.exp2.title",
    descKey: "credentials.exp2.desc",
  },
  {
    yearKey: "credentials.exp3.year",
    titleKey: "credentials.exp3.title",
    descKey: "credentials.exp3.desc",
  },
];

/**
 * Experiencia y certificaciones — E-E-A-T. Dos columnas: tarjetas de
 * certificaciones (izquierda) y una línea de tiempo de trayectoria (derecha).
 * El copy es placeholder editable en los diccionarios / lib/site.ts.
 */
export const Credentials = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "experience" : "experiencia";

  return (
    <Section id={anchor}>
      <SectionHeading
        eyebrow={t("credentials.eyebrow")}
        title={t("credentials.title")}
        subtitle={t("credentials.subtitle")}
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Certificaciones */}
        <div>
          <p className="font-display text-ink-800 flex items-center gap-2 text-sm font-bold tracking-wide uppercase">
            <AwardIcon className="text-brand size-5" />
            {t("credentials.certsTitle")}
          </p>
          <ul className="mt-5 space-y-4">
            {CERTS.map(({ titleKey, descKey }) => (
              <li
                key={titleKey}
                className="rounded-card border-line bg-surface-raised shadow-soft flex items-start gap-4 border p-5 transition-transform hover:-translate-y-0.5"
              >
                <span className="rounded-field bg-accent-sky/12 text-accent-sky flex size-11 shrink-0 items-center justify-center">
                  <CheckIcon className="size-5" />
                </span>
                <span>
                  <span className="font-display text-ink-900 block font-bold">
                    {t(titleKey)}
                  </span>
                  <span className="text-ink-600 mt-1 block text-sm text-pretty">
                    {t(descKey)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trayectoria (timeline) */}
        <div>
          <p className="font-display text-ink-800 flex items-center gap-2 text-sm font-bold tracking-wide uppercase">
            <GraduationIcon className="text-leaf size-5" />
            {t("credentials.expTitle")}
          </p>
          <ol className="border-brand/25 mt-5 space-y-6 border-l-2 pl-6">
            {EXPERIENCE.map(({ yearKey, titleKey, descKey }) => (
              <li key={titleKey} className="relative">
                <span
                  aria-hidden
                  className="border-brand bg-surface absolute top-1 -left-[31px] flex size-5 items-center justify-center rounded-full border-2"
                >
                  <span className="bg-brand size-2 rounded-full" />
                </span>
                <span className="font-display text-brand text-2xl font-extrabold">
                  {t(yearKey)}
                </span>
                <span className="text-ink-900 mt-1 block font-semibold">
                  {t(titleKey)}
                </span>
                <span className="text-ink-600 mt-1 block text-sm text-pretty">
                  {t(descKey)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
};
