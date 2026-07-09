import HeroSection from './ServiciosEditorialesHeroSection'
import Section2 from './ProductionPainPointsSection'
import Section3 from './ServiceOfferingsSection'
import TestimonialSection from '../estrategia-editorial/TestimonialSection'
import EditorialProjectsSection from './EditorialProjectsSection'
import CtaSection from '../estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY, EDITORIAL_PROJECTS_QUERY } from '@/sanity/queries'

export default async function ServiciosEditorialesPage() {
  const [testimonial, projects] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'servicios-editoriales' }),
    client.fetch(EDITORIAL_PROJECTS_QUERY),
  ])

  return (
    <main>
      <HeroSection />
      <Section2 />
      <Section3 />
      <TestimonialSection
        quote={testimonial.quote}
        authorName={testimonial.authorName}
        authorRole={testimonial.authorRole}
        avatarUrl={testimonial.avatar.asset.url}
        avatarAlt={testimonial.avatar.alt}
        logoUrl={testimonial.logo.asset.url}
        logoAlt={testimonial.logo.alt}
        cardColor="var(--color-green)"
      />
      <EditorialProjectsSection projects={projects} />
      <CtaSection
        title="Descubre cómo puedo ayudarte con tus proyectos educativos"
        subtitle="Definamos un plan para que tus próximos materiales salgan a la luz a tiempo, sin imprevistos y con los máximos estándares de calidad."
        subtitleMaxWidth="404px"
      />
    </main>
  )
}
