import { cn } from '@/lib/utils';
import { HeartShield } from '@/components/icons';

interface LogoProps {
  className?: string;
  labelClassName?: string;
}

export function Logo({ className, labelClassName }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="KALBİM ana sayfa"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-crimson text-cream shadow-[0_6px_16px_-8px_rgba(184,58,82,0.8)]">
        <HeartShield className="h-5 w-5" />
      </span>
      <span className={cn('text-lg font-extrabold tracking-tight text-ink', labelClassName)}>
        KALBİM
      </span>
    </a>
  );
}
