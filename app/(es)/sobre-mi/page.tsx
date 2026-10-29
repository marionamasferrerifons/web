import SobreMiPage, { sobreMiMetadata } from '@/app/(es)/sobre-mi/SobreMiPage'

export const metadata = sobreMiMetadata('es')

export default function Page() {
  return <SobreMiPage locale="es" />
}
