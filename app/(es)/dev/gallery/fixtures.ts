/**
 * Contingut representatiu per a la galeria — 100% local, sense Sanity.
 *
 * Cada fixture imita la forma exacta que el component real espera (vegeu
 * sanity/queries.ts i els tipus locals de cada secció), però fa servir
 * imatges ja presents a public/ i text escrit a mà. Això permet que la
 * galeria funcioni sense token de Sanity ni xarxa.
 */

function block(text: string, strong = false) {
  return {
    _type: 'block',
    style: 'normal',
    children: [
      strong
        ? { _type: 'span', text, marks: ['strong'] }
        : { _type: 'span', text },
    ],
    markDefs: [],
  }
}

export const FIXTURE_AVATAR = '/home-avatar-1.png'
export const FIXTURE_LOGO = '/testimonial-logo-edebe.svg'

export const testimonialFixture = {
  quote:
    'Treballar amb un criteri editorial clar i la velocitat de la IA ens ha permès mantenir la qualitat sense frenar la producció.',
  authorName: 'Laura Ibáñez',
  authorRole: 'Directora editorial',
  avatarUrl: FIXTURE_AVATAR,
  avatarAlt: 'Retrat de Laura Ibáñez',
  logoUrl: FIXTURE_LOGO,
  logoAlt: 'Logotip Edebé',
}

export const industryLogosFixture = [
  { src: '/home-logo-1.png', alt: 'Editorial Altamar' },
  { src: '/home-logo-2.png', alt: 'Grup Edebé' },
  { src: '/home-logo-3.png', alt: 'Santillana' },
  { src: '/home-logo-4.png', alt: 'Vicens Vives' },
  { src: '/home-logo-5.png', alt: 'Barcanova' },
]

export const caseStudiesFixture = [
  {
    _id: 'fixture-1',
    title: 'Sistema de producció per a Primària',
    subtitle: 'Reducció del 70% en el temps de redacció d’activitats sense perdre criteri pedagògic.',
    client: 'Edebé',
    slug: 'sistema-produccio-primaria',
    imageCard: { asset: null, alt: 'Coberta del projecte Primària' },
  },
  {
    _id: 'fixture-2',
    title: 'Estratègia d’IA per a continguts de Secundària',
    subtitle: 'Full de ruta a 12 mesos per incorporar la IA a tres col·leccions de Secundària.',
    client: 'Vicens Vives',
    slug: 'estrategia-ia-secundaria',
    imageCard: { asset: null, alt: 'Coberta del projecte Secundària' },
  },
]

export const editorialProjectsFixture = [
  {
    _id: 'proj-1',
    year: '2024',
    grade: 'Primària',
    publisher: 'Edebé',
    role: 'Coordinació editorial',
    title: 'Matemàtiques 5è de Primària',
    image: { asset: null, alt: 'Coberta Matemàtiques 5è' },
  },
  {
    _id: 'proj-2',
    year: '2023',
    grade: 'ESO',
    publisher: 'Vicens Vives',
    role: 'Edició de continguts',
    title: 'Llengua Catalana 2n ESO',
    image: { asset: null, alt: 'Coberta Llengua Catalana 2n ESO' },
  },
  {
    _id: 'proj-3',
    year: '2023',
    grade: 'Batxillerat',
    publisher: 'Santillana',
    role: 'Autoria de continguts',
    title: 'Història del Món Contemporani',
    image: { asset: null, alt: 'Coberta Història del Món Contemporani' },
  },
]

export const caseStudyHeroFixture = {
  title: 'Com Edebé va reduir un 70% el temps de producció d’activitats',
  subtitle:
    'Un sistema de producció editorial amb IA construït sobre el criteri pedagògic del seu equip, pensat per créixer col·lecció a col·lecció.',
  year: '2024',
  duration: '4 mesos',
  client: 'Edebé',
}

export const beforeAfterFixture = {
  beforeItems: [
    { text: [block('Cada editor provava la IA pel seu compte, sense protocols comuns.')] },
    { text: [block('Corregir el que generava la IA costava més temps que escriure-ho des de zero.')] },
    { text: [block('El criteri de qualitat variava segons qui revisava cada activitat.')] },
  ],
  afterItems: [
    { text: [block('Un únic sistema codifica el criteri editorial per a tot l’equip.')] },
    { text: [block('El contingut generat surt publicable amb una sola revisió.')] },
    { text: [block('El temps de producció s’ha reduït un 70% en les tipologies prioritzades.')] },
  ],
}

export const processFixture = {
  title: 'Com vam construir el sistema',
  text: [
    block('Vam començar revisant els materials que produïa l’equip i com els produïa, per identificar on la IA podia aportar més valor sense arriscar la qualitat.'),
    block('Codificació del criteri editorial', true),
    block('Un cop validat el procés amb contingut real, el vam traspassar a l’equip perquè pogués mantenir-lo i ampliar-lo de manera autònoma.'),
  ],
  images: [
    { asset: null, alt: 'Captura del procés de treball 1' },
    { asset: null, alt: 'Captura del procés de treball 2' },
  ],
}

export const resultsFixture = [
  { number: '70%', label: 'Reducció del temps de producció d’activitats' },
  { number: '+120', label: 'Activitats generades i publicades en 4 mesos' },
  { number: '0', label: 'Rondes de correcció imprevistes' },
]

export const contextFixture = [
  block('Edebé necessitava escalar la producció d’activitats de Primària sense augmentar la plantilla ni comprometre el seu estàndard pedagògic.'),
]

export const challengeFixture = {
  question: '¿Com generar contingut amb IA que ja arribi al nivell dels seus propis editors?',
  text: [
    block('L’equip havia provat eines genèriques d’IA, però el resultat exigia tantes correccions que no suposava cap estalvi real de temps.'),
  ],
}

export const solutionFixture = {
  title: 'Un sistema de producció construït sobre el seu criteri',
  text: [
    block('Vam codificar el criteri editorial i pedagògic d’Edebé en un entorn de IA dedicat, amb processos específics per a cada tipologia de contingut.'),
  ],
}
