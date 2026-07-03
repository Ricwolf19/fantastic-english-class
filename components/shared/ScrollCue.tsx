import { cn } from "@/lib/utils";

/**
 * Cues visuales dibujados a mano que invitan a la acción (scrollear, bajar,
 * hacer click). SVG con trazo irregular tipo marcador + animación CSS (bob /
 * draw / wiggle) — sin dependencias, SSR-safe y respetuoso de
 * prefers-reduced-motion (las animaciones se neutralizan en globals.css).
 *
 * Variantes:
 *  - "down"      → flecha curva hacia abajo que rebota (cue principal del hero).
 *  - "downLong"  → flecha larga sinuosa (separadores entre secciones).
 *  - "click"     → flecha diagonal que apunta a un CTA, con leve wiggle.
 *
 * `size` controla la altura del trazo: sm/md para separadores, lg/xl para el
 * cue prominente del hero.
 */
type CueVariant = "down" | "downLong" | "click";
type CueSize = "sm" | "md" | "lg" | "xl";

const PATHS: Record<CueVariant, { d: string; len: number; box: string }> = {
  down: {
    d: "M20 4 C 13 22, 27 34, 20 56 M20 56 C 14 48, 10 45, 4 45 M20 56 C 26 48, 30 45, 36 45",
    len: 140,
    box: "0 0 40 64",
  },
  downLong: {
    d: "M22 4 C 10 24, 34 40, 20 70 C 14 84, 24 92, 22 104 M22 104 C 15 96, 11 94, 5 95 M22 104 C 29 96, 33 94, 39 95",
    len: 200,
    box: "0 0 44 112",
  },
  click: {
    d: "M6 10 C 26 6, 44 14, 52 34 M52 34 C 44 33, 40 32, 35 34 M52 34 C 51 27, 50 23, 52 17",
    len: 130,
    box: "0 0 60 44",
  },
};

const SIZE_H: Record<CueSize, string> = {
  sm: "h-10",
  md: "h-14",
  lg: "h-20",
  xl: "h-28",
};

const STROKE: Record<CueSize, number> = { sm: 3, md: 3, lg: 3.5, xl: 4 };

export const ScrollCue = ({
  variant = "down",
  size = "md",
  className,
  label,
}: {
  variant?: CueVariant;
  size?: CueSize;
  className?: string;
  label?: string;
}) => {
  const { d, len, box } = PATHS[variant];
  const bob = variant === "click" ? "animate-wiggle" : "animate-bob";

  return (
    <span
      className={cn("inline-flex flex-col items-center gap-2", className)}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {label && (
        <span className="font-display text-ink-500 text-xs font-semibold tracking-wide">
          {label}
        </span>
      )}
      <svg
        viewBox={box}
        className={cn("text-brand w-auto", SIZE_H[size], bob)}
        fill="none"
      >
        <path
          d={d}
          stroke="currentColor"
          strokeWidth={STROKE[size]}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
          style={{ "--draw-len": len } as React.CSSProperties}
        />
      </svg>
    </span>
  );
};
