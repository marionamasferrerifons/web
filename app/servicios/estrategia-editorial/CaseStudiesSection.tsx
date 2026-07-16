import { client } from '@/sanity/client'
import { CASE_STUDIES_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'
import CaseStudiesClient from './CaseStudiesClient'

type CaseStudy = {
  _id: string
  title: string
  subtitle: string
  client: string
  slug: string
  imageCard: {
    asset: { url: string } | null
    alt?: string
  } | null
}

type IndustryLogo = {
  name: string
  logo: {
    asset: { url: string } | null
    alt?: string
  } | null
}

type CaseStudiesSectionProps = {
  tag?: string
  title?: React.ReactNode
  subtitle?: string
}

export default async function CaseStudiesSection({ tag, title, subtitle }: CaseStudiesSectionProps = {}) {
  const [caseStudies, logos]: [CaseStudy[], IndustryLogo[]] = await Promise.all([
    client.fetch(CASE_STUDIES_QUERY),
    client.fetch(INDUSTRY_LOGOS_QUERY),
  ])

  if (caseStudies.length === 0) return null

  return <CaseStudiesClient caseStudies={caseStudies} logos={logos} tag={tag} title={title} subtitle={subtitle} />
}
