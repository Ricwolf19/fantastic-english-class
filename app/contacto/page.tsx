import type { Metadata } from "next";

import { ContactSection } from "@/components/marketing/ContactSection";
import { CourseShell } from "@/components/marketing/course/CourseShell";
import { createT } from "@/lib/i18n/config";
import { metaAlternates } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

const t = createT("es");

export const metadata: Metadata = {
  title: t("nav.contact"),
  description: t("contact.subtitle"),
  alternates: metaAlternates("contact", "es"),
  openGraph: {
    title: `${t("nav.contact")} — ${site.brand}`,
    description: t("contact.subtitle"),
  },
};

const ContactoPage = () => (
  <CourseShell locale="es">
    <ContactSection locale="es" />
  </CourseShell>
);

export default ContactoPage;
