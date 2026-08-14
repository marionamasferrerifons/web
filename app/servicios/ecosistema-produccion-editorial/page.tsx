import type { Metadata } from 'next'
import HeroSection from './EcosistemaHeroSection'
import Section2 from './ProblemPillsSection'
import Section3 from './ThreeLayersConvergeSection'
import Section4 from './SystemStepsSection'
import Section5 from './ImpactStatsSection'
import Section5b from './AdvantagesSection'
import Section6 from './FeaturedTestimonialSection'
import Section7 from './ClosingCtaSection'

export const metadata: Metadata = {
  title: 'Ecosistema de producción editorial',
  description:
    'Implementamos un ecosistema de producción editorial para que la IA genere contenidos con tus estándares y ayude de verdad a tu equipo editorial.',
  alternates: { canonical: '/servicios/ecosistema-produccion-editorial' },
}

export default function EcosistemaProduccionEditorialPage() {
  return (
    <main>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section5b />
      <Section6 />
      <Section7 />
    </main>
  )
}
