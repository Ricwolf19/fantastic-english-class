import { cn } from "@/lib/utils";

export const Input = ({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) => (
  <input
    type={type}
    data-slot="input"
    className={cn(
      "rounded-field border-ink-300 bg-surface-raised text-ink-900 h-11 w-full border px-4 text-sm transition-colors",
      "placeholder:text-ink-400",
      "focus-visible:border-brand focus-visible:ring-brand/20 focus-visible:ring-2 focus-visible:outline-none",
      "aria-invalid:border-accent-pink/70 aria-invalid:ring-accent-pink/15",
      "disabled:cursor-not-allowed disabled:opacity-60",
      className,
    )}
    {...props}
  />
);
