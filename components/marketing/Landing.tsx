import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactHome } from "@/components/marketing/ContactHome";
import { CoursesSummary } from "@/components/marketing/CoursesSummary";
import { Hero } from "@/components/marketing/Hero";
import { Highlights } from "@/components/marketing/Highlights";
import type { Locale } from "@/lib/i18n/config";

/**
 * Compositor del home. Resumen honesto y compacto: hero, tarjetas de cursos (que
 * enlazan a cada página), highlights con datos reales y un bloque de contacto
 * condensado. El detalle de cada curso vive en su ruta; el contacto completo
 * (con formulario) vive en `/contacto`.
 */
export const Landing = ({ locale }: { locale: Locale }) => (
  <div className="flex min-h-dvh flex-col">
    <Header />
    <main className="flex-1">
      <Hero locale={locale} />
      <CoursesSummary locale={locale} />
      <Highlights locale={locale} />
      <ContactHome locale={locale} />
    </main>
    <Footer locale={locale} />
  </div>
);
