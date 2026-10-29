import type { EstrategiaContent } from './es'

const span = (text: string, color: string) => <span style={{ color }}>{text}</span>

// Esborrany traduït amb IA (2026-10-19) — pendent de revisió de la Mariona.
export const estrategiaContentCa: EstrategiaContent = {
  metadata: {
    title: "Estratègia d'IA",
    description:
      "Criteri i direcció per decidir què fer amb la IA a la teva editorial: decisions concretes, recomanacions fonamentades i un full de ruta clar.",
  },
  hero: {
    tag: "[ESTRATÈGIA D'IA]",
    title: <>Criteri i direcció per decidir {span('què fer amb la IA', 'var(--color-white)')} a la teva editorial.</>,
    body: "T'ajudo a resoldre decisions concretes, explorar oportunitats de negoci i dirigir les teves iniciatives d'IA. Amb coneixement del sector editorial, de l'educació i de la tecnologia.",
  },
  decisions: {
    title: <>T&apos;ajudo a respondre les preguntes que {span('no pots continuar ajornant.', 'var(--color-orange-400)')}</>,
    items: [
      { title: 'On ens pot ajudar la IA?', body: "T'ajudo a identificar quins problemes de la teva editorial val la pena abordar amb IA i on podria aportar valor." },
      { title: 'Per on comencem amb tantes idees?', body: "T'ajudo a prioritzar iniciatives segons el seu valor, la seva viabilitat i l'encaix amb els objectius de la teva editorial." },
      { title: "Quina eina d'IA incorporem?", body: "T'ajudo a comparar alternatives i a valorar la inversió, els recursos i les dependències que implica cada opció." },
      { title: "Té sentit aquesta proposta d'un proveïdor?", body: "T'ajudo a entendre i valorar el que t'ofereixen les empreses tecnològiques i et dono pautes per prendre decisions informades." },
      { title: 'Podem crear nous productes o negocis?', body: "T'ajudo a explorar oportunitats de negoci a partir del teu catàleg, el teu coneixement i les necessitats de docents, centres i alumnat." },
      { title: 'Per què no funciona el que hem provat?', body: "T'ajudo a analitzar els bloquejos i a decidir si convé ajustar l'enfocament de la iniciativa, replantejar-la o aturar-la abans de comprometre més pressupost." },
    ],
  },
  process: {
    title: 'Com treballo?',
    body: "La meva experiència com a editora i docent em permet valorar com les decisions sobre IA afecten la qualitat del contingut publicat, l'equip que el produeix i les persones que l'utilitzen.",
    steps: [
      { title: 'Anàlisi dels reptes estratègics del teu negoci', body: 'Posem sobre la taula els teus objectius, recursos i idiosincràsia per decidir on aporta valor la IA.' },
      { title: 'Recomanacions fonamentades', body: "Contrastem alternatives, identifiquem riscos i prioritzem les oportunitats en funció del seu impacte." },
      { title: 'Full de ruta concret per avançar amb claredat', body: 'Definim què cal fer a continuació, qui hi ha de participar i com valorar els resultats.' },
    ],
  },
  collaboration: {
    title: 'Com podem col·laborar?',
    subtitle: 'Dues maneres de treballar que s\'adapten a les necessitats específiques de la teva editorial.',
    helpsLabel: "En què t'ajudo?",
    outcomeLabel: "Què t'emportes?",
    cards: [
      {
        tag: 'PER A UNA QÜESTIÓ CONCRETA',
        title: 'Assessorament puntual',
        body: "Treballem sobre una decisió, un problema o una oportunitat que vols explorar. Acordem l'objectiu i l'abast segons les teves necessitats.",
        helps: [
          'Entendre el problema i contrastar les alternatives.',
          'Valorar oportunitats, inversions o propostes de proveïdors.',
          'Definir una recomanació i els passos següents.',
        ],
        outcome: 'Conclusions i recomanacions documentades per avançar en la qüestió que hàgim acordat.',
      },
      {
        tag: 'PER DIRIGIR LES TEVES INICIATIVES DE MANERA SOSTENIBLE',
        title: "Direcció d'IA externa",
        body: "Exerceixo la funció de directora d'IA de la teva editorial amb la dedicació que necessitis i sense que hagis d'assumir el cost d'una contractació fixa.",
        helps: [
          'Definir els objectius estratègics de la teva editorial.',
          'Dissenyar el teu full de ruta i el pla de treball.',
          'Dirigir i coordinar les iniciatives amb els teus equips i proveïdors.',
          'Fer el seguiment de pressupostos, avenços, riscos i resultats.',
          'Organitzar les responsabilitats i els criteris de decisió sobre IA.',
          "Acompanyar els canvis i les decisions que sorgeixin durant l'execució.",
        ],
        outcome: "Direcció d'IA continuada, amb la dedicació i el nivell d'implicació que la teva editorial necessiti en cada moment.",
      },
    ],
  },
  caseHighlight: {
    title: 'Altamar: de voler incorporar IA a decidir on invertir.',
    paragraphs: [
      'Altamar necessitava definir quin paper havia de tenir la IA en el seu negoci i quines iniciatives valia la pena impulsar.',
      "En un projecte de cinc setmanes vam analitzar-ne el context, vam identificar oportunitats i vam construir un full de ruta amb iniciatives prioritzades, proveïdors avaluats i una proposta de calendari i d'inversió.",
      'La feina va permetre reorientar el pressupost cap a una cartera d\'iniciatives i establir criteris per decidir què impulsar i què ajornar.',
    ],
    facts: [
      ['Client', 'Altamar'],
      ['Servei', 'Consultoria estratègica'],
      ['Durada', '5 setmanes'],
    ],
    linkLabel: "Veure el cas d'Altamar",
  },
  cta: {
    title: "Explica'm què necessites decidir.",
    subtitle: "Reserva una sessió gratuïta d'una hora per parlar de la teva editorial, entendre què necessiteu i valorar si et puc ajudar.",
  },
}
