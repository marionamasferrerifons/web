import { client } from '@/sanity/client';
import { CASE_STUDIES_QUERY } from '@/sanity/queries';
import FooterClient from './FooterClient';

export default async function Footer() {
  const caseStudies: { _id: string; title: string; slug: string | null }[] = await client.fetch(CASE_STUDIES_QUERY)
  const caseStudiesItems = caseStudies
    .filter((c) => c.slug)
    .map((c) => ({ href: `/casos-de-exito/${c.slug}`, label: c.title }))

  return <FooterClient caseStudiesItems={caseStudiesItems} />
}
