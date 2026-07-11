import type { Metadata } from "next";

import { CourseShell } from "@/components/marketing/course/CourseShell";
import { SpanishContent } from "@/components/marketing/course/SpanishContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { createT } from "@/lib/i18n/config";
import { metaAlternates, ROUTES } from "@/lib/i18n/routes";
import { courseSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

const t = createT("es");

export const metadata: Metadata = {
  title: t("spanish.title"),
  description: t("spanish.subtitle"),
  alternates: metaAlternates("spanish", "es"),
  openGraph: {
    title: `${t("spanish.title")} — ${site.brand}`,
    description: t("spanish.subtitle"),
  },
};

const ClasesEspanolPage = () => (
  <>
    <JsonLd
      data={[
        courseSchema("es", {
          nameKey: "spanish.title",
          descKey: "spanish.subtitle",
          price: site.courses.spanish.pricing.perClass,
          path: ROUTES.spanish.es,
        }),
      ]}
    />
    <CourseShell locale="es">
      <SpanishContent locale="es" />
    </CourseShell>
  </>
);

export default ClasesEspanolPage;
