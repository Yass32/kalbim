'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink/[0.08] rounded-2xl bg-cream ring-1 ring-ink/[0.05]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-[1.02rem] font-semibold text-ink">{item.q}</span>
                <span
                  className={cn(
                    'grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-transform duration-300',
                    isOpen && 'rotate-45 border-crimson bg-crimson text-cream'
                  )}
                  aria-hidden
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className={cn(
                'grid overflow-hidden px-6 transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="text-[0.96rem] leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
