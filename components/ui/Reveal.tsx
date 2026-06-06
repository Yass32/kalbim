'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
}

/**
 * Reveals children with a fade-up transition when scrolled into view.
 * Respects prefers-reduced-motion via the .reveal CSS rules.
 */
export function Reveal({ as: Tag = 'div', className, delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
