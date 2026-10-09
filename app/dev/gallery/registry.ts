/**
 * Registre de blocs visuals — única font de veritat dels identificadors.
 *
 * Els `id` d'aquest fitxer són els mateixos que fa servir
 * `docs/component-inventory.md` i `docs/visual-criteria.md`. Si n'afegeixes o
 * en canvies un, actualitza els tres llocs.
 *
 * Important: els camps `purpose`, `whenToUse`, `pages`, `files`, `variants`,
 * `needs`, `desktop`, `mobile` i `limits` descriuen el que el codi fa AVUI
 * (fets observats). El camp `recommendation` és una proposta a revisar —
 * «retirar» no és una autorització per esborrar res.
 */

export type Recommendation = 'conservar' | 'adaptar' | 'retirar'

export type BlockGroupId =
  | 'fonaments'
  | 'navegació'
  | 'capcaleres'
  | 'enunciats'
  | 'problemes'
  | 'serveis'
  | 'valor'
  | 'marca'
  | 'processos'
  | 'metriques'
  | 'comparadors'
  | 'testimonis'
  | 'casos'
  | 'logos'
  | 'prosa'
  | 'cta'
  | 'sistema'

export type BlockGroup = {
  id: BlockGroupId
  label: string
  description: string
}

export const GROUPS: BlockGroup[] = [
  { id: 'fonaments', label: 'Fonaments visuals', description: 'Color, tipografia, amplades, espaiats, botons i formes. No són blocs de pàgina: són el material amb que estan fets.' },
  { id: 'navegació', label: 'Navegació', description: 'Capcalera fixa i peu de pàgina, presents a totes les rutes via app/layout.tsx.' },
  { id: 'capcaleres', label: 'Capçaleres de pàgina', description: 'El primer bloc de cada ruta: etiqueta, titular, descripció i crida a l\'acció sobre fons de color.' },
  { id: 'enunciats', label: 'Enunciats i afirmacions', description: 'Blocs que només són un titular gran, sense targetes ni llistes.' },
  { id: 'problemes', label: 'Llistes de problemes', description: 'Pastilles blanques que enumeren dolors del client abans de presentar l\'oferta.' },
  { id: 'serveis', label: 'Targetes de servei', description: 'Els blocs que presenten l\'oferta. És el grup clau per a la reorganització en quatre serveis.' },
  { id: 'valor', label: 'Graelles de valor', description: 'Targetes curtes amb icona, títol i cos que argumenten beneficis o principis.' },
  { id: 'marca', label: 'Composicions de marca', description: 'Composicions amb formes de marca i coreografia d\'scroll. Alt impacte visual, poca densitat de text.' },
  { id: 'processos', label: 'Processos i etapes', description: 'Seqüències numerades (passos, setmanes) que expliquen com es treballa.' },
  { id: 'metriques', label: 'Mètriques', description: 'Xifres grans de resultat.' },
  { id: 'comparadors', label: 'Comparadors', description: 'Blocs que posen dues o més coses una al costat de l\'altra per contrastar-les.' },
  { id: 'testimonis', label: 'Testimonis', description: 'Citació de client amb autoria i logotip.' },
  { id: 'casos', label: 'Casos i projectes', description: 'Índexs de feina feta que enllacen o es naveguen.' },
  { id: 'logos', label: 'Logotips de client', description: 'Prova social en forma de marquesina.' },
  { id: 'prosa', label: 'Prosa editable des del CMS', description: 'Blocs de text llarg provinents de Sanity (PortableText).' },
  { id: 'cta', label: 'Crides a l\'acció', description: 'Bandes de conversió al final de pàgina o de secció.' },
  { id: 'sistema', label: 'Estats del sistema', description: 'Càrrega, 404 i error. Sense animació ni formes de marca.' },
]

export type Variant = {
  /** Identificador estable dins del patró. L'URL de previsualització hi afegeix ?variant=<id>. */
  id: string
  label: string
  files: string[]
  pages: string[]
  note?: string
  /**
   * true quan el bloc viu incrustat dins un component més gran i no es pot
   * mostrar aillat sense refactoritzar. La previsualització renderitza el
   * component contenidor sencer (el component real, mai una rèplica).
   */
  embedded?: boolean
  /** true quan la branca de codi existeix però està desactivada a la web pública. */
  inactive?: boolean
  /** false quan no es pot renderitzar a la galeria; previewNote explica per que. */
  previewable?: boolean
  previewNote?: string
}

export type BlockEntry = {
  id: string
  name: string
  group: BlockGroupId
  /** Què és i què fa. Fet observat. */
  purpose: string
  /** En quines situacions té sentit fer-lo servir. Fet observat + lectura directa de l'us actual. */
  whenToUse: string
  /** Com està construït: component compartit, copies divergents o codi incrustat. */
  reuse: 'compartit' | 'copies' | 'incrustat'
  /** Contingut que necessita per funcionar. */
  needs: string[]
  /** Comportament observat a escriptori. */
  desktop: string
  /** Comportament observat a mòbil. */
  mobile: string
  /** Limitacions observades: densitat, comparació, llegibilitat, dependència d'interaccions. */
  limits: string[]
  recommendation: Recommendation
  /** Motiu breu de la recomanació. */
  rationale: string
  variants: Variant[]
}

/** Pàgines, per referència creuada a la documentació. */
export const PAGES = {
  home: '/',
  estrategia: '/servicios/estrategia-de-ia',
  ecosistema: '/servicios/ecosistema-produccion-editorial',
  editoriales: '/servicios/servicios-editoriales',
  sobreMi: '/sobre-mi',
  enfoque: '/enfoque',
  caso: '/casos-de-exito/[slug]',
  totes: 'totes les rutes',
} as const

