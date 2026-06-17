import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HeroIllustration } from '@/components/HeroIllustration';
import { ArrowRight } from '@/components/icons';
import { heroStats } from '@/lib/content';

const avatarThemes = [
  { initials: 'EK', bg: 'bg-crimson' },
  { initials: 'ZA', bg: 'bg-forest' },
  { initials: 'MD', bg: 'bg-gold-500' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pt-16 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left column */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-200 px-3.5 py-1.5 text-[0.8rem] font-semibold text-ink/80 [animation-delay:0ms] motion-safe:animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
              Kadın Liderliği ve Bilinçlendirme Merkezi
            </span>

            <h1 className="heading-xl mt-6 text-[2.65rem] text-ink sm:text-6xl lg:text-[4.1rem] [animation-delay:80ms] motion-safe:animate-fade-up">
              Kadın liderliği bir <span className="text-crimson">hareket</span> olduğunda her şey
              değişir.
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted [animation-delay:160ms] motion-safe:animate-fade-up">
              KALBİM, kadınların liderlik potansiyelini keşfetmeleri ve güçlenmeleri için bir topluluk
              ve öğrenme merkezi. Eğitim, mentorluk ve çevreler — hepsi tek çatı altında.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms] motion-safe:animate-fade-up">
              <Button href="/iletisim" variant="primary" size="lg">
                Topluluğa Katıl
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/programlar" variant="secondary" size="lg">
                Programları Keşfet
              </Button>
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 [animation-delay:320ms] motion-safe:animate-fade-up">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-extrabold tracking-tight text-ink">{stat.value}</dd>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column — illustration card */}
          <div className="relative [animation-delay:200ms] motion-safe:animate-fade-in">
            <div className="relative mx-auto aspect-[5/6] w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-cream-100 to-cream-200 shadow-[0_30px_80px_-40px_rgba(28,16,36,0.3)] ring-1 ring-ink/[0.04]">
              <HeroIllustration />

              {/* Live badge */}
              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-2 text-[0.78rem] font-semibold text-cream shadow-lg sm:right-5 sm:top-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
                </span>
                Canlı atölye: 18:30
              </div>

              {/* New members card */}
              <div className="absolute bottom-4 left-4 right-4 inline-flex items-center gap-3 rounded-2xl bg-cream/90 px-3.5 py-2.5 shadow-[0_18px_40px_-20px_rgba(28,16,36,0.45)] ring-1 ring-ink/[0.04] backdrop-blur-sm sm:left-5 sm:w-auto sm:max-w-[260px]">
                <div className="flex -space-x-2.5">
                  {avatarThemes.map((a) => (
                    <span
                      key={a.initials}
                      className={`grid h-8 w-8 place-items-center rounded-full ${a.bg} text-[0.65rem] font-bold text-cream ring-2 ring-cream`}
                    >
                      {a.initials}
                    </span>
                  ))}
                </div>
                <p className="text-[0.78rem] leading-tight text-ink/80">
                  <span className="font-semibold text-ink">Bu hafta 27 yeni üye</span>
                  <br />
                  topluluğa katıldı
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
