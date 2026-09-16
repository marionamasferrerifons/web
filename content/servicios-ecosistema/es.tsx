import type { EcosistemaContent } from './types'

export const ecosistemaContentEs: EcosistemaContent = {
  hero: {
    tag: '[Sistema de Producción Editorial con IA]',
    title: (
      <>
        Crea <span style={{ color: 'var(--color-blue-400)' }}>contenido publicable</span> con un sistema de IA construido sobre tu criterio.
      </>
    ),
    body: 'La IA no sabe qué es un buen material educativo. Tu editorial sí. Te ayudo a automatizar la producción de contenidos para que la IA escriba al nivel de tus autores y editores.',
    ctaLabel: 'RESERVAR UNA LLAMADA',
  },
  problemPills: {
    title: (
      <>
        La IA promete aliviar la carga de trabajo. Pero <span style={{ color: 'var(--color-orange-400)' }}>sin tu criterio codificado</span>, la multiplica.
      </>
    ),
    pills: [
      { dot: '#E5A27C', text: 'Lo que genera la IA no cumple con los estándares de calidad que caracterizan tu editorial.', mlClass: 'md:ml-[135px]' },
      { dot: '#AFE0D6', text: 'Corregir lo que genera la IA le cuesta a tu equipo más tiempo que haber escrito el contenido desde cero.', mlClass: 'md:ml-[186px]' },
      { dot: 'var(--color-blue-300)', text: 'Cada editor hace la guerra por su cuenta, investigando qué hacer con la IA de forma aislada y sin protocolos claros.', mlClass: 'md:ml-[85px]' },
      { dot: 'var(--color-orange-400)', text: 'Cada herramienta nueva abre la duda de si esta vez sí va a ser útil para tu equipo, y el presupuesto se va en pruebas.', mlClass: 'md:ml-[272px]' },
    ],
  },
  threeLayers: {
    tag: '[EL CRITERIO NO SE DELEGA]',
    title: (
      <>
        Un sistema donde el <span style={{ color: 'var(--color-blue-400)' }}>criterio editorial</span> dirige a la tecnología.
      </>
    ),
    subtitle: 'Codifico el conocimiento pedagógico y editorial que has construido durante años y lo combino con la capacidad de generación a escala de la IA. Tu equipo se queda al mando de todo el proceso.',
    desktopCards: {
      left: { title: 'Tu conocimiento editorial codificado', body: 'El criterio pedagógico y editorial que tu equipo ha acumulado durante años, codificado y operativo para la IA.' },
      right: { title: 'Tu equipo editorial en el centro', body: 'El criterio no se delega. Tu equipo supervisa y valida cada paso del proceso.' },
      bottom: { title: 'La potencia de la IA', body: 'Velocidad y capacidad de generación a escala, aplicada sobre el criterio de tu editorial.' },
    },
    mobileCards: [
      { title: 'Tu conocimiento editorial', body: 'El criterio pedagógico y editorial que tu equipo ha acumulado durante años, codificado y operativo.' },
      { title: 'Tu equipo editorial en el centro', body: 'El criterio no se delega. Tu equipo supervisa y valida cada paso del proceso.' },
      { title: 'La potencia de la IA', body: 'Velocidad y capacidad de generación a escala, aplicada sobre tu conocimiento estructurado.' },
    ],
    result: { title: 'Resultado', body: 'Un sistema de producción editorial con tus estándares y a la velocidad de la IA.' },
    mobileResult: { title: 'Resultado', body: 'Un sistema de producción editorial con tus estándares y a la velocidad de la IA.' },
  },
  systemSteps: {
    tag: '[¿EN QUÉ CONSISTE?]',
    title: (
      <>
        No necesitas otra herramienta. Necesitas que la que uses conozca <span style={{ color: 'var(--color-orange-400)' }}>tu criterio</span>.
      </>
    ),
    subtitle: 'El sistema se construye sobre la IA que elijas. Tu equipo no empieza ante un lienzo en blanco: encuentra los procesos ya montados y produce sin necesidad de saber de IA.',
    cardTitle: 'Tu criterio editorial es el contexto que le falta a la IA',
    cardBody: 'Codifico el criterio de tu editorial y programo procesos automatizados por cada tipo de material en tu cuenta de Claude, ChatGPT o Gemini.',
    stepsHeading: '¿Cómo lo construimos?',
    stepsSubtitle: 'Un proceso que hacemos junto a tu equipo. Empezamos por los materiales prioritarios y ampliamos solo cuando estés convencido del resultado.',
    resultsBadge: 'RESULTADOS EN 2 SEMANAS',
    steps: [
      { step: 'PASO 1', title: 'Definición del alcance', desc: 'Revisamos qué materiales produces y cómo los produces hoy. Sabrás por dónde empezar, cuánto tiempo puedes recuperar y cómo lo mediremos.' },
      { step: 'PASO 2', title: 'Diseño y validación', desc: 'Codificamos tu criterio, montamos un proceso para cada tipo de material y lo probamos con contenido real. Se cierra cuando lo que sale es publicable.' },
      { step: 'PASO 3', title: 'Traspaso y autogestión', desc: 'Tu equipo aprende a mantener el sistema al día cuando cambien tus materiales o tus criterios. A partir de aquí, funciona sin mí.' },
    ],
    whatItIncludesLabel: '[¿QUÉ INCLUYE?]',
    includes: [
      { title: 'Conocimiento estructurado', desc: 'El criterio editorial de tu equipo, organizado y accesible para la IA.' },
      { title: 'System prompt', desc: 'Las instrucciones que definen cómo debe comportarse la IA en tu editorial.' },
      { title: 'Skills', desc: 'Procesos especializados para cada tipología de contenido que produces.' },
      { title: 'Agentes', desc: 'Automatizaciones que ejecutan secuencias de tareas.' },
      { title: 'Biblioteca de prompts', desc: 'Los prompts validados y listos para usar en cada caso de uso recurrente.' },
      { title: 'Entorno de producción', desc: 'El espacio donde tu equipo y la IA trabajan y producen juntos.' },
    ],
  },
  impactStats: {
    tag: '[IMPACTO]',
    title: (
      <>
        Produce <span style={{ color: 'var(--color-blue-400)' }}>más</span> con el mismo equipo
      </>
    ),
    statLabel: 'TIEMPO DE PRODUCCIÓN',
    statDescDesktop: 'Reducción del tiempo de producción según tipología de contenido, calculada a partir de los flujos reales de la editorial.',
    statDescMobile: 'Reducción del tiempo de producción según el tipo de contenido, calculada a partir de los flujos reales de la editorial.',
    rightText: 'Algunos ejemplos de contenidos que el sistema puede producir:',
    checkItems: [
      'Evaluaciones tipo test',
      'Diseño de índices',
      'Guías didácticas',
      'Redacción de actividades',
      'Redacción de contenido principal',
      'Redacción de retos y casos',
      'Desarrollo de solucionarios',
    ],
  },
  advantages: {
    tag: '[VENTAJAS]',
    title: (
      <>
        Crea la infraestructura de producción del <span style={{ color: 'var(--color-orange-400)' }}>futuro</span>
      </>
    ),
    ventajas: [
      { label: 'VENTAJA 1', title: 'Progresivo', desc: 'Empieza con una tipología de contenido, valida el impacto y amplía cuando veas resultados. Sin grandes inversiones iniciales ni actos de fe.' },
      { label: 'VENTAJA 2', title: 'Activo propio', desc: 'Todo lo construido te pertenece. Vive en archivos que controlas tú, compatible con las herramientas de hoy y las del futuro.' },
      { label: 'VENTAJA 3', title: 'No disruptivo', desc: 'Se integra en tus flujos y herramientas actuales. Sin cambios forzados ni curvas de aprendizaje.' },
      { label: 'VENTAJA 4', title: 'Escalable hacia IA privada', desc: 'Empieza con Claude, ChatGPT o Gemini y migra hacia una instancia privada cuando quieras aumentar la seguridad y el control de costes.' },
    ],
    illustrationAlt: 'Diagrama del flujo de trabajo del especialista GEM',
  },
  closingCta: {
    title: 'Hablemos de qué material podrías crear con la IA.',
    body: 'Reserva una llamada para ver qué produces, dónde se te va el tiempo y si este sistema puede ayudarte.',
    ctaLabel: 'RESERVAR UNA LLAMADA',
  },
}
