import { cache } from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { PortableTextBlock } from '@portabletext/react'
import { client } from '@/sanity/client'
import { CASE_STUDY_BY_SLUG_QUERY, CASE_STUDY_SLUGS_QUERY } from '@/sanity/queries'
import { truncate } from '@/lib/seo'
import HeroSection from './CaseStudyHeroSection'
import ContextSection from './ContextSection'
import ChallengeSection from './CaseStudyChallengeSection'
import SolutionSection from './SolutionSection'
import ResultsSection from './ResultsSection'
import ProcessSection from './ProcessSection'
import BeforeAfterSection from './BeforeAfterSection'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { testimonialImageProps } from '@/sanity/image'
import { caseStudyLabelsEs } from '@/content/casos-de-exito/es'

type CaseStudy = {
  _id: string
  caTranslationSlug: string | null
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
  return client.fetch(CASE_STUDY_BY_SLUG_QUERY, { slug, language: 'es' })
})

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export async function generateStaticParams() {
  const caseStudies: { slug: string }[] = await client.fetch(CASE_STUDY_SLUGS_QUERY, { language: 'es' })
  return caseStudies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) return { title: 'Caso de éxito no encontrado' }

  const esPath = `/casos-de-exito/${slug}`
  const languages: Record<string, string> = { es: esPath, 'x-default': esPath }
  if (caseStudy.caTranslationSlug) {
    languages.ca = `/ca/casos-dexit/${caseStudy.caTranslationSlug}`
  }

  return {
    title: truncate(caseStudy.title, 60),
    description: truncate(caseStudy.subtitle, 160),
    alternates: { canonical: esPath, languages },
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

  const l = caseStudyLabelsEs

  // This card always shows both the author's photo and the client's logo
  // watermark side by side, so — unlike other testimonial placements —
  // it requires both, not just the avatar.
  const testimonialImages =
    caseStudy.testimonial?.logo?.asset?._id ? testimonialImageProps(caseStudy.testimonial) : null

  return (
    <main>
      <HeroSection
        tag={l.heroTag}
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        year={caseStudy.year}
        duration={caseStudy.duration}
        client={caseStudy.client}
      />
      <ContextSection context={caseStudy.context} label={l.contextLabel} />
      <ChallengeSection label={l.challengeLabel} question={caseStudy.challengeQuestion} text={caseStudy.challengeText} />
      <SolutionSection label={l.solutionLabel} title={caseStudy.solutionTitle} text={caseStudy.solutionText} />
      <ResultsSection results={caseStudy.results} label={l.resultsLabel} />
      <ProcessSection
        title={caseStudy.processTitle}
        text={caseStudy.processText}
        images={caseStudy.processImages}
        expandLabel={l.expandImageLabel}
        closeLabel={l.closeLabel}
      />
      <BeforeAfterSection
        beforeItems={caseStudy.beforeItems}
        afterItems={caseStudy.afterItems}
        beforeLabel={l.beforeLabel}
        afterLabel={l.afterLabel}
      />
      {testimonialImages && (
        <TestimonialSection
          quote={caseStudy.testimonial!.quote}
          authorName={caseStudy.testimonial!.authorName}
          authorRole={caseStudy.testimonial!.authorRole}
          {...testimonialImages}
        />
      )}
      <CtaSection title={l.cta.title} subtitle={l.cta.subtitle} />
    </main>
  )
}
