import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from '@/components/icons';
import { articles } from '@/lib/content';

function CirclesArt() {
  return (
    <svg viewBox="0 0 300 150" className="h-full w-full" aria-hidden="true">
      <circle cx="118" cy="75" r="48" fill="#4C7A5D" />
      <circle cx="182" cy="75" r="48" fill="#D4A849" />
      <circle cx="150" cy="75" r="33" fill="#B83A52" />
    </svg>
  );
}

function SquaresArt() {
  return (
    <svg viewBox="0 0 300 150" className="h-full w-full" aria-hidden="true">
      <rect x="96" y="46" width="40" height="58" rx="8" fill="#B6A4E0" />
      <rect x="142" y="46" width="40" height="58" rx="8" fill="#F2A07E" />
      <rect x="188" y="46" width="40" height="58" rx="8" fill="#B83A52" />
    </svg>
  );
}

export function Blog() {
  return (
    <section id="blog" className="bg-cream-200 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="section-label">BLOG &amp; KAYNAKLAR</p>
            <h2 className="heading-xl mt-4 text-4xl text-ink sm:text-[2.75rem]">
              Okumalık ve dinlemelik.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Button href="#blog" variant="outline-dark" size="md">
              Tüm yazılar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Featured resource */}
          <Reveal as="article">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-blush p-8 text-ink">
              <span className="pointer-events-none absolute -right-6 top-8 h-36 w-36 rounded-full border-2 border-dashed border-crimson/40">
                <span className="absolute inset-5 rounded-full bg-blush-deep/70" />
              </span>

              <span className="relative inline-flex w-fit rounded-full bg-black/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-ink/70">
                Öne Çıkan Kaynak
              </span>
              <h3 className="relative mt-5 max-w-sm text-2xl font-bold leading-snug">
                Müzakere Atölyesi: kendine değer biçmenin pratiği
              </h3>
              <p className="relative mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink/75">
                Maaş görüşmesinden iş ortaklığına, somut cümleler ve hazırlık şablonlarıyla dolu 28
                sayfalık ücretsiz rehber.
              </p>
              <div className="relative mt-auto flex items-end justify-between gap-4 pt-10">
                <p className="flex flex-wrap gap-x-4 text-[0.82rem] text-ink/70">
                  <span>PDF · 28 sayfa</span>
                  <span>· Türkçe</span>
                </p>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.88rem] font-semibold text-cream transition-transform hover:-translate-y-0.5"
                >
                  İndir
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Two article cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((article, i) => (
              <Reveal as="article" key={article.title} delay={i * 110}>
                <a
                  href="#blog"
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-cream ring-1 ring-ink/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-30px_rgba(28,16,36,0.4)]"
                >
                  <div className="aspect-[2/1] bg-cream-100 p-4">
                    {article.variant === 'circles' ? <CirclesArt /> : <SquaresArt />}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex w-fit rounded-full bg-crimson/10 px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-crimson">
                      {article.tag}
                    </span>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-crimson">
                      {article.title}
                    </h3>
                    <p className="mt-auto pt-5 text-[0.8rem] text-muted">
                      {article.date} · {article.readTime}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
