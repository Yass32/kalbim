import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { Programs } from '@/components/Programs';
import { Circles } from '@/components/Circles';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KALBİM',
  alternateName: 'Kadın Liderliği ve Bilinçlendirme Merkezi',
  url: 'https://kalbim.org',
  description:
    'Kadınların liderlik potansiyelini destekleyen topluluk ve öğrenme merkezi.',
  sameAs: ['https://instagram.com', 'https://linkedin.com', 'https://x.com'],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        İçeriğe geç
      </a>
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />
        <Impact />
        <Programs />
        <Circles />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
