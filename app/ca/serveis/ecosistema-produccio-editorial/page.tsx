import type { Metadata } from 'next'
import HeroSection from '@/app/(es)/servicios/ecosistema-produccion-editorial/EcosistemaHeroSection'
import Section2 from '@/app/(es)/servicios/ecosistema-produccion-editorial/ProblemPillsSection'
import Section3 from '@/app/(es)/servicios/ecosistema-produccion-editorial/ThreeLayersConvergeSection'
import Section4 from '@/app/(es)/servicios/ecosistema-produccion-editorial/SystemStepsSection'
import Section5 from '@/app/(es)/servicios/ecosistema-produccion-editorial/ImpactStatsSection'
import Section5b from '@/app/(es)/servicios/ecosistema-produccion-editorial/AdvantagesSection'
import Section6 from '@/app/(es)/servicios/ecosistema-produccion-editorial/FeaturedTestimonialSection'
import Section7 from '@/app/(es)/servicios/ecosistema-produccion-editorial/ClosingCtaSection'
import { ecosistemaContentCa } from '@/content/servicios-ecosistema/ca'

// Pilot en revisió amb la clienta — no és públic encara.
export const metadata: Metadata = {
  title: 'Ecosistema de producció editorial',
  description:
    "Implementem un ecosistema de producció editorial perquè la IA generi continguts amb els teus estàndards i ajudi de veritat el teu equip editorial.",
  alternates: {
    canonical: '/ca/serveis/ecosistema-produccio-editorial',
    languages: { es: '/servicios/ecosistema-produccion-editorial', ca: '/ca/serveis/ecosistema-produccio-editorial', 'x-default': '/servicios/ecosistema-produccion-editorial' },
  },
  robots: { index: false, follow: false },
}

export default function EcosistemaProduccioEditorialPageCa() {
  const c = ecosistemaContentCa
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
      <Section6 language="ca" />
      <Section7 title={c.closingCta.title} body={c.closingCta.body} ctaLabel={c.closingCta.ctaLabel} />
    </main>
  )
}
