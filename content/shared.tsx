import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'

const accent = (text: string) => <span style={{ color: 'var(--color-orange-400)' }}>{text}</span>

type SharedContent = {
  actionButtons: { booking: string; whatsapp: string; note: string }
  cta: { title: string; subtitle: string; button: string }
  testimonial: { tag: string; title: ReactNode }
  caseStudies: { tag: string; title: ReactNode; subtitle: string }
  caseHighlight: { tag: string }
}

// Textos dels components compartits entre pàgines (components/service i
// app/(es)/servicios/estrategia-editorial).
export const sharedContent: Record<Locale, SharedContent> = {
  es: {
    actionButtons: {
      booking: 'Reservar una sesión gratuita',
      whatsapp: 'Hablar por WhatsApp',
      note: '1 hora para entender tu necesidad y valorar cómo puedo ayudarte. O, si lo prefieres, escríbeme y empezamos a hablar.',
    },
    cta: {
      title: 'Ninguna decisión sobre IA se toma bien desde la prisa.',
      subtitle: 'Reserva una llamada para explorar las posibilidades reales que la IA ofrece a tu editorial.',
      button: 'Reservar una llamada',
    },
    testimonial: {
      tag: '[Testimonios]',
      title: <>Esto es lo que dicen {accent('mis clientes')}</>,
    },
    caseStudies: {
      tag: '[Casos de éxito]',
      title: <>Explora cómo he {accent('ayudado')} a otras editoriales</>,
      subtitle: 'Experiencias de editoriales educativas que ya han trabajado conmigo. Descubre cómo hemos colaborado y los resultados que hemos conseguido.',
    },
    caseHighlight: { tag: '[Caso de éxito]' },
  },
  // Esborrany traduït amb IA (2026-10-19) — pendent de revisió de la Mariona.
  ca: {
    actionButtons: {
      booking: 'Reservar una sessió gratuïta',
      whatsapp: 'Parlar per WhatsApp',
      note: "1 hora per entendre la teva necessitat i valorar com et puc ajudar. O, si ho prefereixes, escriu-me i comencem a parlar.",
    },
    cta: {
      title: "Cap decisió sobre IA no es pren bé des de la pressa.",
      subtitle: 'Reserva una trucada per explorar les possibilitats reals que la IA ofereix a la teva editorial.',
      button: 'Reservar una trucada',
    },
    testimonial: {
      tag: '[Testimonis]',
      title: <>Això és el que diuen {accent('els meus clients')}</>,
    },
    caseStudies: {
      tag: "[Casos d'èxit]",
      title: <>Explora com he {accent('ajudat')} altres editorials</>,
      subtitle: "Experiències d'editorials educatives que ja han treballat amb mi. Descobreix com hem col·laborat i els resultats que hem aconseguit.",
    },
    caseHighlight: { tag: "[Cas d'èxit]" },
  },
}
