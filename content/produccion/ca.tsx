import type { ProduccionContent } from './es'

const span = (text: string, color = 'var(--color-orange-400)') => <span style={{ color }}>{text}</span>

// Esborrany traduït amb IA (2026-10-19) — pendent de revisió de la Mariona.
export const produccionContentCa: ProduccionContent = {
  metadata: {
    title: 'Producció editorial amb IA',
    description:
      "IA aplicada a la producció de continguts educatius: creació i edició de materials, revisió i avaluació editorial i disseny de sistemes de producció per al teu equip.",
  },
  hero: {
    tag: '[PRODUCCIÓ EDITORIAL AMB IA]',
    title: <>IA aplicada a la {span('producció', 'var(--color-blue-500)')} de continguts educatius.</>,
    body: "T'ajudo a millorar la producció de la teva editorial: creo i edito materials, reviso els continguts que ja genereu o preparo els processos perquè el teu equip pugui produir i validar amb IA.",
  },
  modalities: {
    title: <>Què necessites resoldre per complir el teu calendari de {span('producció?')}</>,
    subtitle: "Em pots encarregar materials, una avaluació de qualitat o la preparació d'un sistema de producció per al teu equip.",
    items: [
      {
        tag: 'Serveis editorials clau en mà',
        title: 'Creació i edició de continguts',
        body: "Redacto i edito materials educatius: llibres de text, situacions d'aprenentatge, avaluacions, solucionaris, guies didàctiques, recursos complementaris, etc. Aplico la IA a la seva elaboració i en reviso el contingut perquè respongui al nivell educatiu, als objectius d'aprenentatge i a les pautes de la teva editorial.",
      },
      {
        tag: 'Revisió de contingut generat amb IA',
        title: 'Revisió i avaluació editorial',
        body: "Reviso els materials generats amb IA: contrasto la informació, comprovo que siguin adequats didàcticament i detecto errors de contingut, llengua i coherència. Podem treballar sobre els materials que necessites publicar o avaluar els resultats d'una eina d'IA per identificar què ha de millorar.",
      },
      {
        tag: 'Sistema de producció amb IA',
        title: "Disseny d'un sistema de producció",
        body: "Preparo els materials de partida, faig explícit el criteri editorial i pedagògic i el converteixo en context i instruccions executables per la IA. Configuro el sistema sobre eines existents o treballo amb el vostre equip tecnològic per millorar una eina pròpia i incorporar-la al teu flux de treball.",
      },
    ],
  },
  system: {
    title: <>Què és un {span('sistema de producció')} amb IA?</>,
    body: "És una manera sistematitzada de produir continguts educatius que combina els teus materials de partida, el teu criteri editorial i pedagògic, les eines d'IA i la validació del teu equip d'edició.",
    optionsTitle: 'Dues maneres de posar-lo en marxa',
    optionsSubtitle: "T'ajudo a dissenyar aquest sistema i a posar-lo en marxa perquè el pugueu aplicar a la vostra producció habitual.",
    valueLabel: 'Què aporta aquesta alternativa?',
    helpsLabel: "En què t'ajudo?",
    options: [
      {
        title: 'Un sistema sobre eines com ChatGPT o Claude',
        body: "Potser encara no heu incorporat eines d'IA, o ja teniu llicències però us costa treure'n profit. També pot ser que cada editor experimenti pel seu compte. Un sistema compartit us permet agilitzar la producció i mantenir els criteris de qualitat de la vostra editorial.",
        value: "Permet cobrir una necessitat concreta sense les grans inversions que impliquen els desenvolupaments a mida. Podem aprofitar les eines que ja teniu i ampliar el sistema a mesura que comprovem els resultats.",
        helps: [
          'Reviso amb tu quina eina encaixa millor amb la teva editorial.',
          'Organitzo els materials de partida, converteixo el criteri editorial i pedagògic en instruccions i configuro els processos per crear els teus continguts.',
          "Acompanyo l'equip perquè pugui utilitzar el sistema de manera autònoma.",
        ],
      },
      {
        title: 'Un sistema sobre una eina desenvolupada per a la teva editorial',
        body: "Potser esteu dissenyant una eina nova, l'esteu desenvolupant o intenteu incorporar-la al vostre flux de producció. Necessiteu que respongui al vostre criteri editorial i pedagògic i que els seus resultats siguin útils per a l'equip.",
        value: "Una eina pròpia es pot connectar amb els sistemes que ja feu servir. També es pot entrenar específicament amb exemples de la vostra editorial per ajustar-la als vostres requisits concrets.",
        helps: [
          'Treballo amb els responsables editorials i tecnològics per definir com ha de funcionar el sistema.',
          'Preparo els materials de partida, tradueixo el criteri editorial i pedagògic en requisits i dissenyo les proves per avaluar els resultats.',
          "Acompanyo la prova pilot i la seva incorporació a la feina de l'equip.",
        ],
      },
    ],
    benefitsTitle: 'Què aporta a la teva editorial?',
    benefits: [
      { title: 'Més capacitat de producció', body: "Publicar més materials amb el mateix equip, agilitzant les tasques repetitives i dedicant més temps al criteri editorial i pedagògic." },
      { title: 'Estalvi de costos', body: "Reduir les hores de feina interna i la necessitat d'externalitzar determinades tasques de producció, mantenint els criteris de qualitat acordats." },
      { title: 'Implantació progressiva', body: "Començar per un cas d'ús concret, comprovar-ne l'impacte i ampliar el sistema a altres materials o processos quan els resultats ho justifiquin." },
      { title: 'Criteris compartits i resultats consistents', body: "Les pautes de la teva editorial es codifiquen i l'equip disposa d'una base comuna per produir i revisar els materials." },
    ],
    strategyPrompt: "Encara estàs decidint quines iniciatives d'IA impulsar?",
    strategyLink: "T'ajudo amb l'estratègia d'IA",
    strategyHref: '/ca/serveis/estrategia-dia',
  },
  caseHighlight: {
    title: 'Altamar: un sistema per produir materials complementaris amb IA.',
    paragraphs: [
      "Altamar necessitava optimitzar l'elaboració dels materials que acompanyen els seus llibres de text. Vam treballar sobre el seu criteri editorial i pedagògic per preparar un sistema a Claude que el seu equip pogués utilitzar en la producció.",
      "En quatre setmanes vam preparar processos per a cinc tipologies: guies didàctiques, solucionaris, reptes, avaluacions i presentacions. La implementació va incloure la codificació del criteri, la configuració dels processos i la formació de l'equip.",
    ],
    facts: [
      ['Client', 'Altamar'],
      ['Enfocament', 'Sistema sobre eines existents'],
      ['Abast', '5 tipologies'],
      ['Durada', '4 setmanes'],
    ],
    linkLabel: "Veure el cas d'Altamar",
  },
  projects: {
    tag: '[PROJECTES EDITORIALS]',
    title: <>Projectes que ja he {span('editat')} i {span('coordinat')}</>,
    subtitle: "Des del 2021, totes les editorials que han treballat amb mi m'han encarregat el projecte següent. La recurrència és la millor recompensa a la feina ben feta.",
    prev: 'Projectes anteriors',
    next: 'Projectes següents',
    trackLabel: 'Projectes editorials, desplaçament horitzontal',
    coverAlt: 'Coberta de {title}',
    roleLabel: 'Rol:',
    publisherLabel: 'Editorial:',
  },
  cta: {
    title: 'Parlem del que necessites produir.',
    subtitle: "Reserva una sessió gratuïta d'una hora per explicar-me quins materials necessites produir o què vols que el teu equip pugui fer amb IA.",
  },
}
