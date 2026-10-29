import { Reveal } from '@/components/reveal'

const steps = [
  {
    number: '01',
    title: 'Discover',
    text: 'Ich höre zu, beobachte und stelle Fragen — um echte Bedürfnisse statt Annahmen zu verstehen.',
  },
  {
    number: '02',
    title: 'Define',
    text: 'Aus Erkenntnissen werden klare Problemstellungen, Prioritäten und messbare Ziele.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'Von der Skizze zum Prototyp: Ideen werden früh sichtbar, testbar und iterativ verfeinert.',
  },
  {
    number: '04',
    title: 'Deliver',
    text: 'Enge Zusammenarbeit mit der Entwicklung, saubere Übergaben und kontinuierliches Lernen nach dem Launch.',
  },
]

const tools = ['Figma', 'FigJam', 'Miro', 'Blender', 'Adobe CC', 'Jira']

const methods = [
  'User Interviews',
  'Wireframing',
  'Hifi Prototyping with AI',
  'Usability Testing',
  'Journey Mapping',
  'A/B Testing',
  'Design Systems',
  'Accessibility (WCAG)',
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Prozess & Skills</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-balance md:text-5xl">
            Gutes Design beginnt mit Verstehen.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Mein Prozess folgt dem Double-Diamond-Modell — strukturiert genug für Verlässlichkeit, offen genug für
            Überraschungen. Jede Entscheidung basiert auf Erkenntnissen über die Menschen, für die ich gestalte.
          </p>
        </Reveal>
      </div>

      <ol className="mt-20 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delay={index * 100}
            className="border-b border-border py-10 sm:px-6 sm:odd:pl-0 lg:border-b-0 lg:px-6 lg:odd:pl-6 lg:first:pl-0 lg:[&:not(:last-child)]:border-r"
          >
            <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
            <h3 className="mt-6 text-2xl font-medium tracking-tight">{step.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </Reveal>
        ))}
      </ol>

      <div className="mt-24 grid gap-16 md:grid-cols-2">
        <BadgeGroup title="Tools" items={tools} />
        <BadgeGroup title="Methoden" items={methods} delay={120} />
      </div>
    </section>
  )
}

function BadgeGroup({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">{title}</h3>
      <ul className="mt-8 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground/40 hover:bg-accent md:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
