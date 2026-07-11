import type { Locale } from "@/lib/i18n/config";

type Bilingual = { es: string; en: string };

/** Lista de chips (temas del curso, festivales). Datos desde `site.courses`. */
export const ChipList = ({
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
    <ul className="mt-5 flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item.en}
          className="rounded-pill border-line bg-surface-raised text-ink-700 border px-4 py-2 text-sm font-medium"
        >
          {item[locale]}
        </li>
      ))}
    </ul>
  </div>
);
