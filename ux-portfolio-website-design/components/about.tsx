import { Reveal } from '@/components/reveal'

const tools = ['Figma', 'FigJam', 'Miro', 'Blender', 'Adobe CC', 'Jira', 'Copilot',]

const methods = [
  'User Interviews',
  'Wireframing',
  'High-Fidelity-Prototyping mit KI',
  'Usability Testing',
  'Journey Mapping',
  'Design Systems',
  'Accessibility (WCAG)',
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Meine Skills</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-balance md:text-5xl">
            Design im Dialog mit Mensch und Maschine.
          </h2>
        </Reveal>
        <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty md:col-span-6 md:col-start-7">
          <p>
            Das Aufwachsen mit fünf Geschwistern prägt mich: Echte{' '}
            <strong className="font-semibold text-foreground">Teamarbeit, Empathie und ein konstruktives Miteinander</strong>{' '}
            sind tief in meiner Persönlichkeit verankert. Diese natürliche Kollaboration bringe ich in jeden UX-Prozess ein und
            ergänze das Team um eine moderne Perspektive.
          </p>
          <p>
            KI ist für mich kein Buzzword, sondern ein tägliches Werkzeug. Ob bei der Ideengenerierung als Sparringspartner
            oder bei der Erstellung schneller High-Fidelity-Prototypen: KI macht Visionen zügig greifbar, damit Nutzer:innen
            und Stakeholder{' '}
            <strong className="font-semibold text-foreground">frühzeitig ein echtes Gefühl für das Endprodukt</strong> bekommen.
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
