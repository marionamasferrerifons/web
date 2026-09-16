import type { Metadata } from 'next'
import HeroSection from './EnfoqueHeroSection'
import ChallengeSection from './EnfoqueChallengeStatementSection'
import ApproachSection from './ApproachSection'
import CriterioSection from './CriterioLayersSection'
import WorkPrinciplesSection from './WorkPrinciplesSection'
import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'
import CaseStudiesSection from '@/app/servicios/estrategia-editorial/CaseStudiesSection'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'

export const metadata: Metadata = {
  title: 'Enfoque y metodología con IA',
  description:
    'Trabajo en el cruce entre tecnología, contenido y uso real para integrar la IA en tu editorial sin comprometer la calidad ni el valor pedagógico del resultado.',
  alternates: { canonical: '/enfoque' },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function EnfoquePage() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'enfoque' })
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <HeroSection />
      <ChallengeSection />
      <ApproachSection />
      <CriterioSection />
      <WorkPrinciplesSection />
      {images && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
        />
      )}
      <CaseStudiesSection />
      <CtaSection
        title="Exploremos juntos cómo incorporar la IA en tu editorial"
        subtitle="La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad."
      />
    </main>
  )
}
