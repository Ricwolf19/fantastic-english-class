import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Locale } from "@/lib/i18n/config";

/** Shell de una página de curso: Header + main + Footer, igual que la landing. */
export const CourseShell = ({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) => (
  <div className="flex min-h-dvh flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer locale={locale} />
  </div>
);
