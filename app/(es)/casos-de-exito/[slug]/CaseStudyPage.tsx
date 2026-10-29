import { cache } from 'react'
import type { Metadata } from 'next'
import type { PortableTextBlock } from '@portabletext/react'
import { client } from '@/sanity/client'
import { CASE_STUDY_BY_SLUG_QUERY, CASE_STUDY_SLUGS_QUERY } from '@/sanity/queries'
import { truncate } from '@/lib/seo'
import { alternatesFor, caseStudyPath, type Locale } from '@/lib/i18n'
import { caseStudyLabels } from '@/content/casos-de-exito'
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

// Plantilla de cas d'èxit, compartida per app/(es)/casos-de-exito/[slug] i
// app/ca/casos-dexit/[slug]. Cada idioma llegeix els seus documents de Sanity.

export type CaseStudy = {
  _id: string
  esSlug: string | null
  caSlug: string | null
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

export const getCaseStudy = cache(async (slug: string, locale: Locale): Promise<CaseStudy | null> => {
  return client.fetch(CASE_STUDY_BY_SLUG_QUERY, { slug, language: locale })
})

export async function caseStudyStaticParams(locale: Locale) {
  const caseStudies: { slug: string }[] = await client.fetch(CASE_STUDY_SLUGS_QUERY, { language: locale })
  return caseStudies.map(({ slug }) => ({ slug }))
}

export async function caseStudyMetadata(slug: string, locale: Locale): Promise<Metadata> {
  const caseStudy = await getCaseStudy(slug, locale)

  if (!caseStudy) return { title: caseStudyLabels[locale].notFoundTitle }

  // Només s'anuncia l'altre idioma (hreflang) quan el cas té traducció.
  const otherSlug = locale === 'es' ? caseStudy.caSlug : caseStudy.esSlug
  const self = caseStudyPath(slug, locale)
  const alternates = otherSlug
    ? alternatesFor(
        locale === 'es'
          ? { es: self, ca: caseStudyPath(otherSlug, 'ca') }
          : { es: caseStudyPath(otherSlug, 'es'), ca: self },
        locale,
      )
    : { canonical: self }

  return {
    title: truncate(caseStudy.title, 60),
    description: truncate(caseStudy.subtitle, 160),
    alternates,
  }
}

export default function CaseStudyPage({ caseStudy, locale }: { caseStudy: CaseStudy; locale: Locale }) {
  const labels = caseStudyLabels[locale]

  // This card always shows both the author's photo and the client's logo
  // watermark side by side, so — unlike other testimonial placements —
  // it requires both, not just the avatar.
  const testimonialImages =
    caseStudy.testimonial?.logo?.asset?._id ? testimonialImageProps(caseStudy.testimonial) : null

  return (
    <main>
      <HeroSection
        locale={locale}
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        year={caseStudy.year}
        duration={caseStudy.duration}
        client={caseStudy.client}
      />
      <ContextSection locale={locale} context={caseStudy.context} />
      <ChallengeSection locale={locale} question={caseStudy.challengeQuestion} text={caseStudy.challengeText} />
      <SolutionSection locale={locale} title={caseStudy.solutionTitle} text={caseStudy.solutionText} />
      <ResultsSection locale={locale} results={caseStudy.results} />
      <ProcessSection
        locale={locale}
        title={caseStudy.processTitle}
        text={caseStudy.processText}
        images={caseStudy.processImages}
      />
      <BeforeAfterSection
        locale={locale}
        beforeItems={caseStudy.beforeItems}
        afterItems={caseStudy.afterItems}
      />
      {testimonialImages && (
        <TestimonialSection
          locale={locale}
          quote={caseStudy.testimonial!.quote}
          authorName={caseStudy.testimonial!.authorName}
          authorRole={caseStudy.testimonial!.authorRole}
          {...testimonialImages}
        />
      )}
      <CtaSection locale={locale} title={labels.cta.title} subtitle={labels.cta.subtitle} />
    </main>
  )
}
