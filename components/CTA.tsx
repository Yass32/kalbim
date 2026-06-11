import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-cream-200 px-7 py-12 ring-1 ring-ink/[0.04] sm:px-12 sm:py-16 lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="section-label">HEMEN BAŞLA</p>
                <h2 className="heading-xl mt-4 text-4xl text-ink sm:text-5xl">
                  Liderlik yolculuğuna bugün başla.
                </h2>
                <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
                  Ücretsiz üyelik ile topluluk etkinliklerine, mentorluk programlarına ve kaynaklara
                  eriş.
                </p>
              </div>

              <div className="relative flex flex-col items-center justify-center lg:items-end">
                {/* decorative dotted rings */}
                <span className="pointer-events-none absolute right-0 top-1/2 -z-0 hidden h-64 w-64 -translate-y-1/2 lg:block">
                  <span className="absolute inset-0 rounded-full border border-dashed border-ink/15" />
                  <span className="absolute inset-7 rounded-full border border-dashed border-ink/10" />
                  <span className="absolute inset-16 grid place-items-center rounded-full">
                    <span className="h-20 w-20 rounded-full bg-blush/60" />
                  </span>
                </span>

                <a
                  href="/iletisim"
                  className="relative z-10 inline-flex items-center justify-center rounded-full bg-crimson px-8 py-4 text-base font-semibold text-cream shadow-[0_16px_40px_-18px_rgba(146,41,142,0.7)] transition-transform hover:-translate-y-0.5"
                >
                  Üye Ol — Ücretsiz
                </a>
                <p className="relative z-10 mt-4 text-center text-[0.8rem] text-muted lg:text-right">
                  2 dakika sürer · Kredi kartı gerekmez.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
