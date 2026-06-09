import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { InstagramIcon, LinkedInIcon, XIcon } from '@/components/icons';
import { footerColumns, footerLegal } from '@/lib/content';

const socials = [
  { label: 'Instagram', Icon: InstagramIcon, bg: 'bg-crimson', href: 'https://www.instagram.com/kalbimkadinliderligi/' },
  { label: 'LinkedIn', Icon: LinkedInIcon, bg: 'bg-ink', href: 'https://www.linkedin.com/company/kalbimkadinliderligivebilinclendirmemerkezi/' },
  { label: 'X', Icon: XIcon, bg: 'bg-forest', href: '' },
];

export function Footer() {
  return (
    <footer className="bg-cream-100">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-muted">
              Kadın Liderliği ve Bilinçlendirme Merkezi. Türkiye&apos;de kadınların liderlik
              potansiyelini destekleyen bağımsız bir topluluk.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, Icon, bg, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className={`grid h-10 w-10 place-items-center rounded-xl ${bg} text-cream transition-transform hover:-translate-y-0.5`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-crimson-500">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[0.92rem] text-ink/75 transition-colors hover:text-crimson"
                      >
                        {link}
                      </a>
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
