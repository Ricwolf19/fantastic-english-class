import { TeacherPortrait } from "@/components/brand/TeacherPortrait";
import { Section } from "@/components/shared/Section";
import { AwardIcon, CheckIcon } from "@/components/icons";
import { createT, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

const STATS = [
  { value: `${site.teacher.yearsExperience}+`, key: "about.statsExperience" },
  { value: "100+", key: "about.statsStudents" },
  { value: "2", key: "about.statsModes" },
] as const;

/**
 * Sobre mí — E-E-A-T. Retrato de la maestra, bio en dos párrafos, stats de
 * confianza y credenciales (solo si `site.credentials` tiene datos).
 */
export const About = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "about" : "sobre-mi";

  return (
    <Section id={anchor} surface="sunken">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Retrato de la maestra */}
        <div className="relative mx-auto mb-8 w-full max-w-sm">
          <div className="bg-brand/15 absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem]" />
          <TeacherPortrait className="shadow-card" />
          {/* Tarjeta flotante con nombre + rol (toque pop) */}
          <div className="border-line bg-surface-raised shadow-card absolute -bottom-5 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border px-5 py-3 text-center">
            <p className="font-display text-ink-900 text-lg font-bold">
              {site.teacher.name}
            </p>
            <p className="text-brand text-sm font-medium">
              {site.teacher.role[locale]}
            </p>
          </div>
        </div>

        {/* Bio + stats */}
        <div>
          <p className="font-display text-brand text-sm font-extrabold tracking-widest uppercase">
            {t("about.eyebrow")}
          </p>
          <h2 className="font-display text-ink-900 mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t("about.title", { teacher: site.teacher.shortName })}
          </h2>
          <p className="text-ink-600 mt-5 text-pretty">
            {t("about.body", { years: site.teacher.yearsExperience })}
          </p>
          <p className="text-ink-600 mt-4 text-pretty">{t("about.body2")}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div
                key={s.key}
                className="rounded-card border-line bg-surface-raised shadow-soft border p-4 text-center"
              >
                <dt className="font-display text-brand text-3xl font-extrabold">
                  {s.value}
                </dt>
                <dd className="text-ink-500 mt-1 text-xs">{t(s.key)}</dd>
              </div>
            ))}
          </dl>

          {site.credentials.length > 0 && (
            <div className="mt-8">
              <p className="text-ink-800 flex items-center gap-2 text-sm font-semibold">
                <AwardIcon className="text-brand size-4" />
                {t("about.credentialsTitle")}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {site.credentials.map((c) => (
                  <li
                    key={c.en}
                    className="text-ink-600 flex items-center gap-2 text-sm"
                  >
                    <CheckIcon className="text-accent-lime size-4 shrink-0" />
                    {c[locale]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
