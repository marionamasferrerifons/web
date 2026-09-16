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
import { serviciosEditorialesContentEs } from '@/content/servicios-servicios-editoriales/es'

export const metadata: Metadata = {
  title: 'Servicios editoriales con IA',
  description:
    'Producción externalizada de materiales educativos con criterio editorial riguroso, mirada pedagógica y la eficiencia real que aporta la inteligencia artificial.',
  alternates: {
    canonical: '/servicios/servicios-editoriales',
    languages: { es: '/servicios/servicios-editoriales', ca: '/ca/serveis/serveis-editorials', 'x-default': '/servicios/servicios-editoriales' },
  },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function ServiciosEditorialesPage() {
  const c = serviciosEditorialesContentEs
  const [testimonial, projects] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'servicios-editoriales', language: 'es' }),
    client.fetch(EDITORIAL_PROJECTS_QUERY, { language: 'es' }),
  ])
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <HeroSection tag={c.hero.tag} title={c.hero.title} body={c.hero.body} ctaLabel={c.hero.ctaLabel} />
      <Section2 title1={c.painPoints.title1} title2={c.painPoints.title2} row1={c.painPoints.row1} row2={c.painPoints.row2} />
      <Section3
        tag={c.offerings.tag}
        title={c.offerings.title}
        subtitle={c.offerings.subtitle}
        mainCardTitle={c.offerings.mainCardTitle}
        mainCardBody={c.offerings.mainCardBody}
        serviceCards={c.offerings.serviceCards}
        whatYoullGetLabel={c.offerings.whatYoullGetLabel}
        outcomes={c.offerings.outcomes}
      />
      {images && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
          cardColor="var(--color-green)"
        />
      )}
      <EditorialProjectsSection
        projects={projects}
        tag={c.projects.tag}
        title={c.projects.title}
        subtitle={c.projects.subtitle}
        prevLabel={c.projects.prevLabel}
        nextLabel={c.projects.nextLabel}
        metaLabels={c.projects.metaLabels}
      />
      <CtaSection
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        subtitleMaxWidth="404px"
      />
    </main>
  )
}
