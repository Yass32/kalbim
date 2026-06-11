import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HeartShield } from '@/components/icons';


interface LogoProps {
  className?: string;
  labelClassName?: string;
}

export function Logo({ className, labelClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="KALBİM ana sayfa"
    >
      <Image
          src="/kalbim_logo.png"
          alt="KALBİM Logo"
          className="h-16 object-contain"
        />
    </Link>
  );
}
