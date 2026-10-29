import FormacionPage, { formacionMetadata } from '@/app/(es)/servicios/formacion-en-ia/FormacionPage'

export const metadata = formacionMetadata('es')

export default function Page() {
  return <FormacionPage locale="es" />
}
