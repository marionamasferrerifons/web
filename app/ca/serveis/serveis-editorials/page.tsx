import type { Metadata } from 'next'
import HeroSection from '@/app/(es)/servicios/servicios-editoriales/ServiciosEditorialesHeroSection'
import Section2 from '@/app/(es)/servicios/servicios-editoriales/ProductionPainPointsSection'
import Section3 from '@/app/(es)/servicios/servicios-editoriales/ServiceOfferingsSection'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import EditorialProjectsSection from '@/app/(es)/servicios/servicios-editoriales/EditorialProjectsSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY, EDITORIAL_PROJECTS_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'
import { serviciosEditorialesContentCa } from '@/content/servicios-servicios-editoriales/ca'

// Pilot en revisió amb la clienta — no és públic encara.
export const metadata: Metadata = {
  title: 'Serveis editorials amb IA',
  description:
    "Producció externalitzada de materials educatius amb criteri editorial rigorós, mirada pedagògica i l'eficiència real que aporta la intel·ligència artificial.",
  alternates: {
    canonical: '/ca/serveis/serveis-editorials',
    languages: { es: '/servicios/servicios-editoriales', ca: '/ca/serveis/serveis-editorials', 'x-default': '/servicios/servicios-editoriales' },
  },
  robots: { index: false, follow: false },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function ServiciosEditorialesPageCa() {
  const c = serviciosEditorialesContentCa
  const [testimonial, projects] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'servicios-editoriales', language: 'ca' }),
    client.fetch(EDITORIAL_PROJECTS_QUERY, { language: 'ca' }),
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
