"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-800"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className={cn("text-lg transition", isOpen && "rotate-45")}>+</span>
            </button>
            <div
              id={panelId}
              role="region"
              className={cn("px-5 pb-4 text-sm text-slate-600", isOpen ? "block" : "hidden")}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
