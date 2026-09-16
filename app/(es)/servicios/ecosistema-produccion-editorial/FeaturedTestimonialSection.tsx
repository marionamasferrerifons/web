import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'

export default async function Section6({ language = 'es' }: { language?: 'es' | 'ca' }) {
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, {
    placement: 'ecosistema-produccion-editorial',
    language,
  })
  const images = testimonialImageProps(testimonial)

  if (!images) return null

  if (!testimonial) return null

  return (
    <TestimonialSection
      quote={testimonial.quote}
      authorName={testimonial.authorName}
      authorRole={testimonial.authorRole}
      {...images}
    />
  )
}
