import { client } from '@/sanity/client';
import { CASE_STUDIES_QUERY } from '@/sanity/queries';
import { navContentEs } from '@/content/nav/es';
import { navContentCa } from '@/content/nav/ca';
import FooterClient from './FooterClient';

export default async function Footer({ locale = 'es' }: { locale?: 'es' | 'ca' }) {
  const c = locale === 'ca' ? navContentCa : navContentEs
  const caseStudiesHrefPrefix = locale === 'ca' ? '/ca/casos-dexit' : '/casos-de-exito'
  let caseStudiesItems: { href: string; label: string }[] = []

  try {
    const caseStudies: { _id: string; title: string; slug: string | null }[] = await client.fetch(CASE_STUDIES_QUERY, { language: locale })
    caseStudiesItems = caseStudies
      .filter((c) => c.slug)
      .map((c) => ({ href: `${caseStudiesHrefPrefix}/${c.slug}`, label: c.title }))
  } catch (error) {
    console.error('Footer: failed to fetch case studies from Sanity', error)
  }

  return <FooterClient content={c} caseStudiesItems={caseStudiesItems} />
}
