import { ArrowUpRight } from 'lucide-react'
import { ContactVideo } from '@/components/contact-video'
import { Reveal } from '@/components/reveal'

const EMAIL = 'timdemes@web.de'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tim-demesmaeker-9867982a0/' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end lg:gap-10">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Kontakt</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-balance md:text-6xl">
              Lass uns gemeinsam etwas Gutes gestalten.
            </h2>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-10 inline-block text-xl text-muted-foreground underline decoration-border underline-offset-8 transition-colors hover:text-foreground hover:decoration-foreground md:text-2xl"
            >
              {EMAIL}
            </a>
          </Reveal>

          <ContactVideo />
        </div>

        <div className="mt-24 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-muted-foreground"
                >
                  {social.label}
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs text-muted-foreground">
            {'© '}
            {new Date().getFullYear()} Tim Demesmaeker — Kiel
          </p>
        </div>
      </div>
    </footer>
  )
}
