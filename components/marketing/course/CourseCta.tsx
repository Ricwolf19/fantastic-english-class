import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { buttonVariants } from "@/components/ui/button";
import { createT, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

/** Banda de cierre de una página de curso: CTA WhatsApp + enlace a contacto. */
export const CourseCta = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);

  return (
    <section className="border-line bg-surface-sunken border-t">
      <Container className="py-12 text-center sm:py-16">
        <h2 className="font-display text-ink-900 text-3xl font-extrabold tracking-tight text-balance">
          {t("contact.title")}
        </h2>
        <p className="text-ink-600 mx-auto mt-3 max-w-xl text-pretty">
          {t("contact.subtitle")}
        </p>
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <WhatsAppButton
            message={t("contact.whatsappPrefill")}
            label={t("course.cta")}
          />
          <Link
            href={ROUTES.contact[locale]}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </Container>
    </section>
  );
};
