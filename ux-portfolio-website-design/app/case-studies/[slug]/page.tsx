import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/case-studies'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: 'Case Study nicht gefunden',
    }
  }

  return {
    title: `${project.title} — Tim Demesmaeker`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10">
        <Reveal>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            Zurück zur Startseite
          </Link>
        </Reveal>

        <section className="pt-10 md:pt-16">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Case Study</p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-4xl">
              <h1 className="text-5xl leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl md:text-7xl">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={120} className="w-full max-w-md">
              <div className="rounded-3xl border border-border bg-card/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="mt-10 grid gap-4 rounded-3xl border border-border bg-card/60 p-5 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">Rolle</p>
                <p className="mt-2 text-sm text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">Dauer</p>
                <p className="mt-2 text-sm text-foreground">{project.duration}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">Tools</p>
                <p className="mt-2 text-sm text-foreground">{project.tools.join(' · ')}</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-20 space-y-8">
          <Reveal delay={60}>
            <article className="rounded-[2rem] border border-border bg-card/60 p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">Das Problem</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground md:text-xl">{project.problem}</p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-primary/8" aria-hidden="true" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-border/80 bg-background">
                <Image
                  src={project.image}
                  alt={`${project.title} Mockup`}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <article className="rounded-[2rem] border border-border bg-card/60 p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">Mein Prozess</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground md:text-xl">{project.process}</p>
            </article>
          </Reveal>

          <Reveal delay={240}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-primary/8" aria-hidden="true" />
              {project.video ? (
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border/80 bg-background">
                  <video
                    className="block h-auto w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={project.image}
                    aria-label={`${project.title} Produktvideo`}
                  >
                    <source src={project.video} type="video/mp4" />
                    Dein Browser unterstützt die Videowiedergabe nicht.
                  </video>
                </div>
              ) : (
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[1.5rem] border border-border/80 bg-gradient-to-br from-muted via-background to-card">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="rounded-full border border-border bg-background/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                      Mockup
                    </div>
                    <p className="max-w-md text-xl font-medium tracking-tight text-foreground md:text-2xl">
                      Produkt-Lösung / Interface-Konzept
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <article className="rounded-[2rem] border border-border bg-card/60 p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">Die Lösung</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground md:text-xl">{project.solution}</p>
            </article>
          </Reveal>
        </section>

        <Reveal delay={360}>
          <div className="mt-16 flex justify-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Zurück zur Startseite
              <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/10 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </>
  )
}
