import type { EstrategiaEditorialContent } from './types'

// Primer esborrany traduït amb IA (2026-09-16) — pendent de validació de la clienta.
export const estrategiaEditorialContentCa: EstrategiaEditorialContent = {
  client: {
    hero: {
      tag: "[IMPLEMENTACIÓ ESTRATÈGICA D'IA]",
      title: (
        <>
          Les regles han canviat, però el teu <span className="text-blue-50">contingut</span> continua sent imprescindible.
        </>
      ),
      body: "T'ajudo a definir el paper de la teva editorial en l'era de la IA i a posar la tecnologia al servei dels teus objectius de negoci, no al revés.",
      ctaLabel: 'RESERVAR UNA TRUCADA',
    },
    section2: {
      title: 'Et passa que...?',
      items: [
        { dot: 'var(--color-blue-300)', text: "Sents incertesa i por davant l'allau d'IA" },
        { dot: 'var(--color-orange-200)', text: 'No tens clar quin rol jugarà la teva editorial en el futur educatiu' },
        { dot: 'var(--color-blue-300)', text: "Els últims projectes d'innovació no han generat l'impacte esperat" },
        { dot: 'var(--color-orange)', text: "Les proves amb la IA no han estat a l'altura dels estàndards de la teva editorial" },
        { dot: 'var(--color-blue-100)', text: 'Tens por de malgastar pressupost en modes tecnològiques' },
        { dot: 'var(--color-orange-200)', text: 'Les consultores generalistes no comprenen les particularitats del nostre sector' },
      ],
    },
    section3: {
      tag: '[EL QUE OFEREIXO]',
      title: (
        <>
          Dissenya el <span className="text-orange-400">futur</span> de la teva editorial
        </>
      ),
      subtitle: "Estratègia i direcció per navegar la incertesa. Dues maneres de treballar amb mi, segons el punt en què et trobis.",
    },
    serviceLink: { viewMore: 'veure més del servei', viewLess: 'veure menys del servei' },
    card1: {
      title: 'Explorar noves oportunitats estratègiques',
      body: "Workshops d'innovació dissenyats específicament per a editorials educatives. Cadascun et permet descobrir oportunitats reals en àrees clau del teu negoci.",
      workshops: [
        {
          label: 'WORKSHOP 1',
          title: 'Innovar la proposta de valor',
          duration: '4 hores',
          format: 'In-company',
          description: "Explorem com reimaginar el valor que ofereixes als teus usuaris, entenent les seves necessitats i descobrint com la IA ens pot ajudar a satisfer-les.",
          outcomes: [
            'Identificar oportunitats concretes per crear nous productes i serveis educatius',
            'Redefinir la teva proposta de valor perquè sigui més rellevant en un món transformat per la tecnologia',
            "Generar hipòtesis d'innovació validades amb criteri editorial i pedagògic",
          ],
        },
        {
          label: 'WORKSHOP 2',
          title: 'Innovar la relació amb els clients',
          duration: '4 hores',
          format: 'In-company',
          description: "Descobrim com utilitzar la IA per millorar l'experiència de l'alumnat, el professorat i els centres educatius, creant relacions més profundes i models de negoci més sostenibles.",
          outcomes: [
            'Dissenyar experiències personalitzades que augmentin la satisfacció i la retenció.',
            "Explorar nous models d'ingressos i canals de relació amb clients.",
            'Entendre com la IA canvia les expectatives dels teus usuaris.',
          ],
        },
        {
          label: 'WORKSHOP 3',
          title: 'Innovar els processos operatius',
          duration: '4 hores',
          format: 'In-company',
          description: 'Analitzem com la IA pot fer la teva editorial més eficient. Observem els teus processos interns per identificar on la IA genera més impacte operatiu.',
          outcomes: [
            'Reduir temps i costos en processos automatitzables mantenint alts estàndards de qualitat.',
            'Alliberar talent creatiu per a tasques de més valor estratègic.',
            'Crear una editorial més àgil i preparada per al futur.',
          ],
        },
      ],
      whatYoullGetLabel: '[EL QUE ACONSEGUIRÀS]',
    },
    card2: {
      title: "Consultoria estratègica d'IA",
      body: "Un programa de 5 setmanes per tenir clar què fer i com fer-ho. Aconseguiràs un pla d'acció a 12 mesos i un horitzó estratègic de 3 anys.",
      expandedTitle: "Consultoria estratègica d'IA",
      expandedBody: 'Un procés col·laboratiu en què construïm el marc estratègic complet per adoptar la IA amb rigor i alineació empresarial.',
      durationBadge: '5 setmanes',
      weeks: [
        { label: 'SETMANA 1', title: 'Diagnòstic profund', detail: "Duem a terme una anàlisi interna, externa, de competidors i d'escenaris futurs de la indústria editorial i educativa." },
        { label: 'SETMANA 2', title: "Definició d'objectius estratègics", detail: 'Establim metes clares de negoci que guiïn qualsevol decisió posterior' },
        { label: 'SETMANA 3', title: "Detecció d'oportunitats", detail: 'Identifiquem àrees d’oportunitat en què la IA pot contribuir als objectius estratègics de l’editorial' },
        { label: 'SETMANA 4', title: 'Priorització i planificació', detail: 'Explorem i prioritzem iniciatives, avaluem proveïdors i definim governança' },
        { label: 'SETMANA 5', title: 'Full de ruta final', detail: "Lliurament del pla estratègic complet amb calendari definit, responsables clars i mètriques d'impacte per a l'avaluació" },
      ],
      whatYoullGetLabel: '[EL QUE ACONSEGUIRÀS]',
      whatYoullGetItems: [
        "Una visió clara del rol estratègic que ha de jugar la teva editorial en l'era de la IA",
        'Un full de ruta prioritzat i realista, adaptat als teus recursos i cultura.',
        "Criteri sòlid per prendre decisions d'inversió amb confiança i seguretat",
      ],
    },
    card3: {
      title: "Direcció d'IA externa",
      body: "Un servei de direcció estratègica d'IA per treballar de forma sostinguda i efectiva. Sense contractació fixa i amb modalitat flexible.",
      expandedTitle: "Direcció d'IA externa",
      expandedBody: "Un servei en què pagues només pel que necessites, ideal per a editorials que volen avançar amb rigor, però que no volen assumir el cost d'una contractació sènior.",
      howItWorksLabel: '[COM FUNCIONA]',
      howItWorksItems: [
        'Acompanyament continu i flexible (reunions periòdiques amb direcció i equips clau)',
        "Lideratge estratègic de totes les iniciatives d'IA",
        'Suport en la presa de decisions crítiques i alineació amb els objectius de negoci',
        'Transferència de coneixement i formació interna progressiva',
      ],
      whatYoullGetLabel: '[EL QUE ACONSEGUIRÀS]',
      whatYoullGetItems: [
        "Direcció experta i amb criteri sectorial per executar la teva estratègia d'IA",
        "Avenç constant sense perdre el control ni l'essència de la teva editorial",
        "Reducció de riscos i maximització del retorn de la inversió en IA",
        'Una aliada estratègica que entén tant la tecnologia com les particularitats del món editorial educatiu',
      ],
    },
  },
  cta: {
    title: 'Cap decisió sobre IA es pren bé des de la pressa.',
    subtitle: 'Reserva una trucada per explorar les possibilitats reals que la IA ofereix a la teva editorial.',
  },
}
