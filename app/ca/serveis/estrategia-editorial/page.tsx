import type { Metadata } from 'next'
import ServiciosClient from '@/app/(es)/servicios/estrategia-editorial/ServiciosClient'
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/(es)/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'
import { estrategiaEditorialContentCa } from '@/content/servicios-estrategia-editorial/ca'

// Pilot en revisió amb la clienta — no és públic encara.
export const metadata: Metadata = {
  title: "Estratègia editorial amb IA",
  description:
    "Dissenya el futur de la teva editorial amb una estratègia pròpia: proposta de valor, relació amb els teus usuaris i processos operatius, amb criteri editorial.",
  alternates: {
    canonical: '/ca/serveis/estrategia-editorial',
    languages: { es: '/servicios/estrategia-editorial', ca: '/ca/serveis/estrategia-editorial', 'x-default': '/servicios/estrategia-editorial' },
  },
  robots: { index: false, follow: false },
}

// Nota: el bloc de casos d'èxit segueix desactivat (SHOW_CASE_STUDIES) igual que a l'original.

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

export default async function EstrategiaEditorialPageCa() {
  const c = estrategiaEditorialContentCa
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, {
    placement: 'estrategia-editorial',
    language: 'ca',
  })
  const images = testimonialImageProps(testimonial)

  return (
    <main>
      <ServiciosClient content={c.client} />
      {images && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...images}
        />
      )}
      <CtaSection title={c.cta.title} subtitle={c.cta.subtitle} />
    </main>
  )
}
