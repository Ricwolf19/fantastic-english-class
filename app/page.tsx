import type { Metadata } from "next";

import { Landing } from "@/components/marketing/Landing";
import { JsonLd } from "@/components/seo/JsonLd";
import { metaAlternates } from "@/lib/i18n/routes";
import {
  languageSchoolSchema,
  personSchema,
  websiteSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  alternates: metaAlternates("home", "es"),
};

/** Landing ES — locale primario, servido en la raíz. */
const HomePage = () => (
  <>
    <JsonLd
      data={[
        languageSchoolSchema("es"),
        personSchema("es"),
        websiteSchema("es"),
      ]}
    />
    <Landing locale="es" />
  </>
);

export default HomePage;
