import { caseStudyPath, localizedPath, type Locale } from '@/lib/i18n';
import { fetchLocalized } from '@/sanity/fetchLocalized';
import { CASE_STUDIES_QUERY } from '@/sanity/queries';
import { navContent } from '@/content/nav';
import FooterClient from './FooterClient';

export default async function Footer({ locale }: { locale: Locale }) {
  let caseStudiesItems: { href: string; label: string }[] = []

  try {
    const caseStudies = await fetchLocalized<{ _id: string; title: string; slug: string | null }[]>(CASE_STUDIES_QUERY, locale)
    caseStudiesItems = caseStudies.data
      .filter((c) => c.slug)
      .map((c) => ({ href: caseStudyPath(c.slug!, caseStudies.locale), label: c.title }))
  } catch (error) {
    console.error('Footer: failed to fetch case studies from Sanity', error)
  }

  return (
    <FooterClient
      content={navContent[locale]}
      homeHref={localizedPath('/', locale)}
      aboutHref={localizedPath('/sobre-mi', locale)}
      caseStudiesItems={caseStudiesItems}
    />
  )
}
