import type { EstrategiaEditorialContent } from './types'

export const estrategiaEditorialContentEs: EstrategiaEditorialContent = {
  client: {
    hero: {
      tag: '[IMPLEMENTACIÓN ESTRATÉGICA DE IA]',
      title: (
        <>
          Las reglas han cambiado, pero tu <span className="text-blue-50">contenido</span> sigue siendo imprescindible.
        </>
      ),
      body: 'Te ayudo a definir el papel de tu editorial en la era de la IA y a poner la tecnología al servicio de tus objetivos de negocio, no al revés.',
      ctaLabel: 'RESERVAR UNA LLAMADA',
    },
    section2: {
      title: '¿Te pasa que...?',
      items: [
        { dot: 'var(--color-blue-300)', text: 'Sientes incertidumbre y miedo ante la avalancha de IA' },
        { dot: 'var(--color-orange-200)', text: 'No tienes claro qué rol va a jugar tu editorial en el futuro educativo' },
        { dot: 'var(--color-blue-300)', text: 'Los últimos proyectos de innovación no han generado el impacto esperado' },
        { dot: 'var(--color-orange)', text: 'Las pruebas con la IA no han estado a la altura de los estándares de tu editorial' },
        { dot: 'var(--color-blue-100)', text: 'Tienes miedo a malgastar presupuesto en modas tecnológicas' },
        { dot: 'var(--color-orange-200)', text: 'Las consultoras generalistas no comprenden las particularidades de nuestro sector' },
      ],
    },
    section3: {
      tag: '[LO QUE OFREZCO]',
      title: (
        <>
          Diseña el <span className="text-orange-400">futuro</span> de tu editorial
        </>
      ),
      subtitle: 'Estrategia y dirección para navegar la incertidumbre. Dos formas de trabajar conmigo, según el punto en el que estés.',
    },
    serviceLink: { viewMore: 'ver más del servicio', viewLess: 'ver menos del servicio' },
    card1: {
      title: 'Explorar nuevas oportunidades estratégicas',
      body: 'Workshops de innovación diseñados específicamente para editoriales educativas. Cada uno te permite descubrir oportunidades reales en áreas clave de tu negocio.',
      workshops: [
        {
          label: 'WORKSHOP 1',
          title: 'Innovar la propuesta de valor',
          duration: '4 horas',
          format: 'In-company',
          description: 'Exploramos cómo reimaginar el valor que ofreces a tus usuarios, entendiendo sus necesidades y descubriendo cómo la IA puede ayudarnos a satisfacerlas.',
          outcomes: [
            'Identificar oportunidades concretas para crear nuevos productos y servicios educativos',
            'Redefinir tu propuesta de valor para que sea más relevante en un mundo transformado por la tecnología',
            'Generar hipótesis de innovación validadas con criterio editorial y pedagógico',
          ],
        },
        {
          label: 'WORKSHOP 2',
          title: 'Innovar la relación con los clientes',
          duration: '4 horas',
          format: 'In-company',
          description: 'Descubrimos cómo usar la IA para mejorar la experiencia del alumnado, el profesorado y los centros educativos, creando relaciones más profundas y modelos de negocio más sostenibles.',
          outcomes: [
            'Diseñar experiencias personalizadas que aumenten la satisfacción y retención.',
            'Explorar nuevos modelos de ingresos y canales de relación con clientes.',
            'Entender cómo la IA cambia las expectativas de tus usuarios.',
          ],
        },
        {
          label: 'WORKSHOP 3',
          title: 'Innovar los procesos operativos',
          duration: '4 horas',
          format: 'In-company',
          description: 'Analizamos cómo la IA puede hacer tu editorial más eficiente. Observamos tus procesos internos para identificar dónde la IA genera mayor impacto operativo.',
          outcomes: [
            'Reducir tiempos y costes en procesos automatizables manteniendo altos estándares de calidad.',
            'Liberar talento creativo para tareas de mayor valor estratégico.',
            'Crear una editorial más ágil y preparada para el futuro.',
          ],
        },
      ],
      whatYoullGetLabel: '[LO QUE CONSEGUIRÁS]',
    },
    card2: {
      title: 'Consultoría estratégica de IA',
      body: 'Un programa de 5 semanas para tener claro qué hacer y cómo hacerlo. Conseguirás un plan de acción a 12 meses y un horizonte estratégico de 3 años.',
      expandedTitle: 'Consultoría estratégica de IA',
      expandedBody: 'Un proceso colaborativo en el que construimos el marco estratégico completo para adoptar la IA con rigor y alineación empresarial.',
      durationBadge: '5 semanas',
      weeks: [
        { label: 'SEMANA 1', title: 'Diagnóstico profundo', detail: 'Llevamos a cabo un análisis interno, externo, de competidores y de escenarios futuros de la industria editorial y educativa.' },
        { label: 'SEMANA 2', title: 'Definición de objetivos estratégicos', detail: 'Establecemos metas claras de negocio que guíen cualquier decisión posterior' },
        { label: 'SEMANA 3', title: 'Detección de oportunidades', detail: 'Identificamos áreas de oportunidad en las que la IA puede contribuir a los objetivos estratégicos de la editorial' },
        { label: 'SEMANA 4', title: 'Priorización y planificación', detail: 'Exploramos y priorizamos iniciativas, evaluamos proveedores y definimos gobernanza' },
        { label: 'SEMANA 5', title: 'Hoja de ruta final', detail: 'Entrega del plan estratégico completo con calendario definido, responsables claros y métricas de impacto para la evaluación' },
      ],
      whatYoullGetLabel: '[LO QUE CONSEGUIRÁS]',
      whatYoullGetItems: [
        'Una visión clara del rol estratégico que debe jugar tu editorial en la era de la IA',
        'Una hoja de ruta priorizada y realista, adaptada a tus recursos y cultura.',
        'Criterio sólido para tomar decisiones de inversión con confianza y seguridad',
      ],
    },
    card3: {
      title: 'Dirección de IA externa',
      body: 'Un servicio de dirección estratégica de IA para trabajar de forma sostenida y efectiva. Sin contratación fija y con modalidad flexible.',
      expandedTitle: 'Dirección de IA externa',
      expandedBody: 'Un servicio en el que pagas solo por lo que necesitas, ideal para editoriales que quieren avanzar con rigor, pero que no quieren asumir el coste de una contratación senior.',
      howItWorksLabel: '[CÓMO FUNCIONA]',
      howItWorksItems: [
        'Acompañamiento continuo y flexible (reuniones periódicas con dirección y equipos clave)',
        'Liderazgo estratégico de todas las iniciativas de IA',
        'Soporte en la toma de decisiones críticas y alineación con los objetivos de negocio',
        'Transferencia de conocimiento y formación interna progresiva',
      ],
      whatYoullGetLabel: '[LO QUE CONSEGUIRÁS]',
      whatYoullGetItems: [
        'Dirección experta y con criterio sectorial para ejecutar tu estrategia de IA',
        'Avance constante sin perder el control ni la esencia de tu editorial',
        'Reducción de riesgos y maximización del retorno de la inversión en IA',
        'Una aliada estratégica que entiende tanto la tecnología como las particularidades del mundo editorial educativo',
      ],
    },
  },
  cta: {
    title: 'Ninguna decisión sobre IA se toma bien desde la prisa.',
    subtitle: 'Reserva una llamada para explorar las posibilidades reales que la IA ofrece a tu editorial.',
  },
}
