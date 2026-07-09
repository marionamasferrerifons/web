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

export default async function EnfoquePage() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'enfoque' })

  return (
    <main>
      <HeroSection />
      <ChallengeSection />
      <ApproachSection />
      <CriterioSection />
      <WorkPrinciplesSection />
      <TestimonialSection
        quote={testimonial.quote}
        authorName={testimonial.authorName}
        authorRole={testimonial.authorRole}
        avatarUrl={testimonial.avatar.asset.url}
        avatarAlt={testimonial.avatar.alt}
        logoUrl={testimonial.logo.asset.url}
        logoAlt={testimonial.logo.alt}
      />
      <CaseStudiesSection />
      <CtaSection
        title="Exploremos juntos cómo incorporar la IA en tu editorial"
        subtitle="La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad."
      />
    </main>
  )
}
