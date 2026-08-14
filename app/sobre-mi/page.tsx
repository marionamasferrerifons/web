import type { Metadata } from 'next'
import HeroSection from './SobreMiHeroSection'
import ValuesSection from './ValuesSection'
import HistorySection from './HistorySection'
import QuoteSection from './QuoteSection'
import LinkedInSection from './LinkedInSection'
// import NewsletterSection from './NewsletterSection' // hidden for now
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Más de diez años entre edición, docencia e innovación tecnológica, ayudando a editoriales educativas a convertir la IA en ventaja competitiva.',
  alternates: { canonical: '/sobre-mi' },
}

export default function SobreMiPage() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <HistorySection />
      <QuoteSection />
      <LinkedInSection />
      {/* <NewsletterSection /> hidden for now */}
      <div className="relative" style={{ marginTop: '-24px' }}>
        <CtaSection
          title="¿Quieres explorar el futuro de tu editorial?"
          subtitle="Si crees que puedo aportarte valor o quieres contrastar ideas sobre el sector, estaré encantada de hablar contigo."
        />
      </div>
    </main>
  )
}
