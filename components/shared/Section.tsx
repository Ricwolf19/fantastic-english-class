import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

/**
 * Sección de página. Con `fullHeight` ocupa al menos el viewport completo
 * (solo el Hero lo usa). El resto usa un padding vertical compacto que respira
 * sin dejar huecos enormes, y se reduce en mobile para ahorrar scroll.
 */
export const Section = ({
  className,
  children,
  id,
  fullHeight = false,
  surface = "base",
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  surface?: "base" | "sunken";
}) => (
  <section
    id={id}
    className={cn(
      "scroll-mt-16 py-14 sm:py-20",
      fullHeight && "flex min-h-dvh flex-col justify-center",
      surface === "sunken" && "bg-surface-sunken",
      className,
    )}
  >
    <Container>{children}</Container>
  </section>
);

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) => (
  <div
    className={cn(
      "animate-fade-up",
      align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
      className,
    )}
  >
    {eyebrow && (
      <p className="font-display text-brand text-sm font-extrabold tracking-widest uppercase">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-ink-900 mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p
        className={cn(
          "text-ink-600 mt-4 text-pretty [animation-delay:120ms]",
          align === "center" && "mx-auto max-w-xl",
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);
