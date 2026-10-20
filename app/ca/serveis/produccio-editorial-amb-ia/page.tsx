import ProduccionPage, { produccionMetadata } from '@/app/(es)/servicios/produccion-editorial-con-ia/ProduccionPage'

export const metadata = produccionMetadata('ca')

// Red de seguridad: el webhook de app/api/revalidate es el mecanismo principal
// de refresc; això només acota el pitjor cas si es perd un event de publicació.
export const revalidate = 3600

export default function Page() {
  return <ProduccionPage locale="ca" />
}
