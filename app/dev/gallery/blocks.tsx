/**
 * Mapa de renderitzadors — cada entrada importa el component real de
 * l'aplicació i li passa les fixtures locals. Cap component es reconstrueix:
 * si un bloc viu incrustat en un de més gran (marcat `embedded: true` al
 * registre), es renderitza el component contenidor sencer.
 */
import type { ReactNode } from 'react'

// Fonaments — no tenen component; es mostren amb marcatge propi dins la pàgina de previsualització.
import FndColor from './blocks/FndColor'
import FndType from './blocks/FndType'
import FndLayout from './blocks/FndLayout'
import FndButton from './blocks/FndButton'
import FndShape from './blocks/FndShape'
import FndTag from './blocks/FndTag'

// Navegació
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavDropdown from '@/components/NavDropdown'
import CaseStudiesDropdown from '@/components/CaseStudiesDropdown'

// Home
import HomeHeroSection from '@/app/home/HomeHeroSection'
import LogosSection from '@/app/home/LogosSection'
import ChallengesSection from '@/app/home/ChallengesSection'
import ProblemSection from '@/app/home/ProblemSection'
import HomeCriterioShapesSection from '@/app/home/CriterioShapesSection'
import PracticeSection from '@/app/home/PracticeSection'
import ServicesSection from '@/app/home/ServicesSection'

// Estrategia editorial
import ServiciosClient from '@/app/servicios/estrategia-editorial/ServiciosClient'
import CaseStudiesClient from '@/app/servicios/estrategia-editorial/CaseStudiesClient'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'
import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'

// Ecosistema de producció editorial
import EcosistemaHeroSection from '@/app/servicios/ecosistema-produccion-editorial/EcosistemaHeroSection'
import ProblemPillsSection from '@/app/servicios/ecosistema-produccion-editorial/ProblemPillsSection'
import ThreeLayersConvergeSection from '@/app/servicios/ecosistema-produccion-editorial/ThreeLayersConvergeSection'
import SystemStepsSection from '@/app/servicios/ecosistema-produccion-editorial/SystemStepsSection'
import ImpactStatsSection from '@/app/servicios/ecosistema-produccion-editorial/ImpactStatsSection'
import AdvantagesSection from '@/app/servicios/ecosistema-produccion-editorial/AdvantagesSection'
import ClosingCtaSection from '@/app/servicios/ecosistema-produccion-editorial/ClosingCtaSection'

// Servicios editoriales
import ServiciosEditorialesHeroSection from '@/app/servicios/servicios-editoriales/ServiciosEditorialesHeroSection'
import ProductionPainPointsSection from '@/app/servicios/servicios-editoriales/ProductionPainPointsSection'
import ServiceOfferingsSection from '@/app/servicios/servicios-editoriales/ServiceOfferingsSection'
import EditorialProjectsSection from '@/app/servicios/servicios-editoriales/EditorialProjectsSection'

// Casos d'èxit
import CaseStudyHeroSection from '@/app/casos-de-exito/[slug]/CaseStudyHeroSection'
import ContextSection from '@/app/casos-de-exito/[slug]/ContextSection'
import CaseStudyChallengeSection from '@/app/casos-de-exito/[slug]/CaseStudyChallengeSection'
import SolutionSection from '@/app/casos-de-exito/[slug]/SolutionSection'
import ResultsSection from '@/app/casos-de-exito/[slug]/ResultsSection'
import ProcessSection from '@/app/casos-de-exito/[slug]/ProcessSection'
import BeforeAfterSection from '@/app/casos-de-exito/[slug]/BeforeAfterSection'

// Sobre mi
import SobreMiHeroSection from '@/app/sobre-mi/SobreMiHeroSection'
import ValuesSection from '@/app/sobre-mi/ValuesSection'
import HistorySection from '@/app/sobre-mi/HistorySection'
import QuoteSection from '@/app/sobre-mi/QuoteSection'
import LinkedInSection from '@/app/sobre-mi/LinkedInSection'
import NewsletterSection from '@/app/sobre-mi/NewsletterSection'

// Enfoque
import EnfoqueHeroSection from '@/app/enfoque/EnfoqueHeroSection'
import EnfoqueChallengeStatementSection from '@/app/enfoque/EnfoqueChallengeStatementSection'
import ApproachSection from '@/app/enfoque/ApproachSection'
import EnfoqueCriterioLayersSection from '@/app/enfoque/CriterioLayersSection'
import WorkPrinciplesSection from '@/app/enfoque/WorkPrinciplesSection'

// Estats del sistema
import LoadingState from '@/app/loading'
import NotFoundState from '@/app/not-found'
import ErrorStatePreview from './blocks/ErrorStatePreview'

import {
  testimonialFixture,
  industryLogosFixture,
  caseStudiesFixture,
  editorialProjectsFixture,
  caseStudyHeroFixture,
  beforeAfterFixture,
  processFixture,
  resultsFixture,
  contextFixture,
  challengeFixture,
  solutionFixture,
} from './fixtures'

const SERVICES_ITEMS = [
  { href: '/servicios/estrategia-editorial', label: 'Implementación estratégica de IA' },
  { href: '/servicios/ecosistema-produccion-editorial', label: 'Sistema de producción editorial con IA' },
  { href: '/servicios/servicios-editoriales', label: 'Servicios editoriales con IA aplicada' },
]

