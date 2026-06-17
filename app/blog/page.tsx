import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { CTA } from '@/components/CTA';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { Newsletter } from '@/components/sections/Newsletter';
import Link from 'next/link';
import { ArrowRight } from '@/components/icons';
import { getPosts, getCategories, toPostCard } from '@/lib/directus';

export const metadata: Metadata = {
  title: 'Blog & Kaynaklar',
  description:
    'Liderlik, mentorluk, kariyer ve girişimcilik üzerine yazılar ve ücretsiz kaynaklar. Okumalık ve dinlemelik içerikler KALBİM blogunda.',
  alternates: { canonical: '/blog' },
};

// Incremental Static Regeneration — content refreshes from Directus every 60s.
export const revalidate = 60;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);
  const cards = posts.map(toPostCard);
  const categoryNames = categories.map((c) => c.name);

  return (
    <main id="main">
      <PageHeader
        label="BLOG & KAYNAKLAR"
        title="Okumalık ve dinlemelik."
        description="Topluluğumuzdan ve uzman katkılarından derlenen yazılar, rehberler ve ücretsiz kaynaklar. Kariyerinin her aşamasında işine yarayacak içerikler."
      />

      {/* Featured resource (static promo) */}
      <section className="py-16 sm:py-20 lg:pb-10 lg:pt-24">
        <Container>
          <Reveal as="article">
            <div className="relative grid items-center gap-8 overflow-hidden rounded-[1.75rem] bg-blush p-8 text-ink sm:p-10 lg:grid-cols-[1.5fr_1fr]">
              <span className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border-2 border-dashed border-crimson/30">
                <span className="absolute inset-8 rounded-full bg-blush-deep/60" />
              </span>
              <div className="relative">
                <span className="inline-flex w-fit rounded-full bg-black/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-ink/70">
                  Öne Çıkan Kaynak
                </span>
                <h2 className="mt-5 max-w-md text-3xl font-bold leading-snug">
                  Müzakere Atölyesi: kendine değer biçmenin pratiği
                </h2>
                <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-ink/75">
                  Maaş görüşmesinden iş ortaklığına, somut cümleler ve hazırlık şablonlarıyla dolu 28
                  sayfalık ücretsiz rehber. İndir, yazdır, görüşmene hazır gel.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-semibold text-cream transition-transform hover:-translate-y-0.5"
                  >
                    Ücretsiz indir
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-[0.82rem] text-ink/70">PDF · 28 sayfa · Türkçe</span>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Posts from Directus */}
      <section className="py-10 sm:py-12 lg:pb-24">
        <Container>
          <Reveal>
            <h2 className="heading-xl text-2xl text-ink sm:text-3xl">Tüm yazılar</h2>
            <p className="mt-2 text-muted">Bir kategori seçerek filtreleyebilirsin.</p>
          </Reveal>
          <div className="mt-8">
            <BlogGrid posts={cards} categories={categoryNames} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <Reveal>
            <Newsletter />
          </Reveal>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
