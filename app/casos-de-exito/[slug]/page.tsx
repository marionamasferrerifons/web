import { cache } from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { PortableTextBlock } from '@portabletext/react'
import { client } from '@/sanity/client'
import { CASE_STUDY_BY_SLUG_QUERY } from '@/sanity/queries'
import { truncate } from '@/lib/seo'
import HeroSection from './CaseStudyHeroSection'
import ContextSection from './ContextSection'
import ChallengeSection from './CaseStudyChallengeSection'
import SolutionSection from './SolutionSection'
import ResultsSection from './ResultsSection'
import ProcessSection from './ProcessSection'
import BeforeAfterSection from './BeforeAfterSection'
import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'
import { testimonialImageProps } from '@/sanity/image'

type CaseStudy = {
  _id: string
  title: string
  subtitle: string
  year: string
  duration: string
  client: string
  context: PortableTextBlock[]
  challengeQuestion: string
  challengeText: PortableTextBlock[]
  solutionTitle: string
  solutionText: PortableTextBlock[]
  results: { number: string; label: string }[]
  processTitle: string
  processText: PortableTextBlock[]
  processImages: { asset: { _id: string; url: string } | null; alt?: string }[]
  beforeItems: { text: PortableTextBlock[] }[]
  afterItems: { text: PortableTextBlock[] }[]
  testimonial: {
    quote: string
    authorName: string
    authorRole: string
    avatar: { asset: { _id: string; url: string } | null; alt?: string } | null
    logo: { asset: { _id: string; url: string } | null; alt?: string } | null
  } | null
  imageCard: {
    asset: { url: string } | null
    alt?: string
  } | null
}

const getCaseStudy = cache(async (slug: string): Promise<CaseStudy | null> => {
  return client.fetch(CASE_STUDY_BY_SLUG_QUERY, { slug })
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) return { title: 'Caso de éxito no encontrado' }

  return {
    title: truncate(caseStudy.title, 60),
    description: truncate(caseStudy.subtitle, 160),
    alternates: { canonical: `/casos-de-exito/${slug}` },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) notFound()

  // This card always shows both the author's photo and the client's logo
  // watermark side by side, so — unlike other testimonial placements —
  // it requires both, not just the avatar.
  const testimonialImages =
    caseStudy.testimonial?.logo?.asset?._id ? testimonialImageProps(caseStudy.testimonial) : null

  return (
    <main>
      <HeroSection
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        year={caseStudy.year}
        duration={caseStudy.duration}
        client={caseStudy.client}
      />
      <ContextSection context={caseStudy.context} />
      <ChallengeSection question={caseStudy.challengeQuestion} text={caseStudy.challengeText} />
      <SolutionSection title={caseStudy.solutionTitle} text={caseStudy.solutionText} />
      <ResultsSection results={caseStudy.results} />
      <ProcessSection
        title={caseStudy.processTitle}
        text={caseStudy.processText}
        images={caseStudy.processImages}
      />
      <BeforeAfterSection
        beforeItems={caseStudy.beforeItems}
        afterItems={caseStudy.afterItems}
      />
      {testimonialImages && (
        <TestimonialSection
          quote={caseStudy.testimonial!.quote}
          authorName={caseStudy.testimonial!.authorName}
          authorRole={caseStudy.testimonial!.authorRole}
          {...testimonialImages}
        />
      )}
      <CtaSection
        title="Exploremos juntos cómo incorporar la IA en tu editorial"
        subtitle="La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad."
      />
    </main>
  )
}
