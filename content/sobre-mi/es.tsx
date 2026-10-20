import type { ReactNode } from 'react'

const accent = (text: string) => <span style={{ color: 'var(--color-orange-400)' }}>{text}</span>
const bold = (text: string) => <strong style={{ fontWeight: 600, color: 'var(--color-blue-400)' }}>{text}</strong>

type Milestone = { date: string; description: ReactNode }

export const sobreMiContentEs = {
  metadata: {
    title: 'Sobre mí',
    description:
      'Más de diez años entre edición, docencia e innovación tecnológica, ayudando a editoriales educativas a convertir la IA en ventaja competitiva.',
  },
  hero: {
    photoAlt: 'Mariona Masferrer',
    tag: '[SOBRE MÍ]',
    title: <>Soy Mariona y ayudo a {accent('editoriales educativas')} a trazar su camino en la era de la IA.</>,
    body: 'Llevo más de diez años trabajando en el cruce entre edición, educación e innovación tecnológica. He sido editora, docente y ahora acompaño a editoriales que quieren convertir la IA en ventaja competitiva sin renunciar al rigor editorial y pedagógico.',
  },
  values: {
    tag: '[MIS VALORES]',
    title: 'Trabajo siempre guiada por la integridad y el rigor.',
    // En el mateix ordre que les icones de ValuesSection.
    items: [
      { title: 'Humanismo', description: 'Pongo a las personas en el centro, porque la tecnología solo tiene sentido si genera un impacto positivo real.' },
      { title: 'Excelencia y estrategia', description: 'Ejecuto buscando la excelencia en cada detalle, sin perder la visión global y la mirada larga. Una combinación que te acerca al éxito.' },
      { title: 'Innovación sensata', description: 'Integro nuevas tecnologías y metodologías solo cuando aportan un valor real al aprendizaje y al proceso editorial. No innovo por innovar.' },
      { title: 'Integridad', description: 'Actúo con ética y transparencia para construir relaciones de confianza, ya que las transformaciones solo son posibles con buenos compañeros de viaje.' },
      { title: 'Valentía comprometida', description: 'Me atrevo a cuestionar lo establecido y a proponer caminos diferentes, pero siempre después de un análisis sólido y con responsabilidad.' },
      { title: 'Cercanía', description: 'Escucho y co-creo con quienes trabajo, porque las mejores soluciones nacen de la suma de perspectivas, del diálogo y de la confianza.' },
    ],
  },
  history: {
    tag: '[MI HISTORIA]',
    title: 'De la literatura a la IA: un camino de puentes y confluencias.',
    // En el mateix ordre que la disposició (costat del títol) de HistorySection.
    entries: [
      {
        title: 'Entre libros y estrategia',
        description: 'Estudié Filología Catalana por amor a la literatura, pero enseguida descubrí que era más estratega que poeta. Mientras mis compañeros soñaban con escribir, yo buscaba trabajar en una editorial, el lugar donde las humanidades y la gestión confluyen.',
        milestones: [
          { date: '2004-2009', description: <>Estudié {bold('Filología Catalana')} en la UAB</> },
          { date: '2009-2012', description: <>Trabajé como {bold('gestora cultural')} en el IRL</> },
          { date: '2012-2013', description: <>Hice un máster en {bold('Filosofía Contemporánea')} en la UIB</> },
        ] as Milestone[],
      },
      {
        title: 'El libro digital',
        description: 'Viví de cerca los debates sobre el fin del papel. Me formé en edición digital y diseñé nuevos flujos de producción. Aprendí que ante una disrupción, lo más importante es disponer de una brújula propia.',
        milestones: [
          { date: '2012-2014', description: <>Mi primera experiencia como {bold('coordinadora editorial')}</> },
          { date: '2014', description: <>Hice un máster en {bold('edición digital')} en la UAH</> },
        ] as Milestone[],
      },
      {
        title: 'La educación',
        description: 'La edición educativa siempre me había parecido un mundo lejano. Pero me fui reencontrando con un interés que siempre había estado ahí: mi madre maestra, los años de activismo estudiantil, las tardes dando clases de refuerzo...',
        milestones: [
          { date: '2015-2019', description: <>Trabajo intenso como {bold('editora digital')} en Editorial Altamar</> },
        ] as Milestone[],
      },
      {
        title: 'Dentro del aula',
        description: 'Después de unos años trabajando con contenido educativo, quise saber qué pasa de verdad en un aula. Me sirvió para entender la distancia que a veces hay entre lo que produce una editorial y lo que necesita el profesorado y el alumnado.',
        milestones: [
          { date: '2019-2021', description: <>{bold('Profesora')} de lengua y literatura</> },
        ] as Milestone[],
      },
      {
        title: 'Buenos Aires',
        description: 'Cuanto más tiempo pasaba en el aula, más clara tenía una cosa: mi formación pedagógica no estaba a la altura. Me fui a Buenos Aires, me especialicé en pedagogía y empecé a trabajar como editora freelance especializada en contenido educativo.',
        milestones: [
          { date: '2021', description: <>Empecé a trabajar como {bold('editora freelance')} especializada en educación</> },
          { date: '2022-2023', description: <>Me formé en {bold('Pedagogías para la Igualdad')} en la UBA</> },
        ] as Milestone[],
      },
      {
        title: 'La inteligencia artificial',
        description: 'Cuando la IA se abrió al gran público, me formé, la incorporé a mis flujos y desarrollé un enfoque propio. Comprender los procesos editoriales desde adentro me permitió identificar cómo la IA podía fortalecer las editoriales y los riesgos que era importante mitigar.',
        milestones: [
          { date: '2023', description: <>Estudié el máster en {bold('IA e Innovación')} de Founderz</> },
        ] as Milestone[],
      },
      {
        title: 'Hoy',
        description: 'Hoy soy consultora de implementación estratégica de IA para editoriales educativas. Ayudo a la dirección a decidir qué hacer con la IA y a gestionar el cambio cultural y tecnológico en su equipo.',
        milestones: [
          { date: '2025', description: <>De editora a consultora de {bold('innovación')} editorial con IA</> },
        ] as Milestone[],
      },
    ],
  },
  quote: {
    tag: '[UNA CONVICCIÓN]',
    text: (
      <>
        “Trabajo para que las editoriales incorporen la IA de forma crítica, y preservar así las mejores prácticas del oficio de editar.
        <br /><br />
        Creo que deben seguir siendo piezas clave de una educación de calidad. Por eso les animo a definir, con valentía y confianza, el papel que quieren jugar en el futuro de la educación.”
      </>
    ),
  },
  linkedin: {
    photoAlt: 'Mariona Masferrer',
    description: 'Ayudo a editoriales educativas a evolucionar su estrategia de negocio y sus sistemas de producción en un sector transformado por la IA.',
    ctaLabel: 'VER PERFIL DE LINKEDIN',
  },
  cta: {
    title: '¿Quieres explorar el futuro de tu editorial?',
    subtitle: 'Si crees que puedo aportarte valor o quieres contrastar ideas sobre el sector, estaré encantada de hablar contigo.',
  },
}

export type SobreMiContent = typeof sobreMiContentEs
