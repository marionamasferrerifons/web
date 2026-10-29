import type { Locale } from '@/lib/i18n'
import { formacionContentEs, type FormacionContent } from './es'
import { formacionContentCa } from './ca'

export type { FormacionContent }
export const formacionContent: Record<Locale, FormacionContent> = { es: formacionContentEs, ca: formacionContentCa }
