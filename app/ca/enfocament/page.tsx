import type { Metadata } from 'next'
import HeroSection from '@/app/(es)/enfoque/EnfoqueHeroSection'
import ChallengeSection from '@/app/(es)/enfoque/EnfoqueChallengeStatementSection'
import ApproachSection from '@/app/(es)/enfoque/ApproachSection'
import CriterioSection from '@/app/(es)/enfoque/CriterioLayersSection'
import WorkPrinciplesSection from '@/app/(es)/enfoque/WorkPrinciplesSection'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import CaseStudiesSection from '@/app/(es)/servicios/estrategia-editorial/CaseStudiesSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'
import { enfoqueContentCa } from '@/content/enfoque/ca'

// Pilot en revisió amb la clienta — no és públic encara, per això queda fora
// dels resultats de cerca fins que doni llum verda i s'activi el selector a Navbar.tsx.
export const metadata: Metadata = {
  title: 'Enfocament i metodologia amb IA',
  description:
    "Treballo en el creuament entre tecnologia, contingut i ús real per integrar la IA a la teva editorial sense comprometre la qualitat ni el valor pedagògic del resultat.",
  alternates: {
    canonical: '/ca/enfocament',
    languages: { es: '/enfoque', ca: '/ca/enfocament', 'x-default': '/enfoque' },
  },
  robots: { index: false, follow: false },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function EnfocamentPage() {
  const c = enfoqueContentCa
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'enfoque', language: 'ca' })
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
      <CaseStudiesSection tag={c.caseStudies.tag} title={c.caseStudies.title} subtitle={c.caseStudies.subtitle} language="ca" />
      <CtaSection title={c.cta.title} subtitle={c.cta.subtitle} />
    </main>
  )
}
