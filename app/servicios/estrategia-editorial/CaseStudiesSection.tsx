import { client } from '@/sanity/client'
import { CASE_STUDIES_QUERY } from '@/sanity/queries'
import CaseStudiesClient from './CaseStudiesClient'

type CaseStudy = {
  _id: string
  title: string
  subtitle: string
  slug: string
  imageCard: {
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
  const caseStudies: CaseStudy[] = await client.fetch(CASE_STUDIES_QUERY)

  if (caseStudies.length === 0) return null

  return <CaseStudiesClient caseStudies={caseStudies} tag={tag} title={title} subtitle={subtitle} />
}
