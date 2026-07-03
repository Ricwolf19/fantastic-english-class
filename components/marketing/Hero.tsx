import { HeroGreeting } from "@/components/brand/HeroGreeting";
import { Container } from "@/components/shared/Container";
import { ScrollCue } from "@/components/shared/ScrollCue";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { createT, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Hero — primera pantalla, única sección que ocupa el viewport completo
 * (min-h-dvh). Globos de saludo (HeroGreeting) flotando, título/subtítulo/CTA
 * con entrada escalonada (fade-up) y CTAs full-width en mobile. Un ScrollCue
 * grande al pie invita a bajar. El resto de secciones usan altura natural.
 */
export const Hero = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const seeClasses = locale === "en" ? "/en#classes" : "/#servicios";

  return (
    <section className="relative flex min-h-[92svh] flex-col overflow-hidden">
      {/* Fondo: halftone tenue + halos de marca (varios colores comic) */}
      <div
        aria-hidden
        className="halftone pointer-events-none absolute inset-0 -z-10 opacity-60"
      />
      <div
        aria-hidden
        className="bg-brand/10 pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[40rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-accent-sky/10 pointer-events-none absolute top-1/3 left-[-12%] -z-10 size-[30rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-leaf/10 pointer-events-none absolute -bottom-40 left-[20%] -z-10 size-[34rem] rounded-full blur-3xl"
      />

      <Container className="flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-14">
        <HeroGreeting className="mb-10 sm:mb-12" />

        <span className="animate-fade-up rounded-pill border-line bg-surface-raised text-ink-700 shadow-soft inline-flex items-center gap-2 border px-4 py-1.5 text-xs font-semibold">
          <span className="bg-accent-sky size-2 rounded-full" />
          {t("hero.eyebrow")}
        </span>

        <h1 className="animate-fade-up font-display text-ink-900 mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-balance [animation-delay:100ms] sm:text-6xl md:text-7xl">
          {t("hero.title")}{" "}
          <span className="text-brand relative inline-block">
            {t("hero.titleHighlight")}
            <svg
              aria-hidden
              viewBox="0 0 300 24"
              preserveAspectRatio="none"
              className="text-accent-amber absolute -bottom-1.5 left-0 h-2.5 w-full sm:-bottom-2 sm:h-3"
            >
              <path
                d="M4 16 C 80 6, 220 6, 296 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="animate-draw"
                style={{ "--draw-len": 300 } as React.CSSProperties}
              />
            </svg>
          </span>
        </h1>

        <p className="animate-fade-up text-ink-600 mt-6 max-w-2xl text-base text-pretty [animation-delay:200ms] sm:mt-8 sm:text-xl">
          {t("hero.subtitle", { teacher: site.teacher.shortName })}
        </p>

        <div className="animate-fade-up mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 [animation-delay:300ms] sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
          <WhatsAppButton
            message={t("contact.whatsappPrefill")}
            label={t("hero.ctaPrimary")}
            className="w-full sm:w-auto"
          />
          <a
            href={seeClasses}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto",
            )}
          >
            {t("hero.ctaSecondary")}
            <ArrowRightIcon className="size-4" />
          </a>
        </div>

        <ul className="animate-fade-up text-ink-500 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium [animation-delay:400ms]">
          <li className="flex items-center gap-2">
            <span className="bg-brand size-1.5 rounded-full" />
            {t("hero.badge1")}
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-leaf size-1.5 rounded-full" />
            {t("hero.badge2")}
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-accent-grape size-1.5 rounded-full" />
            {t("hero.badge3")}
          </li>
        </ul>
      </Container>

      {/* Cue de scroll — asoma dentro del viewport para que se vea a primera
          instancia (margen inferior chico + tamaño contenido). */}
      <a
        href={seeClasses}
        aria-label={t("hero.scrollCue")}
        className="group text-brand mx-auto mb-4 flex shrink-0 flex-col items-center gap-0.5 transition-transform hover:translate-y-1 sm:mb-6"
      >
        <span className="font-display text-ink-500 group-hover:text-brand text-xs font-bold tracking-wide sm:text-sm">
          {t("hero.scrollCue")}
        </span>
        <ScrollCue variant="down" size="lg" />
      </a>
    </section>
  );
};
