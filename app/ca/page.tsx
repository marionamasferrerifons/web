import HomePage, { homeMetadata } from '@/app/(es)/home/HomePage'

export const metadata = homeMetadata('ca')

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default function Page() {
  return <HomePage locale="ca" />
}
