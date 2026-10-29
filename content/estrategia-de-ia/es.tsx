const span = (text: string, color: string) => <span style={{ color }}>{text}</span>

export const estrategiaContentEs = {
  metadata: {
    title: 'Estrategia de IA',
    description:
      'Criterio y dirección para decidir qué hacer con la IA en tu editorial: decisiones concretas, recomendaciones fundamentadas y una hoja de ruta clara.',
  },
  hero: {
    tag: '[ESTRATEGIA DE IA]',
    title: <>Criterio y dirección para decidir {span('qué hacer con la IA', 'var(--color-white)')} en tu editorial.</>,
    body: 'Te ayudo a resolver decisiones concretas, explorar oportunidades de negocio y dirigir tus iniciativas de IA. Con conocimiento del sector editorial, de la educación y de la tecnología.',
  },
  decisions: {
    title: <>Te ayudo a responder las preguntas que {span('no puedes seguir aplazando.', 'var(--color-orange-400)')}</>,
    items: [
      { title: '¿Dónde puede ayudarnos la IA?', body: 'Te ayudo a identificar qué problemas de tu editorial merece la pena abordar con IA y dónde podría aportar valor.' },
      { title: '¿Por dónde empezamos entre tantas ideas?', body: 'Te ayudo a priorizar iniciativas según su valor, viabilidad y encaje con los objetivos de tu editorial.' },
      { title: '¿Qué herramienta de IA incorporamos?', body: 'Te ayudo a comparar alternativas y valorar la inversión, los recursos y las dependencias que implica cada opción.' },
      { title: '¿Tiene sentido esta propuesta de un proveedor?', body: 'Te ayudo a entender y valorar lo que las empresas tecnológicas te ofrecen y te doy pautas para tomar decisiones informadas.' },
      { title: '¿Podemos crear nuevos productos o negocios?', body: 'Te ayudo a explorar oportunidades de negocio a partir de tu catálogo, tu conocimiento y las necesidades de docentes, centros y alumnado.' },
      { title: '¿Por qué no funciona lo que hemos probado?', body: 'Te ayudo a analizar los bloqueos y a decidir si conviene ajustar el enfoque de la iniciativa, replantearla o detenerla antes de comprometer más presupuesto.' },
    ],
  },
  process: {
    title: '¿Cómo trabajo?',
    body: 'Mi experiencia como editora y docente me permite valorar cómo las decisiones sobre IA afectan a la calidad del contenido publicado, al equipo que lo produce y a quienes lo utilizan.',
    steps: [
      { title: 'Análisis de los retos estratégicos de tu negocio', body: 'Ponemos sobre la mesa tus objetivos, recursos e idiosincrasia para decidir dónde la IA aporta valor.' },
      { title: 'Recomendaciones fundamentadas', body: 'Contrastamos alternativas, identificamos riesgos y priorizamos las oportunidades en función de su impacto.' },
      { title: 'Hoja de ruta concreta para avanzar con claridad', body: 'Definimos qué hacer a continuación, quién debe participar y cómo valorar los resultados.' },
    ],
  },
  collaboration: {
    title: '¿Cómo podemos colaborar?',
    subtitle: 'Dos formas de trabajar que se adaptan a las necesidades específicas de tu editorial.',
    helpsLabel: '¿En qué te ayudo?',
    outcomeLabel: '¿Qué te llevas?',
    cards: [
      {
        tag: 'PARA UNA CUESTIÓN CONCRETA',
        title: 'Asesoramiento puntual',
        body: 'Trabajamos sobre una decisión, un problema o una oportunidad que quieres explorar. Acordamos el objetivo y el alcance según tus necesidades.',
        helps: [
          'Entender el problema y contrastar las alternativas.',
          'Valorar oportunidades, inversiones o propuestas de proveedores.',
          'Definir una recomendación y los siguientes pasos.',
        ],
        outcome: 'Conclusiones y recomendaciones documentadas para avanzar en la cuestión que hayamos acordado.',
      },
      {
        tag: 'PARA DIRIGIR TUS INICIATIVAS DE FORMA SOSTENIBLE',
        title: 'Dirección de IA externa',
        body: 'Ejerzo la función de directora de IA de tu editorial con la dedicación que necesites y sin que tengas que asumir el coste de una contratación fija.',
        helps: [
          'Definir los objetivos estratégicos de tu editorial.',
          'Diseñar tu hoja de ruta y el plan de trabajo.',
          'Dirigir y coordinar las iniciativas con tus equipos y proveedores.',
          'Dar seguimiento a presupuestos, avances, riesgos y resultados.',
          'Organizar las responsabilidades y los criterios de decisión sobre IA.',
          'Acompañar los cambios y las decisiones que aparezcan durante la ejecución.',
        ],
        outcome: 'Dirección de IA continuada, con la dedicación y el nivel de implicación que tu editorial necesite en cada momento.',
      },
    ],
  },
  caseHighlight: {
    title: 'Altamar: de querer incorporar IA a decidir dónde invertir.',
    paragraphs: [
      'Altamar necesitaba definir qué papel debía tener la IA en su negocio y qué iniciativas merecía la pena impulsar.',
      'En un proyecto de cinco semanas analizamos su contexto, identificamos oportunidades y construimos una hoja de ruta con iniciativas priorizadas, proveedores evaluados y una propuesta de calendario e inversión.',
      'El trabajo permitió reorientar el presupuesto hacia una cartera de iniciativas y establecer criterios para decidir qué impulsar y qué aplazar.',
    ],
    facts: [
      ['Cliente', 'Altamar'],
      ['Servicio', 'Consultoría estratégica'],
      ['Duración', '5 semanas'],
    ] as [string, string][],
    linkLabel: 'Ver el caso de Altamar',
  },
  cta: {
    title: 'Cuéntame qué necesitas decidir.',
    subtitle: 'Reserva una sesión gratuita de una hora para hablar de tu editorial, entender qué necesitáis y valorar si puedo ayudarte.',
  },
}

export type EstrategiaContent = typeof estrategiaContentEs
