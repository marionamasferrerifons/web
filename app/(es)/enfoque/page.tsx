import type { Metadata } from 'next'
import HeroSection from './EnfoqueHeroSection'
import ChallengeSection from './EnfoqueChallengeStatementSection'
import ApproachSection from './ApproachSection'
import CriterioSection from './CriterioLayersSection'
import WorkPrinciplesSection from './WorkPrinciplesSection'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import CaseStudiesSection from '@/app/(es)/servicios/estrategia-editorial/CaseStudiesSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'
import { enfoqueContentEs } from '@/content/enfoque/es'

export const metadata: Metadata = {
  title: 'Enfoque y metodología con IA',
  description:
    'Trabajo en el cruce entre tecnología, contenido y uso real para integrar la IA en tu editorial sin comprometer la calidad ni el valor pedagógico del resultado.',
  alternates: {
    canonical: '/enfoque',
    languages: { es: '/enfoque', ca: '/ca/enfocament', 'x-default': '/enfoque' },
  },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function EnfoquePage() {
  const c = enfoqueContentEs
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'enfoque', language: 'es' })
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <HeroSection tag={c.hero.tag} title={c.hero.title} body={c.hero.body} ctaLabel={c.hero.ctaLabel} />
      <ChallengeSection titleSegments={c.challenge.titleSegments} bodySegments={c.challenge.bodySegments} />
      <ApproachSection titleSegments={c.approach.titleSegments} bodySegments={c.approach.bodySegments} />
      <CriterioSection
        tag={c.criterio.tag}
        title={c.criterio.title}
        editorial={c.criterio.editorial}
        pedagogia={c.criterio.pedagogia}
        tecnologia={c.criterio.tecnologia}
      />
      <WorkPrinciplesSection
        tag={c.workPrinciples.tag}
        title={c.workPrinciples.title}
        subtitle={c.workPrinciples.subtitle}
        cardTitle={c.workPrinciples.cardTitle}
        cardBody={c.workPrinciples.cardBody}
      />
      {images && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
        />
      )}
      <CaseStudiesSection tag={c.caseStudies.tag} title={c.caseStudies.title} subtitle={c.caseStudies.subtitle} />
      <CtaSection title={c.cta.title} subtitle={c.cta.subtitle} />
    </main>
  )
}
