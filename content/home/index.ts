import type { Locale } from '@/lib/i18n'
import { homeContentEs, type HomeContent } from './es'
import { homeContentCa } from './ca'

export type { HomeContent }
export const homeContent: Record<Locale, HomeContent> = { es: homeContentEs, ca: homeContentCa }
