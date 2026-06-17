import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { CTA } from '@/components/CTA';
import { ArrowLeftSmall } from '@/components/icons';
import {
  getPostBySlug,
  getPostSlugs,
  formatDate,
  assetUrl,
} from '@/lib/directus';
import type { Category } from '@/lib/directus-types';

export const revalidate = 60;
// Allow slugs created after build to be rendered on-demand (then cached).
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Yazı bulunamadı' };

  const cover = assetUrl(post.cover, { width: 1200, height: 630, fit: 'cover' });
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      images: cover ? [{ url: cover, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const category =
    post.category && typeof post.category === 'object' ? (post.category as Category) : null;
  const cover = assetUrl(post.cover, { width: 1400, height: 700, fit: 'cover' });

  return (
    <main id="main">
      <article>
        {/* Header */}
        <header className="border-b border-ink/[0.06] bg-cream-100">
          <Container className="py-12 sm:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-crimson"
            >
              <ArrowLeftSmall className="h-4 w-4" />
              Tüm yazılar
            </Link>

            {category && (
              <span className="mt-6 inline-flex w-fit rounded-full bg-crimson/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-crimson">
                {category.name}
              </span>
            )}

            <h1 className="heading-xl mt-4 max-w-3xl text-3xl text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 flex flex-wrap gap-x-3 text-sm text-muted">
              {formatDate(post.published_at) && <span>{formatDate(post.published_at)}</span>}
              {post.read_minutes ? <span>· {post.read_minutes} dk okuma</span> : null}
            </p>
          </Container>
        </header>

        {/* Cover */}
        {cover && (
          <Container className="py-10">
            <div className="relative aspect-[2/1] overflow-hidden rounded-[1.5rem] bg-cream-100">
              <Image
                src={cover}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Container>
        )}

        {/* Body */}
        <Container className="pb-16 pt-6 sm:pb-20">
          <div className="mx-auto max-w-2xl">
            {post.excerpt && (
              <p className="text-lg leading-relaxed text-ink/80">{post.excerpt}</p>
            )}
            {post.body ? (
              <div
                className="prose-kalbim mt-8"
                // Body is authored in Directus' WYSIWYG (trusted editors).
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            ) : null}
          </div>
        </Container>
      </article>

      <CTA />
    </main>
  );
}
