"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

/**
 * Tabs sobre Radix, con los tokens del design system. Wrapper delgado en estilo
 * arrow-function (respeta el lint) — Radix aporta accesibilidad y teclado.
 */
export const Tabs = TabsPrimitive.Root;

export const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn(
      "rounded-pill border-line bg-surface-sunken inline-flex flex-wrap items-center gap-1 border p-1",
      className,
    )}
    {...props}
  />
);

export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={cn(
      "rounded-pill text-ink-600 focus-visible:ring-brand/50 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none",
      "data-[state=active]:bg-brand data-[state=active]:text-brand-ink data-[state=active]:shadow-brand",
      "hover:text-ink-900 data-[state=active]:hover:text-brand-ink",
      className,
    )}
    {...props}
  />
);

export const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content
    className={cn(
      "animate-fade-up [animation-duration:0.4s] focus-visible:outline-none",
      className,
    )}
    {...props}
  />
);
