import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

/**
 * CTA que abre WhatsApp con un mensaje pre-llenado (deep-link wa.me). Renderiza
 * un `<a>` estilado como botón para no requerir JS. `message` se toma del copy
 * localizado por cada llamador.
 */
export const WhatsAppButton = ({
  message,
  label,
  variant = "brand",
  size = "lg",
  className,
}: {
  message: string;
  label: string;
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
  className?: string;
}) => (
  <a
    href={waLink(message)}
    target="_blank"
    rel="noreferrer noopener"
    className={cn(buttonVariants({ variant, size }), className)}
  >
    <WhatsAppIcon className="size-5" />
    {label}
  </a>
);
