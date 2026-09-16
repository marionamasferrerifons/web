import type { HomeContent } from './types'

export const homeContentEs: HomeContent = {
  hero: {
    tag: '[+15 AÑOS DE EXPERIENCIA]',
    title: (
      <>
        Te ayudo a <span style={{ color: 'var(--color-orange-400)' }}>decidir</span> qué adoptar y qué dejar de lado en el sector editorial
      </>
    ),
    body: 'Acompañamiento estratégico para directivos editoriales que buscan integrar la innovación en IA, combinando experiencia editorial, pedagógica y tecnológica.',
    ctaLabel: 'RESERVAR UNA LLAMADA',
    photoAlt: 'Mariona Masferrer',
  },
  logos: {
    tag: '[EDITORIALES PARA LAS QUE HE TRABAJADO]',
  },
  challenges: {
    title: (
      <>
        Conozco los <span style={{ color: 'var(--color-orange-400)' }}>desafíos reales</span> actuales del sector editorial
      </>
    ),
    items: [
      { avatar: '/home-avatar-1.png', size: 69, left: 1262, top: 0, label: 'Aumentar la productividad de creación de libros', side: 'left' },
      { avatar: '/home-avatar-2.png', size: 71, left: 0, top: 89, label: 'Necesidad de IA aplicada al entorno editorial', side: 'right' },
      { avatar: '/home-avatar-3.png', size: 60, left: 811, top: 208, label: 'Resistencias del equipo por adoptar la IA', side: 'left' },
      { avatar: '/home-avatar-4.png', size: 91, left: 188, top: 298, label: 'Miedo por pérdida de la calidad en los resultados', side: 'right' },
      { avatar: '/home-avatar-5.png', size: 83, left: 1132, top: 223, label: 'Presión por innovar', side: 'left' },
    ],
  },
  problem: {
    title: (
      <>
        El problema principal es <span style={{ color: 'var(--color-orange-400)' }}>cómo integrar</span> IA sin perder calidad
      </>
    ),
  },
  criterio: {
    tag: '[MI ENFOQUE]',
    title: (
      <>
        El <span style={{ color: 'var(--color-orange-400)' }}>criterio</span> de alguien que conoce el sector
      </>
    ),
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Ultrices blandit vestibulum volutpat blandit vulputate fermentum pulvinar.',
    editorial: {
      name: 'Editorial',
      boldLine: 'Entiendo cómo funciona una editorial por dentro.',
      bodyLine: 'Desde los procesos de producción hasta las decisiones estratégicas, lo que permite aplicar IA sin romper lo que ya funciona.',
    },
    pedagogia: {
      name: 'Pedagogía',
      boldLine: 'Entiendo el contenido desde quien lo enseña y quien lo produce.',
      bodyLine: 'Haber trabajado como docente me permite entender cómo se usa el contenido en la práctica, algo clave a la hora de aplicar IA sin perder valor educativo.',
    },
    tecnologia: {
      name: 'Tecnología',
      boldLine: 'Uso la IA en la práctica',
      bodyLine: 'Trabajo con IA desde dentro del proceso editorial, lo que permite entender sus límites, sus riesgos y su verdadero potencial.',
    },
  },
  practice: {
    tag: '[TRADUCCIÓN A LA PRÁCTICA]',
    title: (
      <>
        Una forma de trabajar que <span style={{ color: 'var(--color-orange-400)' }}>impacta</span> en el resultado final
      </>
    ),
    subtitle: 'La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad.',
    cards: [
      {
        title: 'Proyectos más claros, coherentes y sostenibles',
        body: 'La combinación entre criterio editorial, pedagogía y tecnología permite desarrollar contenidos útiles, bien estructurados y pensados para mantenerse sólidos también a largo plazo.',
        icon: '/practice-icon-inbox.svg',
      },
      {
        title: 'La tecnología funciona mejor cuando hay criterio detrás',
        body: 'Integrar IA dentro de procesos editoriales no consiste en automatizar por automatizar, sino en tomar mejores decisiones sobre qué mejorar, qué mantener y dónde realmente aporta valor.',
        icon: '/practice-icon-process.svg',
      },
      {
        title: 'Contenido que se produce y se entiende mejor',
        body: 'Trabajar desde una mirada editorial y pedagógica permite construir materiales más claros, comprensibles y alineados con cómo las personas aprenden y utilizan el contenido.',
        icon: '/practice-icon-edit.svg',
      },
    ],
  },
  services: {
    tag: '[SERVICIOS]',
    title: (
      <>
        Lorem ipsum dolor sit amet <span style={{ color: 'var(--color-orange-400)' }}>consectetur</span>. Volutpat scelerisque cras
      </>
    ),
    cards: [
      {
        href: '/servicios/estrategia-editorial',
        title: 'Innovación editorial con IA',
        subtitle: 'Te ayudo a trabajar como yo trabajo',
        body: 'Acompaño a editoriales educativas en el proceso de incorporar la IA de forma estratégica y responsable: desde entender dónde están hoy hasta construir los sistemas y las capacidades para trabajar diferente.',
        image: '/home-service-card1.svg',
        bgColor: 'var(--color-white)',
        imageSide: 'right',
      },
      {
        href: '/servicios/servicios-editoriales',
        title: 'Servicios editoriales con IA aplicada',
        subtitle: 'Lo que hago yo, aplicado a tu proyecto',
        body: 'Dirijo proyectos editoriales completos con un equipo de colaboradores de confianza. La IA forma parte del método de trabajo como herramienta integrada en la producción diaria. Esto explica la eficiencia y la calidad de los entregables.',
        image: '/home-service-card2.svg',
        bgColor: 'var(--color-white)',
        imageSide: 'left',
      },
      {
        href: '/servicios/ecosistema-produccion-editorial',
        title: 'Sistema de producción editorial con IA',
        subtitle: 'El criterio de tu editorial, codificado y amplificado.',
        body: 'Diseño e implanto un sistema de producción a medida que codifica el conocimiento editorial y pedagógico de tu organización en un entorno de IA. El equipo mantiene el criterio; la IA multiplica la capacidad productiva.',
        image: '/home-service-card3.svg',
        bgColor: 'var(--color-white)',
        imageSide: 'right',
      },
    ],
  },
  caseStudies: {
    tag: '[PROYECTOS]',
    title: (
      <>
        Cómo se aplica en proyectos <span style={{ color: 'var(--color-orange-400)' }}>reales</span>
      </>
    ),
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Eget elit consectetur bibendum placerat aliquam dictum. Tincidunt eget tempus tortor congue diam turpis. Sit fusce tempor.',
  },
  cta: {
    title: 'Exploremos juntos cómo incorporar la IA en tu editorial',
    subtitle: 'La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad.',
  },
}