const CASE_STUDY_DROPDOWN_ITEMS = caseStudiesFixture.map((c) => ({
  href: `/casos-de-exito/${c.slug}`,
  title: c.title,
  imageUrl: undefined,
  imageAlt: c.imageCard.alt,
}))

type Renderer = () => ReactNode

export const BLOCK_RENDERERS: Record<string, Record<string, Renderer>> = {
  'fnd-color': { default: () => <FndColor /> },
  'fnd-type': { default: () => <FndType /> },
  'fnd-layout': { default: () => <FndLayout /> },
  'fnd-button': { default: () => <FndButton /> },
  'fnd-shape': { default: () => <FndShape /> },
  'fnd-tag': { default: () => <FndTag /> },

  'nav-header': {
    desktop: () => <Navbar />,
    'dropdown-simple': () => (
      <div style={{ background: 'var(--color-blue-500)', padding: '24px 40px' }}>
        <NavDropdown label="Servicios" items={SERVICES_ITEMS} activePrefix="/servicios" />
      </div>
    ),
    'dropdown-rich': () => (
      <div style={{ background: 'var(--color-blue-500)', padding: '24px 40px' }}>
        <CaseStudiesDropdown items={CASE_STUDY_DROPDOWN_ITEMS} />
      </div>
    ),
  },
  'nav-footer': { default: () => <Footer /> },

  'hero-page': {
    home: () => <HomeHeroSection />,
    estrategia: () => <ServiciosClient />,
    ecosistema: () => <EcosistemaHeroSection />,
    editoriales: () => <ServiciosEditorialesHeroSection />,
    'sobre-mi': () => <SobreMiHeroSection />,
    enfoque: () => <EnfoqueHeroSection />,
    caso: () => <CaseStudyHeroSection {...caseStudyHeroFixture} />,
  },

  'statement-headline': {
    problem: () => <ProblemSection />,
    'production-painpoints-title': () => <ProductionPainPointsSection />,
    quote: () => <QuoteSection />,
  },
  'statement-wordfill': {
    challenge: () => <EnfoqueChallengeStatementSection />,
    approach: () => <ApproachSection />,
  },

  'painpoint-pills': {
    estrategia: () => <ServiciosClient />,
    ecosistema: () => <ProblemPillsSection />,
    editoriales: () => <ProductionPainPointsSection />,
    'home-avatars': () => <ChallengesSection />,
  },

  'svccard-illustrated': { default: () => <ServicesSection /> },
  'svccard-expandable': {
    'card1-workshops': () => <ServiciosClient />,
    'card2-weekly': () => <ServiciosClient />,
    'card3-howitworks': () => <ServiciosClient />,
  },
  'svccard-grid': {
    'editoriales-offerings': () => <ServiceOfferingsSection />,
    'ecosistema-includes': () => <SystemStepsSection />,
  },

  'valuegrid-masonry': {
    'about-values': () => <ValuesSection />,
    'enfoque-principles': () => <WorkPrinciplesSection />,
    'home-practice': () => <PracticeSection testimonial={testimonialFixture} />,
    'ecosistema-advantages': () => <AdvantagesSection />,
  },

  'brandshape-composition': {
    'home-arches': () => <HomeCriterioShapesSection />,
    'enfoque-diamonds': () => <EnfoqueCriterioLayersSection />,
    'ecosistema-converge': () => <ThreeLayersConvergeSection />,
  },

  'process-steps': {
    'ecosistema-build': () => <SystemStepsSection />,
    'estrategia-weekly': () => <ServiciosClient />,
    'case-process': () => <ProcessSection {...processFixture} />,
  },
  'timeline-history': { default: () => <HistorySection /> },

  'metric-hero': { default: () => <ImpactStatsSection /> },
  'metric-cards': { default: () => <ResultsSection results={resultsFixture} /> },

  'compare-beforeafter': { default: () => <BeforeAfterSection {...beforeAfterFixture} /> },

  'testimonial-card': {
    orange: () => <TestimonialSection {...testimonialFixture} />,
    green: () => <TestimonialSection {...testimonialFixture} cardColor="var(--color-green)" />,
    embedded: () => (
      <div style={{ padding: '32px', background: 'var(--color-grey)' }}>
        <TestimonialSection {...testimonialFixture} hideHeader />
      </div>
    ),
  },

  'caselist-rows': {
    default: () => <CaseStudiesClient caseStudies={caseStudiesFixture} logos={industryLogosFixture.map((l) => ({ name: l.alt, logo: { asset: null, alt: l.alt } }))} />,
  },
  'project-carousel': { default: () => <EditorialProjectsSection projects={editorialProjectsFixture} /> },

  'logo-marquee': { default: () => <LogosSection logos={industryLogosFixture} /> },

  'prose-block': {
    context: () => <ContextSection context={contextFixture} />,
    challenge: () => <CaseStudyChallengeSection question={challengeFixture.question} text={challengeFixture.text} />,
    solution: () => <SolutionSection title={solutionFixture.title} text={solutionFixture.text} />,
  },

  'cta-band': {
    'cta-section': () => <CtaSection />,
    'closing-ecosistema': () => <ClosingCtaSection />,
    newsletter: () => <NewsletterSection />,
    linkedin: () => <LinkedInSection />,
  },

  'sys-state': {
    loading: () => <LoadingState />,
    'not-found': () => <NotFoundState />,
    error: () => <ErrorStatePreview />,
  },
}

export function getRenderer(blockId: string, variantId: string): Renderer | undefined {
  return BLOCK_RENDERERS[blockId]?.[variantId]
}
