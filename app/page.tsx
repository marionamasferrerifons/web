import HeroSection from './home/HeroSection'
import LogosSection from './home/LogosSection'
import ChallengesSection from './home/ChallengesSection'
import ProblemSection from './home/ProblemSection'
import CriterioSection from './home/CriterioSection'
import PracticeSection from './home/PracticeSection'
import ServicesSection from './home/ServicesSection'
import CaseStudiesSection from './servicios/estrategia-editorial/CaseStudiesSection'
import TestimonialSection from './servicios/estrategia-editorial/TestimonialSection'
import CtaSection from './servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_ID_QUERY } from '@/sanity/queries'

export default async function Home() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_ID_QUERY, { id: 'testimonial-edebe' })

  return (
    <main>
      <HeroSection />
      <LogosSection />
      <ChallengesSection />
      <ProblemSection />
      <CriterioSection />
      <PracticeSection
        testimonial={{
          quote: testimonial.quote,
          authorName: testimonial.authorName,
          authorRole: testimonial.authorRole,
          avatarUrl: testimonial.avatar.asset.url,
          avatarAlt: testimonial.avatar.alt,
          logoUrl: testimonial.logo.asset.url,
          logoAlt: testimonial.logo.alt,
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
        quote={testimonial.quote}
        authorName={testimonial.authorName}
        authorRole={testimonial.authorRole}
        avatarUrl={testimonial.avatar.asset.url}
        avatarAlt={testimonial.avatar.alt}
        logoUrl={testimonial.logo.asset.url}
        logoAlt={testimonial.logo.alt}
      />
      <CtaSection
        title="Exploremos juntos cómo incorporar la IA en tu editorial"
        subtitle="La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad."
      />
    </main>
  )
}
