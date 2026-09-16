import NotFoundContent from '@/components/NotFoundContent'

export default function NotFound() {
  return (
    <NotFoundContent
      tag="[404]"
      title="Esta página no existe"
      body="Puede que el enlace esté roto o que la página se haya movido."
      ctaLabel="Volver al inicio"
      homeHref="/"
    />
  )
}
