import { Check } from "iconoir-react";

import type { Locale } from "@/lib/i18n/config";

type Bilingual = { es: string; en: string };

/** Lista con checks (actividades / cómo aprendemos). Datos de `site.courses`. */
export const ActivityList = ({
  locale,
  title,
  items,
}: {
  locale: Locale;
  title: string;
  items: ReadonlyArray<Bilingual>;
}) => (
  <div>
    <h2 className="font-display text-ink-900 text-2xl font-bold">{title}</h2>
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.en} className="flex items-start gap-3">
          <span className="rounded-field bg-leaf/15 text-leaf mt-0.5 inline-flex size-6 shrink-0 items-center justify-center">
            <Check className="size-4" aria-hidden />
          </span>
          <span className="text-ink-700 text-sm text-pretty">
            {item[locale]}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
