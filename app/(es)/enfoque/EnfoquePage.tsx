import type { Metadata } from 'next'
import HeroSection from './EnfoqueHeroSection'
import ChallengeSection from './EnfoqueChallengeStatementSection'
import ApproachSection from './ApproachSection'
import CriterioSection from './CriterioLayersSection'
import WorkPrinciplesSection from './WorkPrinciplesSection'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import CaseStudiesSection from '@/app/(es)/servicios/estrategia-editorial/CaseStudiesSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { fetchLocalized, type PlacementTestimonial } from '@/sanity/fetchLocalized'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'
import { routeAlternates, type Locale } from '@/lib/i18n'
import { enfoqueContent } from '@/content/enfoque'

// Cos de la pàgina, compartit per app/(es)/enfoque i app/ca/enfocament.

export function enfoqueMetadata(locale: Locale): Metadata {
  const c = enfoqueContent[locale].metadata
  return {
    title: c.title,
    description: c.description,
    alternates: routeAlternates('/enfoque', locale),
  }
}

export default async function EnfoquePage({ locale }: { locale: Locale }) {
  const c = enfoqueContent[locale]
  const { data: testimonial } = await fetchLocalized<PlacementTestimonial>(TESTIMONIAL_BY_PLACEMENT_QUERY, locale, { placement: 'enfoque' })
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <HeroSection locale={locale} />
      <ChallengeSection locale={locale} />
      <ApproachSection locale={locale} />
      <CriterioSection locale={locale} />
      <WorkPrinciplesSection locale={locale} />
      {testimonial && images && (
        <TestimonialSection
          locale={locale}
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
        />
      )}
      <CaseStudiesSection locale={locale} />
      <CtaSection locale={locale} title={c.cta.title} subtitle={c.cta.subtitle} />
    </main>
  )
}
