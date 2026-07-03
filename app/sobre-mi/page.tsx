import HeroSection from './HeroSection'
import ValuesSection from './ValuesSection'
import HistorySection from './HistorySection'
import QuoteSection from './QuoteSection'
import LinkedInSection from './LinkedInSection'
import NewsletterSection from './NewsletterSection'
import CtaSection from '@/app/servicios/estrategia-editorial/CtaSection'

export default function SobreMiPage() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <HistorySection />
      <QuoteSection />
      <LinkedInSection />
      <NewsletterSection />
      <div className="relative" style={{ marginTop: '-24px' }}>
        <CtaSection
          title="Exploremos cómo puede evolucionar tu editorial"
          subtitle="Si crees que puedo aportarte valor o quieres contrastar ideas sobre el sector, estaré encantada de hablar contigo."
        />
      </div>
    </main>
  )
}
