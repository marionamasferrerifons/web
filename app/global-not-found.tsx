import type { Metadata } from 'next'
import NotFoundContent from '@/components/status/NotFoundContent'
import { notFoundCopy } from '@/content/status'
import { RootDocument } from '@/lib/rootDocument'

// Amb un layout arrel per idioma no hi ha app/layout.tsx que pugui pintar la
// 404 de les URL que no coincideixen amb cap ruta: ho fa aquest fitxer
// (experimental.globalNotFound a next.config.js). Les URL /ca/... les recull
// app/ca/[...rest] i mostren la 404 en català.
export const metadata: Metadata = {
  title: 'Página no encontrada · Mariona Masferrer i Fons',
}

export default function GlobalNotFound() {
  return (
    <RootDocument locale="es">
      <NotFoundContent {...notFoundCopy.es} />
    </RootDocument>
  )
}
