import Link from "next/link";

import { Mascot } from "@/components/brand/Mascot";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Lockup de marca para header/footer: la mascota + el wordmark ("Fantastic" en
 * rosa, "English" en claro). Enlaza al home del locale activo.
 */
export const Logo = ({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) => (
  <Link
    href={href}
    className={cn(
      "group rounded-field focus-visible:ring-brand/50 inline-flex items-center gap-2.5 focus-visible:ring-2 focus-visible:outline-none",
      className,
    )}
    aria-label={site.brand}
  >
    <Mascot
      title=""
      className="ring-line size-9 shrink-0 rounded-lg ring-1 transition-transform group-hover:-rotate-6"
    />
    <span className="font-display text-lg leading-none font-extrabold tracking-tight">
      <span className="text-brand">Fantastic</span>{" "}
      <span className="text-ink-900">English</span>
    </span>
  </Link>
);
