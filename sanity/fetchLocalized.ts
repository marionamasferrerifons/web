import { client } from './client'
import type { Locale } from '@/lib/i18n'

const isEmpty = (data: unknown) => data == null || (Array.isArray(data) && data.length === 0)

/**
 * Executa una query filtrada per idioma. Si en català no hi ha cap document
 * (encara no s'ha traduït o publicat), torna la versió castellana perquè la
 * pàgina no quedi buida. `locale` indica de quin idioma ha sortit el resultat.
 */
export async function fetchLocalized<T>(
  query: string,
  locale: Locale,
  params: Record<string, unknown> = {},
): Promise<{ data: T; locale: Locale }> {
  const data = await client.fetch<T>(query, { ...params, language: locale })
  if (locale === 'ca' && isEmpty(data)) {
    return { data: await client.fetch<T>(query, { ...params, language: 'es' }), locale: 'es' }
  }
  return { data, locale }
}

type RawImage = { asset: { _id: string; url: string } | null; alt?: string } | null

/** Resultat de TESTIMONIAL_BY_PLACEMENT_QUERY. */
export type PlacementTestimonial = {
  quote: string
  authorName: string
  authorRole: string
  avatar: RawImage
  logo: RawImage
} | null
