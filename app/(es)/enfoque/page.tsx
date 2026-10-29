import EnfoquePage, { enfoqueMetadata } from '@/app/(es)/enfoque/EnfoquePage'

export const metadata = enfoqueMetadata('es')

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default function Page() {
  return <EnfoquePage locale="es" />
}
