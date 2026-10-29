import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { href: '#work', label: 'Case Studies' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'Skills' },
  { href: '#contact', label: 'Kontakt' },
]

export function SiteHeader({ isCaseStudy = false }: { isCaseStudy?: boolean }) {
  const visibleLinks = isCaseStudy ? links.filter((link) => link.href === '#contact') : links

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href={isCaseStudy ? '/' : '#top'} className="inline-flex items-center">
          <Image
            src="/projects/New-icon_noBG.png"
            alt="Tim Demesmaeker"
            width={899}
            height={511}
            className="h-10 w-auto invert dark:invert-0"
            priority
          />
        </a>
        <nav aria-label="Hauptnavigation" className="flex items-center gap-6 md:gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {visibleLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
