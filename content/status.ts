import type { Locale } from '@/lib/i18n'
import type { NotFoundCopy } from '@/components/status/NotFoundContent'
import type { ErrorCopy } from '@/components/status/ErrorContent'

export const notFoundCopy: Record<Locale, NotFoundCopy> = {
  es: {
    title: 'Esta página no existe',
    body: 'Puede que el enlace esté roto o que la página se haya movido.',
    cta: 'Volver al inicio',
    href: '/',
  },
  ca: {
    title: 'Aquesta pàgina no existeix',
    body: "Potser l'enllaç està trencat o la pàgina s'ha mogut.",
    cta: "Tornar a l'inici",
    href: '/ca',
  },
}

export const errorCopy: Record<Locale, ErrorCopy> = {
  es: { title: 'Algo ha ido mal', body: 'Vuelve a intentarlo en unos segundos.', retry: 'Reintentar' },
  ca: { title: 'Alguna cosa ha fallat', body: "Torna-ho a provar d'aquí a uns segons.", retry: 'Tornar-ho a provar' },
}

export const loadingLabel: Record<Locale, string> = { es: 'Cargando', ca: 'Carregant' }
