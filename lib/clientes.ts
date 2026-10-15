/**
 * Espai de treball compartit amb clients (`/clientes/<client>`).
 *
 * Ruta oculta, no secreta: no és al menú, al sitemap ni als buscadors
 * (noindex + robots.txt), però qualsevol persona amb l'enllaç hi pot entrar.
 * No hi posis informació confidencial.
 *
 * Per afegir un client o un projecte, afegeix-lo a `CLIENT_SPACES`: les rutes
 * es generen a partir d'aquesta llista i qualsevol altra adreça dona 404.
 * Els textos admeten *cursiva* entre asteriscos.
 */

export type Unit = {
  code: string
  title: string
  items?: string[]
  /** Unitat proposada, pendent d'acordar: es mostra amb vora discontínua. */
  proposal?: boolean
}

export type Block = {
  id: string
  num: string
  /** Títol curt per a l'índex lateral. */
  short: string
  title: string
  pending?: {
    title: string
    text: string
    options: { label: string; text: string }[]
    note: string
  }
  units: Unit[]
}

export type ClientProject = {
  slug: string
  kind: string
  /** Etiqueta de la targeta del tauler, després del tipus («100 horas»). */
  meta: string
  docType: string
  status: string
  title: string
  summary: string
  version: number
  /** Data de la versió, ISO (AAAA-MM-DD). */
  date: string
  facts: { label: string; value: string }[]
  intro: string
  blocks: Block[]
}

export type ClientSpace = {
  slug: string
  name: string
  intro: string
  projects: ClientProject[]
}

