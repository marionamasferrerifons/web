import FormacionPage, { formacionMetadata } from '@/app/(es)/servicios/formacion-en-ia/FormacionPage'

export const metadata = formacionMetadata('ca')

export default function Page() {
  return <FormacionPage locale="ca" />
}
