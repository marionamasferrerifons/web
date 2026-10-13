import type { Metadata } from 'next'
import HeroSection from './HeroSection'
import StartingPointsSection from './StartingPointsSection'
import TrainingServicesSection from './TrainingServicesSection'
import ActionButtons from '@/components/service/ActionButtons'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'
import { WHATSAPP_URL_FORMACION } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Formación en IA',
  description:
    'Formación para aplicar la IA al trabajo editorial: curso de iniciación con Cálamo y Cran, acompañamiento individual y formación a medida para equipos editoriales.',
  alternates: { canonical: '/servicios/formacion-en-ia' },
}

export default function FormacionEnIAPage() {
  return (
    <main className="optical-auto">
      <HeroSection />
      <StartingPointsSection />
      <TrainingServicesSection />
      <CtaSection
        title="Cuéntame qué te está costando llevar a la práctica."
        subtitle="Reserva una sesión gratuita de una hora para contarme en qué punto estás y qué te gustaría conseguir con IA."
        subtitleMaxWidth="560px"
        actions={<ActionButtons inverted noteColor="var(--color-blue-100)" whatsappHref={WHATSAPP_URL_FORMACION} />}
      />
    </main>
  )
}
