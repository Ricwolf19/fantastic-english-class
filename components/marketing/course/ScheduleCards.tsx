import { Clock } from "iconoir-react";

import { createT, type Locale } from "@/lib/i18n/config";

type Bilingual = { es: string; en: string };
type ScheduleItem = { label?: Bilingual; day: Bilingual; time: string };
type Accent = "sky" | "lime" | "grape" | "amber";

const ACCENTS: Record<Accent, { stripe: string; icon: string }> = {
  sky: { stripe: "bg-accent-sky", icon: "bg-accent-sky/12 text-accent-sky" },
  lime: { stripe: "bg-leaf", icon: "bg-leaf/12 text-leaf" },
  grape: {
    stripe: "bg-accent-grape",
    icon: "bg-accent-grape/12 text-accent-grape",
  },
  amber: {
    stripe: "bg-accent-amber",
    icon: "bg-accent-amber/12 text-accent-amber",
  },
};

/**
 * Tarjetas de horario (grupos por edad, niveles o una sola franja). La hora —el
 * dato clave de disponibilidad— se muestra en grande. Datos de `site.courses`.
 */
export const ScheduleCards = ({
  locale,
  title,
  items,
  accent = "sky",
}: {
  locale: Locale;
  title: string;
  items: ReadonlyArray<ScheduleItem>;
  accent?: Accent;
}) => {
  const t = createT(locale);
  const tone = ACCENTS[accent];

  return (
    <div>
      <h2 className="font-display text-ink-900 text-2xl font-bold">{title}</h2>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {items.map((item, i) => (
          <li
            key={item.label ? item.label[locale] : i}
            className="rounded-card border-line bg-surface-raised shadow-soft hover:shadow-card relative flex flex-col gap-4 overflow-hidden border p-6 transition-shadow"
          >
            <span
              aria-hidden
              className={`absolute inset-y-0 left-0 w-1.5 ${tone.stripe}`}
            />

            <div className="flex items-center gap-3 pl-1">
              <span
                className={`rounded-field inline-flex size-12 shrink-0 items-center justify-center ${tone.icon}`}
              >
                <Clock className="size-6" aria-hidden />
              </span>
              {item.label && (
                <p className="font-display text-ink-900 text-lg font-bold text-balance">
                  {item.label[locale]}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pl-1">
              <span className="rounded-pill bg-surface-sunken border-line text-ink-700 border px-3 py-1 text-sm font-semibold">
                {item.day[locale]}
              </span>
              <span className="rounded-pill bg-leaf/10 text-leaf px-3 py-1 text-sm font-semibold">
                {t("course.online")}
              </span>
            </div>

            <p className="font-display text-ink-900 pl-1 text-3xl font-extrabold tracking-tight">
              {item.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
