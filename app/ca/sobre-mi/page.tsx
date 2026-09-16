import type { Metadata } from 'next'
import HeroSection from '@/app/(es)/sobre-mi/SobreMiHeroSection'
import ValuesSection from '@/app/(es)/sobre-mi/ValuesSection'
import HistorySection from '@/app/(es)/sobre-mi/HistorySection'
import QuoteSection from '@/app/(es)/sobre-mi/QuoteSection'
import LinkedInSection from '@/app/(es)/sobre-mi/LinkedInSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { sobreMiContentCa } from '@/content/sobre-mi/ca'

// Pilot en revisió amb la clienta — no és públic encara.
export const metadata: Metadata = {
  title: 'Sobre mi',
  description:
    "Més de deu anys entre edició, docència i innovació tecnològica, ajudant editorials educatives a convertir la IA en avantatge competitiu.",
  alternates: {
    canonical: '/ca/sobre-mi',
    languages: { es: '/sobre-mi', ca: '/ca/sobre-mi', 'x-default': '/sobre-mi' },
  },
  robots: { index: false, follow: false },
}

export default function SobreMiPageCa() {
  const c = sobreMiContentCa
  return (
    <main>
      <HeroSection tag={c.hero.tag} title={c.hero.title} body={c.hero.body} photoAlt={c.hero.photoAlt} />
      <ValuesSection tag={c.values.tag} title={c.values.title} values={c.values.items} />
      <HistorySection tag={c.history.tag} title={c.history.title} entries={c.history.entries} />
      <QuoteSection tag={c.quote.tag} quote={c.quote.quote} />
      <LinkedInSection name={c.linkedin.name} description={c.linkedin.description} ctaLabel={c.linkedin.ctaLabel} photoAlt={c.linkedin.photoAlt} />
      <div className="relative" style={{ marginTop: '-24px' }}>
        <CtaSection title={c.cta.title} subtitle={c.cta.subtitle} />
      </div>
    </main>
  )
}
