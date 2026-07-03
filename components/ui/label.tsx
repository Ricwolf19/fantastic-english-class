import { cn } from "@/lib/utils";

export const Label = ({
  className,
  ...props
}: React.ComponentProps<"label">) => (
  <label
    data-slot="label"
    className={cn("text-ink-800 text-sm font-medium select-none", className)}
    {...props}
  />
);
