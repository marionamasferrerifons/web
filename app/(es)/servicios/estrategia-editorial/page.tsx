import type { Metadata } from 'next'
import ServiciosClient from './ServiciosClient'
import CaseStudiesSection from './CaseStudiesSection'
import TestimonialSection from './TestimonialSection'
import CtaSection from './CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'
import { estrategiaEditorialContentEs } from '@/content/servicios-estrategia-editorial/es'

export const metadata: Metadata = {
  title: 'Estrategia editorial con IA',
  description:
    'Diseña el futuro de tu editorial con una estrategia propia: propuesta de valor, relación con tus usuarios y procesos operativos, con criterio editorial.',
  alternates: {
    canonical: '/servicios/estrategia-editorial',
    languages: { es: '/servicios/estrategia-editorial', ca: '/ca/serveis/estrategia-editorial', 'x-default': '/servicios/estrategia-editorial' },
  },
}

// Flag reutilitzable per amagar/mostrar el bloc de casos de éxito sense eliminar-ne el codi.
const SHOW_CASE_STUDIES = false;

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function EstrategiaEditorialPage() {
  const c = estrategiaEditorialContentEs
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, {
    placement: 'estrategia-editorial',
    language: 'es',
  })
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <ServiciosClient content={c.client} />
      {SHOW_CASE_STUDIES && <CaseStudiesSection />}
      {images && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
        />
      )}
      <CtaSection title={c.cta.title} subtitle={c.cta.subtitle} />
    </main>
  )
}
