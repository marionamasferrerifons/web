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

export default async function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = await client.fetch(CASE_STUDIES_QUERY)

  if (caseStudies.length === 0) return null

  return <CaseStudiesClient caseStudies={caseStudies} />
}
