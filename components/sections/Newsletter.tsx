'use client';

import { useState, type FormEvent } from 'react';

export function Newsletter() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (new FormData(e.currentTarget).get('email') as string)?.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Geçerli bir e-posta adresi girin.');
      return;
    }
    setError('');
    setDone(true);
  };

  return (
    <div className="rounded-[2rem] bg-crimson px-7 py-12 text-cream sm:px-12 sm:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Haftalık bülten
        </h2>
        <p className="mx-auto mt-4 max-w-md text-cream/85">
          Yeni yazılar, atölyeler ve topluluk haberleri için kaydol. Spam yok, istediğin zaman
          çıkabilirsin.
        </p>

        {done ? (
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream/15 px-5 py-3 font-semibold" role="status">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Teşekkürler! Kaydın alındı.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex-1 text-left">
              <label htmlFor="newsletter-email" className="sr-only">
                E-posta adresi
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="E-posta adresin"
                className="w-full rounded-full bg-cream px-5 py-3.5 text-[0.95rem] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-cream/60"
              />
              {error && <p className="mt-1.5 pl-2 text-xs text-cream/90">{error}</p>}
            </div>
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3.5 font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              Kaydol
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
