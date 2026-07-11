"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { NavArrowDown } from "iconoir-react";

import { cn } from "@/lib/utils";

/**
 * Accordion sobre Radix, con los tokens del design system. Wrapper delgado en
 * estilo arrow-function (respeta el lint). Se usa para agrupar notas del curso
 * (examen, ausencias, Zoom) de forma colapsable.
 */
export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    className={cn("border-line border-b last:border-b-0", className)}
    {...props}
  />
);

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "group text-ink-900 hover:text-brand flex flex-1 items-center justify-between gap-3 py-4 text-left text-sm font-semibold transition-colors focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      {children}
      <NavArrowDown
        aria-hidden
        className="text-ink-500 size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

export const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn("text-ink-600 pb-4 text-pretty", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
);
