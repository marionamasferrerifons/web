import type { Metadata } from 'next'
import HeroSection from './HeroSection'
import ModalitiesSection from './ModalitiesSection'
import ProductionSystemSection from './ProductionSystemSection'
import EditorialProjectsSection from './EditorialProjectsSection'
import CaseHighlightSection from '@/components/service/CaseHighlightSection'
import ActionButtons from '@/components/service/ActionButtons'
import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'
import { WHATSAPP_URL_PRODUCCION } from '@/lib/constants'
import { client } from '@/sanity/client'
import {
  TESTIMONIAL_BY_PLACEMENT_QUERY,
  CASE_STUDY_CARD_BY_SLUG_QUERY,
  INDUSTRY_LOGOS_QUERY,
  EDITORIAL_PROJECTS_QUERY,
} from '@/sanity/queries'
import { testimonialImageProps, industryLogoUrl, caseStudyCardImageUrl, caseStudySummaryImageUrl } from '@/sanity/image'

export const metadata: Metadata = {
  title: 'Producción editorial con IA',
  description:
    'IA aplicada a la producción de contenidos educativos: creación y edición de materiales, revisión y evaluación editorial y diseño de sistemas de producción para tu equipo.',
  alternates: { canonical: '/servicios/produccion-editorial-con-ia' },
}

// Red de seguridad: el webhook de app/api/revalidate es el mecanismo principal
// de refresc; això només acota el pitjor cas si es perd un event de publicació.
export const revalidate = 3600

const ALTAMAR_CASE_SLUG = 'altamar-produccion-editorial-claude'

export default async function ProduccionEditorialConIAPage() {
  const [testimonial, caseStudy, logos, projects] = await Promise.all([
    client.fetch(TESTIMONIAL_BY_PLACEMENT_QUERY, { placement: 'ecosistema-produccion-editorial' }),
    client.fetch(CASE_STUDY_CARD_BY_SLUG_QUERY, { slug: ALTAMAR_CASE_SLUG }),
    client.fetch(INDUSTRY_LOGOS_QUERY),
    client.fetch(EDITORIAL_PROJECTS_QUERY),
  ])

  const testimonialImages = testimonialImageProps(testimonial)

  const matchedLogo = caseStudy
    ? logos.find((l: { name: string }) => l.name.toLowerCase().includes('altamar'))
    : null

  // Igual que a Estrategia: prioritza la imatge resum (4:3) i, si el cas encara
  // no en té, cau a la imatge de la targeta.
  const summaryImage = caseStudy?.summaryImage?.asset?._id
    ? { url: caseStudySummaryImageUrl(caseStudy.summaryImage.asset._id), alt: caseStudy.summaryImage.alt }
    : caseStudy?.imageCard?.asset?._id
      ? { url: caseStudyCardImageUrl(caseStudy.imageCard.asset._id), alt: caseStudy.imageCard.alt }
      : null

  return (
    <main className="optical-auto">
      <HeroSection />
      <ModalitiesSection />
      <ProductionSystemSection />
      {caseStudy && (
        <CaseHighlightSection
          slug={caseStudy.slug}
          title="Altamar: un sistema para producir materiales complementarios con IA."
          paragraphs={[
            'Altamar necesitaba optimizar la elaboración de los materiales que acompañan a sus libros de texto. Trabajamos sobre su criterio editorial y pedagógico para preparar un sistema en Claude que su equipo pudiera utilizar en la producción.',
            'En cuatro semanas preparamos procesos para cinco tipologías: guías didácticas, solucionarios, retos, evaluaciones y presentaciones. La implementación incluyó la codificación del criterio, la configuración de los procesos y la formación del equipo.',
          ]}
          facts={[
            ['Cliente', 'Altamar'],
            ['Enfoque', 'Sistema sobre herramientas existentes'],
            ['Alcance', '5 tipologías'],
            ['Duración', '4 semanas'],
          ]}
          linkLabel="Ver el caso de Altamar"
          imageUrl={summaryImage?.url}
          imageAlt={summaryImage?.alt}
          logoUrl={matchedLogo?.logo?.asset?._id ? industryLogoUrl(matchedLogo.logo.asset._id) : undefined}
          logoAlt={matchedLogo?.logo?.alt ?? 'Altamar'}
          flushTop
        />
      )}
      {testimonialImages && (
        <TestimonialSection
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          {...testimonialImages}
          cardColor="var(--color-green)"
        />
      )}
      <EditorialProjectsSection projects={projects} />
      <CtaSection
        title="Hablemos de lo que necesitas producir."
        subtitle="Reserva una sesión gratuita de una hora para contarme qué materiales necesitas producir o qué quieres que tu equipo pueda hacer con IA."
        subtitleMaxWidth="560px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" whatsappHref={WHATSAPP_URL_PRODUCCION} />}
      />
    </main>
  )
}
