'use client';

import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { ArrowLeftSmall, ArrowRightSmall, QuoteMark } from '@/components/icons';
import { testimonials, type AvatarTheme } from '@/lib/content';

const avatarBg: Record<AvatarTheme, string> = {
  crimson: 'bg-crimson',
  forest: 'bg-forest',
  gold: 'bg-gold-500',
};

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    
    // We target the first card to calculate the scroll distance (width + gap)
    const card = track.querySelector<HTMLElement>('[data-card]');
    if (card) {
      const gap = 24; // Equivalent to gap-6
      const scrollAmount = card.offsetWidth + gap;
      track.scrollBy({ left: scrollAmount * dir, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label uppercase tracking-wider text-sm font-semibold">Üyelerimiz Anlatıyor</p>
            <h2 className="heading-xl mt-4 max-w-lg text-4xl font-bold text-ink sm:text-[2.75rem]">
              Sözlerini hatırla, paylaşıldıkça çoğalıyor.
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Önceki yorumlar"
              className="grid h-11 w-11 place-items-center rounded-xl border border-ink/15 text-ink transition-all hover:border-ink/40 hover:bg-cream-200 active:scale-95"
            >
              <ArrowLeftSmall className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Sonraki yorumlar"
              className="grid h-11 w-11 place-items-center rounded-xl border border-ink/15 text-ink transition-all hover:border-ink/40 hover:bg-cream-200 active:scale-95"
            >
              <ArrowRightSmall className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* KEY CHANGES: 
            1. Removed md:grid to keep it a flex-scroll container.
            2. Kept overflow-x-auto and scroll-snapping active on all screens.
        */}
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              data-card
              className="
                flex flex-col flex-shrink-0 snap-start rounded-[1.5rem] bg-cream-200 p-7 ring-1 ring-ink/[0.04]
                /* 1 card on mobile */
                w-[85%] 
                /* 2 cards on tablet */
                sm:w-[calc(50%-12px)] 
                /* 3 cards on desktop */
                md:w-[calc(33.333%-16px)]
              "
            >
              <QuoteMark className="h-6 w-7 text-crimson" />
              <p className="mt-5 flex-1 text-[1rem] leading-relaxed text-ink/85 italic">"{t.quote}"</p>
              <div className="mt-7 flex items-center gap-3 border-t border-ink/[0.07] pt-5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full ${avatarBg[t.theme]} text-sm font-bold text-cream`}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}