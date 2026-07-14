import { client } from '@/sanity/client';
import { CASE_STUDIES_QUERY } from '@/sanity/queries';
import FooterClient from './FooterClient';

export default async function Footer() {
  let caseStudiesItems: { href: string; label: string }[] = []

  try {
    const caseStudies: { _id: string; title: string; slug: string | null }[] = await client.fetch(CASE_STUDIES_QUERY)
    caseStudiesItems = caseStudies
      .filter((c) => c.slug)
      .map((c) => ({ href: `/casos-de-exito/${c.slug}`, label: c.title }))
  } catch (error) {
    console.error('Footer: failed to fetch case studies from Sanity', error)
  }

  return <FooterClient caseStudiesItems={caseStudiesItems} />
}
