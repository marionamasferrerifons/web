import type { ReactNode } from 'react'

export type CardCopy = { title: string; body: string }
export type Step = { step: string; title: string; desc: string }
export type IncludeItem = { title: string; desc: string }
export type Ventaja = { label: string; title: string; desc: string }

export type EcosistemaContent = {
  hero: {
    tag: string
    title: ReactNode
    body: string
    ctaLabel: string
  }
  problemPills: {
    title: ReactNode
    pills: { dot: string; text: string; mlClass: string }[]
  }
  threeLayers: {
    tag: string
    title: ReactNode
    subtitle: string
    desktopCards: { left: CardCopy; right: CardCopy; bottom: CardCopy }
    mobileCards: CardCopy[]
    result: { title: string; body: string }
    mobileResult: { title: string; body: string }
  }
  systemSteps: {
    tag: string
    title: ReactNode
    subtitle: string
    cardTitle: string
    cardBody: string
    stepsHeading: string
    stepsSubtitle: string
    resultsBadge: string
    steps: Step[]
    whatItIncludesLabel: string
    includes: IncludeItem[]
  }
  impactStats: {
    tag: string
    title: ReactNode
    statLabel: string
    statDescDesktop: string
    statDescMobile: string
    rightText: string
    checkItems: string[]
  }
  advantages: {
    tag: string
    title: ReactNode
    ventajas: Ventaja[]
    illustrationAlt: string
  }
  closingCta: {
    title: string
    body: string
    ctaLabel: string
  }
}
