import type { Locale } from '@/lib/i18n'
import type { NavContent } from './types'
import { navContentEs } from './es'
import { navContentCa } from './ca'

export const navContent: Record<Locale, NavContent> = { es: navContentEs, ca: navContentCa }
