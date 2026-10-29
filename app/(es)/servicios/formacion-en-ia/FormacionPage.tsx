import type { Metadata } from 'next'
import HeroSection from './HeroSection'
import StartingPointsSection from './StartingPointsSection'
import TrainingServicesSection from './TrainingServicesSection'
import ActionButtons from '@/components/service/ActionButtons'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { routeAlternates, type Locale } from '@/lib/i18n'
import { formacionContent } from '@/content/formacion'

// Cos de la pàgina, compartit per app/(es)/servicios/formacion-en-ia i
// app/ca/serveis/formacio-en-ia.

export function formacionMetadata(locale: Locale): Metadata {
  const c = formacionContent[locale].metadata
  return {
    title: c.title,
    description: c.description,
    alternates: routeAlternates('/servicios/formacion-en-ia', locale),
  }
}

export default function FormacionPage({ locale }: { locale: Locale }) {
  const c = formacionContent[locale]
  return (
    <main className="optical-auto">
      <HeroSection locale={locale} />
      <StartingPointsSection locale={locale} />
      <TrainingServicesSection locale={locale} />
      <CtaSection
        locale={locale}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        subtitleMaxWidth="560px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" whatsappTopic="formacion" locale={locale} />}
      />
    </main>
  )
}
