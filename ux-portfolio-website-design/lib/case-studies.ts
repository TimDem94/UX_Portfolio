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
  confidentialityNote?: string
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
    description: 'Entwicklung modularer Interaktions- und Informationskonzepte für fahrzeuginterne Interfaces',
    tags: ['User Research', 'Prototyping', 'Mobility'],
    client: 'STADT:up',
    period: '2023–2026',
    image: '/projects/autonomous-driving.webp',
    video: '/projects/stadt-up.mp4',
    role: 'Projektleitung | UX Designer & Researcher',
    duration: '32 Monate',
    tools: ['Figma','Adobe CC', 'Condens'],
    summary:
      'Vertrauen durch Transparenz: Ich habe Informations- und Interaktionskonzepte für den Innenraum autonomer Fahrzeuge erforscht und prototypisch validiert. Der Fokus lag darauf, komplexe Fahrmanöver so aufzubereiten, dass sie für Fahrgäste intuitiv verständlich sind und ein sicheres Fahrerlebnis schaffen.',
    problem:
      'Autonome Fahrzeuge verarbeiten eine immense Menge an System- und Umgebungsdaten. Die Herausforderung bestand darin, diese Informationsflut im Interface so zu strukturieren, dass Passagiere die Entscheidungen des Fahrzeugs jederzeit nachvollziehen können, ohne von technischen Details überfordert zu werden. Ziel war es, Transparenz zu schaffen, ohne die Passagiere kognitiv zu überlasten.',
    process:
      'Um mentale Modelle und Risikobereiche im autonomen Fahrzeugkontext zu verstehen, habe ich Nutzerforschung eng mit den Perspektiven von Stakeholdern und dem Produktteam verzahnt. Aus diesen Erkenntnissen heraus entstanden direkt High-Fidelity-Prototypen, die darauf ausgelegt waren, mit minimalem Aufwand ein hochgradig immersives Fahrgefühl zu simulieren. Das Herzstück der Validierung: In insgesamt vier Studien mit über 120 Proband:innen habe ich diese erlebnisnahen Interface-Konzepte unter realistischen Bedingungen getestet, iterativ geschärft und erfolgreich validiert.',
    solution:
      'Das Ergebnis war ein modularer Informationsaufbau mit klaren Prioritäten, fokussierten Zustandsanzeigen und einer konsequenten visuellen Hierarchie. So konnte das System komplexe Fahrmanöver verständlich vermitteln, Informationen schnell erfassbar machen und Vertrauen bei den Fahrgästen schaffen.',
    relatedArticle: {
      url: 'https://www.ergosign.de/insights/blog/stadt-up-abschluss',
      title: 'STADT:up: Einblicke in das Projekt',
    },
  },
  {
    slug: 'digitale-werkzeuge-luftfahrt',
    title: 'Digitale Werkzeuge für die Luftfahrtwartung',
    description: 'Interne Software für kaufmännische Teams und Mechaniker:innen – gemeinsam im Sprint entwickelt',
    tags: ['Enterprise UX', 'Agile / Scrum', 'Field Research'],
    client: 'Großes Luftfahrt-Wartungsunternehmen, Hamburg',
    period: '2024–heute',
    image: '/projects/aviation-operations-overview.svg',
    role: 'UX/UI Designer',
    duration: 'Seit 2024 (laufend)',
    tools: ['Figma', 'Workshops', 'Scrum'],
    summary:
      'Langfristige, abteilungsübergreifende Zusammenarbeit mit einem großen Luftfahrt-Wartungsunternehmen in Hamburg.',
    confidentialityNote:
      'Aus Gründen der Vertraulichkeit sind Namen, konkrete Oberflächen und interne Abläufe abstrahiert.',
    problem:
      'Unterschiedliche Teams arbeiten mit sehr verschiedenen Anforderungen: Kaufmännische Abteilungen wie Sales, Controlling und Key Account Management benötigen passende digitale Werkzeuge. Mechaniker:innen wiederum brauchen eine praktikable Lösung auf dem Tablet, um papierbasierte Arbeitsschritte im Arbeitsalltag zu reduzieren.',
    process:
      'Seit 2024 arbeite ich mit verschiedenen Abteilungen zusammen, mache Anforderungen und Arbeitsabläufe in Gesprächen und Workshops greifbar und übersetze sie in verständliche, testbare Interaktionskonzepte. Prototypen entstehen dabei nicht mehr nur in Figma: Mithilfe von KI erstelle ich schnell klickbare Prototypen, die ich früh in Nutzerinterviews erprobe. Konkrete Abläufe führen so zu tieferen Erkenntnissen und bilden die Grundlage für die nächste Iteration. Gemeinsam mit den Entwickler:innen des Unternehmens begleite ich die Entwürfe agil in Scrum-Sprints – vom ersten Ablauf bis zur umsetzbaren Oberfläche.',
    solution:
      'Statt einer Einheitslösung entstehen auf den jeweiligen Arbeitskontext zugeschnittene und ineinander verzahnte Anwendungen: strukturierte digitale Abläufe für kaufmännische Teams sowie eine tabletoptimierte Oberfläche für Mechaniker:innen.',
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
