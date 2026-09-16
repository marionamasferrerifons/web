import type { Metadata } from 'next'
import HeroSection from './EcosistemaHeroSection'
import Section2 from './ProblemPillsSection'
import Section3 from './ThreeLayersConvergeSection'
import Section4 from './SystemStepsSection'
import Section5 from './ImpactStatsSection'
import Section5b from './AdvantagesSection'
import Section6 from './FeaturedTestimonialSection'
import Section7 from './ClosingCtaSection'
import { ecosistemaContentEs } from '@/content/servicios-ecosistema/es'

export const metadata: Metadata = {
  title: 'Ecosistema de producción editorial',
  description:
    'Implementamos un ecosistema de producción editorial para que la IA genere contenidos con tus estándares y ayude de verdad a tu equipo editorial.',
  alternates: {
    canonical: '/servicios/ecosistema-produccion-editorial',
    languages: { es: '/servicios/ecosistema-produccion-editorial', ca: '/ca/serveis/ecosistema-produccio-editorial', 'x-default': '/servicios/ecosistema-produccion-editorial' },
  },
}

export default function EcosistemaProduccionEditorialPage() {
  const c = ecosistemaContentEs
  return (
    <main>
      <HeroSection tag={c.hero.tag} title={c.hero.title} body={c.hero.body} ctaLabel={c.hero.ctaLabel} />
      <Section2 title={c.problemPills.title} pills={c.problemPills.pills} />
      <Section3
        tag={c.threeLayers.tag}
        title={c.threeLayers.title}
        subtitle={c.threeLayers.subtitle}
        desktopCards={c.threeLayers.desktopCards}
        mobileCards={c.threeLayers.mobileCards}
        result={c.threeLayers.result}
        mobileResult={c.threeLayers.mobileResult}
      />
      <Section4
        tag={c.systemSteps.tag}
        title={c.systemSteps.title}
        subtitle={c.systemSteps.subtitle}
        cardTitle={c.systemSteps.cardTitle}
        cardBody={c.systemSteps.cardBody}
        stepsHeading={c.systemSteps.stepsHeading}
        stepsSubtitle={c.systemSteps.stepsSubtitle}
        resultsBadge={c.systemSteps.resultsBadge}
        steps={c.systemSteps.steps}
        whatItIncludesLabel={c.systemSteps.whatItIncludesLabel}
        includes={c.systemSteps.includes}
      />
      <Section5
        tag={c.impactStats.tag}
        title={c.impactStats.title}
        statLabel={c.impactStats.statLabel}
        statDescDesktop={c.impactStats.statDescDesktop}
        statDescMobile={c.impactStats.statDescMobile}
        rightText={c.impactStats.rightText}
        checkItems={c.impactStats.checkItems}
      />
      <Section5b tag={c.advantages.tag} title={c.advantages.title} ventajas={c.advantages.ventajas} illustrationAlt={c.advantages.illustrationAlt} />
      <Section6 language="es" />
      <Section7 title={c.closingCta.title} body={c.closingCta.body} ctaLabel={c.closingCta.ctaLabel} />
    </main>
  )
}
