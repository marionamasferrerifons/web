import NotFoundContent from '@/components/NotFoundContent'

export default function NotFound() {
  return (
    <NotFoundContent
      tag="[404]"
      title="Aquesta pàgina no existeix"
      body="Pot ser que l'enllaç estigui trencat o que la pàgina s'hagi mogut."
      ctaLabel="Tornar a l'inici"
      homeHref="/ca"
    />
  )
}
