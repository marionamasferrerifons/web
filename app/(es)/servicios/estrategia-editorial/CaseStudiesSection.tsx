import { client } from '@/sanity/client'
import { fetchLocalized } from '@/sanity/fetchLocalized'
import { CASE_STUDIES_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'
import type { Locale } from '@/lib/i18n'
import CaseStudiesClient from './CaseStudiesClient'

type CaseStudy = {
  _id: string
  title: string
  subtitle: string
  client: string
  slug: string
  imageCard: {
    asset: { _id: string; url: string } | null
    alt?: string
  } | null
}

type IndustryLogo = {
  name: string
  logo: {
    asset: { _id: string; url: string } | null
    alt?: string
  } | null
}

type CaseStudiesSectionProps = {
  tag?: string
  title?: React.ReactNode
  subtitle?: string
  locale?: Locale
}

export default async function CaseStudiesSection({ tag, title, subtitle, locale = 'es' }: CaseStudiesSectionProps = {}) {
  const [caseStudies, logos] = await Promise.all([
    fetchLocalized<CaseStudy[]>(CASE_STUDIES_QUERY, locale),
    client.fetch<IndustryLogo[]>(INDUSTRY_LOGOS_QUERY),
  ])

  if (caseStudies.data.length === 0) return null

  return (
    <CaseStudiesClient
      caseStudies={caseStudies.data}
      logos={logos}
      locale={locale}
      contentLocale={caseStudies.locale}
      tag={tag}
      title={title}
      subtitle={subtitle}
    />
  )
}
