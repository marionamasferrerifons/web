import type { ReactNode } from 'react'
import type { ValueCardProps } from '@/app/(es)/sobre-mi/ValuesSection'
import type { HistoryEntryData } from '@/app/(es)/sobre-mi/HistorySection'

export type SobreMiContent = {
  hero: {
    tag: string
    title: ReactNode
    body: string
    photoAlt: string
  }
  values: {
    tag: string
    title: string
    items: ValueCardProps[]
  }
  history: {
    tag: string
    title: string
    entries: HistoryEntryData[]
  }
  quote: {
    tag: string
    quote: ReactNode
  }
  linkedin: {
    name: string
    description: string
    ctaLabel: string
    photoAlt: string
  }
  cta: {
    title: string
    subtitle: string
  }
}
