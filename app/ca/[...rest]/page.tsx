import { notFound } from 'next/navigation'

// Qualsevol URL /ca/... sense pàgina mostra la 404 en català (app/ca/not-found.tsx)
// en lloc de la global en castellà.
export default function CatchAll() {
  notFound()
}
