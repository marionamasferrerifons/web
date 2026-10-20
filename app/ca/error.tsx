'use client';

import ErrorContent from '@/components/status/ErrorContent'
import { errorCopy } from '@/content/status'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorContent reset={reset} copy={errorCopy.ca} />
}
