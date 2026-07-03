import HeroSection from './HeroSection'
import Section2 from './Section2'
import Section3 from './Section3'
import TestimonialSection from '../estrategia-editorial/TestimonialSection'
import Section4 from './Section4'
import CtaSection from '../estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_ID_QUERY } from '@/sanity/queries'

export default async function ServiciosEditorialesPage() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_ID_QUERY, { id: 'testimonial-edebe' })

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
      <Section4 />
      <CtaSection
        title="Descubre cómo puedo ayudarte con tus proyectos educativos"
        subtitle="Definamos un plan para que tus próximos materiales salgan a la luz a tiempo, sin imprevistos y con los máximos estándares de calidad."
        subtitleMaxWidth="404px"
      />
    </main>
  )
}
