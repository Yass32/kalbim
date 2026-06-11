'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'success';

const topics = ['Üyelik', 'Mentorluk', 'Çevre kurmak', 'Kurumsal işbirliği', 'Diğer'];

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name) next.name = 'Lütfen adınızı girin.';
    if (!email) next.email = 'Lütfen e-posta adresinizi girin.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Geçerli bir e-posta girin.';
    if (!message) next.message = 'Lütfen kısa bir mesaj yazın.';

    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Demo only — no backend. Wire to your endpoint here.
      setStatus('success');
      form.reset();
    }
  };

  const fieldBase =
    'mt-2 w-full rounded-xl border bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson/40';

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-crimson/[0.06] p-8 text-center ring-1 ring-crimson/15" role="status">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-crimson text-cream">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Mesajın bize ulaştı!</h3>
        <p className="mt-2 text-muted">En kısa sürede dönüş yapacağız. İlgine teşekkürler.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-crimson hover:text-crimson"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">
            Ad Soyad
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Adınız"
            className={cn(fieldBase, errors.name ? 'border-crimson' : 'border-ink/15')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-crimson">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="ornek@eposta.com"
            className={cn(fieldBase, errors.email ? 'border-crimson' : 'border-ink/15')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-crimson">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="text-sm font-semibold text-ink">
          Konu
        </label>
        <select
          id="topic"
          name="topic"
          className={cn(fieldBase, 'border-ink/15 appearance-none')}
          defaultValue={topics[0]}
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Sana nasıl yardımcı olabiliriz?"
          className={cn(fieldBase, 'resize-y', errors.message ? 'border-crimson' : 'border-ink/15')}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-crimson">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-crimson px-7 py-3.5 font-semibold text-cream shadow-[0_8px_24px_-12px_rgba(146,41,142,0.6)] transition-all hover:-translate-y-0.5 hover:bg-crimson-600 sm:w-auto"
      >
        Mesajı gönder
      </button>
    </form>
  );
}
