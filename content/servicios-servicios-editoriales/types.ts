import type { ReactNode } from 'react'

export type ServiciosEditorialesContent = {
  hero: {
    tag: string
    title: ReactNode
    body: string
    ctaLabel: string
  }
  painPoints: {
    title1: string
    title2: ReactNode
    row1: { dot: string; text: string; indent?: boolean }[]
    row2: { dot: string; text: string; indent?: boolean }[]
  }
  offerings: {
    tag: string
    title: ReactNode
    subtitle: string
    mainCardTitle: string
    mainCardBody: string
    serviceCards: { icon: string; iconSize: number; title: string; description: string }[]
    whatYoullGetLabel: string
    outcomes: string[]
  }
  projects: {
    tag: string
    title: ReactNode
    subtitle: string
    prevLabel: string
    nextLabel: string
    metaLabels: { role: string; grade: string; publisher: string }
  }
  cta: {
    title: string
    subtitle: string
  }
}
