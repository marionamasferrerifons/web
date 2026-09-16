import type { ServiciosEditorialesContent } from './types'

// Primer esborrany traduït amb IA (2026-09-16) — pendent de validació de la clienta.
export const serviciosEditorialesContentCa: ServiciosEditorialesContent = {
  hero: {
    tag: '[Serveis editorials amb IA aplicada]',
    title: (
      <>
        Amplia la teva capacitat de <span style={{ color: 'var(--color-blue-400)' }}>producció</span> amb la qualitat que exigeix la teva editorial.
      </>
    ),
    body: "Coordino, edito i desenvolupo materials educatius. Vinc de l'edició i de l'aula. Ara la IA accelera la meva feina.",
    ctaLabel: 'RESERVAR UNA TRUCADA',
  },
  painPoints: {
    title1: 'Si necessites complir amb el pla de producció...',
    title2: (
      <>
        <span style={{ color: 'var(--color-blue-400)' }}>...ara pots </span>
        <span style={{ color: 'var(--color-orange-400)' }}>delegar</span>
        <span style={{ color: 'var(--color-blue-400)' }}> en algú amb ofici i rigor.</span>
      </>
    ),
    row1: [
      { dot: 'var(--color-orange)', text: 'El teu equip editorial està al límit i no pot absorbir més projectes' },
      { dot: 'var(--color-green)', text: 'Necessites escalar la producció sense augmentar la teva plantilla fixa', indent: true },
    ],
    row2: [
      { dot: 'var(--color-orange)', text: 'Vols publicar amb rigor, però els terminis ajustats fan que la qualitat es ressenti' },
      { dot: 'var(--color-blue-300)', text: "Necessites incorporar nous enfocaments didàctics i busques editors amb experiència real a l'aula." },
    ],
  },
  offerings: {
    tag: '[EL QUE OFEREIXO]',
    title: (
      <>
        La capacitat de <span style={{ color: 'var(--color-orange-400)' }}>producció externa</span> que no t&apos;obliga a revisar-ho tot.{' '}
      </>
    ),
    subtitle: "Gestiono la producció de materials de primària, ESO, batxillerat i FP, amb un equip de col·laboradores de confiança.",
    mainCardTitle: "La capacitat i l'ofici que necessites per als teus continguts educatius",
    mainCardBody: "Aplica la innovació educativa als teus llibres de text, assegurant-te que cada material compleixi amb els requisits curriculars i amb les necessitats del professorat i l'alumnat.",
    serviceCards: [
      { icon: '/s3-icon-definition.png', iconSize: 48, title: 'Definició de la idea editorial', description: "Definim l'ADN pedagògic i editorial del teu projecte perquè connecti amb l'aula actual." },
      { icon: '/s3-icon-coordination.svg', iconSize: 32, title: 'Coordinació de projectes', description: 'Lidero l’execució del teu projecte, centralitzant la coordinació de professionals i el control de terminis, qualitat i pressupost.' },
      { icon: '/s3-icon-edition.svg', iconSize: 32, title: 'Edició de llibres de text', description: "Reviso el material d'autoria buscant coherència curricular i sentit didàctic i aplicant les millors pràctiques de l'ofici d'editar." },
      { icon: '/s3-icon-authoring.svg', iconSize: 32, title: 'Autoria de continguts educatius', description: 'Desenvolupo propostes educatives integrant enfocaments competencials i metodologies actives per a un aprenentatge real i significatiu.' },
    ],
    whatYoullGetLabel: '[EL QUE ACONSEGUIRÀS]',
    outcomes: [
      'Lliuraments puntuals i sense rondes de correcció imprevistes',
      'Escalar la teva capacitat de producció sense augmentar la teva plantilla',
      'Reduir els temps de desenvolupament amb la integració responsable de la IA',
    ],
  },
  projects: {
    tag: '[PROJECTES EDITORIALS]',
    title: (
      <>
        Projectes que ja he <span style={{ color: 'var(--color-orange-400)' }}>editat</span> i <span style={{ color: 'var(--color-orange-400)' }}>coordinat</span>
      </>
    ),
    subtitle: "Des del 2021, totes les editorials que han treballat amb mi m'han encarregat el projecte següent. La recurrència és la millor recompensa a la feina ben feta.",
    prevLabel: 'Anterior',
    nextLabel: 'Següent',
    metaLabels: { role: 'Rol:', grade: 'Etapa:', publisher: 'Editorial:' },
  },
  cta: {
    title: 'Necessites ajuda per complir amb el teu pla de producció?',
    subtitle: 'Definim un pla perquè els teus propers materials surtin a la llum a temps, sense imprevistos i amb els màxims estàndards de qualitat.',
  },
}
