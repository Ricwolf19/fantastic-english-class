import { cn } from "@/lib/utils";

/** Estrella comic de 4 puntas (destello), rellena con `currentColor`. */
const Twinkle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 0c.7 6.3 5 10.6 11.3 11.3C17 12 12.7 16.3 12 22.6 11.3 16.3 7 12 0.7 11.3 7 10.6 11.3 6.3 12 0Z" />
  </svg>
);

/**
 * Pieza gráfica del hero: dos globos de diálogo comic ("Hello!" en inglés,
 * "¡Hola!" en español) que guiñan al bilingüismo y al método conversacional,
 * más destellos pop. Decorativa (aria-hidden); flota sobre el título.
 */
export const HeroGreeting = ({ className }: { className?: string }) => (
  <div
    className={cn("animate-float relative inline-flex", className)}
    aria-hidden
  >
    <Twinkle className="text-accent-sky absolute -top-4 -left-8 size-5 sm:size-6" />
    <Twinkle className="text-accent-lime absolute -right-4 bottom-2 size-4 sm:size-5" />

    {/* Globo secundario: ¡Hola! (rosa), ligeramente rotado detrás. */}
    <div className="absolute -top-7 -right-8 rotate-6 sm:-right-12">
      <div className="bg-brand relative rounded-2xl px-3.5 py-1.5 shadow-[0_10px_30px_-8px_rgb(var(--brand)/0.6)]">
        <span className="font-display text-brand-ink text-base font-extrabold sm:text-lg">
          ¡Hola!
        </span>
        <span className="bg-brand absolute -bottom-1.5 left-5 size-4 rotate-45 rounded-[3px]" />
      </div>
    </div>

    {/* Globo principal: Hello! (amarillo starburst). */}
    <div className="bg-sun relative rounded-[1.75rem] px-8 py-4 shadow-[0_16px_44px_-10px_rgb(var(--sun)/0.55)] sm:px-10 sm:py-5">
      <span className="font-display text-ink-950 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Hello!
      </span>
      <span className="bg-sun absolute -bottom-2.5 left-9 size-6 rotate-45 rounded-[6px]" />
    </div>
  </div>
);
