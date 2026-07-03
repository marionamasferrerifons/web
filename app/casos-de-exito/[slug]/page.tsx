import { notFound } from 'next/navigation'
import type { PortableTextBlock } from '@portabletext/react'
import { client } from '@/sanity/client'
import { CASE_STUDY_BY_SLUG_QUERY } from '@/sanity/queries'
import HeroSection from './HeroSection'
import ContextSection from './ContextSection'
import ChallengeSection from './ChallengeSection'
import SolutionSection from './SolutionSection'
import ResultsSection from './ResultsSection'
import ProcessSection from './ProcessSection'
import BeforeAfterSection from './BeforeAfterSection'
import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'

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
  processImages: { asset: { url: string } | null; alt?: string }[]
  beforeItems: { text: PortableTextBlock[] }[]
  afterItems: { text: PortableTextBlock[] }[]
  testimonial: {
    quote: string
    authorName: string
    authorRole: string
    avatar: { asset: { url: string } | null; alt?: string } | null
    logo: { asset: { url: string } | null; alt?: string } | null
  } | null
  imageCard: {
    asset: { url: string } | null
    alt?: string
  } | null
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy: CaseStudy | null = await client.fetch(CASE_STUDY_BY_SLUG_QUERY, { slug })

  if (!caseStudy) notFound()

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
      {caseStudy.testimonial?.avatar?.asset?.url && caseStudy.testimonial?.logo?.asset?.url && (
        <TestimonialSection
          quote={caseStudy.testimonial.quote}
          authorName={caseStudy.testimonial.authorName}
          authorRole={caseStudy.testimonial.authorRole}
          avatarUrl={caseStudy.testimonial.avatar.asset.url}
          avatarAlt={caseStudy.testimonial.avatar.alt}
          logoUrl={caseStudy.testimonial.logo.asset.url}
          logoAlt={caseStudy.testimonial.logo.alt}
        />
      )}
      <CtaSection
        title="Exploremos juntos cómo incorporar la IA en tu editorial"
        subtitle="La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad."
      />
    </main>
  )
}
