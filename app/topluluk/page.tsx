import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { Circles } from '@/components/Circles';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { events } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Topluluk',
  description:
    'KALBİM çevreleri, yerel buluşmalar ve etkinlikler. 8–12 kadından oluşan akran gruplarıyla iki haftada bir buluş, birlikte büyü.',
  alternates: { canonical: '/topluluk' },
};

const steps = [
  { title: 'Başvur', body: 'Birkaç dakikalık formla ilgi alanlarını ve hedeflerini paylaş.' },
  { title: 'Eşleş', body: 'Sana uygun bir çevreye yerleştirilirsin ya da yenisini kurarsın.' },
  { title: 'Buluş', body: 'İki haftada bir, çevrimiçi veya yüz yüze düzenli olarak bir araya gelirsin.' },
  { title: 'Büyü', body: 'Gerçek hedefler üzerinde çalışır, ilerlemeni toplulukla paylaşırsın.' },
];

export default function ToplulukPage() {
  return (
    <main id="main">
      <PageHeader
        label="TOPLULUK"
        title="Birlikte daha güçlüyüz."
        description="Çevreler, 8–12 kadından oluşan akran gruplarıdır. İki haftada bir buluşur, birbirinizin gerçek soru ve hedefleriyle çalışırsınız — yargılamadan, sadece destekleyerek."
      />

      {/* Reuse circles grid */}
      <Circles />

      {/* How it works */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="section-label">NASIL İŞLİYOR?</p>
            <h2 className="heading-xl mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
              Dört adımda çevrene katıl.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="div" key={step.title} delay={i * 90}>
                <div className="relative h-full rounded-2xl bg-cream-100 p-7 ring-1 ring-ink/[0.05]">
                  <span className="font-display text-4xl font-extrabold text-crimson/25">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming events */}
      <section id="etkinlikler" className="bg-cream-200 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="section-label">YAKLAŞAN ETKİNLİKLER</p>
            <h2 className="heading-xl mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
              Bu ay neler oluyor?
            </h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-ink/[0.08] overflow-hidden rounded-2xl bg-cream ring-1 ring-ink/[0.05]">
            {events.map((ev, i) => (
              <Reveal as="li" key={ev.title} delay={i * 60}>
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                    <span className="text-[0.65rem] font-semibold uppercase">{ev.date.split(' ')[1]}</span>
                    <span className="text-lg font-extrabold leading-none">{ev.date.split(' ')[0]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.02rem] font-bold text-ink">{ev.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {ev.city} · {ev.mode}
                    </p>
                  </div>
                  <a
                    href="/iletisim"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-crimson hover:text-crimson"
                  >
                    Katıl
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Testimonials />
      <CTA />
    </main>
  );
}
