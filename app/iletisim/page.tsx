import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/sections/ContactForm';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { InstagramIcon, LinkedInIcon, XIcon } from '@/components/icons';
import { contactChannels as fallbackChannels, faq } from '@/lib/content';
import { getGlobals } from '@/lib/directus';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'KALBİM ile iletişime geç. Üyelik, mentorluk, çevre kurma veya kurumsal işbirlikleri için formu doldur, kısa sürede dönelim.',
  alternates: { canonical: '/iletisim' },
};

export const revalidate = 60;

export default async function IletisimPage() {
  const globals = await getGlobals();

  const channels = globals
    ? [
        globals.email && { label: 'E-posta', value: globals.email, href: `mailto:${globals.email}` },
        globals.phone && {
          label: 'Telefon',
          value: globals.phone,
          href: `tel:${globals.phone.replace(/\s+/g, '')}`,
        },
        globals.address && { label: 'Adres', value: globals.address, href: '#' },
      ].filter(Boolean) as { label: string; value: string; href: string }[]
    : [...fallbackChannels];

  const socials = [
    { label: 'Instagram', Icon: InstagramIcon, bg: 'bg-crimson', href: globals?.instagram_url ?? '#' },
    { label: 'LinkedIn', Icon: LinkedInIcon, bg: 'bg-ink', href: globals?.linkedin_url ?? '#' },
    { label: 'X', Icon: XIcon, bg: 'bg-forest', href: globals?.x_url ?? '#' },
  ];

  const officeAddress = globals?.address ?? 'Maslak Mah. No:1, Sarıyer / İstanbul';

  return (
    <main id="main">
      <PageHeader
        label="İLETİŞİM"
        title="Bir mesaj kadar yakınız."
        description="Sorun, fikrin ya da işbirliği önerin mi var? Aşağıdaki formu doldur ya da kanallarımızdan birine yaz; en kısa sürede dönüş yapalım."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <Reveal>
              <div className="rounded-[1.5rem] bg-cream-100 p-7 ring-1 ring-ink/[0.05] sm:p-9">
                <h2 className="heading-xl text-2xl text-ink sm:text-3xl">Bize yaz</h2>
                <p className="mt-2 text-muted">Tüm alanları doldurman birkaç dakika sürer.</p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6">
                <div className="rounded-[1.5rem] bg-cream-200 p-7 ring-1 ring-ink/[0.05]">
                  <h3 className="text-lg font-bold text-ink">İletişim kanalları</h3>
                  <ul className="mt-5 space-y-4">
                    {channels.map((c) => (
                      <li key={c.label}>
                        <p className="text-[0.78rem] font-semibold uppercase tracking-wider text-muted">
                          {c.label}
                        </p>
                        <a
                          href={c.href}
                          className="mt-0.5 inline-block text-[1.02rem] font-medium text-ink transition-colors hover:text-crimson"
                        >
                          {c.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] bg-crimson p-7 text-cream">
                  <h3 className="text-lg font-bold">Bizi takip et</h3>
                  <p className="mt-2 text-sm text-cream/85">
                    Etkinlikler, yeni yazılar ve topluluk haberleri için sosyal medyada bize katıl.
                  </p>
                  <ul className="mt-5 flex gap-3">
                    {socials.map(({ label, Icon, bg, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          aria-label={label}
                          className={`grid h-11 w-11 place-items-center rounded-xl ${bg} text-cream ring-1 ring-cream/30 transition-transform hover:-translate-y-0.5`}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] bg-cream-100 p-7 ring-1 ring-ink/[0.05]">
                  <h3 className="text-lg font-bold text-ink">Ofis</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {officeAddress}
                    <br />
                    Hafta içi 09:00 – 18:00
                  </p>
                  <div
                    className="mt-4 grid h-32 place-items-center rounded-xl bg-gradient-to-br from-cream-200 to-blush/40 text-sm text-muted"
                    role="img"
                    aria-label="Ofis konumu haritası yer tutucusu"
                  >
                    Harita yakında
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="sss" className="bg-cream-200 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="section-label">SIKÇA SORULANLAR</p>
            <h2 className="heading-xl mt-4 text-3xl text-ink sm:text-4xl">Belki cevabı buradadır.</h2>
          </Reveal>
          <div className="mt-12">
            <FaqAccordion items={faq} />
          </div>
        </Container>
      </section>
    </main>
  );
}
