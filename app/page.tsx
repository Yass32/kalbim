import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { Programs } from '@/components/Programs';
import { Circles } from '@/components/Circles';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { CTA } from '@/components/CTA';
import { getLatestPosts, toPostCard } from '@/lib/directus';

export const revalidate = 60;

export default async function HomePage() {
  const latest = (await getLatestPosts(2)).map(toPostCard);
  return (
    <main id="main">
      <Hero />
      <Impact />
      <Programs />
      <Circles />
      <Testimonials />
      <Blog posts={latest} />
      <CTA />
    </main>
  );
}
