import Link from 'next/link';
import { Container } from '@/components/ui/Container';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}

export function PageHeader({ label, title, description, crumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/[0.06] bg-cream-100">
      {/* decorative dotted rings + confetti */}
      <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-dashed border-crimson/20" />
      <span aria-hidden className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full border border-dashed border-forest/30" />
      <span aria-hidden className="pointer-events-none absolute right-24 top-24 h-3 w-3 rounded-full bg-crimson/70 motion-safe:animate-float" />
      <span aria-hidden className="pointer-events-none absolute right-1/3 top-12 h-4 w-4 rounded-md bg-forest/60 motion-safe:animate-float-slow" />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-[0.82rem] text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-crimson">
                Ana sayfa
              </Link>
            </li>
            {(crumbs ?? [{ label: title }]).map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden className="text-muted/60">
                  /
                </span>
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-crimson">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-ink/80" aria-current="page">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="section-label">{label}</p>
        <h1 className="heading-xl mt-4 max-w-3xl text-4xl text-ink sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{description}</p>
        )}
      </Container>
    </section>
  );
}
