'use client';

// components/ui/Accordion.tsx
// FAQ Accordion component — used on /contact page Common Questions section.
// Per wireframes.md: collapsible rows, [+]/[-] toggle, gold left border on expanded answers.

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionSectionProps {
  heading: string;
  items: AccordionItem[];
}

function AccordionRow({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        id={`faq-trigger-${item.id}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${item.id}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-4 px-0 text-left min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm group"
      >
        <span className="text-[18px] font-body font-semibold text-text leading-snug group-hover:text-primary transition-colors duration-150">
          {item.question}
        </span>
        <span className="shrink-0 w-6 h-6 flex items-center justify-center text-text-muted group-hover:text-primary transition-colors duration-150" aria-hidden="true">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        id={`faq-panel-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        hidden={!open}
      >
        <div className="border-l-4 border-primary pl-4 pb-5 text-body text-text leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function AccordionSection({ heading, items }: AccordionSectionProps) {
  return (
    <section aria-label={heading}>
      <h3 className="text-h3-mobile font-display font-bold text-text mb-4 mt-8">
        {heading}
      </h3>
      <div className="divide-y divide-border border-t border-border">
        {items.map((item) => (
          <AccordionRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
