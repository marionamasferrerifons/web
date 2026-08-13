import type { Metadata } from 'next'
import ServiciosClient from './ServiciosClient'
import CaseStudiesSection from './CaseStudiesSection'
import TestimonialSection from './TestimonialSection'
import CtaSection from './CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'

export const metadata: Metadata = {
  title: 'Estrategia editorial con IA',
  description:
    'Diseña el futuro de tu editorial con una estrategia propia: propuesta de valor, relación con tus usuarios y procesos operativos, con criterio editorial.',
  alternates: { canonical: '/servicios/estrategia-editorial' },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function EstrategiaEditorialPage() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, {
    placement: 'estrategia-editorial',
  })
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <ServiciosClient />
      <CaseStudiesSection />
      {images && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
        />
      )}
      <CtaSection />
    </main>
  )
}
