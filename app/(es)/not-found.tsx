import NotFoundContent from '@/components/status/NotFoundContent'
import { notFoundCopy } from '@/content/status'

export default function NotFound() {
  return <NotFoundContent {...notFoundCopy.es} />
}
