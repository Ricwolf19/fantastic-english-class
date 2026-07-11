import type { Metadata } from "next";

import { CourseShell } from "@/components/marketing/course/CourseShell";
import { RegularContent } from "@/components/marketing/course/RegularContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { createT } from "@/lib/i18n/config";
import { metaAlternates, ROUTES } from "@/lib/i18n/routes";
import { courseSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

const t = createT("en");

export const metadata: Metadata = {
  title: t("regular.title"),
  description: t("regular.subtitle"),
  alternates: metaAlternates("regular", "en"),
  openGraph: {
    title: `${t("regular.title")} — ${site.brand}`,
    description: t("regular.subtitle"),
  },
};

const RegularPage = () => (
  <>
    <JsonLd
      data={[
        courseSchema("en", {
          nameKey: "regular.title",
          descKey: "regular.subtitle",
          price: site.courses.regular.pricing.perClass,
          path: ROUTES.regular.en,
        }),
      ]}
    />
    <CourseShell locale="en">
      <RegularContent locale="en" />
    </CourseShell>
  </>
);

export default RegularPage;
