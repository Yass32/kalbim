import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { Impact } from '@/components/Impact';
import { CTA } from '@/components/CTA';
import { values, timeline, team } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'KALBİM’in hikayesi, misyonu ve ekibi. Türkiye’de kadınların liderlik potansiyelini destekleyen bağımsız topluluğun kuruluşundan bugüne.',
  alternates: { canonical: '/hakkimizda' },
};

const avatarBg: Record<'crimson' | 'forest' | 'gold', string> = {
  crimson: 'bg-crimson',
  forest: 'bg-forest',
  gold: 'bg-gold-500',
};

export default function HakkimizdaPage() {
  return (
    <main id="main">
      <PageHeader
        label="HAKKIMIZDA"
        title="Kadınların birlikte yükseldiği bir alan."
        description="KALBİM, kadınların liderlik potansiyelini keşfetmesi ve güçlenmesi için kurulan bağımsız bir topluluk ve öğrenme merkezi. Hikayemiz küçük bir okuma grubuyla başladı, bugün on iki şehre yayılan bir harekete dönüştü."
      />

      {/* Mission / Vision */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="section-label">MİSYONUMUZ</p>
              <h2 className="heading-xl mt-4 text-3xl text-ink sm:text-4xl">
                Her kadının kendi liderlik tarzını bulmasını sağlamak.
              </h2>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-muted">
                Liderliğin tek bir kalıbı olmadığına inanıyoruz. Kimine göre bir ekibi yönetmek,
                kimine göre kendi işini kurmak, kimine göre de sessiz ama kararlı bir etki bırakmak.
                Biz, bu yolculuğun hangi aşamasında olursan ol yanında olan bir topluluk kuruyoruz.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="section-label">VİZYONUMUZ</p>
              <h2 className="heading-xl mt-4 text-3xl text-ink sm:text-4xl">
                Türkiye’nin her şehrinde güçlü kadın ağları.
              </h2>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-muted">
                Hedefimiz, bir kadının nerede yaşadığından bağımsız olarak; mentor bulabileceği,
                öğrenebileceği ve destek alabileceği bir çevreye erişebilmesi. Yerel çevreler
                modelimizle bu ağı adım adım büyütüyoruz.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-cream-200 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="section-label">DEĞERLERİMİZ</p>
            <h2 className="heading-xl mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
              Bizi bir arada tutan dört ilke.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="article" key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-cream p-7 ring-1 ring-ink/[0.05]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-crimson/10 text-crimson font-bold">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="section-label">YOLCULUĞUMUZ</p>
            <h2 className="heading-xl mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
              2022’den bu yana büyüyoruz.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink/[0.07] ring-1 ring-ink/[0.05] sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal as="div" key={t.year} delay={i * 90} className="bg-cream">
                <div className="h-full p-7">
                  <span className="font-display text-3xl font-extrabold text-crimson">{t.year}</span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{t.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Impact />

      {/* Team */}
      <section id="ekip" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="section-label">EKİBİMİZ</p>
            <h2 className="heading-xl mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
              Topluluğu büyüten yüzler.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal as="article" key={member.name} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-2xl bg-cream-100 p-6 ring-1 ring-ink/[0.05]">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${avatarBg[member.theme]} text-base font-bold text-cream`}
                    aria-hidden
                  >
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{member.name}</h3>
                    <p className="text-sm text-muted">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
