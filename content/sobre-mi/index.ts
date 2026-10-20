import type { Locale } from '@/lib/i18n'
import { sobreMiContentEs, type SobreMiContent } from './es'
import { sobreMiContentCa } from './ca'

export type { SobreMiContent }
export const sobreMiContent: Record<Locale, SobreMiContent> = { es: sobreMiContentEs, ca: sobreMiContentCa }
