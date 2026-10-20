import type { Locale } from '@/lib/i18n'

// Etiquetes fixes de la plantilla de cas d'èxit; la resta del text ve de Sanity.
const caseStudyLabelsEs = {
  tag: '[CASO DE ÉXITO]',
  context: 'Contexto',
  challenge: 'Reto',
  solution: 'Solución',
  results: 'Resultados',
  before: 'Antes',
  after: 'Después',
  enlargeImage: 'Ampliar imagen',
  close: 'Cerrar',
  notFoundTitle: 'Caso de éxito no encontrado',
  cta: {
    title: 'Exploremos juntos cómo incorporar la IA en tu editorial',
    subtitle: 'La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad.',
  },
}

export type CaseStudyLabels = typeof caseStudyLabelsEs

export const caseStudyLabels: Record<Locale, CaseStudyLabels> = {
  es: caseStudyLabelsEs,
  // Esborrany traduït amb IA (2026-10-19) — pendent de revisió de la Mariona.
  ca: {
    tag: "[CAS D'ÈXIT]",
    context: 'Context',
    challenge: 'Repte',
    solution: 'Solució',
    results: 'Resultats',
    before: 'Abans',
    after: 'Després',
    enlargeImage: 'Ampliar la imatge',
    close: 'Tancar',
    notFoundTitle: "Cas d'èxit no trobat",
    cta: {
      title: 'Explorem junts com incorporar la IA a la teva editorial',
      subtitle: "La IA no s'incorpora des de fora ni de manera experimental. Forma part del procés editorial, integrada en el dia a dia i amb criteris clars de qualitat.",
    },
  },
}
