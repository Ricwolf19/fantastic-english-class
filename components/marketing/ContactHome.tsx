import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { MailIcon, MapPinIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/shared/Section";
import { buttonVariants } from "@/components/ui/button";
import { createT, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Bloque de contacto condensado para el home: solo lo más importante (WhatsApp,
 * correo, ubicación) + CTA a la página de contacto dedicada. El formulario vive
 * en `/contacto`.
 */
export const ContactHome = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "contact" : "contacto";

  const channels = [
    {
      key: "wa",
      href: waLink(t("contact.whatsappPrefill")),
      external: true,
      icon: WhatsAppIcon,
      title: t("contact.whatsappTitle"),
      value: site.contact.whatsappDisplay,
    },
    {
      key: "mail",
      href: `mailto:${site.contact.email}`,
      external: false,
      icon: MailIcon,
      title: t("contact.emailTitle"),
      value: site.contact.email,
    },
    {
      key: "loc",
      href: null,
      external: false,
      icon: MapPinIcon,
      title: t("contact.locationTitle"),
      value: site.location.areaServed,
    },
  ];

  return (
    <Section id={anchor} className="py-12 sm:py-16">
      <SectionHeading
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {channels.map(({ key, href, external, icon: Icon, title, value }) => {
          const inner = (
            <>
              <span className="rounded-field bg-surface-sunken text-brand border-line flex size-10 shrink-0 items-center justify-center border">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="text-ink-900 block text-sm font-semibold">
                  {title}
                </span>
                <span className="text-ink-600 block truncate text-sm">
                  {value}
                </span>
              </span>
            </>
          );
          const cls =
            "rounded-card border-line bg-surface-raised shadow-soft flex items-center gap-3 border p-4";
          return (
            <li key={key}>
              {href ? (
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className={cn(
                    cls,
                    "hover:shadow-card transition-all hover:-translate-y-0.5",
                  )}
                >
                  {inner}
                </a>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex justify-center">
        <Link
          href={ROUTES.contact[locale]}
          className={cn(buttonVariants({ size: "lg" }))}
        >
          {t("contact.homeCta")}
        </Link>
      </div>
    </Section>
  );
};
