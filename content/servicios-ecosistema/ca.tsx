import type { EcosistemaContent } from './types'

// Primer esborrany traduït amb IA (2026-09-16) — pendent de validació de la clienta.
export const ecosistemaContentCa: EcosistemaContent = {
  hero: {
    tag: '[Sistema de Producció Editorial amb IA]',
    title: (
      <>
        Crea <span style={{ color: 'var(--color-blue-400)' }}>contingut publicable</span> amb un sistema d&apos;IA construït sobre el teu criteri.
      </>
    ),
    body: "La IA no sap què és un bon material educatiu. La teva editorial sí. T'ajudo a automatitzar la producció de continguts perquè la IA escrigui al nivell dels teus autors i editors.",
    ctaLabel: 'RESERVAR UNA TRUCADA',
  },
  problemPills: {
    title: (
      <>
        La IA promet alleujar la càrrega de treball. Però <span style={{ color: 'var(--color-orange-400)' }}>sense el teu criteri codificat</span>, la multiplica.
      </>
    ),
    pills: [
      { dot: '#E5A27C', text: 'El que genera la IA no compleix amb els estàndards de qualitat que caracteritzen la teva editorial.', mlClass: 'md:ml-[135px]' },
      { dot: '#AFE0D6', text: "Corregir el que genera la IA li costa al teu equip més temps que haver escrit el contingut des de zero.", mlClass: 'md:ml-[186px]' },
      { dot: 'var(--color-blue-300)', text: 'Cada editor fa la guerra pel seu compte, investigant què fer amb la IA de forma aïllada i sense protocols clars.', mlClass: 'md:ml-[85px]' },
      { dot: 'var(--color-orange-400)', text: "Cada eina nova obre el dubte de si aquesta vegada sí que serà útil per al teu equip, i el pressupost se'n va en proves.", mlClass: 'md:ml-[272px]' },
    ],
  },
  threeLayers: {
    tag: '[EL CRITERI NO ES DELEGA]',
    title: (
      <>
        Un sistema on el <span style={{ color: 'var(--color-blue-400)' }}>criteri editorial</span> dirigeix la tecnologia.
      </>
    ),
    subtitle: "Codifico el coneixement pedagògic i editorial que has construït durant anys i el combino amb la capacitat de generació a escala de la IA. El teu equip es queda al comandament de tot el procés.",
    desktopCards: {
      left: { title: 'El teu coneixement editorial codificat', body: 'El criteri pedagògic i editorial que el teu equip ha acumulat durant anys, codificat i operatiu per a la IA.' },
      right: { title: 'El teu equip editorial al centre', body: 'El criteri no es delega. El teu equip supervisa i valida cada pas del procés.' },
      bottom: { title: 'La potència de la IA', body: 'Velocitat i capacitat de generació a escala, aplicada sobre el criteri de la teva editorial.' },
    },
    mobileCards: [
      { title: 'El teu coneixement editorial', body: 'El criteri pedagògic i editorial que el teu equip ha acumulat durant anys, codificat i operatiu.' },
      { title: 'El teu equip editorial al centre', body: 'El criteri no es delega. El teu equip supervisa i valida cada pas del procés.' },
      { title: 'La potència de la IA', body: 'Velocitat i capacitat de generació a escala, aplicada sobre el teu coneixement estructurat.' },
    ],
    result: { title: 'Resultat', body: 'Un sistema de producció editorial amb els teus estàndards i a la velocitat de la IA.' },
    mobileResult: { title: 'Resultat', body: 'Un sistema de producció editorial amb els teus estàndards i a la velocitat de la IA.' },
  },
  systemSteps: {
    tag: '[EN QUÈ CONSISTEIX?]',
    title: (
      <>
        No necessites una altra eina. Necessites que la que facis servir conegui <span style={{ color: 'var(--color-orange-400)' }}>el teu criteri</span>.
      </>
    ),
    subtitle: "El sistema es construeix sobre la IA que triïs. El teu equip no comença davant d'un llenç en blanc: troba els processos ja muntats i produeix sense necessitat de saber d'IA.",
    cardTitle: 'El teu criteri editorial és el context que li falta a la IA',
    cardBody: 'Codifico el criteri de la teva editorial i programo processos automatitzats per a cada tipus de material al teu compte de Claude, ChatGPT o Gemini.',
    stepsHeading: 'Com ho construïm?',
    stepsSubtitle: 'Un procés que fem juntament amb el teu equip. Comencem pels materials prioritaris i ampliem només quan estiguis convençut del resultat.',
    resultsBadge: 'RESULTATS EN 2 SETMANES',
    steps: [
      { step: 'PAS 1', title: "Definició de l'abast", desc: 'Revisem quins materials produeixes i com els produeixes avui. Sabràs per on començar, quant de temps pots recuperar i com ho mesurarem.' },
      { step: 'PAS 2', title: 'Disseny i validació', desc: 'Codifiquem el teu criteri, muntem un procés per a cada tipus de material i el provem amb contingut real. Es tanca quan el que surt és publicable.' },
      { step: 'PAS 3', title: 'Traspàs i autogestió', desc: "El teu equip aprèn a mantenir el sistema al dia quan canviïn els teus materials o els teus criteris. A partir d'aquí, funciona sense mi." },
    ],
    whatItIncludesLabel: '[QUÈ INCLOU?]',
    includes: [
      { title: 'Coneixement estructurat', desc: 'El criteri editorial del teu equip, organitzat i accessible per a la IA.' },
      { title: 'System prompt', desc: "Les instruccions que defineixen com s'ha de comportar la IA a la teva editorial." },
      { title: 'Skills', desc: 'Processos especialitzats per a cada tipologia de contingut que produeixes.' },
      { title: 'Agents', desc: 'Automatitzacions que executen seqüències de tasques.' },
      { title: 'Biblioteca de prompts', desc: "Els prompts validats i llestos per utilitzar en cada cas d'ús recurrent." },
      { title: 'Entorn de producció', desc: "L'espai on el teu equip i la IA treballen i produeixen junts." },
    ],
  },
  impactStats: {
    tag: '[IMPACTE]',
    title: (
      <>
        Produeix <span style={{ color: 'var(--color-blue-400)' }}>més</span> amb el mateix equip
      </>
    ),
    statLabel: 'TEMPS DE PRODUCCIÓ',
    statDescDesktop: "Reducció del temps de producció segons tipologia de contingut, calculada a partir dels fluxos reals de l'editorial.",
    statDescMobile: "Reducció del temps de producció segons el tipus de contingut, calculada a partir dels fluxos reals de l'editorial.",
    rightText: 'Alguns exemples de continguts que el sistema pot produir:',
    checkItems: [
      'Avaluacions tipus test',
      "Disseny d'índexs",
      'Guies didàctiques',
      "Redacció d'activitats",
      'Redacció de contingut principal',
      'Redacció de reptes i casos',
      'Desenvolupament de solucionaris',
    ],
  },
  advantages: {
    tag: '[AVANTATGES]',
    title: (
      <>
        Crea la infraestructura de producció del <span style={{ color: 'var(--color-orange-400)' }}>futur</span>
      </>
    ),
    ventajas: [
      { label: 'AVANTATGE 1', title: 'Progressiu', desc: 'Comença amb una tipologia de contingut, valida l’impacte i amplia quan vegis resultats. Sense grans inversions inicials ni actes de fe.' },
      { label: 'AVANTATGE 2', title: 'Actiu propi', desc: 'Tot el que es construeix et pertany. Viu en arxius que controles tu, compatible amb les eines d’avui i les del futur.' },
      { label: 'AVANTATGE 3', title: 'No disruptiu', desc: "S'integra en els teus fluxos i eines actuals. Sense canvis forçats ni corbes d'aprenentatge." },
      { label: 'AVANTATGE 4', title: 'Escalable cap a IA privada', desc: 'Comença amb Claude, ChatGPT o Gemini i migra cap a una instància privada quan vulguis augmentar la seguretat i el control de costos.' },
    ],
    illustrationAlt: "Diagrama del flux de treball de l'especialista GEM",
  },
  closingCta: {
    title: 'Parlem de quin material podries crear amb la IA.',
    body: "Reserva una trucada per veure què produeixes, on se't va el temps i si aquest sistema et pot ajudar.",
    ctaLabel: 'RESERVAR UNA TRUCADA',
  },
}
