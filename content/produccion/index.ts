import type { Locale } from '@/lib/i18n'
import { produccionContentEs, type ProduccionContent } from './es'
import { produccionContentCa } from './ca'

export type { ProduccionContent }
export const produccionContent: Record<Locale, ProduccionContent> = { es: produccionContentEs, ca: produccionContentCa }
