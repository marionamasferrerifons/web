import type { EnfoqueContent } from './types'

export const enfoqueContentEs: EnfoqueContent = {
  hero: {
    tag: '[ENFOQUE]',
    title: (
      <>
        Hola Lorem ipsum dolor sit amet <span style={{ color: 'var(--color-orange-400)' }}>consectetur</span>. Eu imperdiet cursus cras.
      </>
    ),
    body: 'Trabajo en el punto donde la tecnología, el contenido y el uso real se cruzan, para integrar la IA sin comprometer la calidad ni el valor educativo.',
    ctaLabel: 'RESERVAR UNA LLAMADA',
  },
  challenge: {
    titleSegments: [
      { text: 'El reto actual es incorporar tecnología', color: 'var(--color-blue-400)' },
      { text: 'respetando y entendiendo', color: 'var(--color-orange-400)' },
      { text: 'lo que ya funciona', color: 'var(--color-blue-400)' },
    ],
    bodySegments: [
      {
        text: 'En proyectos editoriales y educativos, la tecnología impacta directamente en la calidad del contenido, los equipos y la forma de trabajar.',
        color: 'var(--color-text-secondary)',
      },
    ],
  },
  approach: {
    titleSegments: [
      { text: 'Por eso', color: 'var(--color-blue-400)' },
      { text: 'el enfoque importa', color: 'var(--color-orange-400)' },
      { text: 'tanto como la herramienta', color: 'var(--color-blue-400)' },
    ],
    bodySegments: [
      {
        text: 'Combinar criterio editorial, mirada pedagógica y comprensión tecnológica permite integrar nuevos procesos sin perder claridad, intención ni calidad.',
        color: 'var(--color-text-secondary)',
      },
    ],
  },
  criterio: {
    tag: '[MI ENFOQUE]',
    title: (
      <>
        El <span style={{ color: 'var(--color-blue-400)' }}>criterio</span> de alguien que conoce el sector
      </>
    ),
    editorial: {
      label: 'EDITORIAL',
      title: 'Entiendo cómo funciona una editorial por dentro',
      body: 'Desde los procesos de producción hasta las decisiones estratégicas, lo que permite aplicar IA sin romper lo que ya funciona.',
      benefits: ['Beneficio 1', 'Beneficio 1', 'Beneficio 1'],
    },
    pedagogia: {
      label: 'PEDAGOGIA',
      title: 'Entiendo el contenido desde quien lo enseña y quien lo produce',
      body: 'Haber trabajado como docente me permite entender cómo se usa el contenido en la práctica, algo clave a la hora de aplicar IA sin perder valor educativo.',
      benefits: [],
    },
    tecnologia: {
      label: 'TECNOLOGÍA',
      title: 'Uso la IA en la práctica',
      body: 'Trabajo con IA desde dentro del proceso editorial, lo que permite entender sus límites, sus riesgos y su verdadero potencial.',
      benefits: [],
    },
  },
  workPrinciples: {
    tag: '[PRINCIPIOS DE TRABAJO]',
    title: (
      <>
        Una forma de trabajar que <span style={{ color: 'var(--color-orange-400)' }}>impacta</span> en el resultado final
      </>
    ),
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Metus tincidunt velit leo imperdiet malesuada congue nisi. Lectus egestas lacinia neque egestas nunc nibh pellentesque tortor vitae.',
    cardTitle: 'Proyectos más claros, coherentes y sostenibles',
    cardBody: 'La combinación entre criterio editorial, pedagogía y tecnología permite desarrollar contenidos útiles, bien estructurados y pensados para mantenerse sólidos también a largo plazo.',
  },
  caseStudies: {
    tag: '[CASOS DE ÉXITO]',
    title: (
      <>
        Explora cómo he <span style={{ color: 'var(--color-orange-400)' }}>ayudado</span> a otras editoriales
      </>
    ),
    subtitle: 'Experiencias de editoriales educativas que ya han trabajado conmigo. Descubre cómo hemos colaborado y los resultados que hemos conseguido.',
  },
  cta: {
    title: 'Exploremos juntos cómo incorporar la IA en tu editorial',
    subtitle: 'La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad.',
  },
}
