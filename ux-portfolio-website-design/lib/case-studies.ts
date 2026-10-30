export type CaseStudy = {
  slug: string
  title: string
  description: string
  tags: string[]
  client: string
  period: string
  image: string
  video?: string
  role: string
  duration: string
  tools: string[]
  summary: string
  problem: string
  process: string
  solution: string
  relatedArticle?: {
    url: string
    title: string
  }
  visuals?: {
    image: string
    alt: string
    caption: string
  }[]
}

export const projects: CaseStudy[] = [
  {
    slug: 'autonomes-fahren-verstehen',
    title: 'Autonomes Fahren verstehen',
    description: 'Entwicklung von modularen Interaktions- und Informationskonzepten für fahrzeuginterne Interfaces',
    tags: ['User Research', 'Prototyping', 'Mobility'],
    client: 'STADT:up',
    period: '2023–2026',
    image: '/projects/autonomous-driving.webp',
    video: '/projects/stadt-up.mp4',
    role: 'Projektleitung | UX Designer & Researcher',
    duration: '32 Monate',
    tools: ['Figma','Adobe CC', 'Condens'],
    summary:
      'Vertrauen durch Transparenz: Ich habe Informations- und Interaktionskonzepte für das Interieur autonomer Fahrzeuge erforscht und prototypisch validiert. Der Fokus lag darauf, komplexe Fahrmanöver für die Fahrgäste intuitiv verständlich zu übersetzen und so ein sicheres Fahrerlebnis zu schaffen.',
    problem:
      'Autonome Fahrzeuge verarbeiten eine immense Menge an System- und Umgebungsdaten. Die Herausforderung bestand darin, diese Informationsflut im Interface so zu strukturieren, dass Passagiere die Entscheidungen des Fahrzeugs jederzeit nachvollziehen können, ohne von technischen Details überfordert zu werden – Transparenz schaffen, ohne kognitiv zu überlasten.',
    process:
      'Um mentale Modelle und Risikobereiche im autonomen Fahrzeugkontext zu verstehen, habe ich Nutzerforschung eng mit den Perspektiven von Stakeholdern und dem Produktteam verzahnt. Aus diesen Erkenntnissen heraus entstanden direkt High-Fidelity-Prototypen, die darauf ausgelegt waren, mit minimalem Aufwand ein hochgradig immersives Fahrgefühl zu simulieren. Das Herzstück der Validierung: In insgesamt vier Studien mit über 120 Proband:innen habe ich diese erlebnisnahen Interface-Konzepte unter realistischen Bedingungen getestet, iterativ geschärft und erfolgreich validiert.',
    solution:
      'Das Ergebnis war ein modularer Informationsaufbau mit klaren Prioritäten, fokussierten Zustandsanzeigen und einer konsequenten visuelle Hierarchie. So konnte das System komplexe Fahrinhalte verständlich, schnell erfassbar und für den Fahrer vertrauenswürdig vermitteln.',
    relatedArticle: {
      url: 'https://www.ergosign.de/insights/blog/stadt-up-abschluss',
      title: 'STADT:up: Einblicke in das Projekt',
    },
  },
  {
    slug: 'digitale-werkzeuge-luftfahrt',
    title: 'Digitale Werkzeuge für komplexe Abläufe',
    description: 'Interne Software für kaufmännische Teams und Mechaniker:innen – gemeinsam im Sprint entwickelt',
    tags: ['Enterprise UX', 'Agile / Scrum', 'Field Research'],
    client: 'Großes Luftfahrt-Wartungsunternehmen, Hamburg',
    period: '2024–heute',
    image: '/projects/aviation-operations-overview.svg',
    role: 'UX/UI Designer',
    duration: 'Seit 2024 (ongoing)',
    tools: ['Figma', 'Workshops', 'Scrum'],
    summary:
      'Ein langfristiges, abteilungsübergreifendes Engagement für ein großes Luftfahrt-Wartungsunternehmen in Hamburg. Aus Gründen der Vertraulichkeit sind Namen, konkrete Oberflächen und interne Abläufe abstrahiert.',
    problem:
      'Unterschiedliche Teams arbeiten mit sehr verschiedenen Anforderungen: Kaufmännische Abteilungen wie Sales, Controlling und Key Account Management benötigen passende digitale Werkzeuge. Mechaniker:innen wiederum brauchen eine praktikable Lösung auf dem Tablet, um papierbasierte Arbeitsschritte im Arbeitsalltag zu reduzieren.',
    process:
      'Seit 2024 durchlaufe ich verschiedene Abteilungen, mache Anforderungen und Arbeitsabläufe in Gesprächen und Workshops greifbar und übersetze sie in verständliche, testbare Interaktionskonzepte. Prototypen entstehen dabei nicht mehr nur in Figma: Mithilfe von KI erstelle ich schnell klickbare Prototypen, die ich in weiteren Nutzerinterviews früh erprobe. So führen konkrete Abläufe zu tieferen Insights und bilden die Grundlage für die nächste Iteration. Die Entwürfe begleite ich agil in Scrum-Sprints gemeinsam mit den Entwickler:innen des Unternehmens – vom ersten Flow bis zur umsetzbaren Oberfläche.',
    solution:
      'Statt einer Einheitslösung entstehen auf den jeweiligen Arbeitskontext zugeschnittene und in einander verzahnte Anwendungen: strukturierte digitale Abläufe für kaufmännische Teams und eine Tablet-orientierte Oberflächen für den Einsatz von Mechaniker:innen.',
    visuals: [
      {
        image: '/projects/aviation-workshop.svg',
        alt: 'Abstrahierte Workshop-Arbeitsfläche mit Journey, Themenclustern und priorisierten Anforderungen',
        caption: '01 / Verstehen — Arbeitsabläufe gemeinsam sichtbar machen',
      },
      {
        image: '/projects/aviation-tablet.svg',
        alt: 'Abstrahierter iPad-Prototyp mit digitalen Arbeitsschritten und Checkliste für den Werkstattalltag',
        caption: '02 / Erproben — digitale Checklisten für den Einsatz am Tablet',
      },
    ],
  },
]
