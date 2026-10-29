import type { Metadata } from 'next'
import HeroSection from './SobreMiHeroSection'
import ValuesSection from './ValuesSection'
import HistorySection from './HistorySection'
import QuoteSection from './QuoteSection'
import LinkedInSection from './LinkedInSection'
// import NewsletterSection from './NewsletterSection' // hidden for now (només en castellà)
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { routeAlternates, type Locale } from '@/lib/i18n'
import { sobreMiContent } from '@/content/sobre-mi'

// Cos de la pàgina, compartit per app/(es)/sobre-mi i app/ca/sobre-mi.

export function sobreMiMetadata(locale: Locale): Metadata {
  const c = sobreMiContent[locale].metadata
  return {
    title: c.title,
    description: c.description,
    alternates: routeAlternates('/sobre-mi', locale),
  }
}

export default function SobreMiPage({ locale }: { locale: Locale }) {
  const c = sobreMiContent[locale]
  return (
    <main>
      <HeroSection locale={locale} />
      <ValuesSection locale={locale} />
      <HistorySection locale={locale} />
      <QuoteSection locale={locale} />
      <LinkedInSection locale={locale} />
      {/* <NewsletterSection /> hidden for now */}
      <div className="relative" style={{ marginTop: '-24px' }}>
        <CtaSection locale={locale} title={c.cta.title} subtitle={c.cta.subtitle} />
      </div>
    </main>
  )
}
