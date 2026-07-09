import HeroSection from './home/HomeHeroSection'
import LogosSection from './home/LogosSection'
import ChallengesSection from './home/ChallengesSection'
import ProblemSection from './home/ProblemSection'
import CriterioSection from './home/CriterioShapesSection'
import PracticeSection from './home/PracticeSection'
import ServicesSection from './home/ServicesSection'
import CaseStudiesSection from './servicios/estrategia-editorial/CaseStudiesSection'
import TestimonialSection from './servicios/estrategia-editorial/TestimonialSection'
import CtaSection from './servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'

export default async function Home() {
  const [orangeTestimonial, greenTestimonial, industryLogos] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'home-orange' }),
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'home-green' }),
    client.fetch(INDUSTRY_LOGOS_QUERY),
  ])

  return (
    <main>
      <HeroSection />
      <LogosSection
        logos={industryLogos.map((item: { logo: { asset: { url: string }; alt?: string }; name: string }) => ({
          src: item.logo.asset.url,
          alt: item.logo.alt || item.name,
        }))}
      />
      <ChallengesSection />
      <ProblemSection />
      <CriterioSection />
      <PracticeSection
        testimonial={{
          quote: orangeTestimonial.quote,
          authorName: orangeTestimonial.authorName,
          authorRole: orangeTestimonial.authorRole,
          avatarUrl: orangeTestimonial.avatar.asset.url,
          avatarAlt: orangeTestimonial.avatar.alt,
          logoUrl: orangeTestimonial.logo.asset.url,
          logoAlt: orangeTestimonial.logo.alt,
        }}
      />
      <ServicesSection />
      <CaseStudiesSection
        tag="[PROYECTOS]"
        title={
          <>
            Cómo se aplica en proyectos{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>reales</span>
          </>
        }
        subtitle="Lorem ipsum dolor sit amet consectetur. Eget elit consectetur bibendum placerat aliquam dictum. Tincidunt eget tempus tortor congue diam turpis. Sit fusce tempor."
      />
      <TestimonialSection
        cardColor="var(--color-green)"
        quote={greenTestimonial.quote}
        authorName={greenTestimonial.authorName}
        authorRole={greenTestimonial.authorRole}
        avatarUrl={greenTestimonial.avatar.asset.url}
        avatarAlt={greenTestimonial.avatar.alt}
        logoUrl={greenTestimonial.logo.asset.url}
        logoAlt={greenTestimonial.logo.alt}
      />
      <CtaSection
        title="Exploremos juntos cómo incorporar la IA en tu editorial"
        subtitle="La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad."
      />
    </main>
  )
}
