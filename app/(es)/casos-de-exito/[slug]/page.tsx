import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CaseStudyPage, { caseStudyMetadata, caseStudyStaticParams, getCaseStudy } from './CaseStudyPage'

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export function generateStaticParams() {
  return caseStudyStaticParams('es')
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return caseStudyMetadata(slug, 'es')
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug, 'es')

  if (!caseStudy) notFound()

  return <CaseStudyPage caseStudy={caseStudy} locale="es" />
}
