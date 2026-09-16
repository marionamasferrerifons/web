import type { ReactNode } from 'react'

export type HomeContent = {
  hero: {
    tag: string
    title: ReactNode
    body: string
    ctaLabel: string
    photoAlt: string
  }
  logos: {
    tag: string
  }
  challenges: {
    title: ReactNode
    items: {
      avatar: string
      size: number
      left: number
      top: number
      label: string
      side: 'left' | 'right'
    }[]
  }
  problem: {
    title: ReactNode
  }
  criterio: {
    tag: string
    title: ReactNode
    subtitle: string
    editorial: { name: string; boldLine: string; bodyLine: string }
    pedagogia: { name: string; boldLine: string; bodyLine: string }
    tecnologia: { name: string; boldLine: string; bodyLine: string }
  }
  practice: {
    tag: string
    title: ReactNode
    subtitle: string
    cards: { title: string; body: string; icon: string }[]
  }
  services: {
    tag: string
    title: ReactNode
    cards: {
      href: string
      title: string
      subtitle: string
      body: string
      image: string
      bgColor: string
      imageSide: 'left' | 'right'
    }[]
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
