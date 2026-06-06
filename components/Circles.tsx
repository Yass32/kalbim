import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from '@/components/icons';
import { circles, type CircleTheme } from '@/lib/content';
import { cn } from '@/lib/utils';

const dotColors: Record<CircleTheme, string> = {
  crimson: '#B83A52',
  forest: '#4C7A5D',
  gold: '#D4A849',
  lilac: '#B6A4E0',
};

function RingMarker({ theme }: { theme: CircleTheme }) {
  const color = dotColors[theme];
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
      <circle
        cx="20"
        cy="20"
        r="15"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeDasharray="2.4 5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="32" cy="20" r="3.4" fill={color} />
    </svg>
  );
}

export function Circles() {
  return (
    <section id="topluluk" className="bg-cream-100 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <Reveal>
            <p className="section-label">KALBİM ÇEVRELERİ</p>
            <h2 className="heading-xl mt-4 text-4xl text-ink sm:text-[2.75rem]">
              Birlikte daha güçlüyüz.
            </h2>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink/80">
              Çevreler, 8–12 kadından oluşan akran gruplarıdır. İki haftada bir buluşur,
              birbirinizin gerçek soru ve hedefleriyle çalışırsınız. Yargılamadan, sadece
              destekleyerek.
            </p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
              Şehrinizde uygun bir çevre yoksa, KALBİM kolaylaştırıcılarıyla kendi çevrenizi
              başlatabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#topluluk" variant="primary" size="md">
                Çevre Bul
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#topluluk" variant="outline-dark" size="md">
                Çevre Kur
              </Button>
            </div>
          </Reveal>

          {/* Right: 2x2 grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {circles.map((circle, i) => (
              <Reveal as="article" key={circle.title} delay={i * 90}>
                <div className="group h-full rounded-[1.25rem] bg-cream-200 p-6 ring-1 ring-ink/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-30px_rgba(28,16,36,0.4)]">
                  <RingMarker theme={circle.theme} />
                  <h3 className="mt-5 text-lg font-bold text-ink">{circle.title}</h3>
                  <p className="mt-1 text-sm text-muted">{circle.description}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-[0.82rem] font-medium text-ink/70">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: dotColors[circle.theme] }}
                    />
                    {circle.groups}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
