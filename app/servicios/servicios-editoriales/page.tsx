import type { Metadata } from 'next'
import HeroSection from './ServiciosEditorialesHeroSection'
import Section2 from './ProductionPainPointsSection'
import Section3 from './ServiceOfferingsSection'
import TestimonialSection from '../estrategia-editorial/TestimonialSection'
import EditorialProjectsSection from './EditorialProjectsSection'
import CtaSection from '../estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY, EDITORIAL_PROJECTS_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'

export const metadata: Metadata = {
  title: 'Servicios editoriales con IA',
  description:
    'Producción externalizada de materiales educativos con criterio editorial riguroso, mirada pedagógica y la eficiencia real que aporta la inteligencia artificial.',
  alternates: { canonical: '/servicios/servicios-editoriales' },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function ServiciosEditorialesPage() {
  const [testimonial, projects] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'servicios-editoriales' }),
    client.fetch(EDITORIAL_PROJECTS_QUERY),
  ])
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <HeroSection />
      <Section2 />
      <Section3 />
      {images && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
          cardColor="var(--color-green)"
        />
      )}
      <EditorialProjectsSection projects={projects} />
      <CtaSection
        title="Descubre cómo puedo ayudarte con tus proyectos educativos"
        subtitle="Definamos un plan para que tus próximos materiales salgan a la luz a tiempo, sin imprevistos y con los máximos estándares de calidad."
        subtitleMaxWidth="404px"
      />
    </main>
  )
}
