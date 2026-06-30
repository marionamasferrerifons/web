import HeroSection from './HeroSection'
import Section2 from './Section2'
import Section3 from './Section3'
import TestimonialSection from '../estrategia-editorial/TestimonialSection'
import Section4 from './Section4'
import CtaSection from '../estrategia-editorial/CtaSection'

export default function ServiciosEditorialesPage() {
  return (
    <main>
      <HeroSection />
      <Section2 />
      <Section3 />
      <TestimonialSection cardColor="var(--color-green)" />
      <Section4 />
      <CtaSection
        title="Descubre cómo puedo ayudarte con tus proyectos educativos"
        subtitle="Definamos un plan para que tus próximos materiales salgan a la luz a tiempo, sin imprevistos y con los máximos estándares de calidad."
        subtitleMaxWidth="404px"
      />
    </main>
  )
}
