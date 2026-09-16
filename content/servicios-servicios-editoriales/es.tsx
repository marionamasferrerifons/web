import type { ServiciosEditorialesContent } from './types'

export const serviciosEditorialesContentEs: ServiciosEditorialesContent = {
  hero: {
    tag: '[Servicios editoriales con IA aplicada]',
    title: (
      <>
        Amplía tu capacidad de <span style={{ color: 'var(--color-blue-400)' }}>producción</span> con la calidad que exige tu editorial.
      </>
    ),
    body: 'Coordino, edito y desarrollo materiales educativos. Vengo de la edición y del aula. Ahora la IA acelera mi trabajo.',
    ctaLabel: 'RESERVAR UNA LLAMADA',
  },
  painPoints: {
    title1: 'Si necesitas cumplir con el plan de producción...',
    title2: (
      <>
        <span style={{ color: 'var(--color-blue-400)' }}>...ahora puedes </span>
        <span style={{ color: 'var(--color-orange-400)' }}>delegar</span>
        <span style={{ color: 'var(--color-blue-400)' }}> en alguien con oficio y rigor.</span>
      </>
    ),
    row1: [
      { dot: 'var(--color-orange)', text: 'Tu equipo editorial está al límite y no puede absorber más proyectos' },
      { dot: 'var(--color-green)', text: 'Necesitas escalar la producción sin aumentar tu plantilla fija', indent: true },
    ],
    row2: [
      { dot: 'var(--color-orange)', text: 'Quieres publicar con rigor, pero los plazos ajustados hacen que la calidad se resienta' },
      { dot: 'var(--color-blue-300)', text: 'Necesitas incorporar nuevos enfoques didácticos y buscas editores con experiencia real en el aula.' },
    ],
  },
  offerings: {
    tag: '[LO QUE OFREZCO]',
    title: (
      <>
        La capacidad de <span style={{ color: 'var(--color-orange-400)' }}>producción externa</span> que no te obliga a revisarlo todo.{' '}
      </>
    ),
    subtitle: 'Gestiono la producción de materiales de primaria, ESO, bachillerato y FP, con un equipo de colaboradoras de confianza.',
    mainCardTitle: 'La capacidad y el oficio que necesitas para tus contenidos educativos',
    mainCardBody: 'Aplica la innovación educativa en tus libros de texto, asegurándote de que cada material cumpla con los requisitos curriculares y con las necesidades del profesorado y alumnado.',
    serviceCards: [
      { icon: '/s3-icon-definition.png', iconSize: 48, title: 'Definición de la idea editorial', description: 'Definimos el ADN pedagógico y editorial de tu proyecto para que conecte con el aula actual.' },
      { icon: '/s3-icon-coordination.svg', iconSize: 32, title: 'Coordinación de proyectos', description: 'Lidero la ejecución de tu proyecto, centralizando la coordinación de profesionales y el control de plazos, calidad y presupuesto.' },
      { icon: '/s3-icon-edition.svg', iconSize: 32, title: 'Edición de libros de texto', description: 'Reviso el material de autoría buscando coherencia curricular y sentido didáctico y aplicando las mejores prácticas del oficio de editar.' },
      { icon: '/s3-icon-authoring.svg', iconSize: 32, title: 'Autoría de contenidos educativos', description: 'Desarrollo propuestas educativas integrando enfoques competenciales y metodologías activas para un aprendizaje real y significativo.' },
    ],
    whatYoullGetLabel: '[LO QUE CONSEGUIRÁS]',
    outcomes: [
      'Entregas puntuales y sin rondas de corrección imprevistas',
      'Escalar tu capacidad de producción sin aumentar tu plantilla',
      'Reducir los tiempos de desarrollo con la integración responsable de la IA',
    ],
  },
  projects: {
    tag: '[PROYECTOS EDITORIALES]',
    title: (
      <>
        Proyectos que ya he <span style={{ color: 'var(--color-orange-400)' }}>editado</span> y <span style={{ color: 'var(--color-orange-400)' }}>coordinado</span>
      </>
    ),
    subtitle: 'Desde 2021, todas las editoriales que han trabajado conmigo me han encargado el proyecto siguiente. La recurrencia es la mejor recompensa al trabajo bien hecho.',
    prevLabel: 'Anterior',
    nextLabel: 'Siguiente',
    metaLabels: { role: 'Rol:', grade: 'Etapa:', publisher: 'Editorial:' },
  },
  cta: {
    title: '¿Necesitas ayuda para cumplir con tu plan de producción?',
    subtitle: 'Definamos un plan para que tus próximos materiales salgan a la luz a tiempo, sin imprevistos y con los máximos estándares de calidad.',
  },
}
