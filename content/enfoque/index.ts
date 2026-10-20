import type { Locale } from '@/lib/i18n'
import { enfoqueContentEs, type EnfoqueContent } from './es'
import { enfoqueContentCa } from './ca'

export type { EnfoqueContent }
export const enfoqueContent: Record<Locale, EnfoqueContent> = { es: enfoqueContentEs, ca: enfoqueContentCa }
