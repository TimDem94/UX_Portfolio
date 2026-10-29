import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { href: '#work', label: 'Arbeiten' },
  { href: '#about', label: 'Über mich' },
  { href: '#contact', label: 'Kontakt' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="text-sm font-medium tracking-tight">
          Tim Demesmaeker
        </a>
        <nav aria-label="Hauptnavigation" className="flex items-center gap-6 md:gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {links.map((link) => (
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
