const span = (text: string, color: string) => <span style={{ color }}>{text}</span>

export const formacionContentEs = {
  metadata: {
    title: 'Formación en IA',
    description:
      'Formación para aplicar la IA al trabajo editorial: curso de iniciación con Cálamo y Cran, acompañamiento individual y formación a medida para equipos editoriales.',
  },
  hero: {
    tag: '[FORMACIÓN EN IA]',
    title: <>Aprende a {span('aplicar la IA', 'var(--color-blue-500)')} a tu trabajo editorial.</>,
    body: 'Tanto si estás empezando como si ya te has formado y te cuesta llevar lo aprendido a la práctica, te ayudo a trabajar con IA con criterio profesional y autonomía.',
  },
  startingPoints: {
    title: <>No te quedes fuera del {span('futuro de la edición', 'var(--color-orange)')}</>,
    // En el mateix ordre que les icones i àncores de StartingPointsSection.
    options: [
      {
        title: 'Quiero empezar a trabajar con IA',
        body: 'Quieres incorporar la IA a tu trabajo editorial, pero no sabes por dónde empezar ni qué herramientas tienen realmente sentido para ti. Te ayudo a crear una base sólida y práctica para dar los primeros pasos con criterio y sin perder más tiempo.',
        link: 'Ver el curso',
      },
      {
        title: 'Me cuesta aplicar lo aprendido',
        body: 'Has hecho cursos y probado herramientas, pero cuando intentas llevarlo a tus proyectos reales te atascas. Trabajamos juntos para resolver tus dificultades concretas y para que sepas usar la IA en tus proyectos reales del día a día.',
        link: 'Ver el acompañamiento individual',
      },
      {
        title: 'Busco formación para mi equipo',
        body: 'La IA está transformando cómo se trabaja en las editoriales. Acompaño a tu equipo en este cambio: resuelvo sus dudas, genero confianza y les doy las herramientas y el apoyo que necesitan para adoptarla con criterio y autonomía.',
        link: 'Ver la formación para empresas',
      },
    ],
  },
  services: {
    /** Lector de pantalla: entre els dos autors del curs. */
    authorsJoiner: 'y',
    // En el mateix ordre que TrainingServicesSection (curs, acompanyament, empreses).
    items: [
      {
        tag: '[Curso]',
        status: 'Próximamente' as string | undefined,
        title: 'IA para el trabajo de edición',
        creditLabel: 'Un curso de' as string | undefined,
        body: 'Un curso práctico para incorporar la IA al trabajo editorial de forma estructurada. Empezamos desde las bases y construimos juntos un sistema completo de trabajo. Ideal si quieres empezar con una base sólida y transferible a cualquier proyecto.',
        cta: 'Pregúntame sobre el curso',
      },
      {
        tag: '[Acompañamiento individual]',
        status: undefined as string | undefined,
        title: 'Convierte la IA en tu gran aliada',
        creditLabel: undefined as string | undefined,
        body: 'Entiendes lo que la IA puede hacer, pero cuando intentas aplicarla a tus proyectos, no siempre sabes por dónde empezar o qué ajustar cuando el resultado no es el esperado. En las sesiones individuales trabajamos sobre tus tareas reales para que la IA se convierta en tu gran aliada.',
        cta: 'Hablar sobre mi acompañamiento',
      },
      {
        tag: '[Formación para empresas]',
        status: undefined as string | undefined,
        title: 'Haz que tu equipo sea parte del cambio',
        creditLabel: undefined as string | undefined,
        body: 'La IA está transformando los flujos de trabajo en las editoriales. Acompaño a tu equipo en este cambio cultural y operativo: resolvemos dudas reales, generamos confianza y les damos el método que necesitan para adoptar la IA con criterio y autonomía. Formación práctica, adaptada a vuestro contexto y orientada a resultados.',
        cta: 'Hablar sobre la formación de mi equipo',
      },
    ],
  },
  cta: {
    title: 'Cuéntame qué te está costando llevar a la práctica.',
    subtitle: 'Reserva una sesión gratuita de una hora para contarme en qué punto estás y qué te gustaría conseguir con IA.',
  },
}

export type FormacionContent = typeof formacionContentEs
