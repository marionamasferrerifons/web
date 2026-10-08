'use client'

import ErrorState from '@/app/error'

/**
 * app/error.tsx és un Client Component que espera un `reset` de tipus
 * funció. Un Server Component no pot passar una funció a través del
 * límit RSC, així que aquest embolcall (ell mateix Client Component)
 * crea el `reset` fictici des del costat client.
 */
export default function ErrorStatePreview() {
  return <ErrorState error={new Error('Error de demostració per a la galeria')} reset={() => {}} />
}
