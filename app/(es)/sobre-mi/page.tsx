import type { Metadata } from 'next'
import HeroSection from './SobreMiHeroSection'
import ValuesSection from './ValuesSection'
import HistorySection from './HistorySection'
import QuoteSection from './QuoteSection'
import LinkedInSection from './LinkedInSection'
// import NewsletterSection from './NewsletterSection' // hidden for now
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { sobreMiContentEs } from '@/content/sobre-mi/es'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Más de diez años entre edición, docencia e innovación tecnológica, ayudando a editoriales educativas a convertir la IA en ventaja competitiva.',
  alternates: {
    canonical: '/sobre-mi',
    languages: { es: '/sobre-mi', ca: '/ca/sobre-mi', 'x-default': '/sobre-mi' },
  },
}

export default function SobreMiPage() {
  const c = sobreMiContentEs
  return (
    <main>
      <HeroSection tag={c.hero.tag} title={c.hero.title} body={c.hero.body} photoAlt={c.hero.photoAlt} />
      <ValuesSection tag={c.values.tag} title={c.values.title} values={c.values.items} />
      <HistorySection tag={c.history.tag} title={c.history.title} entries={c.history.entries} />
      <QuoteSection tag={c.quote.tag} quote={c.quote.quote} />
      <LinkedInSection name={c.linkedin.name} description={c.linkedin.description} ctaLabel={c.linkedin.ctaLabel} photoAlt={c.linkedin.photoAlt} />
      {/* <NewsletterSection /> hidden for now */}
      <div className="relative" style={{ marginTop: '-24px' }}>
        <CtaSection title={c.cta.title} subtitle={c.cta.subtitle} />
      </div>
    </main>
  )
}
