import type { Metadata } from "next";

import { CourseShell } from "@/components/marketing/course/CourseShell";
import { KidsContent } from "@/components/marketing/course/KidsContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { createT } from "@/lib/i18n/config";
import { metaAlternates, ROUTES } from "@/lib/i18n/routes";
import { courseSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

const t = createT("es");

export const metadata: Metadata = {
  title: t("kids.title"),
  description: t("kids.subtitle"),
  alternates: metaAlternates("kids", "es"),
  openGraph: {
    title: `${t("kids.title")} — ${site.brand}`,
    description: t("kids.subtitle"),
  },
};

const NinosPage = () => (
  <>
    <JsonLd
      data={[
        courseSchema("es", {
          nameKey: "kids.title",
          descKey: "kids.subtitle",
          price: site.courses.kids.pricing.perClass,
          path: ROUTES.kids.es,
        }),
      ]}
    />
    <CourseShell locale="es">
      <KidsContent locale="es" />
    </CourseShell>
  </>
);

export default NinosPage;
