'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { nav } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-ink/[0.06] bg-cream/85 backdrop-blur-md'
          : 'border-transparent bg-cream'
      )}
    >
      <Container>
        <div className="flex h-[68px] items-center justify-between">
          <Logo />

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.95rem] font-medium text-ink/75 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#giris"
              className="text-[0.95rem] font-medium text-ink/75 transition-colors hover:text-ink"
            >
              Giriş
            </a>
            <a
              href="https://forms.gle/TL8eCoPouaDQsx2C7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-crimson-500 px-5 py-2.5 text-[0.9rem] font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              Üye Ol
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            <span className="sr-only">Menü</span>
            <div className="flex w-5 flex-col items-end gap-[5px]">
              <span
                className={cn(
                  'h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300',
                  open && 'translate-y-[7px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'h-0.5 w-4 rounded-full bg-current transition-all duration-300',
                  open && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300',
                  open && '-translate-y-[7px] -rotate-45'
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden overflow-hidden border-t border-ink/[0.06] bg-cream transition-[max-height,opacity] duration-300 ease-out',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Container className="py-5">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-cream-200 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-ink/[0.06] pt-5">
            <a
              href="#giris"
              onClick={() => setOpen(false)}
              className="rounded-full border border-ink/15 px-5 py-3 text-center font-semibold text-ink"
            >
              Giriş
            </a>
            <a
              href="https://forms.gle/TL8eCoPouaDQsx2C7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ink px-5 py-3 text-center font-semibold text-cream"
            >
              Üye Ol
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
