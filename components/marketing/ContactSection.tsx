import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { MailIcon, MapPinIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";
import { site, waLink } from "@/lib/site";

export const ContactSection = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "contact" : "contacto";
  const wa = waLink(t("contact.whatsappPrefill"));

  return (
    <Section id={anchor}>
      <SectionHeading
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Canales directos */}
        <div className="space-y-4">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer noopener"
            className="group rounded-card border-line bg-surface-raised shadow-soft hover:shadow-card flex items-start gap-4 border p-5 transition-all hover:-translate-y-0.5"
          >
            <span className="rounded-field bg-brand text-brand-ink flex size-11 shrink-0 items-center justify-center">
              <WhatsAppIcon className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="text-ink-900 block font-semibold">
                {t("contact.whatsappTitle")}
              </span>
              <span className="text-ink-600 block truncate text-sm">
                {site.contact.whatsappDisplay}
              </span>
              <span className="text-ink-500 mt-0.5 block text-xs">
                {t("contact.whatsappDesc")}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${site.contact.email}`}
            className="group rounded-card border-line bg-surface-raised shadow-soft hover:shadow-card flex items-start gap-4 border p-5 transition-all hover:-translate-y-0.5"
          >
            <span className="rounded-field border-line bg-surface-sunken text-brand flex size-11 shrink-0 items-center justify-center border">
              <MailIcon className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="text-ink-900 block font-semibold">
                {t("contact.emailTitle")}
              </span>
              <span className="text-ink-600 block truncate text-sm">
                {site.contact.email}
              </span>
              <span className="text-ink-500 mt-0.5 block text-xs">
                {t("contact.emailDesc")}
              </span>
            </span>
          </a>

          <div className="rounded-card border-line bg-surface-raised shadow-soft flex items-start gap-4 border p-5">
            <span className="rounded-field border-line bg-surface-sunken text-accent-pink flex size-11 shrink-0 items-center justify-center border">
              <MapPinIcon className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="text-ink-900 block font-semibold">
                {t("contact.locationTitle")}
              </span>
              <span className="text-ink-600 block text-sm">
                {site.location.areaServed}
              </span>
              <span className="text-ink-500 mt-0.5 block text-xs">
                {t("contact.locationDesc")}
              </span>
            </span>
          </div>
        </div>

        {/* Formulario */}
        <div className="rounded-card border-line bg-surface-raised shadow-card border p-6 sm:p-8">
          <p className="font-display text-ink-900 text-lg font-bold">
            {t("contact.formTitle")}
          </p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};
