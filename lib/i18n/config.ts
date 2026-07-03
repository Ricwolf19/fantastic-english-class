/**
 * Framework-agnostic i18n core — safe to import in Server or Client Components.
 * ES is the primary market (default); EN is the secondary locale.
 */
import { es, type TranslationKey } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";

/** Cookie name shared by the server (SSR) and client (toggle persistence). */
export const LOCALE_COOKIE = "fec_locale";

const DICTS: Record<Locale, Record<TranslationKey, string>> = { es, en };

const interpolate = (
  template: string,
  vars?: Record<string, string | number>,
): string => {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name) =>
    name in vars ? String(vars[name]) : match,
  );
};

export type TFunction = (
  key: TranslationKey,
  vars?: Record<string, string | number>,
) => string;

/** Pure translate — falls back to Spanish (primary), then to the key itself. */
export const translate = (
  locale: Locale,
  key: TranslationKey,
  vars?: Record<string, string | number>,
): string => interpolate(DICTS[locale][key] ?? es[key] ?? key, vars);

/**
 * A translate function bound to a locale — for Server Components that receive
 * the locale as a prop (keeps pages statically generatable per language).
 */
export const createT =
  (locale: Locale): TFunction =>
  (key, vars) =>
    translate(locale, key, vars);
