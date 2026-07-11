import type { Metadata } from "next";

import { CourseShell } from "@/components/marketing/course/CourseShell";
import { SpecialsContent } from "@/components/marketing/course/SpecialsContent";
import { createT } from "@/lib/i18n/config";
import { metaAlternates } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

const t = createT("es");

export const metadata: Metadata = {
  title: t("specials.title"),
  description: t("specials.subtitle"),
  alternates: metaAlternates("specials", "es"),
  openGraph: {
    title: `${t("specials.title")} — ${site.brand}`,
    description: t("specials.subtitle"),
  },
};

const EspecialesPage = () => (
  <CourseShell locale="es">
    <SpecialsContent locale="es" />
  </CourseShell>
);

export default EspecialesPage;
