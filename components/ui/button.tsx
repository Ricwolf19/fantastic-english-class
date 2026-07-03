import { cva, type VariantProps } from "class-variance-authority";

import { Spinner } from "@/components/ui/Spinner";
import { cn } from "@/lib/utils";

/**
 * Button comic. `brand` es el CTA principal (rosa neón con glow y lift al
 * hover); `solid` es una superficie elevada neutra; `outline`/`ghost` para
 * secundarias. `buttonVariants` se exporta para estilar `<Link>` como botón.
 */
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-field font-semibold whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        brand:
          "bg-brand text-brand-ink shadow-brand hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
        solid:
          "bg-surface-raised text-ink-900 border border-line hover:border-brand/50 active:translate-y-px",
        outline:
          "border border-ink-300 text-ink-800 hover:border-brand hover:text-brand active:translate-y-px",
        ghost: "text-ink-700 hover:bg-ink-100 hover:text-ink-900",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "brand", size: "md" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /** Show a leading spinner and disable the button while a request is in flight. */
    loading?: boolean;
  };

export const Button = ({
  className,
  variant,
  size,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(buttonVariants({ variant, size }), className)}
    disabled={disabled || loading}
    aria-busy={loading || undefined}
    {...props}
  >
    {loading ? <Spinner size="sm" /> : null}
    {children}
  </button>
);
