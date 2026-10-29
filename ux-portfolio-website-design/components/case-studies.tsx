import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/case-studies'

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Ausgewählte Arbeiten</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">Case Studies</h2>
        </div>
        <p className="max-w-sm text-muted-foreground leading-relaxed">
          Projekte, in denen Research, Strategie und Gestaltung zusammenfinden.
        </p>
      </Reveal>

      <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.title} delay={(index % 2) * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article>
      <Link
        href={`/case-studies/${project.slug}`}
        className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-focus-visible:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 transition-opacity duration-700 hoverable:opacity-0 hoverable:group-hover:opacity-100 hoverable:group-focus-visible:opacity-100"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white md:p-8">
          <ul
            className="flex flex-wrap gap-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hoverable:-translate-y-2 hoverable:opacity-0 hoverable:group-hover:translate-y-0 hoverable:group-hover:opacity-100 hoverable:group-focus-visible:translate-y-0 hoverable:group-focus-visible:opacity-100"
            aria-label="Projekt-Tags"
          >
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs backdrop-blur-md md:text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-end justify-between gap-6 transition-all delay-75 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hoverable:translate-y-4 hoverable:opacity-0 hoverable:group-hover:translate-y-0 hoverable:group-hover:opacity-100 hoverable:group-focus-visible:translate-y-0 hoverable:group-focus-visible:opacity-100">
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-balance md:text-3xl">{project.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 text-pretty md:text-base">
                {project.description}
              </p>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45 md:size-14">
              <ArrowUpRight className="size-5" aria-hidden="true" />
              <span className="sr-only">Case Study ansehen</span>
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{project.client}</span>
        <span className="font-mono text-muted-foreground">{project.period}</span>
      </div>
    </article>
  )
}
