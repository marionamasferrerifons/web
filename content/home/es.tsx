const accent = (text: string) => <span style={{ color: 'var(--color-orange-400)' }}>{text}</span>

export const homeContentEs = {
  metadata: {
    title: 'Mariona Masferrer i Fons — IA para editoriales educativas',
    description:
      'Ayudo a editoriales educativas a tomar decisiones estratégicas sobre IA, a mejorar la producción de contenidos y a aprender a trabajar con ella, con criterio editorial y pedagógico.',
  },
  hero: {
    photoAlt: 'Mariona Masferrer',
    title: <>Haz que la IA {accent('potencie')} tu editorial educativa.</>,
    tag: '[+10 AÑOS DE EXPERIENCIA]',
    body: 'Te ayudo a tomar decisiones estratégicas sobre IA, a mejorar tus flujos de producción y a aprender a trabajar con herramientas de IA. Te aporto criterio editorial y pedagógico, y un conocimiento práctico de la tecnología.',
  },
  logosStrip: {
    ariaLabel: 'Editoriales y organizaciones con las que he trabajado',
  },
  services: {
    tag: '[Servicios]',
    title: <>¿Cómo puedo {accent('ayudarte')}?</>,
    subtitle: 'Adapto mi trabajo a las necesidades concretas de tu editorial, a tus objetivos y a cómo trabaja tu equipo.',
    items: [
      {
        href: '/servicios/estrategia-de-ia',
        title: 'Estrategia de IA',
        body: 'Te ayudo a tomar decisiones sobre IA, valorar oportunidades y dirigir las iniciativas de tu editorial. Para resolver una cuestión concreta o para liderar proyectos que requieren continuidad.',
        link: 'Ver estrategia de IA',
      },
      {
        href: '/servicios/produccion-editorial-con-ia',
        title: 'Producción editorial con IA',
        body: 'Creo y edito materiales educativos, reviso los contenidos que ya generáis o preparo un sistema para que tu equipo pueda producir contenidos publicables con IA.',
        link: 'Ver producción editorial con IA',
      },
      {
        href: '/servicios/formacion-en-ia',
        title: 'Formación en IA',
        body: 'Te ayudo a entender y dominar la IA y a aplicar lo aprendido a tu trabajo editorial. Con opciones para profesionales individuales y formación adaptada a tu equipo.',
        link: 'Ver formación en IA',
      },
    ],
  },
  cases: {
    tag: '[Casos de éxito]',
    title: <>Proyectos que ya he {accent('realizado')}</>,
    subtitle: 'Dos proyectos recientes en los que aplicamos la IA a decisiones y procesos reales de una editorial educativa.',
    items: [
      {
        tag: '[Estrategia de IA]',
        title: 'Consultoría para detectar oportunidades de negocio y reorientar la inversión en IA',
        body: 'En cinco semanas analizamos el contexto de la editorial y definimos una hoja de ruta con iniciativas priorizadas y proveedores evaluados. El trabajo permitió reorientar el presupuesto y establecer criterios para decidir qué impulsar y qué aplazar.',
        link: 'Ver el caso de estrategia',
        href: '/casos-de-exito/estrategia-de-ia',
      },
      {
        tag: '[Producción editorial con IA]',
        title: 'Desarrollo de un sistema para producir materiales complementarios con Claude',
        body: 'En cuatro semanas preparamos un sistema en Claude para producir guías didácticas, solucionarios, retos, evaluaciones y presentaciones. Codificamos el criterio editorial y pedagógico, configuramos los procesos y formamos al equipo para utilizarlos.',
        link: 'Ver el caso de producción',
        href: '/casos-de-exito/altamar-produccion-editorial-claude',
      },
    ],
  },
  profile: {
    photoAlt: 'Mariona Masferrer',
    tag: '[Sobre mí]',
    title: <>Criterio editorial, experiencia en el aula y {accent('práctica con IA')}</>,
    body: 'Mi experiencia como editora y docente guía mi forma de aplicar la IA: parto de cómo se producen los materiales, de lo que necesitan quienes los utilizan y de los estándares de calidad que deben cumplir.',
    contributions: [
      {
        title: 'Conozco el trabajo editorial',
        body: 'He trabajado en autoría, edición y gestión de proyectos. Conozco las exigencias del contenido, los calendarios y la coordinación entre profesionales.',
      },
      {
        title: 'Entiendo el uso educativo de los contenidos',
        body: 'Mi experiencia docente me ayuda a valorar si un material es claro, adecuado a su nivel y útil para enseñar y aprender.',
      },
      {
        title: 'Trabajo con la IA en la práctica',
        body: 'Aplico IA a procesos editoriales reales. Pruebo sus posibilidades, reviso sus resultados y ajusto las instrucciones y los procesos según lo que necesita cada proyecto.',
      },
    ],
    link: 'Conoce mi trayectoria',
    linkHref: '/sobre-mi',
  },
  criterio: {
    tag: '[Mi enfoque]',
    title: <>¿Cómo enfoco mi {accent('trabajo')}?</>,
    subtitle: 'Combino la mirada editorial, pedagógica y tecnológica para definir dónde puede ayudarte la IA y cómo mantener el criterio de tu equipo al frente del proceso.',
    editorial: {
      label: 'Editorial',
      short: 'Aplico la IA desde el oficio de editar, preservando sus buenas prácticas y el conocimiento del sector.',
      full: 'Aplico la IA desde el conocimiento del oficio de editar, preservando sus buenas prácticas y el conocimiento acumulado del sector. Ese saber guía cómo incorporo la tecnología y cómo valoro sus resultados.',
    },
    pedagogia: {
      label: 'Pedagogía',
      short: 'Combino didáctica basada en evidencia y experiencia en el aula para crear materiales que favorezcan el aprendizaje.',
      full: 'Combino metodologías didácticas basadas en evidencia con mi experiencia en el aula para crear materiales que favorezcan el aprendizaje significativo y respondan a las necesidades reales de docentes y alumnado.',
    },
    tecnologia: {
      label: 'Tecnología',
      short: 'Conozco las posibilidades y los límites de la IA, y la aplico a proyectos reales para tomar decisiones fundamentadas.',
      full: 'Comprendo cómo funciona la IA, sus posibilidades y sus límites. Combino esa comprensión con la experiencia de aplicarla a proyectos reales para tomar decisiones tecnológicas fundamentadas que ayuden a tu editorial a alcanzar sus objetivos.',
    },
  },
  testimonials: {
    tag: '[Testimonios]',
    title: <>¿Qué dicen los que han {accent('trabajado conmigo')}?</>,
    carouselLabel: 'Testimonios',
    carouselRole: 'carrusel',
    prev: 'Testimonio anterior',
    next: 'Testimonio siguiente',
    /** `{n}` i `{total}` es substitueixen. */
    goTo: 'Ver testimonio {n} de {total}',
  },
  cta: {
    title: '¿Qué necesita tu editorial?',
    subtitle: 'Reserva una sesión gratuita de una hora para hablar de tu editorial, entender qué necesitas y valorar cómo puedo ayudarte.',
  },
}

export type HomeContent = typeof homeContentEs
