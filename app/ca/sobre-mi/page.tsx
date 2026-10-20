import SobreMiPage, { sobreMiMetadata } from '@/app/(es)/sobre-mi/SobreMiPage'

export const metadata = sobreMiMetadata('ca')

export default function Page() {
  return <SobreMiPage locale="ca" />
}
