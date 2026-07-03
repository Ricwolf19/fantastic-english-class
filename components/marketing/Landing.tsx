import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/marketing/About";
import { ContactSection } from "@/components/marketing/ContactSection";
import { Credentials } from "@/components/marketing/Credentials";
import { Hero } from "@/components/marketing/Hero";
import { Services } from "@/components/marketing/Services";
import { WhyMe } from "@/components/marketing/WhyMe";
import type { Locale } from "@/lib/i18n/config";

/**
 * Compositor de la landing one-page. Recibe el locale y arma el orden de
 * secciones. Todo es Server Component salvo Header (nav interactiva) y el
 * ContactForm anidado (client).
 */
export const Landing = ({ locale }: { locale: Locale }) => (
  <div className="flex min-h-dvh flex-col">
    <Header />
    <main className="flex-1">
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <WhyMe locale={locale} />
      <Credentials locale={locale} />
      <ContactSection locale={locale} />
    </main>
    <Footer locale={locale} />
  </div>
);
