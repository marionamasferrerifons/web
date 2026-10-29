import type { HomeContent } from './es'

const accent = (text: string) => <span style={{ color: 'var(--color-orange-400)' }}>{text}</span>

// Esborrany traduït amb IA (2026-10-19) — pendent de revisió de la Mariona.
export const homeContentCa: HomeContent = {
  metadata: {
    title: 'Mariona Masferrer i Fons — IA per a editorials educatives',
    description:
      "Ajudo editorials educatives a prendre decisions estratègiques sobre IA, a millorar la producció de continguts i a aprendre a treballar-hi, amb criteri editorial i pedagògic.",
  },
  hero: {
    photoAlt: 'Mariona Masferrer',
    title: <>Fes que la IA {accent('potenciï')} la teva editorial educativa.</>,
    tag: "[+10 ANYS D'EXPERIÈNCIA]",
    body: "T'ajudo a prendre decisions estratègiques sobre IA, a millorar els teus fluxos de producció i a aprendre a treballar amb eines d'IA. T'aporto criteri editorial i pedagògic, i un coneixement pràctic de la tecnologia.",
  },
  logosStrip: {
    ariaLabel: 'Editorials i organitzacions amb què he treballat',
  },
  services: {
    tag: '[Serveis]',
    title: <>Com et puc {accent('ajudar')}?</>,
    subtitle: "Adapto la meva feina a les necessitats concretes de la teva editorial, als teus objectius i a la manera de treballar del teu equip.",
    items: [
      {
        href: '/ca/serveis/estrategia-dia',
        title: "Estratègia d'IA",
        body: "T'ajudo a prendre decisions sobre IA, valorar oportunitats i dirigir les iniciatives de la teva editorial. Per resoldre una qüestió concreta o per liderar projectes que requereixen continuïtat.",
        link: "Veure l'estratègia d'IA",
      },
      {
        href: '/ca/serveis/produccio-editorial-amb-ia',
        title: 'Producció editorial amb IA',
        body: "Creo i edito materials educatius, reviso els continguts que ja genereu o preparo un sistema perquè el teu equip pugui produir continguts publicables amb IA.",
        link: 'Veure la producció editorial amb IA',
      },
      {
        href: '/ca/serveis/formacio-en-ia',
        title: 'Formació en IA',
        body: "T'ajudo a entendre i dominar la IA i a aplicar el que has après a la teva feina editorial. Amb opcions per a professionals individuals i formació adaptada al teu equip.",
        link: 'Veure la formació en IA',
      },
    ],
  },
  cases: {
    tag: "[Casos d'èxit]",
    title: <>Projectes que ja he {accent('fet')}</>,
    subtitle: "Dos projectes recents en què vam aplicar la IA a decisions i processos reals d'una editorial educativa.",
    items: [
      {
        tag: "[Estratègia d'IA]",
        title: "Consultoria per detectar oportunitats de negoci i reorientar la inversió en IA",
        body: "En cinc setmanes vam analitzar el context de l'editorial i vam definir un full de ruta amb iniciatives prioritzades i proveïdors avaluats. La feina va permetre reorientar el pressupost i establir criteris per decidir què impulsar i què ajornar.",
        link: "Veure el cas d'estratègia",
        href: '/ca/casos-dexit/estrategia-de-ia',
      },
      {
        tag: '[Producció editorial amb IA]',
        title: 'Desenvolupament d\'un sistema per produir materials complementaris amb Claude',
        body: "En quatre setmanes vam preparar un sistema a Claude per produir guies didàctiques, solucionaris, reptes, avaluacions i presentacions. Vam codificar el criteri editorial i pedagògic, vam configurar els processos i vam formar l'equip per utilitzar-los.",
        link: 'Veure el cas de producció',
        href: '/ca/casos-dexit/altamar-produccion-editorial-claude',
      },
    ],
  },
  profile: {
    photoAlt: 'Mariona Masferrer',
    tag: '[Sobre mi]',
    title: <>Criteri editorial, experiència a l&apos;aula i {accent('pràctica amb IA')}</>,
    body: "La meva experiència com a editora i docent guia la meva manera d'aplicar la IA: parteixo de com es produeixen els materials, del que necessiten els qui els fan servir i dels estàndards de qualitat que han de complir.",
    contributions: [
      {
        title: 'Conec la feina editorial',
        body: "He treballat en autoria, edició i gestió de projectes. Conec les exigències del contingut, els calendaris i la coordinació entre professionals.",
      },
      {
        title: "Entenc l'ús educatiu dels continguts",
        body: "La meva experiència docent m'ajuda a valorar si un material és clar, adequat al seu nivell i útil per ensenyar i aprendre.",
      },
      {
        title: 'Treballo amb la IA a la pràctica',
        body: "Aplico la IA a processos editorials reals. Provo les seves possibilitats, en reviso els resultats i ajusto les instruccions i els processos segons el que necessita cada projecte.",
      },
    ],
    link: 'Coneix la meva trajectòria',
    linkHref: '/ca/sobre-mi',
  },
  criterio: {
    tag: '[El meu enfocament]',
    title: <>Com enfoco la meva {accent('feina')}?</>,
    subtitle: "Combino la mirada editorial, pedagògica i tecnològica per definir on et pot ajudar la IA i com mantenir el criteri del teu equip al capdavant del procés.",
    editorial: {
      label: 'Editorial',
      short: "Aplico la IA des de l'ofici d'editar, preservant-ne les bones pràctiques i el coneixement del sector.",
      full: "Aplico la IA des del coneixement de l'ofici d'editar, preservant-ne les bones pràctiques i el coneixement acumulat del sector. Aquest saber guia com incorporo la tecnologia i com en valoro els resultats.",
    },
    pedagogia: {
      label: 'Pedagogia',
      short: "Combino didàctica basada en l'evidència i experiència a l'aula per crear materials que afavoreixin l'aprenentatge.",
      full: "Combino metodologies didàctiques basades en l'evidència amb la meva experiència a l'aula per crear materials que afavoreixin l'aprenentatge significatiu i responguin a les necessitats reals de docents i alumnat.",
    },
    tecnologia: {
      label: 'Tecnologia',
      short: "Conec les possibilitats i els límits de la IA, i l'aplico a projectes reals per prendre decisions fonamentades.",
      full: "Entenc com funciona la IA, les seves possibilitats i els seus límits. Combino aquesta comprensió amb l'experiència d'aplicar-la a projectes reals per prendre decisions tecnològiques fonamentades que ajudin la teva editorial a assolir els seus objectius.",
    },
  },
  testimonials: {
    tag: '[Testimonis]',
    title: <>Què en diuen els qui han {accent('treballat amb mi')}?</>,
    carouselLabel: 'Testimonis',
    carouselRole: 'carrusel',
    prev: 'Testimoni anterior',
    next: 'Testimoni següent',
    goTo: 'Veure el testimoni {n} de {total}',
  },
  cta: {
    title: 'Què necessita la teva editorial?',
    subtitle: "Reserva una sessió gratuïta d'una hora per parlar de la teva editorial, entendre què necessites i valorar com et puc ajudar.",
  },
}
