'use client';

import { useMemo, useState } from 'react';
import { blogCategories, blogPosts } from '@/lib/content';
import { cn } from '@/lib/utils';

function CirclesArt() {
  return (
    <svg viewBox="0 0 300 150" className="h-full w-full" aria-hidden="true">
      <circle cx="118" cy="75" r="48" fill="#BE8FC0" />
      <circle cx="182" cy="75" r="48" fill="#A7A5A7" />
      <circle cx="150" cy="75" r="33" fill="#92298E" />
    </svg>
  );
}

function SquaresArt() {
  return (
    <svg viewBox="0 0 300 150" className="h-full w-full" aria-hidden="true">
      <rect x="96" y="46" width="40" height="58" rx="8" fill="#CDB0CE" />
      <rect x="142" y="46" width="40" height="58" rx="8" fill="#BE8FC0" />
      <rect x="188" y="46" width="40" height="58" rx="8" fill="#92298E" />
    </svg>
  );
}

export function BlogGrid() {
  const [active, setActive] = useState<string>('Tümü');

  const filtered = useMemo(() => {
    if (active === 'Tümü') return blogPosts;
    return blogPosts.filter((p) => p.tag.toLowerCase() === active.toLocaleLowerCase('tr'));
  }, [active]);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Kategoriler">
        {blogCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-colors',
                isActive
                  ? 'bg-crimson text-cream'
                  : 'bg-cream text-ink/70 ring-1 ring-ink/10 hover:text-crimson'
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.title}>
            <a
              href="/blog"
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-cream ring-1 ring-ink/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-30px_rgba(81,81,82,0.4)]"
            >
              <div className="aspect-[2/1] bg-cream-100 p-4">
                {post.variant === 'circles' ? <CirclesArt /> : <SquaresArt />}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit rounded-full bg-crimson/10 px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-crimson">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-crimson">
                  {post.title}
                </h3>
                <p className="mt-auto pt-5 text-[0.8rem] text-muted">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted">Bu kategoride henüz yazı yok.</p>
      )}
    </div>
  );
}
