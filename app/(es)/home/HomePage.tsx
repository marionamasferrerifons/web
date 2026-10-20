import type { Metadata } from 'next'
import HeroSection from './HomeHeroSection'
import LogosStripSection from './LogosStripSection'
import HomeServicesSection from './HomeServicesSection'
import HomeCasesSection from './HomeCasesSection'
import ProfileSection from './ProfileSection'
import CriterioSection from './CriterioShapesSection'
import HomeTestimonialsSection, { type HomeTestimonial } from './HomeTestimonialsSection'
import CtaSection from '../servicios/estrategia-editorial/CtaSection'
import ActionButtons from '@/components/service/ActionButtons'
import { client } from '@/sanity/client'
import { fetchLocalized } from '@/sanity/fetchLocalized'
import { HOME_TESTIMONIALS_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'
import { industryLogoUrl, testimonialImageProps } from '@/sanity/image'
import { routeAlternates, type Locale } from '@/lib/i18n'
import { homeContent } from '@/content/home'

// Cos de la home, compartit per app/(es)/page.tsx i app/ca/page.tsx.

export function homeMetadata(locale: Locale): Metadata {
  const c = homeContent[locale].metadata
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: routeAlternates('/', locale),
  }
}

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

export default async function HomePage({ locale }: { locale: Locale }) {
  const c = homeContent[locale]
  const [{ data: allTestimonials }, industryLogos] = await Promise.all([
    fetchLocalized<RawTestimonial[]>(HOME_TESTIMONIALS_QUERY, locale),
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
      <HeroSection locale={locale} />
      <LogosStripSection
        locale={locale}
        logos={industryLogos
          .filter((item: { logo: { asset: { _id: string; url: string } | null; alt?: string } | null; name: string }) => item.logo?.asset?._id)
          .map((item: { logo: { asset: { _id: string; url: string }; alt?: string }; name: string }) => ({
            src: industryLogoUrl(item.logo.asset._id),
            alt: item.logo.alt || item.name,
          }))}
      />
      <HomeServicesSection locale={locale} />
      <HomeCasesSection locale={locale} />
      <ProfileSection locale={locale} />
      <CriterioSection locale={locale} />
      <HomeTestimonialsSection testimonials={testimonials} locale={locale} />
      <CtaSection
        locale={locale}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        subtitleMaxWidth="600px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" locale={locale} />}
      />
    </main>
  )
}
