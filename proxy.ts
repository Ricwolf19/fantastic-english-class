import { type NextRequest, NextResponse } from "next/server";

import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";

/**
 * Device-language detection for first-time visitors.
 *
 * ES is the primary market and lives at the root, so it stays authoritative.
 * On the FIRST visit (no `LOCALE_COOKIE`) to a Spanish (root) path, if the
 * browser's most-preferred language is English we 307-redirect to the EN
 * sibling and persist the cookie so it never redirects again. Any explicit
 * choice (EN↔ES via the toggle) wins by stamping the cookie with the locale of
 * the URL actually landed on. Both URLs stay independently crawlable (crawlers
 * send `en`/`es`, get the matching page; 307 keeps it non-authoritative).
 */

const ES_TO_EN = new Map<string, string>(
  Object.values(ROUTES).map((r) => [r.es, r.en]),
);

/** Most-preferred language from an Accept-Language header (respects q-weights). */
const preferredLang = (header: string | null): string | null => {
  if (!header) return null;
  const best = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const weight = q ? Number.parseFloat(q.slice(2)) : 1;
      return {
        tag: tag.trim().toLowerCase(),
        weight: Number.isNaN(weight) ? 0 : weight,
      };
    })
    .filter((l) => l.tag && l.tag !== "*")
    .sort((a, b) => b.weight - a.weight)[0];
  return best?.tag ?? null;
};

const prefersEnglish = (header: string | null): boolean => {
  const tag = preferredLang(header);
  return tag === "en" || (tag?.startsWith("en-") ?? false);
};

const localeForPath = (pathname: string): Locale =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";

export const proxy = (request: NextRequest): NextResponse => {
  const { pathname } = request.nextUrl;
  const hasCookie = request.cookies.has(LOCALE_COOKIE);
  const locale = localeForPath(pathname);

  // Already chosen, or already crawlable as EN: just stabilize the cookie.
  if (hasCookie || locale === "en") {
    const res = NextResponse.next();
    if (!hasCookie) res.cookies.set(LOCALE_COOKIE, locale, { path: "/" });
    return res;
  }

  // First visit to an ES path. If the device prefers English and we know the
  // EN sibling, 307-redirect once; otherwise stay on ES. Either way, persist.
  if (prefersEnglish(request.headers.get("accept-language"))) {
    const enPath = ES_TO_EN.get(pathname);
    if (enPath) {
      const url = request.nextUrl.clone();
      url.pathname = enPath;
      const res = NextResponse.redirect(url, 307);
      res.cookies.set(LOCALE_COOKIE, "en", { path: "/" });
      return res;
    }
  }

  const res = NextResponse.next();
  res.cookies.set(LOCALE_COOKIE, "es", { path: "/" });
  return res;
};

export const config = {
  /**
   * Run on page navigations only. Exclude Next internals, the API, SEO/PWA
   * files, and any path with a file extension (static assets, OG images,
   * favicons), so the proxy never redirects those.
   */
  matcher: [
    "/((?!_next/|api/|sitemap.xml|robots.txt|manifest.webmanifest|.*\\.).*)",
  ],
};
