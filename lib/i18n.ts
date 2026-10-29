import type { Metadata } from 'next'

export type Locale = 'es' | 'ca'

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'es', label: 'Castellano' },
  { code: 'ca', label: 'Català' },
]

// Rutes equivalents entre idiomes: una sola font per al selector d'idioma,
// l'hreflang i el sitemap. Afegir aquí qualsevol pàgina nova que es tradueixi.
export const ROUTES = [
  { es: '/', ca: '/ca' },
  { es: '/enfoque', ca: '/ca/enfocament' },
  { es: '/sobre-mi', ca: '/ca/sobre-mi' },
  { es: '/servicios/estrategia-de-ia', ca: '/ca/serveis/estrategia-dia' },
  { es: '/servicios/produccion-editorial-con-ia', ca: '/ca/serveis/produccio-editorial-amb-ia' },
  { es: '/servicios/formacion-en-ia', ca: '/ca/serveis/formacio-en-ia' },
] as const satisfies readonly Record<Locale, string>[]

export type RouteKey = (typeof ROUTES)[number]['es']

export const CASE_STUDIES_PREFIX: Record<Locale, string> = {
  es: '/casos-de-exito',
  ca: '/ca/casos-dexit',
}

/** Ruta d'una pàgina fixa en l'idioma demanat, a partir de la ruta castellana. */
export function localizedPath(esPath: RouteKey, locale: Locale): string {
  const route = ROUTES.find((r) => r.es === esPath)
  return route ? route[locale] : esPath
}

export function caseStudyPath(slug: string, locale: Locale): string {
  return `${CASE_STUDIES_PREFIX[locale]}/${slug}`
}

export function localeFromPath(pathname: string): Locale {
  return pathname === '/ca' || pathname.startsWith('/ca/') ? 'ca' : 'es'
}

/** Parella de slugs d'un cas d'èxit i la seva traducció (per saltar d'idioma). */
export type CaseStudySlugPair = { es: string; ca: string }

/**
 * Ruta equivalent a `pathname` en l'altre idioma. Si la pàgina no té
 * traducció coneguda, porta a l'inici de l'idioma de destí.
 */
export function switchLocalePath(pathname: string, target: Locale, caseStudyPairs: CaseStudySlugPair[] = []): string {
  const current = localeFromPath(pathname)
  if (current === target) return pathname

  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  const route = ROUTES.find((r) => r[current] === normalized)
  if (route) return route[target]

  const prefix = `${CASE_STUDIES_PREFIX[current]}/`
  if (normalized.startsWith(prefix)) {
    const slug = normalized.slice(prefix.length)
    const pair = caseStudyPairs.find((p) => p[current] === slug)
    if (pair) return caseStudyPath(pair[target], target)
  }

  return localizedPath('/', target)
}

/** Canonical propi + hreflang cap a les dues versions (x-default = castellà). */
export function alternatesFor(paths: Record<Locale, string>, locale: Locale): Metadata['alternates'] {
  return {
    canonical: paths[locale],
    languages: { es: paths.es, ca: paths.ca, 'x-default': paths.es },
  }
}

/** `alternatesFor` per a una de les pàgines fixes de ROUTES. */
export function routeAlternates(esPath: RouteKey, locale: Locale): Metadata['alternates'] {
  return alternatesFor({ es: esPath, ca: localizedPath(esPath, 'ca') }, locale)
}
