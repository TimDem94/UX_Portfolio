import { Reveal } from '@/components/reveal'

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
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Was mich hervorhebt</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-balance md:text-5xl">
            Design im Dialog mit dem Mensch und Maschine.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Mit fünf Geschwistern aufzuwachsen prägt – echte Teamarbeit, Empathie und ein konstruktives Miteinander sind
            tief in meiner DNA verankert. Diese natürliche Kollaboration bringe ich in jeden UX-Prozess ein und erweitere
            das Team um einen modernen Partner: Künstliche Intelligenz. KI ist für mich kein Buzzword, sondern tägliches
            Werkzeug. Ob als Sparringspartner bei der Ideengenerierung oder zur Erstellung schneller Hi-Fi-Prototypen –
            ich mache Visionen zügig greifbar, damit Nutzer und Stakeholder frühzeitig ein echtes Gefühl für das
            Endprodukt bekommen.
          </p>
        </Reveal>
      </div>

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
