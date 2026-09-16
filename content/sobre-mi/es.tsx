import { historyBoldStyle } from '@/app/(es)/sobre-mi/HistorySection'
import type { SobreMiContent } from './types'

export const sobreMiContentEs: SobreMiContent = {
  hero: {
    tag: '[SOBRE MÍ]',
    title: (
      <>
        Soy Mariona y ayudo a <span style={{ color: 'var(--color-orange-400)' }}>editoriales educativas</span> a trazar su camino en la era de la IA.
      </>
    ),
    body: 'Llevo más de diez años trabajando en el cruce entre edición, educación e innovación tecnológica. He sido editora, docente y ahora acompaño a editoriales que quieren convertir la IA en ventaja competitiva sin renunciar al rigor editorial y pedagógico.',
    photoAlt: 'Mariona Masferrer',
  },
  values: {
    tag: '[MIS VALORES]',
    title: 'Trabajo siempre guiada por la integridad y el rigor.',
    items: [
      { icon: '/about-icon-humanismo.svg', title: 'Humanismo', description: 'Pongo a las personas en el centro, porque la tecnología solo tiene sentido si genera un impacto positivo real.', height: 304 },
      { icon: '/about-icon-excelencia.svg', title: 'Excelencia y estrategia', description: 'Ejecuto buscando la excelencia en cada detalle, sin perder la visión global y la mirada larga. Una combinación que te acerca al éxito.', height: 350 },
      { icon: '/about-icon-innovacion.svg', title: 'Innovación sensata', description: 'Integro nuevas tecnologías y metodologías solo cuando aportan un valor real al aprendizaje y al proceso editorial. No innovo por innovar.', height: 350 },
      { icon: '/about-icon-integridad.svg', title: 'Integridad', description: 'Actúo con ética y transparencia para construir relaciones de confianza, ya que las transformaciones solo son posibles con buenos compañeros de viaje.', height: 284 },
      { icon: '/about-icon-valentia.svg', title: 'Valentía comprometida', description: 'Me atrevo a cuestionar lo establecido y a proponer caminos diferentes, pero siempre después de un análisis sólido y con responsabilidad.', height: 284 },
      { icon: '/about-icon-valor.svg', title: 'Cercanía  ', description: 'Escucho y co-creo con quienes trabajo, porque las mejores soluciones nacen de la suma de perspectivas, del diálogo y de la confianza.', height: 350 },
    ],
  },
  history: {
    tag: '[MI HISTORIA]',
    title: 'De la literatura a la IA: un camino de puentes y confluencias.',
    entries: [
      {
        title: 'Entre libros y estrategia',
        description: 'Estudié Filología Catalana por amor a la literatura, pero enseguida descubrí que era más estratega que poeta. Mientras mis compañeros soñaban con escribir, yo buscaba trabajar en una editorial, el lugar donde las humanidades y la gestión confluyen.',
        titleSide: 'left',
        milestones: [
          { date: '2004-2009', description: <>Estudié <strong style={historyBoldStyle}>Filología Catalana</strong> en la UAB</> },
          { date: '2009-2012', description: <>Trabajé como <strong style={historyBoldStyle}>gestora cultural</strong> en el IRL</> },
          { date: '2012-2013', description: <>Hice un máster en <strong style={historyBoldStyle}>Filosofía Contemporánea</strong> en la UIB</> },
        ],
      },
      {
        title: 'El libro digital',
        description: 'Viví de cerca los debates sobre el fin del papel. Me formé en edición digital y diseñé nuevos flujos de producción. Aprendí que ante una disrupción, lo más importante es disponer de una brújula propia.',
        titleSide: 'right',
        milestones: [
          { date: '2012-2014', description: <>Mi primera experiencia como <strong style={historyBoldStyle}>coordinadora editorial</strong></> },
          { date: '2014', description: <>Hice un máster en <strong style={historyBoldStyle}>edición digital</strong> en la UAH</> },
        ],
      },
      {
        title: 'La educación',
        description: 'La edición educativa siempre me había parecido un mundo lejano. Pero me fui reencontrando con un interés que siempre había estado ahí: mi madre maestra, los años de activismo estudiantil, las tardes dando clases de refuerzo...',
        titleSide: 'left',
        milestones: [
          { date: '2015-2019', description: <>Trabajo intenso como <strong style={historyBoldStyle}>editora digital</strong> en Editorial Altamar</> },
        ],
      },
      {
        title: 'Dentro del aula',
        description: 'Después de unos años trabajando con contenido educativo, quise saber qué pasa de verdad en un aula. Me sirvió para entender la distancia que a veces hay entre lo que produce una editorial y lo que necesita el profesorado y el alumnado.',
        titleSide: 'right',
        milestones: [
          { date: '2019-2021', description: <><strong style={historyBoldStyle}>Profesora</strong> de lengua y literatura</> },
        ],
      },
      {
        title: 'Buenos Aires',
        description: 'Cuanto más tiempo pasaba en el aula, más clara tenía una cosa: mi formación pedagógica no estaba a la altura. Me fui a Buenos Aires, me especialicé en pedagogía y empecé a trabajar como editora freelance especializada en contenido educativo.',
        titleSide: 'left',
        milestones: [
          { date: '2021', description: <>Empecé a trabajar como <strong style={historyBoldStyle}>editora freelance</strong> especializada en educación</> },
          { date: '2022-2023', description: <>Me formé en <strong style={historyBoldStyle}>Pedagogías para la Igualdad</strong> en la UBA</> },
        ],
      },
      {
        title: 'La inteligencia artificial',
        description: 'Cuando la IA se abrió al gran público, me formé, la incorporé a mis flujos y desarrollé un enfoque propio. Comprender los procesos editoriales desde adentro me permitió identificar cómo la IA podía fortalecer las editoriales y los riesgos que era importante mitigar.',
        titleSide: 'right',
        milestones: [
          { date: '2023', description: <>Estudié el máster en <strong style={historyBoldStyle}>IA e Innovación</strong> de Founderz</> },
        ],
      },
      {
        title: 'Hoy',
        description: 'Hoy soy consultora de implementación estratégica de IA para editoriales educativas. Ayudo a la dirección a decidir qué hacer con la IA y a gestionar el cambio cultural y tecnológico en su equipo.',
        titleSide: 'left',
        milestones: [
          { date: '2025', description: <>De editora a consultora de <strong style={historyBoldStyle}>innovación</strong> editorial con IA</> },
        ],
      },
    ],
  },
  quote: {
    tag: '[UNA CONVICCIÓN]',
    quote: (
      <>
        “Trabajo para que las editoriales incorporen la IA de forma crítica, y preservar así las mejores prácticas del oficio de editar.
        <br /><br />
        Creo que deben seguir siendo piezas clave de una educación de calidad. Por eso les animo a definir, con valentía y confianza, el papel que quieren jugar en el futuro de la educación.”
      </>
    ),
  },
  linkedin: {
    name: 'Mariona Masferrer i Fons',
    description: 'Ayudo a editoriales educativas a evolucionar su estrategia de negocio y sus sistemas de producción en un sector transformado por la IA.',
    ctaLabel: 'VER PERFIL DE LINKEDIN',
    photoAlt: 'Mariona Masferrer',
  },
  cta: {
    title: '¿Quieres explorar el futuro de tu editorial?',
    subtitle: 'Si crees que puedo aportarte valor o quieres contrastar ideas sobre el sector, estaré encantada de hablar contigo.',
  },
}
