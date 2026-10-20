import { notFound, permanentRedirect, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import CaseStudyPage, { caseStudyMetadata, caseStudyStaticParams, getCaseStudy } from '@/app/(es)/casos-de-exito/[slug]/CaseStudyPage'
import { client } from '@/sanity/client'
import { CASE_STUDY_TRANSLATION_SLUG_QUERY } from '@/sanity/queries'
import { caseStudyPath } from '@/lib/i18n'

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export function generateStaticParams() {
  return caseStudyStaticParams('ca')
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return caseStudyMetadata(slug, 'ca')
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug, 'ca')

  if (!caseStudy) {
    // Els textos fixos enllacen els casos pel slug castellà: si la traducció
    // catalana té un altre slug, s'hi redirigeix; si encara no n'hi ha cap de
    // publicada, es mostra el cas en castellà.
    const translatedSlug: string | null = await client.fetch(CASE_STUDY_TRANSLATION_SLUG_QUERY, { slug })
    if (translatedSlug) permanentRedirect(caseStudyPath(translatedSlug, 'ca'))
    if (await getCaseStudy(slug, 'es')) redirect(caseStudyPath(slug, 'es'))
    notFound()
  }

  return <CaseStudyPage caseStudy={caseStudy} locale="ca" />
}
