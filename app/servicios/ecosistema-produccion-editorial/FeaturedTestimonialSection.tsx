import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY } from '@/sanity/queries'
import { testimonialImageProps } from '@/sanity/image'

export default async function Section6() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, {
    placement: 'ecosistema-produccion-editorial',
  })
  const images = testimonialImageProps(testimonial)

  if (!images) return null

  return (
    <TestimonialSection
      quote={testimonial.quote}
      authorName={testimonial.authorName}
      authorRole={testimonial.authorRole}
      {...images}
    />
  )
}
