import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_ID_QUERY } from '@/sanity/queries'

export default async function Section6() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_ID_QUERY, { id: 'testimonial-edebe' })

  return (
    <TestimonialSection
      quote={testimonial.quote}
      authorName={testimonial.authorName}
      authorRole={testimonial.authorRole}
      avatarUrl={testimonial.avatar.asset.url}
      avatarAlt={testimonial.avatar.alt}
      logoUrl={testimonial.logo.asset.url}
      logoAlt={testimonial.logo.alt}
    />
  )
}
