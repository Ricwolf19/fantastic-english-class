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
  title: "English classes in Chihuahua",
  description:
    "English classes in Chihuahua with Zaida Armenta, a certified teacher. Private lessons, kids, conversation and exam prep. In-person or online.",
  alternates: metaAlternates("home", "en"),
  openGraph: {
    title: "Fantastic English Class — English classes in Chihuahua",
    description:
      "Learn English with confidence. Personalized lessons with a certified teacher, in-person or online.",
  },
};

/** Landing EN — locale secundario, bajo /en. */
const HomePageEn = () => (
  <>
    <JsonLd
      data={[
        languageSchoolSchema("en"),
        personSchema("en"),
        websiteSchema("en"),
      ]}
    />
    <Landing locale="en" />
  </>
);

export default HomePageEn;
