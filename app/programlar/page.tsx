import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { Programs } from '@/components/Programs';
import { CTA } from '@/components/CTA';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from '@/components/icons';
import { programDetails, faq, type ProgramTheme } from '@/lib/content';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Programlar',
  description:
    'Liderlik eğitimi, birebir mentorluk ve uygulamalı atölyeler. KALBİM programları her kariyer aşamasına uygun, hedef odaklı ve büyük ölçüde ücretsiz.',
  alternates: { canonical: '/programlar' },
};

const accent: Record<ProgramTheme, { dot: string; chip: string }> = {
  crimson: { dot: 'bg-crimson', chip: 'bg-crimson/10 text-crimson' },
  forest: { dot: 'bg-forest', chip: 'bg-forest/15 text-forest' },
  gold: { dot: 'bg-gold-500', chip: 'bg-gold-500/15 text-gold-deep' },
};

export default function ProgramlarPage() {
  return (
    <main id="main">
      <PageHeader
        label="PROGRAMLAR"
        title="Her yolculuğa bir başlangıç noktası."
        description="İster ilk kez bir ekip yönetiyor ol, ister kendi işini kuruyor; sana uygun bir program var. Hepsi hedef odaklı, uygulamalı ve büyük ölçüde üyelere ücretsiz."
      />

      {/* Reuse the three program cards */}
      <Programs />

      {/* Detailed breakdown */}
      <section className="bg-cream-200 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="section-label">DETAYLAR</p>
            <h2 className="heading-xl mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
              Her programın içinde ne var?
            </h2>
          </Reveal>

          <div className="mt-12 space-y-6">
            {programDetails.map((p, i) => (
              <Reveal as="article" key={p.title} delay={i * 80}>
                <div className="grid gap-6 rounded-[1.5rem] bg-cream p-7 ring-1 ring-ink/[0.05] lg:grid-cols-[1fr_1.4fr] lg:gap-10 lg:p-9">
                  <div>
                    <span
                      className={cn(
                        'inline-flex w-fit rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider',
                        accent[p.theme].chip
                      )}
                    >
                      {p.badge}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-ink">{p.title}</h3>
                    <p className="mt-3 text-[0.96rem] leading-relaxed text-muted">{p.body}</p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.82rem] text-muted">
                      {p.meta.map((m) => (
                        <span key={m}>· {m}</span>
                      ))}
                    </div>
                    <Button href="/iletisim" variant="primary" size="md" className="mt-6">
                      Başvur
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <ul className="grid gap-3 self-center sm:grid-cols-2">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 rounded-xl bg-cream-100 p-4">
                        <span className={cn('mt-1.5 h-2 w-2 shrink-0 rounded-full', accent[p.theme].dot)} />
                        <span className="text-[0.9rem] leading-snug text-ink/85">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ 
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="section-label">SIKÇA SORULANLAR</p>
            <h2 className="heading-xl mt-4 text-3xl text-ink sm:text-4xl">Merak edilenler.</h2>
          </Reveal>
          <div className="mt-12">
            <FaqAccordion items={faq} />
          </div>
        </Container>
      </section>
      */}

      <CTA />
    </main>
  );
}
