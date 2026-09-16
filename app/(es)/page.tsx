import type { Metadata } from 'next'
import HeroSection from '@/app/home/HomeHeroSection'
import LogosSection from '@/app/home/LogosSection'
import ChallengesSection from '@/app/home/ChallengesSection'
import ProblemSection from '@/app/home/ProblemSection'
import CriterioSection from '@/app/home/CriterioShapesSection'
import PracticeSection from '@/app/home/PracticeSection'
import ServicesSection from '@/app/home/ServicesSection'
import CaseStudiesSection from './servicios/estrategia-editorial/CaseStudiesSection'
import TestimonialSection from './servicios/estrategia-editorial/TestimonialSection'
import CtaSection from './servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'
import { industryLogoUrl, testimonialImageProps } from '@/sanity/image'
import { homeContentEs } from '@/content/home/es'

export const metadata: Metadata = {
  title: {
    absolute: 'Mariona Masferrer i Fons — Estrategia editorial con IA',
  },
  description:
    'Acompaño a direcciones editoriales a integrar la inteligencia artificial en su producción sin perder rigor editorial ni calidad pedagógica.',
  alternates: {
    canonical: '/',
    languages: { es: '/', ca: '/ca', 'x-default': '/' },
  },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function Home() {
  const c = homeContentEs
  const [orangeTestimonial, greenTestimonial, industryLogos] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'home-orange', language: 'es' }),
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'home-green', language: 'es' }),
    client.fetch(INDUSTRY_LOGOS_QUERY),
  ])
  const orangeImages = testimonialImageProps(orangeTestimonial)
  const greenImages = testimonialImageProps(greenTestimonial)

  return (
    <main>
      <HeroSection tag={c.hero.tag} title={c.hero.title} body={c.hero.body} ctaLabel={c.hero.ctaLabel} photoAlt={c.hero.photoAlt} />
      <LogosSection
        tag={c.logos.tag}
        logos={industryLogos
          .filter((item: { logo: { asset: { _id: string; url: string } | null; alt?: string } | null; name: string }) => item.logo?.asset?._id)
          .map((item: { logo: { asset: { _id: string; url: string }; alt?: string }; name: string }) => ({
            src: industryLogoUrl(item.logo.asset._id),
            alt: item.logo.alt || item.name,
          }))}
      />
      <ChallengesSection title={c.challenges.title} challenges={c.challenges.items} />
      <ProblemSection title={c.problem.title} />
      <CriterioSection
        tag={c.criterio.tag}
        title={c.criterio.title}
        subtitle={c.criterio.subtitle}
        editorial={c.criterio.editorial}
        pedagogia={c.criterio.pedagogia}
        tecnologia={c.criterio.tecnologia}
      />
      {orangeImages && (
        <PracticeSection
          tag={c.practice.tag}
          title={c.practice.title}
          subtitle={c.practice.subtitle}
          cards={c.practice.cards}
          testimonial={{
            quote: orangeTestimonial.quote,
            authorName: orangeTestimonial.authorName,
            authorRole: orangeTestimonial.authorRole,
            ...orangeImages,
          }}
        />
      )}
      <ServicesSection tag={c.services.tag} title={c.services.title} cards={c.services.cards} />
      <CaseStudiesSection tag={c.caseStudies.tag} title={c.caseStudies.title} subtitle={c.caseStudies.subtitle} />
      {greenImages && (
        <TestimonialSection
          cardColor="var(--color-green)"
          quote={greenTestimonial.quote}
          authorName={greenTestimonial.authorName}
          authorRole={greenTestimonial.authorRole}
          {...greenImages}
        />
      )}
      <CtaSection title={c.cta.title} subtitle={c.cta.subtitle} />
    </main>
  )
}
