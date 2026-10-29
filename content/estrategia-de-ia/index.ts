import type { Locale } from '@/lib/i18n'
import { estrategiaContentEs, type EstrategiaContent } from './es'
import { estrategiaContentCa } from './ca'

export type { EstrategiaContent }
export const estrategiaContent: Record<Locale, EstrategiaContent> = { es: estrategiaContentEs, ca: estrategiaContentCa }
