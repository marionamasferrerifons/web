import type { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { CASE_STUDY_SLUGS_QUERY } from '@/sanity/queries'
import { SITE_URL } from '@/lib/constants'

const STATIC_ROUTES = [
  '',
  '/enfoque',
  '/sobre-mi',
  '/servicios/estrategia-editorial',
  '/servicios/ecosistema-produccion-editorial',
  '/servicios/servicios-editoriales',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const caseStudies: { slug: string; _updatedAt: string }[] =
    await client.fetch(CASE_STUDY_SLUGS_QUERY)

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map(({ slug, _updatedAt }) => ({
    url: `${SITE_URL}/casos-de-exito/${slug}`,
    lastModified: new Date(_updatedAt),
  }))

  return [...staticEntries, ...caseStudyEntries]
}
