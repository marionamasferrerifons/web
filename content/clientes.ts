import type { Locale } from '@/lib/i18n'

/** Textos fixos de l'espai de clients. L'idioma el marca cada client (`ClientSpace.locale`). */
export const clientCopy: Record<
  Locale,
  {
    workspace: string
    workspaceShared: string
    homeLabel: string
    greeting: string
    projects: string
    version: string
    privateNotice: string
    questions: string
    proposalComments: string
  }
> = {
  es: {
    workspace: 'Espacio de trabajo',
    workspaceShared: 'Espacio de trabajo compartido',
    homeLabel: 'Ir a la web de Mariona Masferrer i Fons',
    greeting: 'Hola, equipo de',
    projects: 'Proyectos activos',
    version: 'Versión',
    privateNotice: 'Espacio privado. Por favor, no compartas este enlace fuera de tu equipo.',
    questions: '¿Dudas?',
    proposalComments: '¿Comentarios sobre la propuesta?',
  },
  ca: {
    workspace: 'Espai de treball',
    workspaceShared: 'Espai de treball compartit',
    homeLabel: 'Ves a la web de Mariona Masferrer i Fons',
    greeting: 'Hola, equip de',
    projects: 'Projectes',
    version: 'Versió',
    privateNotice: 'Espai privat. Si us plau, no compartiu aquest enllaç fora del vostre equip.',
    questions: 'Dubtes?',
    proposalComments: 'Comentaris sobre la proposta?',
  },
}
