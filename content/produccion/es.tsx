const span = (text: string, color = 'var(--color-orange-400)') => <span style={{ color }}>{text}</span>

export const produccionContentEs = {
  metadata: {
    title: 'Producción editorial con IA',
    description:
      'IA aplicada a la producción de contenidos educativos: creación y edición de materiales, revisión y evaluación editorial y diseño de sistemas de producción para tu equipo.',
  },
  hero: {
    tag: '[PRODUCCIÓN EDITORIAL CON IA]',
    title: <>IA aplicada a la {span('producción', 'var(--color-blue-500)')} de contenidos educativos.</>,
    body: 'Te ayudo a mejorar la producción de tu editorial: creo y edito materiales, reviso los contenidos que ya generáis o preparo los procesos para que tu equipo pueda producir y validar con IA.',
  },
  modalities: {
    title: <>¿Qué necesitas resolver para cumplir con tu calendario de {span('producción?')}</>,
    subtitle: 'Puedes encargarme materiales, una evaluación de calidad o la preparación de un sistema de producción para tu equipo.',
    // En el mateix ordre que les il·lustracions de ModalitiesSection.
    items: [
      {
        tag: 'Servicios editoriales llave en mano',
        title: 'Creación y edición de contenidos',
        body: 'Redacto y edito materiales educativos: libros de texto, situaciones de aprendizaje, evaluaciones, solucionarios, guías didácticas, recursos complementarios, etc. Aplico IA a su elaboración y reviso el contenido para que responda al nivel educativo, los objetivos de aprendizaje y las pautas de tu editorial.',
      },
      {
        tag: 'Revisión de contenido generado con IA',
        title: 'Revisión y evaluación editorial',
        body: 'Reviso los materiales generados con IA: contrasto la información, compruebo su adecuación didáctica y detecto errores de contenido, lenguaje y coherencia. Podemos trabajar sobre los materiales que necesitas publicar o evaluar los resultados de una herramienta de IA para identificar qué debe mejorar.',
      },
      {
        tag: 'Sistema de producción con IA',
        title: 'Diseño de un sistema de producción',
        body: 'Preparo los materiales de partida, hago explícito el criterio editorial y pedagógico y lo convierto en contexto y instrucciones ejecutables por la IA. Configuro el sistema sobre herramientas existentes o trabajo con vuestro equipo tecnológico para mejorar una herramienta propia e incorporarla a tu flujo de trabajo.',
      },
    ],
  },
  system: {
    title: <>¿Qué es un {span('sistema de producción')} con IA?</>,
    body: 'Es una forma sistematizada de producir contenidos educativos que combina tus materiales de partida, tu criterio editorial y pedagógico, las herramientas de IA y la validación de tu equipo de edición.',
    optionsTitle: 'Dos formas de ponerlo en marcha',
    optionsSubtitle: 'Te ayudo a diseñar ese sistema y ponerlo en marcha para que podáis aplicarlo a vuestra producción habitual.',
    valueLabel: '¿Qué aporta esta alternativa?',
    helpsLabel: '¿En qué te ayudo?',
    options: [
      {
        title: 'Un sistema sobre herramientas como ChatGPT o Claude',
        body: 'Quizás todavía no habéis incorporado herramientas de IA, o ya tenéis licencias pero os cuesta aprovecharlas. También puede que cada editor experimente por su cuenta. Un sistema compartido os permite agilizar la producción y mantener los criterios de calidad de vuestra editorial.',
        value: 'Permite cubrir una necesidad concreta sin las grandes inversiones que implican los desarrollos a medida. Podemos aprovechar las herramientas que ya tenéis y ampliar el sistema a medida que comprobamos los resultados.',
        helps: [
          'Reviso contigo qué herramienta encaja mejor con tu editorial.',
          'Organizo los materiales de partida, convierto el criterio editorial y pedagógico en instrucciones y configuro los procesos para crear tus contenidos.',
          'Acompaño al equipo para que pueda utilizar el sistema de forma autónoma.',
        ],
      },
      {
        title: 'Un sistema sobre una herramienta desarrollada para tu editorial',
        body: 'Puede que estéis diseñando una nueva herramienta, desarrollándola o intentando incorporarla a vuestro flujo de producción. Necesitáis que responda a vuestro criterio editorial y pedagógico y que sus resultados sean útiles para el equipo.',
        value: 'Una herramienta propia puede conectarse con los sistemas que ya utilizáis. También se puede entrenar específicamente con ejemplos de vuestra editorial para ajustarla a vuestros requisitos concretos.',
        helps: [
          'Trabajo con los responsables editoriales y tecnológicos para definir cómo debe funcionar el sistema.',
          'Preparo los materiales de partida, traduzco el criterio editorial y pedagógico en requisitos y diseño las pruebas para evaluar los resultados.',
          'Acompaño el piloto y su incorporación al trabajo del equipo.',
        ],
      },
    ],
    benefitsTitle: '¿Qué aporta a tu editorial?',
    // En el mateix ordre que les icones de ProductionSystemSection.
    benefits: [
      { title: 'Más capacidad de producción', body: 'Publicar más materiales con el mismo equipo, agilizando las tareas repetitivas y dedicando más tiempo al criterio editorial y pedagógico.' },
      { title: 'Ahorro de costes', body: 'Reducir las horas de trabajo interno y la necesidad de externalizar determinadas tareas de producción, manteniendo los criterios de calidad acordados.' },
      { title: 'Implantación progresiva', body: 'Empezar por un caso de uso concreto, comprobar su impacto y ampliar el sistema a otros materiales o procesos cuando los resultados lo justifiquen.' },
      { title: 'Criterios compartidos y resultados consistentes', body: 'Las pautas de tu editorial se codifican y el equipo dispone de una base común para producir y revisar los materiales.' },
    ],
    strategyPrompt: '¿Todavía estás decidiendo qué iniciativas de IA impulsar?',
    strategyLink: 'Te ayudo con la estrategia de IA',
    strategyHref: '/servicios/estrategia-de-ia',
  },
  caseHighlight: {
    title: 'Altamar: un sistema para producir materiales complementarios con IA.',
    paragraphs: [
      'Altamar necesitaba optimizar la elaboración de los materiales que acompañan a sus libros de texto. Trabajamos sobre su criterio editorial y pedagógico para preparar un sistema en Claude que su equipo pudiera utilizar en la producción.',
      'En cuatro semanas preparamos procesos para cinco tipologías: guías didácticas, solucionarios, retos, evaluaciones y presentaciones. La implementación incluyó la codificación del criterio, la configuración de los procesos y la formación del equipo.',
    ],
    facts: [
      ['Cliente', 'Altamar'],
      ['Enfoque', 'Sistema sobre herramientas existentes'],
      ['Alcance', '5 tipologías'],
      ['Duración', '4 semanas'],
    ] as [string, string][],
    linkLabel: 'Ver el caso de Altamar',
  },
  projects: {
    tag: '[PROYECTOS EDITORIALES]',
    title: <>Proyectos que ya he {span('editado')} y {span('coordinado')}</>,
    subtitle: 'Desde 2021, todas las editoriales que han trabajado conmigo me han encargado el proyecto siguiente. La recurrencia es la mejor recompensa al trabajo bien hecho.',
    prev: 'Proyectos anteriores',
    next: 'Proyectos siguientes',
    trackLabel: 'Proyectos editoriales, desplazamiento horizontal',
    /** `{title}` es substitueix pel títol del projecte. */
    coverAlt: 'Cubierta de {title}',
    roleLabel: 'Rol:',
    publisherLabel: 'Editorial:',
  },
  cta: {
    title: 'Hablemos de lo que necesitas producir.',
    subtitle: 'Reserva una sesión gratuita de una hora para contarme qué materiales necesitas producir o qué quieres que tu equipo pueda hacer con IA.',
  },
}

export type ProduccionContent = typeof produccionContentEs
