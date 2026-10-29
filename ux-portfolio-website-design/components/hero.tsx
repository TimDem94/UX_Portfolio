import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { withBasePath } from '@/lib/site-path'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-svh max-w-6xl grid-cols-1 items-center gap-8 px-6 pt-32 pb-24 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-8"
    >
      <div>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            UX/UI Designer — Kiel, Deutschland
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-5xl text-5xl leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, ich bin Tim, <span className="text-muted-foreground">UX/UI Designer.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            Ich übersetze komplexe Probleme in intuitive digitale Erlebnisse — mit Neugier, Empathie und einem
            klaren Blick für das Wesentliche.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <a
            href="#work"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary py-4 pr-4 pl-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Zu den Case Studies
            <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/10 transition-transform duration-300 group-hover:translate-y-0.5">
              <ArrowDown className="size-4" aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>

      <Reveal
        delay={240}
        className="relative mx-auto flex h-[min(52svh,440px)] w-full max-w-[360px] items-end justify-center sm:h-[min(62svh,560px)] lg:mx-0 lg:h-[min(68svh,680px)] lg:max-w-none"
      >
        <div
          className="absolute inset-x-4 bottom-4 top-12 rounded-[48%] bg-gradient-to-br from-primary/10 via-muted/50 to-transparent blur-2xl"
          aria-hidden="true"
        />
        <Image
          src={withBasePath('/projects/Tim_headshot.png')}
          alt="Tim Demesmaeker"
          width={1792}
          height={2400}
          priority
          sizes="(min-width: 1024px) 40vw, 80vw"
          className="relative h-full w-auto max-w-full object-contain object-bottom"
        />
      </Reveal>
    </section>
  )
}
