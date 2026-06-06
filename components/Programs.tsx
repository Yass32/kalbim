import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from '@/components/icons';
import { programs, type ProgramTheme } from '@/lib/content';
import { cn } from '@/lib/utils';

const themeStyles: Record<
  ProgramTheme,
  { card: string; badge: string; blob: string }
> = {
  crimson: {
    card: 'bg-crimson-card text-cream',
    badge: 'bg-black/15 text-cream/90',
    blob: 'bg-white/10',
  },
  forest: {
    card: 'bg-forest-card text-cream',
    badge: 'bg-black/15 text-cream/90',
    blob: 'bg-white/12',
  },
  gold: {
    card: 'bg-gold-card text-ink',
    badge: 'bg-black/10 text-ink/70',
    blob: 'bg-white/14',
  },
};

export function Programs() {
  return (
    <section id="programlar" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="section-label">PROGRAMLAR</p>
            <h2 className="heading-xl mt-4 max-w-md text-4xl text-ink sm:text-[2.75rem]">
              Her yolculuğa bir başlangıç noktası.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Button href="#programlar" variant="outline-dark" size="md">
              Tüm programları gör
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => {
            const t = themeStyles[program.theme];
            return (
              <Reveal as="article" key={program.title} delay={i * 110}>
                <div
                  className={cn(
                    'group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] p-7 transition-transform duration-300 hover:-translate-y-1',
                    t.card
                  )}
                >
                  {/* decorative blob */}
                  <span
                    className={cn(
                      'pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full transition-transform duration-500 group-hover:scale-110',
                      t.blob
                    )}
                  />

                  <span
                    className={cn(
                      'relative inline-flex w-fit rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider',
                      t.badge
                    )}
                  >
                    {program.badge}
                  </span>

                  <h3 className="relative mt-5 text-2xl font-bold">{program.title}</h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed opacity-90">
                    {program.description}
                  </p>

                  <div className="relative mt-auto pt-8">
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-[0.82rem] opacity-80">
                      {program.meta.map((m) => (
                        <span key={m}>· {m}</span>
                      ))}
                    </div>
                    <a
                      href="#uye-ol"
                      className="mt-5 inline-flex items-center gap-2 font-semibold transition-transform hover:gap-3"
                    >
                      Başvur
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
