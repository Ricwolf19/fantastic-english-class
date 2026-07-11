"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { id: string; title: string; body: string };

/**
 * FAQ colapsable de un curso (exámenes, ausencias, formato). Isla client sobre
 * Radix Accordion; los textos ya vienen traducidos desde el server.
 */
export const CourseFaq = ({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) => (
  <div>
    <h2 className="font-display text-ink-900 text-2xl font-bold">{title}</h2>
    <Accordion
      type="single"
      collapsible
      className="rounded-card border-line bg-surface-raised mt-6 border px-5"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);
