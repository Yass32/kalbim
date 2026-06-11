import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { Programs } from '@/components/Programs';
import { Circles } from '@/components/Circles';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Impact />
      <Programs />
      <Circles />
      <Testimonials />
      <Blog />
      <CTA />
    </main>
  );
}
