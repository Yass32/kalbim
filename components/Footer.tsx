import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { InstagramIcon, LinkedInIcon, XIcon } from '@/components/icons';
import { footerColumns, footerLegal } from '@/lib/content';
import { getGlobals } from '@/lib/directus';

const DEFAULT_DESCRIPTION =
  'Kadın Liderliği ve Bilinçlendirme Merkezi. Türkiye’de kadınların liderlik potansiyelini destekleyen bağımsız bir topluluk.';

export async function Footer() {
  const globals = await getGlobals();

  const socials = [
    { label: 'Instagram', Icon: InstagramIcon, bg: 'bg-crimson', href: globals?.instagram_url },
    { label: 'LinkedIn', Icon: LinkedInIcon, bg: 'bg-ink', href: globals?.linkedin_url },
    { label: 'X', Icon: XIcon, bg: 'bg-forest', href: globals?.x_url },
  ].filter((s) => s.href);

  const description = globals?.footer_description ?? DEFAULT_DESCRIPTION;

  return (
    <footer className="bg-cream-100">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-muted">{description}</p>

            {socials.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {socials.map(({ label, Icon, bg, href }) => (
                  <li key={label}>
                    <a
                      href={href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`grid h-10 w-10 place-items-center rounded-xl ${bg} text-cream transition-transform hover:-translate-y-0.5`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink/55">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.92rem] text-ink/75 transition-colors hover:text-crimson"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink/[0.08] pt-6 text-[0.85rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 KALBİM — Kadın Liderliği ve Bilinçlendirme Merkezi Derneği</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegal.map((item) => (
              <li key={item}>
                <a href="#" className="transition-colors hover:text-ink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
