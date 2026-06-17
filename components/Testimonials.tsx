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
    const card = track.querySelector<HTMLElement>('[data-card]');
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * dir, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">ÜYELERİMİZ ANLATIYOR</p>
            <h2 className="heading-xl mt-4 max-w-lg text-4xl text-ink sm:text-[2.75rem]">
              Sözlerini hatırla, paylaşıldıkça çoğalıyor.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Önceki yorumlar"
              className="grid h-11 w-11 place-items-center rounded-xl border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-cream-200"
            >
              <ArrowLeftSmall className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Sonraki yorumlar"
              className="grid h-11 w-11 place-items-center rounded-xl border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-cream-200"
            >
              <ArrowRightSmall className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              data-card
              className="flex min-w-[85%] snap-start flex-col rounded-[1.5rem] bg-cream-200 p-7 ring-1 ring-ink/[0.04] sm:min-w-[60%] md:min-w-0"
            >
              <QuoteMark className="h-6 w-7 text-crimson" />
              <p className="mt-5 flex-1 text-[1rem] leading-relaxed text-ink/85">{t.quote}</p>
              <div className="mt-7 flex items-center gap-3 border-t border-ink/[0.07] pt-5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full ${avatarBg[t.theme]} text-sm font-bold text-cream`}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
