import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { impactStats } from '@/lib/content';

export function Impact() {
  return (
    <section className="bg-cream-200 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <p className="section-label">2025&apos;TE ETKİMİZ</p>
            <h2 className="heading-xl mt-4 text-4xl text-ink sm:text-[2.75rem]">
              Birlikte ördüğümüz ağ.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:pt-2">
            <p className="max-w-md text-[0.98rem] leading-relaxed text-muted">
              KALBİM yalnızca bir dernek değil — Türkiye&apos;nin dört bir yanındaki kadınların kendi
              çevrelerini kurduğu canlı bir topluluk.
            </p>
          </Reveal>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-16 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 90}>
              <dd className="font-display text-5xl font-extrabold tracking-tight text-crimson sm:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-base font-semibold text-ink">{stat.label}</dt>
              <p className="mt-1 text-sm text-muted">{stat.note}</p>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
