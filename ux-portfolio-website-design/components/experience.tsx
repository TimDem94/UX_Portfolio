import { Reveal } from '@/components/reveal'

type TimelineItem = {
  role: string
  company: string
  period: string
  description?: string
}

const professionalExperience = [
  {
    role: 'UX Designer',
    company: 'Ergosign GmbH',
    period: 'Sep 2024 – Heute',
    description: 'Festanstellung im Bereich UX/UI Design.',
  },
  {
    role: 'UX Designer',
    company: 'Ergosign GmbH',
    period: 'Sep 2023 – Aug 2024',
    description: 'Praktikant / Werkstudent - Bachelorarbeit im UX Design.',
  },
  {
    role: 'Marketing & Mechaniker',
    company: 'Dankward Bikes',
    period: 'Apr 2021 – Aug 2023',
    description: 'Studentische Aushilfe im Startup-Umfeld.',
  },
  {
    role: 'Work and Travel',
    company: 'Australien & Frankreich',
    period: 'Feb 2019 – Jul 2020',
    description: 'Interkulturelle Erfahrungen und persönliche Weiterentwicklung.',
  },
  {
    role: 'Veranstaltungstechniker',
    company: 'Hansa Park',
    period: 'Aug 2017 – Jan 2019',
    description: 'Vollzeit-Festanstellung.',
  },
  {
    role: 'Veranstaltungstechniker',
    company: 'Contzept GmbH',
    period: 'Aug 2014 – Jun 2017',
    description: 'Berufsausbildung.',
  },
]

const education = [
  {
    role: 'Bachelor Medieningenieur',
    company: 'FH Kiel',
    period: 'Sep 2020 – Aug 2024',
    description: 'Schwerpunkt UX/UI Design - Note: 1,7.',
  },
  {
    role: 'Abitur',
    company: 'Jungmannschule Eckernförde',
    period: 'Abschluss 2014',
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] md:items-start md:gap-16 lg:gap-20">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Experience</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-balance md:text-5xl">Werdegang.</h2>
        </Reveal>

        <Reveal delay={120} className="md:pt-0">
          <div className="space-y-14 md:pl-2">
            <TimelineSection title="Berufserfahrung" items={professionalExperience} />
            <TimelineSection title="Bildung" items={education} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TimelineSection({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">{title}</p>

      <div className="relative mt-7 border-l border-border pl-6 md:pl-8">
        {items.map((item, index) => (
          <article key={`${title}-${item.role}-${index}`} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[2.08rem] top-[0.6rem] block size-2.5 rounded-full bg-foreground ring-4 ring-background" />

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-medium tracking-tight text-foreground md:text-xl">{item.role}</h3>
                  {item.company && <span className="text-muted-foreground">|</span>}
                  {item.company && <span className="text-base text-muted-foreground">{item.company}</span>}
                </div>

                {item.description && (
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                )}
              </div>

              <time className="shrink-0 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase md:text-[11px]">
                {item.period}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
