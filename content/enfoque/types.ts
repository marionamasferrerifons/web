import type { ReactNode } from 'react'

export type Segment = { text: string; color: string }
export type LayerCopyText = { label: string; title: string; body: string; benefits: string[] }

export type EnfoqueContent = {
  hero: {
    tag: string
    title: ReactNode
    body: string
    ctaLabel: string
  }
  challenge: {
    titleSegments: Segment[]
    bodySegments: Segment[]
  }
  approach: {
    titleSegments: Segment[]
    bodySegments: Segment[]
  }
  criterio: {
    tag: string
    title: ReactNode
    editorial: LayerCopyText
    pedagogia: LayerCopyText
    tecnologia: LayerCopyText
  }
  workPrinciples: {
    tag: string
    title: ReactNode
    subtitle: string
    cardTitle: string
    cardBody: string
  }
  caseStudies: {
    tag: string
    title: ReactNode
    subtitle: string
  }
  cta: {
    title: string
    subtitle: string
  }
}
