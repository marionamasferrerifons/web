import type { Metadata } from 'next'
import HeroSection from './HeroSection'
import ModalitiesSection from './ModalitiesSection'
import ProductionSystemSection from './ProductionSystemSection'
import EditorialProjectsSection, { type EditorialProject } from './EditorialProjectsSection'
import CaseHighlightSection from '@/components/service/CaseHighlightSection'
import ActionButtons from '@/components/service/ActionButtons'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { fetchLocalized, type PlacementTestimonial } from '@/sanity/fetchLocalized'
import {
  TESTIMONIAL_BY_PLACEMENT_QUERY,
  CASE_STUDY_CARD_BY_SLUG_QUERY,
  INDUSTRY_LOGOS_QUERY,
  EDITORIAL_PROJECTS_QUERY,
} from '@/sanity/queries'
import { testimonialImageProps, industryLogoUrl, caseStudyCardImageUrl, caseStudySummaryImageUrl } from '@/sanity/image'
import { routeAlternates, type Locale } from '@/lib/i18n'
import { produccionContent } from '@/content/produccion'

// Cos de la pàgina, compartit per app/(es)/servicios/produccion-editorial-con-ia
// i app/ca/serveis/produccio-editorial-amb-ia.

export function produccionMetadata(locale: Locale): Metadata {
  const c = produccionContent[locale].metadata
  return {
    title: c.title,
    description: c.description,
    alternates: routeAlternates('/servicios/produccion-editorial-con-ia', locale),
  }
}

// Slug castellà del cas; la query també troba la seva traducció catalana.
const ALTAMAR_CASE_SLUG = 'altamar-produccion-editorial-claude'

type RawImage = { asset: { _id: string; url: string } | null; alt?: string } | null
type CaseStudyCard = { slug: string; imageCard: RawImage; summaryImage: RawImage } | null
type IndustryLogo = { name: string; logo: RawImage }

export default async function ProduccionPage({ locale }: { locale: Locale }) {
  const c = produccionContent[locale]
  const [{ data: testimonial }, { data: caseStudy, locale: caseLocale }, logos, { data: projects }] = await Promise.all([
    fetchLocalized<PlacementTestimonial>(TESTIMONIAL_BY_PLACEMENT_QUERY, locale, { placement: 'ecosistema-produccion-editorial' }),
    fetchLocalized<CaseStudyCard>(CASE_STUDY_CARD_BY_SLUG_QUERY, locale, { slug: ALTAMAR_CASE_SLUG }),
    client.fetch<IndustryLogo[]>(INDUSTRY_LOGOS_QUERY),
    fetchLocalized<EditorialProject[]>(EDITORIAL_PROJECTS_QUERY, locale),
  ])

  const testimonialImages = testimonialImageProps(testimonial)

  const matchedLogo = caseStudy
    ? logos.find((l) => l.name.toLowerCase().includes('altamar'))
    : null

  // Igual que a Estrategia: prioritza la imatge resum (4:3) i, si el cas encara
  // no en té, cau a la imatge de la targeta.
  const summaryImage = caseStudy?.summaryImage?.asset?._id
    ? { url: caseStudySummaryImageUrl(caseStudy.summaryImage.asset._id), alt: caseStudy.summaryImage.alt }
    : caseStudy?.imageCard?.asset?._id
      ? { url: caseStudyCardImageUrl(caseStudy.imageCard.asset._id), alt: caseStudy.imageCard.alt }
      : null

  return (
    <main className="optical-auto">
      <HeroSection locale={locale} />
      <ModalitiesSection locale={locale} />
      <ProductionSystemSection locale={locale} />
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
          flushTop
        />
      )}
      {testimonial && testimonialImages && (
        <TestimonialSection
          locale={locale}
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...testimonialImages}
          cardColor="var(--color-green)"
        />
      )}
      <EditorialProjectsSection projects={projects} locale={locale} />
      <CtaSection
        locale={locale}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        subtitleMaxWidth="560px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" whatsappTopic="produccion" locale={locale} />}
      />
    </main>
  )
}
