import type { Metadata } from 'next'
import HeroSection from './HeroSection'
import DecisionsSection from './DecisionsSection'
import WorkProcessSection from './WorkProcessSection'
import CollaborationSection from './CollaborationSection'
import CaseHighlightSection from '@/components/service/CaseHighlightSection'
import ActionButtons from '@/components/service/ActionButtons'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { fetchLocalized, type PlacementTestimonial } from '@/sanity/fetchLocalized'
import { TESTIMONIAL_BY_PLACEMENT_QUERY, CASE_STUDY_CARD_BY_SLUG_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'
import { testimonialImageProps, industryLogoUrl, caseStudyCardImageUrl, caseStudySummaryImageUrl } from '@/sanity/image'
import { routeAlternates, type Locale } from '@/lib/i18n'
import { estrategiaContent } from '@/content/estrategia-de-ia'

// Cos de la pàgina, compartit per app/(es)/servicios/estrategia-de-ia i
// app/ca/serveis/estrategia-dia.

export function estrategiaMetadata(locale: Locale): Metadata {
  const c = estrategiaContent[locale].metadata
  return {
    title: c.title,
    description: c.description,
    alternates: routeAlternates('/servicios/estrategia-de-ia', locale),
  }
}

// Slug castellà del cas; la query també troba la seva traducció catalana.
const ALTAMAR_CASE_SLUG = 'estrategia-de-ia'

type RawImage = { asset: { _id: string; url: string } | null; alt?: string } | null
type CaseStudyCard = { slug: string; imageCard: RawImage; summaryImage: RawImage } | null
type IndustryLogo = { name: string; logo: RawImage }

export default async function EstrategiaPage({ locale }: { locale: Locale }) {
  const c = estrategiaContent[locale]
  const [{ data: testimonial }, { data: caseStudy, locale: caseLocale }, logos] = await Promise.all([
    fetchLocalized<PlacementTestimonial>(TESTIMONIAL_BY_PLACEMENT_QUERY, locale, { placement: 'estrategia-editorial' }),
    fetchLocalized<CaseStudyCard>(CASE_STUDY_CARD_BY_SLUG_QUERY, locale, { slug: ALTAMAR_CASE_SLUG }),
    client.fetch<IndustryLogo[]>(INDUSTRY_LOGOS_QUERY),
  ])

  const testimonialImages = testimonialImageProps(testimonial)

  const matchedLogo = caseStudy
    ? logos.find((l) => l.name.toLowerCase().includes('altamar'))
    : null

  // La fitxa resum prioritza la imatge pròpia (summaryImage); mentre el
  // document de Sanity no la tingui encara, cau a la imatge de la tarjeta
  // (imageCard) perquè la targeta no es quedi sense imatge.
  const summaryImage = caseStudy?.summaryImage?.asset?._id
    ? { url: caseStudySummaryImageUrl(caseStudy.summaryImage.asset._id), alt: caseStudy.summaryImage.alt }
    : caseStudy?.imageCard?.asset?._id
      ? { url: caseStudyCardImageUrl(caseStudy.imageCard.asset._id), alt: caseStudy.imageCard.alt }
      : null

  return (
    <main className="optical-auto">
      <HeroSection locale={locale} />
      <DecisionsSection locale={locale} />
      <WorkProcessSection locale={locale} />
      <CollaborationSection locale={locale} />
      {caseStudy && (
        <CaseHighlightSection
          locale={locale}
          slug={caseStudy.slug}
          slugLocale={caseLocale}
          title={c.caseHighlight.title}
          paragraphs={c.caseHighlight.paragraphs}
          facts={c.caseHighlight.facts}
          linkLabel={c.caseHighlight.linkLabel}
          imageUrl={summaryImage?.url}
          imageAlt={summaryImage?.alt}
          logoUrl={matchedLogo?.logo?.asset?._id ? industryLogoUrl(matchedLogo.logo.asset._id) : undefined}
          logoAlt={matchedLogo?.logo?.alt ?? 'Altamar'}
        />
      )}
      {testimonial && testimonialImages && (
        <TestimonialSection
          locale={locale}
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...testimonialImages}
        />
      )}
      <CtaSection
        locale={locale}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        subtitleMaxWidth="460px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" locale={locale} />}
      />
    </main>
  )
}
