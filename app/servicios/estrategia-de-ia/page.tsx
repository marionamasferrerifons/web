import type { Metadata } from 'next'
import HeroSection from './HeroSection'
import DecisionsSection from './DecisionsSection'
import WorkProcessSection from './WorkProcessSection'
import CollaborationSection from './CollaborationSection'
import CaseHighlightSection from '@/components/service/CaseHighlightSection'
import ActionButtons from '@/components/service/ActionButtons'
import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'
import { client } from '@/sanity/client'
import { TESTIMONIAL_BY_PLACEMENT_QUERY, CASE_STUDY_CARD_BY_SLUG_QUERY, INDUSTRY_LOGOS_QUERY } from '@/sanity/queries'
import { testimonialImageProps, industryLogoUrl, caseStudyCardImageUrl, caseStudySummaryImageUrl } from '@/sanity/image'

export const metadata: Metadata = {
  title: 'Estrategia de IA',
  description:
    'Criterio y dirección para decidir qué hacer con la IA en tu editorial: decisiones concretas, recomendaciones fundamentadas y una hoja de ruta clara.',
  alternates: { canonical: '/servicios/estrategia-de-ia' },
}

// Red de seguridad: el webhook de app/api/revalidate es el mecanismo principal
// de refresc; això només acota el pitjor cas si es perd un event de publicació.
export const revalidate = 3600

const ALTAMAR_CASE_SLUG = 'estrategia-de-ia'

export default async function EstrategiaDeIAPage() {
  const [testimonial, caseStudy, logos] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'estrategia-editorial' }),
    client.fetch(CASE_STUDY_CARD_BY_SLUG_QUERY, { slug: ALTAMAR_CASE_SLUG }),
    client.fetch(INDUSTRY_LOGOS_QUERY),
  ])

  const testimonialImages = testimonialImageProps(testimonial)

  const matchedLogo = caseStudy
    ? logos.find((l: { name: string }) => l.name.toLowerCase().includes('altamar'))
    : null

  // La fitxa resum prioritza la imatge pròpia (summaryImage); mentre el
  // document de Sanity no la tingui encara, cau a la imatge de la tarjeta
  // (imageCard) perquè la targeta no es quedi sense imatge.
  const summaryImage = caseStudy?.summaryImage?.asset?._id
    ? { url: caseStudySummaryImageUrl(caseStudy.summaryImage.asset._id), alt: caseStudy.summaryImage.alt }
    : caseStudy?.imageCard?.asset?._id
      ? { url: caseStudyCardImageUrl(caseStudy.imageCard.asset._id), alt: caseStudy.imageCard.alt }
      : null

  return (
    <main className="optical-auto">
      <HeroSection />
      <DecisionsSection />
      <WorkProcessSection />
      <CollaborationSection />
      {caseStudy && (
        <CaseHighlightSection
          slug={caseStudy.slug}
          title="Altamar: de querer incorporar IA a decidir dónde invertir."
          paragraphs={[
            'Altamar necesitaba definir qué papel debía tener la IA en su negocio y qué iniciativas merecía la pena impulsar.',
            'En un proyecto de cinco semanas analizamos su contexto, identificamos oportunidades y construimos una hoja de ruta con iniciativas priorizadas, proveedores evaluados y una propuesta de calendario e inversión.',
            'El trabajo permitió reorientar el presupuesto hacia una cartera de iniciativas y establecer criterios para decidir qué impulsar y qué aplazar.',
          ]}
          facts={[
            ['Cliente', 'Altamar'],
            ['Servicio', 'Consultoría estratégica'],
            ['Duración', '5 semanas'],
          ]}
          linkLabel="Ver el caso de Altamar"
          imageUrl={summaryImage?.url}
          imageAlt={summaryImage?.alt}
          logoUrl={matchedLogo?.logo?.asset?._id ? industryLogoUrl(matchedLogo.logo.asset._id) : undefined}
          logoAlt={matchedLogo?.logo?.alt ?? 'Altamar'}
        />
      )}
      {testimonialImages && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...testimonialImages}
        />
      )}
      <CtaSection
        title="Cuéntame qué necesitas decidir."
        subtitle="Reserva una sesión gratuita de una hora para hablar de tu editorial, entender qué necesitáis y valorar si puedo ayudarte."
        subtitleMaxWidth="460px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" />}
      />
    </main>
  )
}
