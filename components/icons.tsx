import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function HeartShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s-7-4.3-7-10V6.2L12 3.5l7 2.7V11c0 5.7-7 10-7 10Z"
        fill="currentColor"
      />
      <path
        d="M12 16s-3.2-1.9-3.2-4.2A1.8 1.8 0 0 1 12 10a1.8 1.8 0 0 1 3.2 1.8C15.2 14.1 12 16 12 16Z"
        fill="#fefefe"
      />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftSmall(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 5 7 10l5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightSmall(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuoteMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M0 24V13.2C0 5.9 4.2 1.1 11.4 0l1.3 3.6C8.6 4.8 6.5 7.2 6.3 11H12v13H0Zm19 0V13.2C19 5.9 23.2 1.1 30.4 0L32 3.6C27.7 4.8 25.6 7.2 25.4 11H32v13H19Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.5 8.8H4V20h2.5V8.8ZM5.25 4.2A1.5 1.5 0 1 0 5.25 7.2a1.5 1.5 0 0 0 0-3ZM20 13.6c0-2.9-1.55-4.25-3.6-4.25-1.66 0-2.4.91-2.82 1.55V8.8H11.1c.03.7 0 11.2 0 11.2h2.48v-6.25c0-.22.02-.45.08-.6.18-.45.6-.92 1.3-.92.92 0 1.29.7 1.29 1.72V20H18.7s.01-5.5.01-6.4Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.53 4h2.94l-6.43 7.35L21.6 20h-5.9l-4.63-6.05L5.78 20H2.84l6.88-7.86L2.4 4h6.05l4.18 5.53L17.53 4Zm-1.03 14.2h1.63L8.59 5.7H6.84L16.5 18.2Z" />
    </svg>
  );
}
