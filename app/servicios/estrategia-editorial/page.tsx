import ServiciosClient from './ServiciosClient'
import CaseStudiesSection from './CaseStudiesSection'
import TestimonialSection from './TestimonialSection'
import CtaSection from './CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_ID_QUERY } from '@/sanity/queries'

export default async function EstrategiaEditorialPage() {
  const testimonial = await client.fetch(TESTIMONIAL_BY_ID_QUERY, { id: 'testimonial-edebe' })

  return (
    <main>
      <ServiciosClient />
      <CaseStudiesSection />
      <TestimonialSection
        quote={testimonial.quote}
        authorName={testimonial.authorName}
        authorRole={testimonial.authorRole}
        avatarUrl={testimonial.avatar.asset.url}
        avatarAlt={testimonial.avatar.alt}
        logoUrl={testimonial.logo.asset.url}
        logoAlt={testimonial.logo.alt}
      />
      <CtaSection />
    </main>
  )
}
