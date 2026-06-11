import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-dark';
type Size = 'md' | 'lg' | 'sm';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-cream';

const variants: Record<Variant, string> = {
  primary:
    'bg-crimson text-cream hover:bg-crimson-600 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(146,41,142,0.6)]',
  secondary:
    'bg-transparent text-ink border border-ink/20 hover:border-crimson hover:text-crimson hover:bg-crimson/[0.04]',
  ghost: 'bg-transparent text-ink hover:text-crimson',
  'outline-dark':
    'bg-cream text-ink border border-ink/15 hover:border-crimson hover:text-crimson hover:bg-cream-100',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[0.95rem]',
  lg: 'px-7 py-3.5 text-[0.95rem]',
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
