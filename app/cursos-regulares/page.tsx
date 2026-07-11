import type { Metadata } from "next";

import { CourseShell } from "@/components/marketing/course/CourseShell";
import { RegularContent } from "@/components/marketing/course/RegularContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { createT } from "@/lib/i18n/config";
import { metaAlternates, ROUTES } from "@/lib/i18n/routes";
import { courseSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

const t = createT("es");

export const metadata: Metadata = {
  title: t("regular.title"),
  description: t("regular.subtitle"),
  alternates: metaAlternates("regular", "es"),
  openGraph: {
    title: `${t("regular.title")} — ${site.brand}`,
    description: t("regular.subtitle"),
  },
};

const CursosRegularesPage = () => (
  <>
    <JsonLd
      data={[
        courseSchema("es", {
          nameKey: "regular.title",
          descKey: "regular.subtitle",
          price: site.courses.regular.pricing.perClass,
          path: ROUTES.regular.es,
        }),
      ]}
    />
    <CourseShell locale="es">
      <RegularContent locale="es" />
    </CourseShell>
  </>
);

export default CursosRegularesPage;