export const BLOCKS: BlockEntry[] = [
  // ----------------------------- FONAMENTS -----------------------------
  {
    id: 'fnd-color',
    name: 'Paleta de color',
    group: 'fonaments',
    purpose:
      'Els tokens de color declarats a @theme dins app/globals.css: set blaus, tres taronges, verd, gris i blanc, més tres tokens específics de text creats per complir contrast AA.',
    whenToUse:
      'Qualsevol decisió de fons de secció, color de titular o estat interactiu hauria de sortir d\'aqui. Avui els valors es consumeixen majoritariament com a var(--color-...) dins atributs style, no com a classes Tailwind.',
    reuse: 'compartit',
    needs: ['Cap. Els valors viuen a app/globals.css.'],
    desktop: 'Els tokens són els mateixos a totes les amplades: cap color canvia per breakpoint.',
    mobile: 'Identic a escriptori.',
    limits: [
      '--color-blue-300 no compleix AA com a text (3,96:1 sobre blanc); per aixo existeix --color-text-secondary. El token decoratiu continua disponible i es pot fer servir per error com a text.',
      'Hi ha nou colors escrits en hex directe que no passen per cap token (vegeu docs/visual-criteria.md, incoherència 3).',
      'No hi ha cap token semàntic (fons de secció, text sobre fons fosc): la decisió es repeteix a cada secció.',
    ],
    recommendation: 'conservar',
    rationale:
      'La paleta és sòlida i la feina de contrast ja està feta i documentada. El que cal adaptar és com es consumeix, no els valors.',
    variants: [
      { id: 'default', label: 'Tots els tokens amb el seu hex real', files: ['app/globals.css'], pages: [PAGES.totes] },
    ],
  },
  {
    id: 'fnd-type',
    name: 'Escala tipogràfica',
    group: 'fonaments',
    purpose:
      'DM Sans per a text i DM Mono per a etiquetes. Cinc mides de titular (title-xxl 64px -> title-s 32px) i quatre de cos (body-xl 24px -> body-accent-mono 14px), amb interlineat propi a cada pas.',
    whenToUse:
      'Tota la jerarquia de text. Les cinc mides de titular es redueixen automàticament per sota de 768px via @media a globals.css.',
    reuse: 'compartit',
    needs: ['Cap. Les mides viuen a app/globals.css.'],
    desktop: 'Mides completes: titulars de 64 a 32px.',
    mobile:
      'Per sota de 768px els cinc tokens de titular es redefineixen (64->48, 56->48, 48->40, 40->32, 32->24). Les mides de cos no canvien.',
    limits: [
      'Les mides de cos no tenen variant mòbil: body-xl continua fent 24px en una pantalla de 390px.',
      'body-m té interlineat 20px per una mida de 16px (ratio 1,25): just per a text llarg, i hi ha components que el sobreescriuen a 24px sense token.',
      'El font-weight: 300 del body queda sobreescrit a 400 gairebé a tot arreu, de manera que el pes per defecte declarat no és el que es veu.',
      'No hi ha cap mapatge declarat entre nivell semàntic (h1/h2/h3) i token de mida: el mateix h2 fa servir tres mides diferents segons la secció.',
    ],
    recommendation: 'adaptar',
    rationale:
      'L\'escala és completa i l\'override mòbil funciona; el que falta és la regla d\'us (quin nivell fa servir quin token) i una variant mòbil per al cos.',
    variants: [
      { id: 'default', label: 'Escala sencera amb la mida calculada real', files: ['app/globals.css'], pages: [PAGES.totes] },
    ],
  },
  {
    id: 'fnd-layout',
    name: 'Amplades i espaiats',
    group: 'fonaments',
    purpose:
      'Les amplades maximes de contingut i el ritme vertical i horitzontal de les seccions. No hi ha cap token: tots els valors s\'escriuen a mà a cada secció.',
    whenToUse:
      'Cada secció nova ha de triar una amplada de contingut i un padding. Avui es tria per copia de la secció veïna.',
    reuse: 'copies',
    needs: ['Cap.'],
    desktop:
      'Quatre famílies de facto: ~1400px (contenidor ple), ~1160px (contingut estret), ~690px (prosa i titulars) i ~453px (nota lateral al costat d\'un titular).',
    mobile:
      'px-[20px] és el marge lateral dominant; el contingut passa a una columna per sota de md o lg segons la secció.',
    limits: [
      'Més de quaranta amplades maximes diferents escrites a mà, moltes a un pixel de distància (1400 / 1480 / 1440 / 1164 / 1165 / 1163 / 1161 / 1160 / 1154...).',
      'El padding horitzontal té quatre patrons incompatibles (vegeu docs/visual-criteria.md, incoherència 6).',
      'El ritme vertical fa servir sis valors de py (40 / 56 / 64 / 80 / 96 / 112) sense cap criteri declarat.',
    ],
    recommendation: 'adaptar',
    rationale:
      'Les quatre famílies d\'amplada existeixen de fet i funcionen; convé fixar-les com a tokens abans d\'afegir pàgines, perque ara cada secció nova n\'inventa una variant.',
    variants: [
      { id: 'default', label: 'Les quatre famílies d\'amplada i el ritme vertical, a escala', files: ['tot app/**/*Section.tsx'], pages: [PAGES.totes] },
    ],
  },
  {
    id: 'fnd-button',
    name: 'Botons i enllacos',
    group: 'fonaments',
    purpose:
      'La pastilla de fons clar amb text mono en majúscules i un cercle taronja amb fletxa que gira 45 graus en hover. És l\'element interactiu característic del lloc i apareix en gairebé totes les pàgines.',
    whenToUse:
      'Qualsevol acció principal. La variant petita viu a la capcalera; la gran, als heroes i a les bandes de CTA.',
    reuse: 'copies',
    needs: ['Text de l\'acció (curt, en majúscules)', 'Destinació (BOOKING_URL de lib/constants.ts, correu, o ruta interna)'],
    desktop: 'Transició de fons de 330ms i rotació de la fletxa de 300ms en hover.',
    mobile: 'Identic, però sense hover: la fletxa no gira mai en tàctil.',
    limits: [
      'No existeix com a component: el marcatge es repeteix literalment a vuit fitxers, amb el cercle de la fletxa en set mides diferents (48 / 32 / 30 / 28 / 27 / 24 / 20px).',
      'Hi ha dues inversions de parella de colors sense criteri: bg-grey hover:bg-white en uns llocs i bg-white hover:bg-grey en uns altres.',
      'No hi ha cap estil de focus declarat més enlla del del navegador.',
      'No existeix cap variant secundaria ni terciaria: tota acció té el mateix pes visual.',
    ],
    recommendation: 'adaptar',
    rationale:
      'El patró es reconeixible i consistent a ull nu, però vuit copies amb set mides fan impossible canviar-lo en un sol lloc. És el candidat més clar a convertir-se en component compartit.',
    variants: [
      { id: 'default', label: 'Totes les variants reals, extretes del seu context', files: ['app/home/HomeHeroSection.tsx:126-153', 'components/Navbar.tsx:93-117', 'app/servicios/estrategia-editorial/CtaSection.tsx:78-100', 'app/servicios/estrategia-editorial/ServiciosClient.tsx:57-74', 'app/sobre-mi/LinkedInSection.tsx:87-114', 'components/MobileMenu.tsx:125-138'], pages: [PAGES.totes] },
    ],
  },
  {
    id: 'fnd-shape',
    name: 'Vores i formes decoratives',
    group: 'fonaments',
    purpose:
      'Els radis de cantonada i la família d\'SVG decoratius (ones, blobs, arcs, diamants) que donen caràcter al lloc. Viuen tots a public/ com a fitxers solts.',
    whenToUse:
      'Els radis, a qualsevol targeta o secció. Les formes, per omplir cantonades buides de heroes i seccions de color.',
    reuse: 'copies',
    needs: ['Un SVG a public/ per cada forma, posicionat amb coordenades absolutes.'],
    desktop: 'Les formes es posicionen a sang amb absolute i valors negatius de left/right/top.',
    mobile: 'Gairebe totes les formes decoratives s\'oculten (hidden lg:block o hidden md:block).',
    limits: [
      'Nou radis diferents en us (24 / 20 / 16 / 14 / 10 / 8 / 6 / 4 / ple) més l\'arc asimètric 128px 0 0 0.',
      'Hi ha ~60 SVG decoratius a public/ amb noms lligats a la secció on van (s5b-ventajas-diagram.svg, about-history-shape-orange-top.svg): no es poden reutilitzar fora del seu context.',
      'Com que s\'oculten a mòbil, la identitat visual del lloc es notablement més pobra en tàctil, que es on hi ha més visites.',
    ],
    recommendation: 'adaptar',
    rationale:
      'Les formes són el que fa que el lloc no sembli una plantilla, però el repertori és enorme i d\'un sol us. Val la pena reduir-lo a una família petita i reutilitzable abans d\'afegir pàgines.',
    variants: [
      { id: 'default', label: 'Radis en us i mostrari de formes', files: ['public/*.svg'], pages: [PAGES.totes] },
    ],
  },
  {
    id: 'fnd-tag',
    name: 'Etiqueta de secció',
    group: 'fonaments',
    purpose:
      'La línia curta en DM Mono, majúscules i entre claudators ([SERVICIOS], [MI ENFOQUE]) que encapcala gairebé totes les seccions i n\'anuncia el tema.',
    whenToUse:
      'Sempre que una secció necessiti orientar el lector abans del titular. Es el senyal de comenca una secció nova més usat del lloc.',
    reuse: 'copies',
    needs: ['Una o dues paraules en majúscules.'],
    desktop: 'Mida fixa de 14px amb letter-spacing: -0.5px.',
    mobile: 'Identica. En un cas (hero-page, variant estrategia) es trunca amb el lipsi perque té whitespace-nowrap.',
    limits: [
      'L\'opacitat es incoherent: opacity: .65 en unes seccions i cap en d\'altres, per al mateix element.',
      'Quan opacity: .65 s\'aplica sobre --color-text-secondary el contrast cau per sota d\'AA, precisament el token que globals.css havia enfosquit per complir-lo.',
      'La convenció dels claudators no es universal: les pàgines de cas d\'èxit fan servir Contexto, Reto, Solución i Resultados sense claudators.',
      'Dos errors de redacció en viu: [¿QUe INCLUYE?] amb e minúscula i les majúscules aplicades per CSS sobre text ja escrit en majúscules.',
    ],
    recommendation: 'adaptar',
    rationale:
      'Es l\'element més repetit del lloc i el que més es beneficiaria de ser un component amb una sola decisió d\'opacitat i de claudators.',
    variants: [
      { id: 'default', label: 'Les variants reals, amb i sense opacitat i claudators', files: ['~25 fitxers de secció'], pages: [PAGES.totes] },
    ],
  },

  // ----------------------------- NAVEGACIO -----------------------------
  {
    id: 'nav-header',
    name: 'Capcalera fixa',
    group: 'navegació',
    purpose:
      'Barra blava fixa amb cantonades inferiors arrodonides: logotip a l\'esquerra, navegació centrada amb dos desplegables, selector d\'idioma i boto de reserva a la dreta. Per sota de lg es converteix en un menú hamburguesa a pantalla completa.',
    whenToUse: 'Present a totes les rutes. No és un bloc que es triï.',
    reuse: 'compartit',
    needs: [
      'Els tres serveis, codificats a mà a SERVICES_ITEMS dins components/Navbar.tsx i duplicats a components/FooterClient.tsx',
      'Casos d\'èxit des de Sanity (CASE_STUDIES_QUERY), amb miniatura',
    ],
    desktop:
      'Els desplegables s\'obren en hover (amb paddingTop intern per no deixar zona morta) i també en clic. La ruta activa es marca amb un subratllat taronja.',
    mobile:
      'Menú a pantalla completa per sota de var(--navbar-height), amb bloqueig d\'scroll del cos i tancament automàtic en canviar de ruta.',
    limits: [
      'La llista de serveis està escrita dues vegades (Navbar i FooterClient): afegir un quart servei exigeix editar els dos fitxers.',
      'El selector d\'idioma és decoratiu: mostra ES i una fletxa, però no obre res ni porta enlloc.',
      'Amb tres entrades de servei i títols llargs el desplegable ja fa 260px d\'ample mínim; amb quatre serveis de nom llarg caldra revisar-ho.',
      'El menú mòbil no té trampa de focus ni tancament amb la tecla Escape.',
    ],
    recommendation: 'adaptar',
    rationale:
      'Funciona bé, però la llista de serveis duplicada és exactament el punt que la reorganització a quatre serveis tocarà primer. Convé unificar-la en una sola constant compartida.',
    variants: [
      { id: 'desktop', label: 'Capcalera completa (escriptori i mòbil segons amplada)', files: ['components/Navbar.tsx', 'components/NavLink.tsx', 'components/MobileMenu.tsx'], pages: [PAGES.totes] },
      { id: 'dropdown-simple', label: 'Desplegable de serveis - llista de text', files: ['components/NavDropdown.tsx'], pages: [PAGES.totes] },
      { id: 'dropdown-rich', label: 'Desplegable de casos - amb miniatura i fletxa', files: ['components/CaseStudiesDropdown.tsx'], pages: [PAGES.totes] },
    ],
  },
  {
    id: 'nav-footer',
    name: 'Peu de pàgina',
    group: 'navegació',
    purpose:
      'Peu amb degradat vertical de blau a salmo: identitat i contacte a l\'esquerra i tres columnes d\'enllacos (serveis, casos d\'èxit, navegació) a la dreta, amb barra inferior de copyright.',
    whenToUse: 'Present a totes les rutes.',
    reuse: 'compartit',
    needs: [
      'Els tres serveis (duplicats des de la capcalera)',
      'Casos d\'èxit des de Sanity, amb text de recanvi Proximamente si no n\'hi ha',
      'Correu i telefon, codificats a FooterClient.tsx',
    ],
    desktop: 'Quatre columnes amb el bloc d\'identitat a l\'esquerra. Els títols de cas es trunquen a dues línies.',
    mobile: 'Graella de dues columnes (grid-cols-2); el bloc d\'identitat ocupa la primera cel la.',
    limits: [
      'A dues columnes en pantalla estreta, les columnes de Casos de éxito i Navegación queden desequilibrades perque una té amplada fixa de 150px i l\'altra de 220px.',
      'La llista de serveis és una copia literal de la de la capcalera.',
      'No hi ha enllaç a avís legal ni a política de privacitat.',
    ],
    recommendation: 'conservar',
    rationale:
      'Compleix la seva funció i el degradat és un tancament de marca reconeixible. L\'única cosa a resoldre és la duplicació de la llista de serveis, compartida amb la capcalera.',
    variants: [
      { id: 'default', label: 'Peu complet', files: ['components/Footer.tsx', 'components/FooterClient.tsx'], pages: [PAGES.totes] },
    ],
  },

  // ----------------------------- CAPCALERES -----------------------------
  {
    id: 'hero-page',
    name: 'Capcalera de pàgina',
    group: 'capcaleres',
    purpose:
      'El primer bloc de cada ruta: fons de color sencer, etiqueta mono, titular gran amb una paraula destacada, cos curt i boto de reserva. Set implementacions diferents del mateix patró, cadascuna amb el seu propi fitxer, colors i disposició.',
    whenToUse:
      'Sempre a dalt de tot d\'una pàgina. Cada variant actual tria un color de fons diferent (blau, verd, taronja, taronja-400) sense que hi hagi cap sistema declarat que digui quin color correspon a quin tipus de pàgina.',
    reuse: 'copies',
    needs: ['Etiqueta (1-3 paraules)', 'Titular amb un fragment destacat', 'Cos curt (1-2 frases)', 'Boto amb destinació'],
    desktop:
      'Composicions variades: foto amb màscara (home, sobre-mi), vectors decoratius a les cantonades (servicios), titular alineat a la dreta (ecosistema), o centrat (enfoque, caso).',
    mobile:
      'Totes amaguen les formes i fotos decoratives (hidden lg:block). El titular i el cos passen a una sola columna.',
    limits: [
      'Set implementacions independents del mateix patró: canviar la mida del titular o el boto exigeix tocar set fitxers.',
      'La variant enfoque conserva text de farciment (lorem ipsum) al titular en producció.',
      'Cap variant té una alternativa de contrast per a usuaris amb preferència de moviment reduït, excepte la variant estrategia (afegida en el redisseny de 2026-10-08, que sí que comprova prefers-reduced-motion).',
    ],
    recommendation: 'adaptar',
    rationale:
      'Sis copies divergents d\'un sol patró (la variant estrategia ja és un component propi des del redisseny). Convergir-les en un de sol amb props de color i alineació és el pas pràctic que falta per a les tres pàgines de servei restants.',
    variants: [
      { id: 'home', label: 'Home - foto amb màscara + forma dentada', files: ['app/home/HomeHeroSection.tsx'], pages: [PAGES.home] },
      { id: 'estrategia', label: 'Estrategia de IA - vectors simètrics, fons verd', files: ['app/servicios/estrategia-de-ia/HeroSection.tsx'], pages: [PAGES.estrategia] },
      { id: 'ecosistema', label: 'Ecosistema de producció - titular alineat a la dreta, fons taronja', files: ['app/servicios/ecosistema-produccion-editorial/EcosistemaHeroSection.tsx'], pages: [PAGES.ecosistema] },
      { id: 'editoriales', label: 'Servicios editoriales - titular al 57%, fons taronja-400', files: ['app/servicios/servicios-editoriales/ServiciosEditorialesHeroSection.tsx'], pages: [PAGES.editoriales] },
      { id: 'sobre-mi', label: 'Sobre mi - foto amb màscara d\'ona, fons blau', files: ['app/sobre-mi/SobreMiHeroSection.tsx'], pages: [PAGES.sobreMi] },
      { id: 'enfoque', label: 'Enfoque - centrat, amb text de farciment', files: ['app/enfoque/EnfoqueHeroSection.tsx'], pages: [PAGES.enfoque] },
      { id: 'caso', label: 'Cas d\'èxit - centrat amb metadades (any, durada, client)', files: ['app/casos-de-exito/[slug]/CaseStudyHeroSection.tsx'], pages: [PAGES.caso] },
    ],
  },

  // ----------------------------- ENUNCIATS -----------------------------
  {
    id: 'statement-headline',
    name: 'Afirmació directa',
    group: 'enunciats',
    purpose:
      'Un titular sol, sense targetes ni llistes, que fa una afirmació o plantejament. A vegades amb una forma decorativa de fons.',
    whenToUse:
      'Per marcar una transició de to dins la pàgina, entre blocs més densos, sense demanar cap interacció.',
    reuse: 'copies',
    needs: ['Un titular curt amb un fragment destacat.'],
    desktop: 'Text centrat o alineat a l\'esquerra segons la secció, amb una forma SVG decorativa opcional.',
    mobile: 'La forma decorativa s\'oculta; el titular es manté a la mateixa mida (no baixa de title-xxl a cap de les seves aparicions).',
    limits: [
      'És el bloc amb menys contingut de tot el lloc: no aporta context ni acció, només afirma.',
      'A QuoteSection el text és una citació personal però es tracta tipograficament igual que un titular de venda.',
    ],
    recommendation: 'conservar',
    rationale: 'Funciona com a respirador entre blocs densos i no té cap problema tècnic observat.',
    variants: [
      { id: 'problem', label: 'Problem (home) - titular amb forma de fons', files: ['app/home/ProblemSection.tsx'], pages: [PAGES.home] },
      { id: 'production-painpoints-title', label: 'Titulars de ProductionPainPoints (servicios editoriales)', files: ['app/servicios/servicios-editoriales/ProductionPainPointsSection.tsx'], pages: [PAGES.editoriales], embedded: true, note: 'Els dos h2 del bloc de pastilles; no és un component separat.' },
      { id: 'quote', label: 'Quote (sobre mi) - citació personal sobre fons taronja', files: ['app/sobre-mi/QuoteSection.tsx'], pages: [PAGES.sobreMi] },
    ],
  },
  {
    id: 'statement-wordfill',
    name: 'Titular que s\'omple en fer scroll',
    group: 'enunciats',
    purpose:
      'Paraula per paraula, el titular i el cos passen d\'opacitat 0.2 a 1 mentre l\'usuari fa scroll (GSAP scrub). Només apareix a /enfoque.',
    whenToUse: 'Per donar enfasi narratiu a un plantejament llarg, quan es vol que la lectura marqui el ritme de l\'scroll.',
    reuse: 'copies',
    needs: ['Un titular llarg partit en fragments de color', 'Un cos llarg (un paragraf)'],
    desktop: 'Composició en graella de dues columnes amb una forma decorativa superposada.',
    mobile: 'S\'apila en una columna; l\'efecte de scrub es manté (no es desactiva a mòbil).',
    limits: [
      'Només existeix a /enfoque, una pàgina que ja no és al menú ni al peu: és un patró infrautilitzat.',
      'L\'efecte depèn de l\'scroll i no té cap alternativa per a preferència de moviment reduït.',
      'Llegir una paraula alhora que s\'il·lumina es més lent que llegir un paragraf normal; amb contingut de venda dens no escala bé.',
    ],
    recommendation: 'retirar',
    rationale:
      'És un efecte vistós però sense cap altra aparició al lloc, en una pàgina ja deprioritzada. Proposta a revisar: si es recupera /enfoque, decidir si val la pena mantenir aquest efecte o substituir-lo per statement-headline.',
    variants: [
      { id: 'challenge', label: 'Plantejament del repte', files: ['app/enfoque/EnfoqueChallengeStatementSection.tsx'], pages: [PAGES.enfoque] },
      { id: 'approach', label: 'Per que importa l\'enfoque', files: ['app/enfoque/ApproachSection.tsx'], pages: [PAGES.enfoque] },
    ],
  },

  // ----------------------------- PROBLEMES -----------------------------
  {
    id: 'painpoint-pills',
    name: 'Pastilles de problema',
    group: 'problemes',
    purpose:
      'Llista de frases curtes en pastilles blanques amb un punt de color, cadascuna descrivint un dolor o situació del client potencial. Precedeix l\'oferta: primer es reconeix el problema, després es presenta la solució.',
    whenToUse:
      'Just abans de presentar les targetes de servei, per connectar amb la situació actual del lector abans de vendre.',
    reuse: 'copies',
    needs: ['De 2 a 6 frases curtes', 'Un color de punt per frase (sense significat declarat)'],
    desktop:
      'Disposició esglaonada amb marges esquerra variables per crear una composició irregular, no una llista neta.',
    mobile: 'Es converteix en una llista vertical simple, sense marges esglaonats.',
    limits: [
      'Tres implementacions divergents amb marges codificats a mà per cada pastilla (per exemple md:ml-[135px], md:ml-[186px]): afegir o treure una frase desquadra tota la composició.',
      'El color del punt no té cap significat (no categoritza el tipus de problema): es només decoratiu.',
      'No hi ha versió amb més de sis frases provada: amb quatre serveis que comparteixin aquest bloc, la composició esglaonada pot no escalar.',
    ],
    recommendation: 'adaptar',
    rationale:
      'El concepte (reconeixer el dolor abans de vendre) és útil per a una pàgina de comparació de serveis, però la implementació actual amb marges fixos no és sostenible si el nombre de frases varia per servei. El redisseny de "Estrategia de IA" (2026-10-08) ha optat per substituir aquest patró per una graella regular de preguntes (vegeu `qa-grid`) en lloc d\'adaptar-lo.',
    variants: [
      { id: 'ecosistema', label: 'Sense el teu criteri codificat (ecosistema) - esglaonat amb marges a la dreta', files: ['app/servicios/ecosistema-produccion-editorial/ProblemPillsSection.tsx'], pages: [PAGES.ecosistema] },
      { id: 'editoriales', label: 'Si necessites complir el pla (servicios editoriales) - dues files, titular a banda i banda', files: ['app/servicios/servicios-editoriales/ProductionPainPointsSection.tsx'], pages: [PAGES.editoriales] },
      { id: 'home-avatars', label: 'Desafíos reales (home) - amb avatar flotant en lloc de punt de color', files: ['app/home/ChallengesSection.tsx'], pages: [PAGES.home], note: 'Variant més allunyada del patró: substitueix el punt per una fotografia d\'avatar i coordenades absolutes calibrades a 1400px.' },
    ],
  },
  {
    id: 'qa-grid',
    name: 'Graella de preguntes i respostes',
    group: 'problemes',
    purpose:
      'Graella regular (no esglaonada, no masonry) de targetes blanques sobre fons gris, cadascuna amb un número, una pregunta a mode de títol i una resposta curta de com s\'ajuda a resoldre-la.',
    whenToUse:
      'Introduïda al redisseny de "Estrategia de IA" (2026-10-08) com a alternativa deliberada a `painpoint-pills`: en lloc de pastilles esglaonades que descriuen un dolor, presenta directament la pregunta i la resposta, amb un disseny de graella que escala millor a un nombre variable d\'elements.',
    reuse: 'copies',
    needs: ['Entre 4 i 6 parelles de pregunta curta + resposta d\'1-2 frases'],
    desktop: '3 columnes (≥1024px), 2 a tauleta, 1 a mòbil. Targetes blanques, radi 24, padding 32.',
    mobile: '1 columna; cap contingut s\'oculta ni depèn d\'interacció.',
    limits: [
      'Només una implementació fins ara: cal veure com escala amb un nombre de preguntes diferent de 6 abans de considerar-lo un patró consolidat.',
    ],
    recommendation: 'conservar',
    rationale:
      'Resol directament la limitació de `painpoint-pills` (marges esglaonats codificats a mà que no escalen): és una graella regular sense posicions fixes per element.',
    variants: [
      { id: 'estrategia', label: '¿Qué preguntas no puedes seguir aplazando? (estrategia de ia) - graella 3x2', files: ['app/servicios/estrategia-de-ia/DecisionsSection.tsx'], pages: [PAGES.estrategia] },
    ],
  },

  // ----------------------------- SERVEIS -----------------------------
  {
    id: 'svccard-illustrated',
    name: 'Targeta de servei il·lustrada',
    group: 'serveis',
    purpose:
      'Tres targetes apilades verticalment, cadascuna amb text a un costat i una il·lustració SVG a sang a l\'altre, que alternen costat. Cada targeta és un enllaç complet cap a la pàgina del servei.',
    whenToUse: 'Per presentar l\'oferta completa com una llista d\'opcions navegables des de la home.',
    reuse: 'copies',
    needs: ['Títol', 'Subtitol (en cursiva)', 'Cos (2-3 frases)', 'Una il·lustració SVG per servei', 'Ruta de destinació'],
    desktop: 'Targetes de 480px d\'alcada mínima; la il·lustració ocupa ~56% de l\'amplada i alterna costat servei a servei.',
    mobile: 'La il·lustració passa a dalt de tot i el text a sota, en una sola columna.',
    limits: [
      'Només en té tres: amb el quart servei cal decidir si s\'hi afegeix una quarta targeta o es redissenya el bloc.',
      'No hi ha manera de comparar els serveis entre si: cada targeta és un enllaç independent, no hi ha taula ni resum conjunt.',
    ],
    recommendation: 'adaptar',
    rationale:
      'És el bloc més pròxim a un selector de serveis que existeix avui, però només funciona com a llista, no com a comparador. Amb quatre serveis caldra decidir si aquest patró escala o si cal un comparador nou (vegeu la secció de blocs inexistents a l\'inventari).',
    variants: [
      { id: 'default', label: 'Les tres targetes reals, amb el seu contingut', files: ['app/home/ServicesSection.tsx'], pages: [PAGES.home] },
    ],
  },
  {
    id: 'svccard-grid',
    name: 'Graella de targetes de servei',
    group: 'serveis',
    purpose:
      'Una targeta blanca gran que conté un subtitol de servei i una graella de 2x2 (o files) de targetes grises més petites, cadascuna amb icona, títol i descripció curta.',
    whenToUse: 'Per descompondre un servei ampli en les seves peces concretes, dins la mateixa pàgina de servei. Des del redisseny de "Estrategia de IA" (2026-10-08), també per comparar 2 modalitats de col·laboració amb la mateixa jerarquia (variant `estrategia-collaboration`), usant CSS subgrid perquè les files quedin alineades encara que el contingut de cada targeta no tingui la mateixa llargada.',
    reuse: 'copies',
    needs: ['Títol i cos del servei pare', 'Una il·lustració gran', 'De 2 a 6 sub-elements amb icona, títol i descripció'],
    desktop: 'Graella de 2 columnes amb targetes d\'alcada mínima fixa (245px) a les variants antigues; la variant `estrategia-collaboration` alinea les files amb subgrid en lloc d\'una alçada fixa.',
    mobile: 'Una sola columna; les targetes mantenen l\'alcada mínima, que pot deixar espai buit si el text es curt (excepte `estrategia-collaboration`, que no té alçada fixa).',
    limits: [
      'Les variants antigues tenen nombre de columnes diferent (2x2 vs 1x3) i mides d\'icona inconsistents dins el mateix bloc (48px el contenidor, però la icona interior varia de 28 a 48px segons l\'entrada).',
      'Retirat el patró `svccard-expandable` (targeta desplegable, única implementació a l\'antiga /servicios/estrategia-editorial): el redisseny de 2026-10-08 el substitueix per aquesta variant `estrategia-collaboration`.',
    ],
    recommendation: 'adaptar',
    rationale:
      'És el patró que s\'ha triat per al primer comparador real del lloc (`estrategia-collaboration`); cal decidir si les variants antigues (sense subgrid, amb alçada fixa) convergeixen cap a la mateixa tècnica o es deixen tal com estan.',
    variants: [
      { id: 'editoriales-offerings', label: 'Lo que ofrezco (servicios editoriales) - graella 2x2', files: ['app/servicios/servicios-editoriales/ServiceOfferingsSection.tsx'], pages: [PAGES.editoriales] },
      { id: 'ecosistema-includes', label: 'Qué incluye (ecosistema) - fila de 3, dins SystemStepsSection', files: ['app/servicios/ecosistema-produccion-editorial/SystemStepsSection.tsx:318-366'], pages: [PAGES.ecosistema], embedded: true },
      { id: 'estrategia-collaboration', label: '¿Cómo podemos colaborar? (estrategia de ia) - comparador de 2 modalitats amb subgrid', files: ['app/servicios/estrategia-de-ia/CollaborationSection.tsx'], pages: [PAGES.estrategia] },
    ],
  },

  // ----------------------------- VALOR -----------------------------
  {
    id: 'valuegrid-masonry',
    name: 'Graella de valor en masonry',
    group: 'valor',
    purpose:
      'Targetes blanques curtes (icona + títol + cos) organitzades en columnes amb desplacament vertical (masonry), de vegades amb formes decoratives de fons.',
    whenToUse: 'Per enumerar valors, principis o beneficis quan no cal cap ordre estricte entre ells.',
    reuse: 'copies',
    needs: ['Icona', 'Títol curt', 'Cos d\'una frase', 'Alcada de targeta (es codifica a mà per crear l\'efecte masonry)'],
    desktop: 'Columnes amb un marge superior diferent cada una, per crear l\'efecte esglaonat.',
    mobile: 'Es converteix en una sola columna; l\'efecte masonry desapareix i totes les targetes es veuen seguides.',
    limits: [
      'L\'alcada de cada targeta es un número fix en px triat a mà (304, 350, 284...) perque quadri amb les altres columnes: afegir o treure un element trenca l\'efecte masonry sencer.',
      'Quatre implementacions divergents: dues columnes de 2, una de 2x2+il·lustració, una de 3x1 amb testimoni incrustat a sota.',
      'Les formes decoratives de ValuesSection tenen coordenades absolutes (left: 778px, 1089px) calibrades per a 1400px i no responen bé entre 1024 i 1400px.',
    ],
    recommendation: 'adaptar',
    rationale:
      'L\'efecte visual és atractiu però fragil: cada nova entrada obliga a recalcular alcades a mà. Si es reutilitza per comparar serveis, convé una graella regular en lloc de masonry.',
    variants: [
      { id: 'about-values', label: 'Mis valores (sobre mi) - 3 columnes de 2, amb formes de fons', files: ['app/sobre-mi/ValuesSection.tsx'], pages: [PAGES.sobreMi] },
      { id: 'enfoque-principles', label: 'Principios de trabajo (enfoque) - 3 columnes, targetes altes amb forma', files: ['app/enfoque/WorkPrinciplesSection.tsx'], pages: [PAGES.enfoque] },
      { id: 'home-practice', label: 'Traducción a la práctica (home) - fila de 3 + testimoni incrustat', files: ['app/home/PracticeSection.tsx'], pages: [PAGES.home] },
      { id: 'ecosistema-advantages', label: 'Ventajas (ecosistema) - graella 2x2 + diagrama', files: ['app/servicios/ecosistema-produccion-editorial/AdvantagesSection.tsx'], pages: [PAGES.ecosistema] },
    ],
  },

  // ----------------------------- MARCA -----------------------------
  {
    id: 'brandshape-composition',
    name: 'Composició de formes de marca',
    group: 'marca',
    purpose:
      'Formes grans de marca (arc, cercle, diamant) amb text superposat, animades amb scroll fixat (GSAP pin + scrub): les formes es mouen, es converteixen o canvien d\'opacitat mentre l\'usuari fa scroll sense avancar de pàgina.',
    whenToUse:
      'Per explicar visualment els tres eixos del posicionament (editorial / pedagogia / tecnologia) amb alt impacte, quan es disposa de temps d\'atenció de l\'usuari.',
    reuse: 'copies',
    needs: ['Tres blocs de contingut curt (títol + cos), un per forma', 'Res més: la coreografia es 100% CSS/GSAP'],
    desktop:
      'La pàgina es fixa (position: pin) durant 1400-1600px d\'scroll mentre la composició es transforma; només continua en avancar prou.',
    mobile: 'Totes les variants substitueixen l\'animació per una llista estàtica apilada (sense pin ni scrub).',
    limits: [
      'Reserva molt espai d\'scroll (1400-1600px) només per a l\'animació: en una previsualització reduïda (com una miniatura) es llegeix com a buit.',
      'Tres implementacions amb geometria diferent (arcs+cercle a la home, diamants apilats a enfoque, targetes que convergeixen a ecosistema) però el mateix concepte narratiu subjacent.',
      'La variant d\'enfoque té contingut de farciment (Beneficio 1, Beneficio 1, Beneficio 1) en producció.',
      'Depèn totalment de JavaScript (GSAP + ScrollTrigger): sense JS la composició mostra només l\'estat inicial, sense cap indicació que hi ha més contingut.',
    ],
    recommendation: 'adaptar',
    rationale:
      'És un dels blocs més vistosos del lloc, però les tres implementacions expliquen essencialment el mateix (el meu criteri ve de tres eixos) de maneres incompatibles. Convergir en una sola abans de decidir si cal replicar-la per servei.',
    variants: [
      { id: 'home-arches', label: 'El meu enfoque (home) - dos arcs + un cercle, sense pin', files: ['app/home/CriterioShapesSection.tsx'], pages: [PAGES.home] },
      { id: 'enfoque-diamonds', label: 'El criteri (enfoque) - diamants apilats amb pin + crossfade', files: ['app/enfoque/CriterioLayersSection.tsx'], pages: [PAGES.enfoque] },
      { id: 'ecosistema-converge', label: 'El criteri no es delega (ecosistema) - tres targetes que convergeixen amb pin', files: ['app/servicios/ecosistema-produccion-editorial/ThreeLayersConvergeSection.tsx'], pages: [PAGES.ecosistema] },
    ],
  },

  // ----------------------------- PROCESSOS -----------------------------
  {
    id: 'process-steps',
    name: 'Passos de procés',
    group: 'processos',
    purpose:
      'Llista numerada de passos o etapes (Paso 1 / Semana 1...), amb un títol curt i un detall que es revela en hover o que es manté visible, segons la variant.',
    whenToUse: 'Per explicar com es treballa, en quin ordre i amb quina durada.',
    reuse: 'copies',
    needs: ['Una etiqueta numèrica (Paso 1, Semana 1)', 'Un títol curt', 'Un detall d\'una frase'],
    desktop: 'Files horitzontals amb una línia divisoria; a la variant `ecosistema-build` el detall només es veu en passar-hi el ratolí per sobre, però `estrategia-always-visible` i `case-process` el mostren sempre.',
    mobile: 'Totes les variants passen a un format apilat amb el detall sempre visible.',
    limits: [
      'La variant `ecosistema-build` amaga el detall de cada pas rere hover a escriptori: a la vista per defecte només es veu el títol, sense el contingut que explica el pas (vegeu la incoherència 10 de docs/visual-criteria.md).',
      'Les mides de fletxa i de punt verd no estan unificades entre les variants.',
      'La variant de casos d\'èxit (ProcessSection) és l\'única alimentada per Sanity (PortableText) i inclou un lightbox d\'imatges; no comparteix cap part de la implementació amb les altres dues.',
    ],
    recommendation: 'adaptar',
    rationale:
      'El concepte és clar i útil per explicar un procés de venda. El redisseny de "Estrategia de IA" (2026-10-08) ja demostra que es pot mantenir tot visible sense perdre claredat; queda per decidir si `ecosistema-build` convergeix cap al mateix patró.',
    variants: [
      { id: 'ecosistema-build', label: 'Cómo lo construimos (ecosistema) - detall rere hover a escriptori', files: ['app/servicios/ecosistema-produccion-editorial/SystemStepsSection.tsx:194-316'], pages: [PAGES.ecosistema], embedded: true },
      { id: 'estrategia-always-visible', label: '¿Cómo trabajo? (estrategia de ia) - 3 passos, tot visible sense hover', files: ['app/servicios/estrategia-de-ia/WorkProcessSection.tsx'], pages: [PAGES.estrategia] },
      { id: 'case-process', label: 'Proceso (cas d\'èxit) - text + graella d\'imatges amb lightbox', files: ['app/casos-de-exito/[slug]/ProcessSection.tsx'], pages: [PAGES.caso] },
    ],
  },

  // ----------------------------- METRIQUES -----------------------------
  {
    id: 'metric-hero',
    name: 'Mètrica destacada amb blob',
    group: 'metriques',
    purpose:
      'Una xifra molt gran (comptador animat en carregar) incrustada dins una forma SVG blava, acompanyada d\'una llista de verificació a l\'altre costat.',
    whenToUse: 'Per obrir una secció d\'impacte amb una sola xifra memorable, en lloc de diverses mètriques petites.',
    reuse: 'incrustat',
    needs: ['Un rang numèric (60-90%)', 'Una etiqueta curta', 'Una llista de 3 a 8 elements de verificació'],
    desktop: 'La forma blava (545x576px fixos) conté la xifra; el comptador anima de 0 al valor final amb GSAP en entrar a la vista.',
    mobile: 'La forma es substitueix per una targeta blava plana amb la mateixa xifra, sense l\'animació de comptador amb fletxa.',
    limits: [
      'Només existeix en una pàgina i no és un component: tota la lògica de comptador i la forma estan incrustades directament a SystemStepsSection.',
      'Les dimensions de la forma (545x576) són fixes en px, no responen per sota del breakpoint lg (es substitueixen de cop per la variant mòbil, no s\'escalen).',
    ],
    recommendation: 'conservar',
    rationale: 'És un recurs d\'impacte eficaç per a una sola mètrica destacada; no cal replicar-lo si no n\'hi ha una altra de comparable.',
    variants: [
      { id: 'default', label: 'Tiempo de producción - rang 60-90%', files: ['app/servicios/ecosistema-produccion-editorial/ImpactStatsSection.tsx'], pages: [PAGES.ecosistema] },
    ],
  },
  {
    id: 'metric-cards',
    name: 'Targetes de resultat',
    group: 'metriques',
    purpose:
      'Fins a tres targetes de color amb una xifra o resultat gran i una etiqueta a sota, una al costat de l\'altra.',
    whenToUse: 'Per tancar un cas d\'èxit amb els resultats quantificats obtinguts.',
    reuse: 'incrustat',
    needs: ['Entre 1 i 3 resultats, cadascun amb number i label (text des de Sanity)'],
    desktop: 'Tres targetes en fila, cadascuna amb un color i un color de xifra predefinits per posició.',
    mobile: 'Les targetes passen a apilar-se verticalment.',
    limits: [
      'Els estils de targeta estan codificats en un array de 3 posicions (cardStyles[0..2]) indexat directament per index: un quart resultat des de Sanity faria fallar l\'accés (cardStyles[3] és undefined) en lloc de mostrar-se amb un estil de recanvi.',
      'No hi ha limit declarat al schema de Sanity que impedeixi afegir-ne un quart.',
    ],
    recommendation: 'adaptar',
    rationale: 'Risc tècnic real i fàcil de corregir: cal o bé limitar el schema a 3 resultats o bé fer que l\'estil es repeteixi en lloc de trencar-se a partir del quart.',
    variants: [
      { id: 'default', label: 'Les tres targetes amb els seus colors fixos', files: ['app/casos-de-exito/[slug]/ResultsSection.tsx'], pages: [PAGES.caso] },
    ],
  },

  // ----------------------------- COMPARADORS -----------------------------
  {
    id: 'compare-beforeafter',
    name: 'Comparador abans / després',
    group: 'comparadors',
    purpose:
      'Dues columnes amb icona (creu vermella vs. check blau) i una llista de frases curtes a cada una, contrastant la situació abans i després d\'un projecte.',
    whenToUse: 'Només apareix dins les pàgines de cas d\'èxit, per resumir visualment la transformació.',
    reuse: 'incrustat',
    needs: ['Llista d\'items Abans (PortableText)', 'Llista d\'items Después (PortableText), idealment amb el mateix nombre d\'elements'],
    desktop: 'Dues columnes amb graella fixa; cada item és una fila amb icona + text.',
    mobile: 'Les columnes es apilen (Antes a sobre, Después a sota) en lloc de mostrar-se en paral·lel.',
    limits: [
      'És l\'únic comparador real del lloc, però compara un abans/després temporal d\'un sol cas, no diverses opcions entre si: no serveix per comparar quatre serveis.',
      'Si una llista té més elements que l\'altra, les files deixen de correspondre\'s visualment (no hi ha alineació per parella).',
    ],
    recommendation: 'conservar',
    rationale: 'Funciona bé per al seu propòsit actual (abans/després d\'un cas). No és el bloc a reutilitzar per comparar serveis: cal un bloc nou per a aixo (vegeu Blocs que no existeixen a l\'inventari).',
    variants: [
      { id: 'default', label: 'Antes / Después amb contingut real d\'un cas', files: ['app/casos-de-exito/[slug]/BeforeAfterSection.tsx'], pages: [PAGES.caso] },
    ],
  },

  // ----------------------------- TESTIMONIS -----------------------------
  {
    id: 'testimonial-card',
    name: 'Targeta de testimoni',
    group: 'testimonis',
    purpose:
      'Targeta de color amb una forma de marca a l\'esquerra (amb el logotip del client superposat en silueta translúcida) i la citació, l\'avatar i l\'autoria a la dreta.',
    whenToUse: 'Per aportar prova social després de presentar l\'oferta o abans de tancar amb una crida a l\'acció.',
    reuse: 'compartit',
    needs: ['Citació', 'Nom i càrrec de l\'autor', 'Avatar (Sanity)', 'Logotip del client (opcional, Sanity)', 'Color de targeta'],
    desktop: 'La forma decorativa amb el logotip només es veu a partir de md; la citació ocupa la resta de l\'espai.',
    mobile: 'La forma i el logotip s\'oculten del tot; només queden la citació i l\'autoria.',
    limits: [
      'És l\'únic component veritablement compartit entre moltes pàgines (home, les tres de servei, enfoque i casos d\'èxit), però amb tres colors de targeta triats a mà per crida (taronja per defecte, verd, i hideHeader per incrustar-lo sense títol).',
      'Si no hi ha testimoni a Sanity per a una pàgina, el bloc sencer desapareix (cap text de recanvi), cosa consistent però que deixa buit sense avisar.',
    ],
    recommendation: 'conservar',
    rationale: 'És el millor exemple del lloc de bloc reutilitzat correctament via props. Servirà de model per convergir altres patrons (hero-page, cta-band) cap a un sol component.',
    variants: [
      { id: 'orange', label: 'Color per defecte (taronja-400), amb capcalera Testimonios', files: ['app/servicios/estrategia-editorial/TestimonialSection.tsx'], pages: [PAGES.home, PAGES.estrategia, PAGES.ecosistema, PAGES.enfoque, PAGES.caso] },
      { id: 'green', label: 'Variant verda (cardColor), amb capcalera', files: ['app/servicios/estrategia-editorial/TestimonialSection.tsx'], pages: [PAGES.home, PAGES.editoriales] },
      { id: 'embedded', label: 'hideHeader - incrustat sense títol de secció, dins PracticeSection', files: ['app/home/PracticeSection.tsx:150-163'], pages: [PAGES.home], embedded: true },
    ],
  },

  // ----------------------------- CASOS -----------------------------
  {
    id: 'caselist-rows',
    name: 'Llista de casos d\'èxit',
    group: 'casos',
    purpose:
      'Files horitzontals (targeta-enllaç) amb miniatura, títol, subtitol i un logotip de client superposat en marca d\'aigua sobre la imatge.',
    whenToUse: 'Per enumerar casos d\'èxit complets com a enllacos a la seva pàgina pròpia.',
    reuse: 'compartit',
    needs: ['Títol, subtitol i client per cas', 'Imatge de targeta (Sanity)', 'Logotip del client, aparellat per coincidència de nom'],
    desktop: 'Fila amb miniatura a l\'esquerra i text a la dreta; escala lleugerament (1.02) en hover.',
    mobile: 'La miniatura passa a dalt de tot, amplada completa, i el boto fletxa es superposa a la cantonada.',
    limits: [
      'L\'aparellament de logotip es fa per coincidència de subcadena de nom (findLogoForClient), no per referència explícita: un nom de client amb variació ortogràfica no trobaria el seu logotip.',
      'Si no hi ha cap cas d\'èxit, el component retorna null sense missatge alternatiu.',
    ],
    recommendation: 'conservar',
    rationale: 'Component net i reutilitzat correctament amb props (tag/title/subtitle). Només caldria substituir l\'aparellament per subcadena per una referència directa si creix el catàleg de clients.',
    variants: [
      { id: 'default', label: 'Llista amb casos reals i logotips aparellats', files: ['app/servicios/estrategia-editorial/CaseStudiesClient.tsx', 'app/servicios/estrategia-editorial/CaseStudiesSection.tsx'], pages: [PAGES.home, PAGES.estrategia, PAGES.enfoque], note: 'A estrategia-editorial està desactivat per SHOW_CASE_STUDIES = false.' },
    ],
  },
  {
    id: 'project-carousel',
    name: 'Carrusel de projectes',
    group: 'casos',
    purpose:
      'Targetes verticals en carrusel horitzontal amb scroll, on la informació (títol, rol, etapa, editorial) només es veu en passar-hi el ratolí per sobre; en repos només es veu la imatge amb un degradat.',
    whenToUse: 'Per mostrar un volum gran de projectes (desenes) sense ocupar tanta alcada de pàgina com una llista vertical.',
    reuse: 'incrustat',
    needs: ['Títol, rol, etapa, editorial i any per projecte', 'Imatge de projecte (Sanity)'],
    desktop: 'Scroll horitzontal amb botons de fletxa; el contingut de text només apareix en hover sobre cada targeta.',
    mobile: 'El carrusel es fa lliscable amb el dit (overflow-x-auto), però el text segueix depenent del hover, que no existeix en tàctil: en mòbil el projecte es veu només com a imatge, sense títol ni rol ni editorial visibles mai.',
    limits: [
      'Tot el contingut textual (títol, rol, etapa, editorial) només es veu amb hover de ratolí: en tàctil i mòbil és completament illegible sense cap alternativa.',
      'Es construeix triplicant l\'array de projectes per simular un bucle infinit, cosa que fa més pesada la pàgina com més projectes hi hagi.',
    ],
    recommendation: 'adaptar',
    rationale: 'És el cas més greu de contingut només accessible per hover de tot el lloc: en mòbil, el bloc perd tota la seva informació (vegeu incoherència 10 de docs/visual-criteria.md).',
    variants: [
      { id: 'default', label: 'Carrusel amb projectes reals', files: ['app/servicios/servicios-editoriales/EditorialProjectsSection.tsx'], pages: [PAGES.editoriales] },
    ],
  },

  // ----------------------------- LOGOS -----------------------------
  {
    id: 'logo-marquee',
    name: 'Marquesina de logotips',
    group: 'logos',
    purpose:
      'Franja de logotips de client en moviment horitzontal continu (GSAP), recolorats a blanc translúcid perque sempre encaixin amb el fons blau, amb esvaiment als dos costats.',
    whenToUse: 'Com a prova social compacta, normalment just després del hero.',
    reuse: 'compartit',
    needs: ['Llista de logotips (Sanity, industryLogo)'],
    desktop: 'Moviment continu que es pausa en passar-hi el ratolí per sobre.',
    mobile: 'Identic; el moviment continua (no hi ha pausa tàctil equivalent al hover).',
    limits: [
      'Les mides d\'alcada individuals de certs logotips estan codificades a mà per nom (HEIGHT_OVERRIDES: actilearning, juniorreport, altamar): un logotip nou amb mida visual rara exigeix tornar a tocar aquest fitxer.',
      'El recolorat per a logotips sense transparència (RecoloredLogo, màscara de luminància) també depèn d\'una llista de noms a mà (LUMINANCE_MASK_LOGOS).',
      'El moviment continu no es pausa mai en mòbil ni respecta prefers-reduced-motion.',
    ],
    recommendation: 'adaptar',
    rationale: 'Funciona visualment però està acoblat a noms de client concrets en dos llocs diferents del codi; amb més clients caldra una propietat explícita al CMS en lloc d\'una llista a mà.',
    variants: [
      { id: 'default', label: 'Marquesina amb logotips reals', files: ['app/home/LogosSection.tsx', 'components/RecoloredLogo.tsx'], pages: [PAGES.home] },
    ],
  },

  // ----------------------------- PROSA -----------------------------
  {
    id: 'prose-block',
    name: 'Bloc de prosa des del CMS',
    group: 'prosa',
    purpose:
      'Bloc de text llarg (PortableText) sobre un fons de color pla, amb una etiqueta i de vegades un títol, només a les pàgines de cas d\'èxit.',
    whenToUse: 'Per a text narratiu llarg que ve directament de Sanity i no encaixa en targetes ni llistes curtes.',
    reuse: 'incrustat',
    needs: ['Contingut PortableText des de Sanity'],
    desktop: 'Amplada de contingut estreta (690-923px) per mantenir la llegibilitat del paragraf llarg.',
    mobile: 'Identic, només canvia el padding lateral.',
    limits: [
      'Tres implementacions gairebé identiques (Contexto, Reto, Solución) amb petites variacions de components PortableText (negreta amb mida diferent, llistes amb pinta només en una de les tres).',
      'El color de fons de cada bloc és fix i diferent (blau-200, taronja-200, gris) sense que hi hagi cap criteri declarat de per que correspon a cada etapa narrativa.',
    ],
    recommendation: 'conservar',
    rationale: 'Només s\'usa a casos d\'èxit, que no formen part d\'aquesta reorganització. És correcte com està; només es beneficiaria d\'una petita unificació dels components PortableText si es creen més blocs d\'aquest tipus.',
    variants: [
      { id: 'context', label: 'Contexto - fons blau-200', files: ['app/casos-de-exito/[slug]/ContextSection.tsx'], pages: [PAGES.caso] },
      { id: 'challenge', label: 'Reto - fons taronja-200, amb pregunta com a títol', files: ['app/casos-de-exito/[slug]/CaseStudyChallengeSection.tsx'], pages: [PAGES.caso] },
      { id: 'solution', label: 'Solución - fons gris, amb llistes amb pinta', files: ['app/casos-de-exito/[slug]/SolutionSection.tsx'], pages: [PAGES.caso] },
    ],
  },

  // ----------------------------- CTA -----------------------------
  {
    id: 'cta-band',
    name: 'Banda de crida a l\'acció',
    group: 'cta',
    purpose:
      'Banda de color sencer amb cantonades superiors arrodonides, titular + cos centrats i un boto gran, sempre amb la mateixa estructura però amb quatre implementacions de codi diferents.',
    whenToUse: 'Al final de gairebé totes les pàgines, per tancar amb una crida directa a reservar una trucada (o, en un cas, a subscriure\'s).',
    reuse: 'copies',
    needs: ['Títol', 'Subtitol', 'Text i destinació del boto'],
    desktop: 'Banda de color sencer, 80px de padding vertical, boto centrat.',
    mobile: 'Identic, només es redueix el padding lateral.',
    limits: [
      'Quatre implementacions: una és el component compartit parametritzable (CtaSection), les altres tres són copies amb petites derives (ClosingCtaSection usa clamp() en lloc de l\'escala tipogràfica i colors en hex en lloc de tokens; Newsletter i LinkedIn tenen la seva pròpia estructura visual, no només el seu text).',
      'ClosingCtaSection (només a ecosistema) no accepta props: està fixada amb el seu propi text, mentre que CtaSection si que n\'accepta.',
      'Newsletter està comentada (desactivada) a la pàgina de sobre mi, però el fitxer es manté complet.',
    ],
    recommendation: 'adaptar',
    rationale: 'Tres de les quatre implementacions haurien de ser CtaSection amb props diferents. És la duplicació més fàcil de resoldre de tot l\'inventari i la que més es notarà quan es repliqui a quatre pàgines de servei.',
    variants: [
      { id: 'cta-section', label: 'CtaSection - component compartit amb props', files: ['app/servicios/estrategia-editorial/CtaSection.tsx'], pages: [PAGES.home, PAGES.estrategia, PAGES.editoriales, PAGES.enfoque, PAGES.sobreMi, PAGES.caso] },
      { id: 'closing-ecosistema', label: 'ClosingCtaSection - copia fixada, només a ecosistema', files: ['app/servicios/ecosistema-produccion-editorial/ClosingCtaSection.tsx'], pages: [PAGES.ecosistema] },
      { id: 'newsletter', label: 'Newsletter (sobre mi) - variant amb il·lustracions animades, desactivada', files: ['app/sobre-mi/NewsletterSection.tsx'], pages: [PAGES.sobreMi], inactive: true, note: 'Comentada a page.tsx; no es renderitza a la web pública.' },
      { id: 'linkedin', label: 'LinkedIn (sobre mi) - targeta amb banner i foto, no només boto', files: ['app/sobre-mi/LinkedInSection.tsx'], pages: [PAGES.sobreMi] },
    ],
  },

  // ----------------------------- HISTORIA -----------------------------
  {
    id: 'timeline-history',
    name: 'Línia de temps biogràfica',
    group: 'processos',
    purpose:
      'Seqüència vertical d\'etapes professionals alternant costat (esquerra/dreta), cada una amb un títol, una descripció i fites datades, connectades per una línia vertical contínua.',
    whenToUse: 'Només a /sobre-mi, per explicar la trajectòria professional en forma de relat, no de currículum.',
    reuse: 'copies',
    needs: ['Set entrades amb títol, descripció i una o més fites datades (data + text curt)'],
    desktop: 'Alternança esquerra/dreta amb un punt central connectat per una línia vertical; cada fila anima independentment en entrar a la vista.',
    mobile: 'Es converteix en una sola columna amb els punts alineats a l\'esquerra; desapareix l\'alternança.',
    limits: [
      'Set entrades amb contingut i nombre de fites molt desigual (d\'una a tres per entrada): el ritme visual no és constant.',
      'No existeix enlloc més al lloc: és un patró d\'un sol ús, sense cap altre bloc que el reutilitzi.',
      'El contingut és estrictament biogràfic i personal; no es pot adaptar a cap dels quatre serveis sense canviar-ne completament el propòsit.',
    ],
    recommendation: 'conservar',
    rationale: 'Compleix bé la seva funció narrativa a /sobre-mi i no té equivalent necessari en cap altra pàgina; no cal tocar-lo per a la reorganització de serveis.',
    variants: [
      { id: 'default', label: 'Línia de temps completa amb les set etapes reals', files: ['app/sobre-mi/HistorySection.tsx'], pages: [PAGES.sobreMi] },
    ],
  },

  // ----------------------------- SISTEMA -----------------------------
  {
    id: 'sys-state',
    name: 'Estats del sistema',
    group: 'sistema',
    purpose:
      'Pàgines curtes i centrades per a càrrega, 404 i error, sense animació GSAP ni formes de marca: només tipografia i un boto o acció de recuperació.',
    whenToUse: 'Gestionades automàticament per Next.js (loading.tsx, not-found.tsx, error.tsx); no es trien manualment.',
    reuse: 'compartit',
    needs: ['Cap contingut extern.'],
    desktop: 'Centrat vertical i horitzontal amb minHeight: 70vh.',
    mobile: 'Identic.',
    limits: [
      'global-error.tsx no pot fer servir els tokens de app/globals.css (substitueix el layout arrel sencer) i repeteix els colors en hex directe com a única excepció deliberada i justificada del lloc.',
      'Cap dels tres estats fa servir Navbar ni Footer: en sortir d\'un error l\'usuari no té cap manera de navegar fora del boto de reintentar o tornar a l\'inici.',
    ],
    recommendation: 'conservar',
    rationale: 'Són pàgines curtes que compleixen la seva funció. Només caldria afegir un enllaç de navegació mínim (per exemple, a l\'inici) a error.tsx per no deixar l\'usuari sense sortida.',
    variants: [
      { id: 'loading', label: 'Càrrega - espiral girant', files: ['app/loading.tsx'], pages: [PAGES.totes] },
      { id: 'not-found', label: '404 - pàgina no trobada', files: ['app/not-found.tsx'], pages: [PAGES.totes] },
      { id: 'error', label: 'Error de ruta - amb boto de reintentar', files: ['app/error.tsx'], pages: [PAGES.totes] },
    ],
  },
]

export function getBlock(id: string): BlockEntry | undefined {
  return BLOCKS.find((b) => b.id === id)
}

export function blocksByGroup(groupId: BlockGroupId): BlockEntry[] {
  return BLOCKS.filter((b) => b.group === groupId)
}
