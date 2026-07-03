import { Logo } from "@/components/brand/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { MailIcon, MapPinIcon } from "@/components/icons";
import { Container } from "@/components/shared/Container";
import { createT, type Locale } from "@/lib/i18n/config";
import { site, waLink } from "@/lib/site";

/** Enlaces sociales presentes (los `null` en site.social se omiten). */
const socialLinks = (): Array<[name: string, url: string]> =>
  (
    [
      ["Facebook", site.social.facebook],
      ["Instagram", site.social.instagram],
      ["TikTok", site.social.tiktok],
    ] as Array<[string, string | null]>
  ).filter((entry): entry is [string, string] => Boolean(entry[1]));

export const Footer = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const base = locale === "en" ? "/en" : "/";
  const ids =
    locale === "en"
      ? { about: "about", services: "classes", why: "why", contact: "contact" }
      : {
          about: "sobre-mi",
          services: "servicios",
          why: "por-que",
          contact: "contacto",
        };
  const socials = socialLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="border-line bg-surface-sunken border-t">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo href={base} />
            <p className="text-ink-600 mt-4 max-w-xs text-sm text-pretty">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <p className="font-display text-ink-900 text-sm font-bold">
              {t("footer.navTitle")}
            </p>
            <ul className="text-ink-600 mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`${base}#${ids.about}`} className="hover:text-brand">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href={`${base}#${ids.services}`}
                  className="hover:text-brand"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href={`${base}#${ids.why}`} className="hover:text-brand">
                  {t("nav.why")}
                </a>
              </li>
              <li>
                <a href={`${base}#${ids.contact}`} className="hover:text-brand">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-ink-900 text-sm font-bold">
              {t("footer.contactTitle")}
            </p>
            <ul className="text-ink-600 mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={waLink(t("contact.whatsappPrefill"))}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-brand inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="size-4" />
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-brand inline-flex items-center gap-2"
                >
                  <MailIcon className="size-4" />
                  {site.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPinIcon className="size-4" />
                {site.location.areaServed}
              </li>
            </ul>
          </div>

          {socials.length > 0 && (
            <div>
              <p className="font-display text-ink-900 text-sm font-bold">
                {t("footer.followTitle")}
              </p>
              <ul className="text-ink-600 mt-4 space-y-2.5 text-sm">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-brand"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-line text-ink-500 mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs sm:flex-row">
          <p>
            © {year} {site.brand}. {t("footer.rights")}
          </p>
          <p>
            {t("footer.madeBy")}{" "}
            <a
              href={site.developer.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-600 hover:text-brand font-medium"
            >
              {site.developer.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
