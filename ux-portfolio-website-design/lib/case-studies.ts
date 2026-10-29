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
  },
  {
    slug: 'banking-neu-gedacht',
    title: 'Banking, neu gedacht',
    description: 'Redesign einer Mobile-Banking-App mit Fokus auf Klarheit, Vertrauen und finanzielle Übersicht',
    tags: ['UI Design', 'Usability Testing', 'Fintech'],
    client: 'Nova Bank',
    period: '2024',
    image: '/projects/banking-app.png',
    role: 'UX/UI Designer',
    duration: '5 Monate',
    tools: ['Figma', 'Maze', 'Notion'],
    summary:
      'Für eine Mobile-Banking-App habe ich ein neues Nutzungskonzept geschaffen, das Klarheit und Vertrauen stärkt und die wichtigsten Finanzinformationen auf einen Blick sichtbar macht.',
    problem:
      'Die bestehende App war technisch funktional, aber inhaltlich schwer verständlich. Die wichtigsten Informationen waren zu tief verschachtelt, sodass Nutzer Unsicherheit beim Überblick über Kontostände und Transaktionen empfanden.',
    process:
      'Ich habe Nutzerfeedback analysiert, Usability-Tests ausgewertet und neue Informationshierarchien in Wireframes und Interaktionsmodellen ausgearbeitet. Anschließend wurden diese mit dem Team iterativ in visuelle Richtlinien und Prototypen übersetzt.',
    solution:
      'Die neue App fokussiert sich auf sofortige Orientierung, reduzierte Ablenkung und verständlichere Handlungsschritte. So wurde die App nicht nur klarer, sondern auch vertrauenswürdiger und effizienter im Alltag.',
  },
  {
    slug: 'gesundheitsdaten-greifbar-machen',
    title: 'Gesundheitsdaten greifbar machen',
    description: 'Ein Dashboard, das medizinischem Personal komplexe Patientendaten auf einen Blick zugänglich macht',
    tags: ['Journey Mapping', 'Data Viz', 'Health'],
    client: 'MedLink',
    period: '2023',
    image: '/projects/health-dashboard.png',
    role: 'Product Designer',
    duration: '7 Monate',
    tools: ['Figma', 'Miro', 'FigJam'],
    summary:
      'Ich habe ein internes Dashboard konzipiert, das klinischem Personal komplexe Gesundheitsdaten verständlich und schnell zugänglich macht, ohne die Lesbarkeit zu verlieren.',
    problem:
      'In medizinischen Kontexten verschieben sich Prioritäten schnell. Behandlungen müssen auf einen Blick verstanden werden, doch die vorhandenen Darstellungen waren überladen, inkonsistent und schwierig zu interpretieren.',
    process:
      'Durch Interviews mit Ärzt:innen, Pflegekräften und Produktverantwortlichen habe ich relevante Informationsbedürfnisse identifiziert. Daraus entstanden erste Datenmodelle, ein Navigationskonzept und eine visuelle Struktur mit klaren Prioritätsstufen.',
    solution:
      'Das resultierende Dashboard kombiniert Übersicht, Detailansicht und Handlungsempfehlungen in einem klaren Datenlayout. Dadurch lassen sich Patientendaten schneller erfassen, Prioritäten erkennen und handlungsrelevante Entscheidungen besser treffen.',
  },
  {
    slug: 'ein-system-fuer-alle',
    title: 'Ein System für alle',
    description: 'Aufbau eines skalierbaren, barrierefreien Design Systems für mehrere digitale Produkte',
    tags: ['Design Systems', 'Accessibility', 'Figma'],
    client: 'Nordwerk Studio',
    period: '2022–2023',
    image: '/projects/design-system.png',
    role: 'Design Systems Designer',
    duration: '10 Monate',
    tools: ['Figma', 'Storybook', 'Accessibility'],
    summary:
      'Ich habe ein skalierbares Design System entwickelt, das Produktteams eine gemeinsame Basis für Konsistenz, Zugänglichkeit und schnelle Umsetzung bietet.',
    problem:
      'Mehrere Teams arbeiteten mit unterschiedlichen Komponenten, Richtlinien und visuellen Standards. Dadurch entstanden Inkonsistenzen, doppelte Arbeit und eingeschränkte Skalierbarkeit über mehrere Produkte hinweg.',
    process:
      'Ich habe bestehende Muster analysiert, gemeinsame Kernprinzipien definiert und Komponenten samt Dokumentation systematisch aufgebaut. Dabei wurden Zugänglichkeit, Wartbarkeit und Anwendungssicherheit von Anfang an mitgedacht.',
    solution:
      'Das Design System schaffte eine einheitliche Grundlage für alle Produkte. Teams konnten schneller arbeiten, Inhalte konsistenter gestalten und Barrierefreiheit auf Systemebene verankern.',
  },
]
