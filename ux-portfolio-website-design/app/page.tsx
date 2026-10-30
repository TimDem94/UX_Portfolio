import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CaseStudies } from '@/components/case-studies'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <Experience />
      </main>
      <SiteFooter />
    </>
  )
}