const IA_PARA_EDICION: ClientProject = {
  slug: 'ia-para-el-trabajo-de-edicion',
  kind: 'Formación',
  meta: '100 horas',
  docType: 'Propuesta de índice',
  status: 'En revisión',
  title: 'IA para el trabajo de edición',
  summary: 'Propuesta de índice: 5 bloques y 17 unidades.',
  version: 2,
  date: '2026-10-15',
  facts: [
    { label: 'Duración', value: '100 horas' },
    { label: 'Bloques', value: '5' },
    { label: 'Unidades', value: '17' },
  ],
  intro:
    'El programa se organiza en cinco bloques y diecisiete unidades. Los tres primeros preparan las bases, el entorno y el método de trabajo; el cuarto aplica ese método a casos de uso del sector del libro, del original al lector, y el quinto integra los criterios éticos y legales.',
  blocks: [
    {
      id: 'bloque-1',
      num: '1',
      short: 'Lo que necesito saber sobre la IA',
      title: 'Soy editor/a, ¿qué necesito saber sobre la IA?',
      units: [
        {
          code: 'U1',
          title: 'Las grandes preguntas sobre la IA',
          items: [
            '¿Qué es la IA y qué nos aporta como editores/as?',
            '¿Qué significa que una IA sea «inteligente»?',
            '¿Quién hay detrás de la IA?',
            '¿Qué impacto tiene la IA en el planeta?',
            '¿Cómo está cambiando la IA nuestra sociedad?',
            '¿Cómo está transformando la edición y tu papel como editor/a?',
          ],
        },
        {
          code: 'U2',
          title: '¿Cómo funciona la IA?',
          items: [
            '¿Cómo construye sus respuestas?',
            '¿Qué «sabe» la IA y qué debemos explicarle para conseguir buenos resultados?',
            '¿Cuánta información puede gestionar y qué ocurre cuando superamos ese límite?',
            '¿Por qué una misma petición puede dar respuestas diferentes?',
            '¿Por qué puede inventar información y cómo reconocerlo?',
          ],
        },
      ],
    },
    {
      id: 'bloque-2',
      num: '2',
      short: 'El entorno de trabajo',
      title: 'El entorno de trabajo del editor/a del futuro',
      units: [
        {
          code: 'U3',
          title: 'El sistema operativo de inteligencia artificial para editores/as',
          items: [
            'Del *prompt* aislado al trabajo organizado con IA',
            'El sistema operativo de IA: qué es y qué aporta al editor/a',
            'Los componentes del sistema operativo: el marco de las 4 C',
          ],
        },
        {
          code: 'U4',
          title: 'La caja de herramientas',
          items: [
            'Panorama actual de herramientas de IA para editores/as',
            'Criterios para elegir tu *stack* de herramientas',
            'La configuración inicial de las herramientas',
          ],
        },
        {
          code: 'U5',
          title: '«Entrenar» a la IA con tu criterio editorial',
          items: [
            '¿Qué información necesitas darle a la IA para obtener buenos resultados?',
            '¿Dónde y cómo organizar esta información?',
            'Preparar la información para que la IA la pueda procesar',
            'Conectar la IA con tus herramientas de trabajo',
          ],
        },
        {
          code: 'U6',
          title: 'Mantener ordenado el entorno de trabajo',
          items: [
            'La gestión de la ventana de contexto',
            'La gestión de la memoria',
            'El registro de decisiones',
            'La reutilización de procesos',
          ],
        },
      ],
    },
    {
      id: 'bloque-3',
      num: '3',
      short: 'El editor/a centauro',
      title: 'Del editor/a clásico/a al editor/a centauro',
      units: [
        {
          code: 'U7',
          title: 'El editor/a centauro: una nueva identidad profesional',
          items: [
            'Qué significa ser un/a editor/a centauro',
            'Las competencias que debemos desarrollar y las que debemos conservar',
            'Autoprotegerse de la dependencia de herramientas de IA y el *deskilling*',
          ],
        },
        {
          code: 'U8',
          title: 'El *framework* del editor/a centauro',
          items: [
            'Por qué necesitamos un método (más allá de los *prompts*)',
            'Visión general del *framework*',
            'Paso 1: auditar. Ejemplo práctico: elaborar un informe breve de lectura',
            'Paso 2: seleccionar. Ejemplo práctico: elaborar un informe breve de lectura',
            'Paso 3: deconstruir. Ejemplo práctico: elaborar un informe breve de lectura',
            'Paso 4: diseñar. Ejemplo práctico: elaborar un informe breve de lectura',
            'Paso 5: ejecutar. Ejemplo práctico: elaborar un informe breve de lectura',
            'Paso 6: medir. Ejemplo práctico: elaborar un informe breve de lectura',
          ],
        },
        {
          code: 'U9',
          title: 'El control de calidad del editor/a centauro',
          items: [
            'Preservar la voz del autor/a y el estilo editorial',
            'Detectar los patrones de escritura de la IA',
            'Verificar la validez de los resultados',
            'La gestión de la iteración',
          ],
        },
      ],
    },
    {
      id: 'bloque-4',
      num: '4',
      short: 'Casos de uso para el sector del libro',
      title: 'Del original al lector: casos de uso para el sector del libro',
      units: [
        {
          code: 'U10',
          title: 'Valoración de originales',
          items: [
            'Llega un original: ¿cómo lo valoramos?',
            'El *framework* en acción: elaborar un informe de lectura',
          ],
        },
        {
          code: 'U11',
          title: 'Gestión de proyectos editoriales',
          items: [
            'Decidimos publicarlo: planificar el proyecto editorial',
            'El *framework* en acción: preparar un calendario de trabajo',
          ],
        },
        {
          code: 'U12',
          title: 'Edición de mesa',
          items: [
            'Trabajamos sobre el original: ¿cómo mejoramos el texto?',
            'El *framework* en acción: la edición de un fragmento',
          ],
        },
        {
          code: 'U13',
          title: 'Producción editorial',
          items: [
            'Del texto editado al producto editorial: la producción multiformato',
            'El *framework* en acción: la producción de un audiolibro',
          ],
        },
        {
          code: 'U14',
          title: 'Distribución y promoción de libros',
          items: [
            'El libro llega al mercado: ¿cómo lo vendemos?',
            'El *framework* en acción: preparar una web promocional del libro',
          ],
        },
      ],
    },
    {
      id: 'bloque-5',
      num: '5',
      short: 'Ética y seguridad jurídica',
      title: 'Trabajar con ética y seguridad jurídica',
      units: [
        {
          code: 'U15',
          title: 'Principios éticos del editor/a centauro',
          items: [
            'Los dilemas del trabajo editorial con IA',
            'Los principios éticos: rigor, transparencia, equidad y respeto a la autoría',
            'Los límites de uso: cuándo utilizar IA y cuándo no',
          ],
        },
        {
          code: 'U16',
          title: 'Transparencia y divulgación del uso de IA',
          items: [
            '¿Por qué es necesaria la transparencia?',
            'Cómo escribir divulgaciones claras y honestas',
            'Diferentes niveles de divulgación según el tipo de contenido y el público destinatario',
          ],
        },
        {
          code: 'U17',
          title: 'El marco legal del trabajo con IA',
          items: [
            'Mapa legal aplicable: AI Act, RGPD, derechos de autor y propiedad intelectual',
            'Qué implica el AI Act para el trabajo editorial',
            'Privacidad, datos personales y confidencialidad de manuscritos',
            'Derechos de autor: textos generados, textos asistidos y material de entrenamiento',
          ],
        },
      ],
    },
  ],
}

export const CLIENT_SPACES: ClientSpace[] = [
  {
    slug: 'calamoycran',
    name: 'Cálamo y Cran',
    intro:
      'Este es nuestro espacio de trabajo compartido. Aquí encontraréis los proyectos en curso y las propuestas que estamos conversando.',
    projects: [IA_PARA_EDICION],
  },
]

export function getClientSpace(slug: string) {
  return CLIENT_SPACES.find((c) => c.slug === slug)
}

const dateFormat = (options: Intl.DateTimeFormatOptions) => (iso: string) =>
  new Intl.DateTimeFormat('es-ES', { ...options, timeZone: 'UTC' }).format(new Date(iso))

/** «13 de octubre de 2026» */
export const formatDateLong = dateFormat({ day: 'numeric', month: 'long', year: 'numeric' })
/** «13/10/2026» */
export const formatDateShort = dateFormat({ day: '2-digit', month: '2-digit', year: 'numeric' })
