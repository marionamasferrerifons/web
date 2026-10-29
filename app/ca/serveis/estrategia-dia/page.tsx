import EstrategiaPage, { estrategiaMetadata } from '@/app/(es)/servicios/estrategia-de-ia/EstrategiaPage'

export const metadata = estrategiaMetadata('ca')

// Red de seguridad: el webhook de app/api/revalidate es el mecanismo principal
// de refresc; això només acota el pitjor cas si es perd un event de publicació.
export const revalidate = 3600

export default function Page() {
  return <EstrategiaPage locale="ca" />
}
