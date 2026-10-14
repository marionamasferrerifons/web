import type { Metadata } from 'next'
import HeroSection from './home/HomeHeroSection'
import LogosStripSection from './home/LogosStripSection'
import HomeServicesSection from './home/HomeServicesSection'
import HomeCasesSection from './home/HomeCasesSection'
import ProfileSection from './home/ProfileSection'
import CriterioSection from './home/CriterioShapesSection'
import HomeTestimonialsSection, { type HomeTestimonial } from './home/HomeTestimonialsSection'
import CtaSection from './servicios/estrategia-editorial/CtaSection'
import ActionButtons from '@/components/service/ActionButtons'
import { client } from '@/sanity/client'
import { HOME_TESTIMONIALS_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'
import { industryLogoUrl, testimonialImageProps } from '@/sanity/image'

export const metadata: Metadata = {
  title: {
    absolute: 'Mariona Masferrer i Fons — IA para editoriales educativas',
  },
  description:
    'Ayudo a editoriales educativas a tomar decisiones estratégicas sobre IA, a mejorar la producción de contenidos y a aprender a trabajar con ella, con criterio editorial y pedagógico.',
  alternates: { canonical: '/' },
}

// Red de seguridad: the webhook in app/api/revalidate is the primary
// refresh mechanism; this just bounds worst-case staleness if a publish
// event is ever missed.
export const revalidate = 3600

type RawImage = { asset: { _id: string; url: string } | null; alt?: string } | null
type RawTestimonial = {
  _id?: string
  showInHome?: boolean
  quote: string
  authorName: string
  authorRole: string
  avatar: RawImage
  logo: RawImage
} | null

function toHomeTestimonial(t: RawTestimonial, fallbackId: string): HomeTestimonial | null {
  const images = testimonialImageProps(t)
  if (!t || !images) return null
  return {
    id: t._id ?? fallbackId,
    quote: t.quote,
    authorName: t.authorName,
    authorRole: t.authorRole,
    ...images,
  }
}

export default async function Home() {
  const [allTestimonials, industryLogos] = await Promise.all([
    client.fetch<RawTestimonial[]>(HOME_TESTIMONIALS_QUERY),
    client.fetch(INDUSTRY_LOGOS_QUERY),
  ])

  // Testimonis transversals marcats a Sanity («Mostrar en el carrusel de la
  // home»); mentre no n'hi hagi cap de marcat, tots els que tinguin foto.
  const marked = allTestimonials.filter((t) => t?.showInHome)
  const testimonials = (marked.length > 0 ? marked : allTestimonials)
    .map((t, i) => toHomeTestimonial(t, `home-${i}`))
    .filter((t): t is HomeTestimonial => t !== null)

  return (
    <main className="optical-auto">
      <HeroSection />
      <LogosStripSection
        logos={industryLogos
          .filter((item: { logo: { asset: { _id: string; url: string } | null; alt?: string } | null; name: string }) => item.logo?.asset?._id)
          .map((item: { logo: { asset: { _id: string; url: string }; alt?: string }; name: string }) => ({
            src: industryLogoUrl(item.logo.asset._id),
            alt: item.logo.alt || item.name,
          }))}
      />
      <HomeServicesSection />
      <HomeCasesSection />
      <ProfileSection />
      <CriterioSection />
      <HomeTestimonialsSection testimonials={testimonials} />
      <CtaSection
        title="¿Qué necesita tu editorial?"
        subtitle="Reserva una sesión gratuita de una hora para hablar de tu editorial, entender qué necesitas y valorar cómo puedo ayudarte."
        subtitleMaxWidth="600px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" />}
      />
    </main>
  )
}
