import type { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { CASE_STUDY_SLUGS_QUERY, CASE_STUDY_SLUG_PAIRS_QUERY } from '@/sanity/queries'
import { SITE_URL } from '@/lib/constants'
import { ROUTES, caseStudyPath, type CaseStudySlugPair, type Locale } from '@/lib/i18n'

const absolute = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`

// Cada entrada anuncia també la seva versió en l'altre idioma (hreflang).
const languages = (paths: Record<Locale, string>) => ({
  languages: { es: absolute(paths.es), ca: absolute(paths.ca) },
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [esCases, caCases, pairs] = await Promise.all([
    client.fetch<{ slug: string; _updatedAt: string }[]>(CASE_STUDY_SLUGS_QUERY, { language: 'es' }),
    client.fetch<{ slug: string; _updatedAt: string }[]>(CASE_STUDY_SLUGS_QUERY, { language: 'ca' }),
    client.fetch<CaseStudySlugPair[]>(CASE_STUDY_SLUG_PAIRS_QUERY),
  ])

  const staticEntries: MetadataRoute.Sitemap = ROUTES.flatMap((route) =>
    (['es', 'ca'] as const).map((locale) => ({
      url: absolute(route[locale]),
      lastModified: new Date(),
      alternates: languages(route),
    })),
  )

  const caseStudyEntries = (cases: { slug: string; _updatedAt: string }[], locale: Locale): MetadataRoute.Sitemap =>
    cases.map(({ slug, _updatedAt }) => {
      const pair = pairs.find((p) => p[locale] === slug)
      return {
        url: absolute(caseStudyPath(slug, locale)),
        lastModified: new Date(_updatedAt),
        ...(pair && { alternates: languages({ es: caseStudyPath(pair.es, 'es'), ca: caseStudyPath(pair.ca, 'ca') }) }),
      }
    })

  return [...staticEntries, ...caseStudyEntries(esCases, 'es'), ...caseStudyEntries(caCases, 'ca')]
}
