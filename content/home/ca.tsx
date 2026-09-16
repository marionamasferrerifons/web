import type { HomeContent } from './types'

// Primer esborrany traduït amb IA (2026-09-16) — pendent de validació de la clienta.
export const homeContentCa: HomeContent = {
  hero: {
    tag: "[+15 ANYS D'EXPERIÈNCIA]",
    title: (
      <>
        T&apos;ajudo a <span style={{ color: 'var(--color-orange-400)' }}>decidir</span> què adoptar i què deixar de banda en el sector editorial
      </>
    ),
    body: "Acompanyament estratègic per a directius editorials que busquen integrar la innovació en IA, combinant experiència editorial, pedagògica i tecnològica.",
    ctaLabel: 'RESERVAR UNA TRUCADA',
    photoAlt: 'Mariona Masferrer',
  },
  logos: {
    tag: '[EDITORIALS PER A LES QUE HE TREBALLAT]',
  },
  challenges: {
    title: (
      <>
        Conec els <span style={{ color: 'var(--color-orange-400)' }}>reptes reals</span> actuals del sector editorial
      </>
    ),
    items: [
      { avatar: '/home-avatar-1.png', size: 69, left: 1262, top: 0, label: 'Augmentar la productivitat de creació de llibres', side: 'left' },
      { avatar: '/home-avatar-2.png', size: 71, left: 0, top: 89, label: "Necessitat d'IA aplicada a l'entorn editorial", side: 'right' },
      { avatar: '/home-avatar-3.png', size: 60, left: 811, top: 208, label: "Resistències de l'equip a l'hora d'adoptar la IA", side: 'left' },
      { avatar: '/home-avatar-4.png', size: 91, left: 188, top: 298, label: 'Por a la pèrdua de qualitat en els resultats', side: 'right' },
      { avatar: '/home-avatar-5.png', size: 83, left: 1132, top: 223, label: 'Pressió per innovar', side: 'left' },
    ],
  },
  problem: {
    title: (
      <>
        El problema principal és <span style={{ color: 'var(--color-orange-400)' }}>com integrar</span> la IA sense perdre qualitat
      </>
    ),
  },
  criterio: {
    tag: '[EL MEU ENFOCAMENT]',
    title: (
      <>
        El <span style={{ color: 'var(--color-orange-400)' }}>criteri</span> d&apos;algú que coneix el sector
      </>
    ),
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Ultrices blandit vestibulum volutpat blandit vulputate fermentum pulvinar.',
    editorial: {
      name: 'Editorial',
      boldLine: 'Entenc com funciona una editorial per dins.',
      bodyLine: "Des dels processos de producció fins a les decisions estratègiques, cosa que permet aplicar IA sense trencar allò que ja funciona.",
    },
    pedagogia: {
      name: 'Pedagogia',
      boldLine: "Entenc el contingut des de qui l'ensenya i qui el produeix.",
      bodyLine: "Haver treballat com a docent em permet entendre com s'utilitza el contingut a la pràctica, un aspecte clau a l'hora d'aplicar IA sense perdre valor educatiu.",
    },
    tecnologia: {
      name: 'Tecnologia',
      boldLine: 'Faig servir la IA a la pràctica',
      bodyLine: "Treballo amb IA des de dins del procés editorial, cosa que permet entendre'n els límits, els riscos i el veritable potencial.",
    },
  },
  practice: {
    tag: '[TRADUCCIÓ A LA PRÀCTICA]',
    title: (
      <>
        Una manera de treballar que <span style={{ color: 'var(--color-orange-400)' }}>impacta</span> en el resultat final
      </>
    ),
    subtitle: "La IA no s'incorpora des de fora ni de manera experimental. Forma part del procés editorial, integrada en el dia a dia i amb criteris clars de qualitat.",
    cards: [
      {
        title: 'Projectes més clars, coherents i sostenibles',
        body: 'La combinació entre criteri editorial, pedagogia i tecnologia permet desenvolupar continguts útils, ben estructurats i pensats per mantenir-se sòlids també a llarg termini.',
        icon: '/practice-icon-inbox.svg',
      },
      {
        title: 'La tecnologia funciona millor quan hi ha criteri al darrere',
        body: 'Integrar la IA dins de processos editorials no consisteix a automatitzar per automatitzar, sinó a prendre millors decisions sobre què millorar, què mantenir i on realment aporta valor.',
        icon: '/practice-icon-process.svg',
      },
      {
        title: "Contingut que es produeix i s'entén millor",
        body: "Treballar des d'una mirada editorial i pedagògica permet construir materials més clars, comprensibles i alineats amb com les persones aprenen i utilitzen el contingut.",
        icon: '/practice-icon-edit.svg',
      },
    ],
  },
  services: {
    tag: '[SERVEIS]',
    title: (
      <>
        Lorem ipsum dolor sit amet <span style={{ color: 'var(--color-orange-400)' }}>consectetur</span>. Volutpat scelerisque cras
      </>
    ),
    cards: [
      {
        href: '/servicios/estrategia-editorial',
        title: 'Innovació editorial amb IA',
        subtitle: "T'ajudo a treballar com jo treballo",
        body: "Acompanyo editorials educatives en el procés d'incorporar la IA de manera estratègica i responsable: des d'entendre on són avui fins a construir els sistemes i les capacitats per treballar diferent.",
        image: '/home-service-card1.svg',
        bgColor: 'var(--color-white)',
        imageSide: 'right',
      },
      {
        href: '/servicios/servicios-editoriales',
        title: 'Serveis editorials amb IA aplicada',
        subtitle: 'El que faig jo, aplicat al teu projecte',
        body: "Dirigeixo projectes editorials complets amb un equip de col·laboradors de confiança. La IA forma part del mètode de treball com a eina integrada en la producció diària. Això explica l'eficiència i la qualitat dels lliurables.",
        image: '/home-service-card2.svg',
        bgColor: 'var(--color-white)',
        imageSide: 'left',
      },
      {
        href: '/servicios/ecosistema-produccion-editorial',
        title: 'Sistema de producció editorial amb IA',
        subtitle: 'El criteri de la teva editorial, codificat i amplificat.',
        body: "Dissenyo i implanto un sistema de producció a mida que codifica el coneixement editorial i pedagògic de la teva organització en un entorn d'IA. L'equip manté el criteri; la IA multiplica la capacitat productiva.",
        image: '/home-service-card3.svg',
        bgColor: 'var(--color-white)',
        imageSide: 'right',
      },
    ],
  },
  caseStudies: {
    tag: '[PROJECTES]',
    title: (
      <>
        Com s&apos;aplica en projectes <span style={{ color: 'var(--color-orange-400)' }}>reals</span>
      </>
    ),
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Eget elit consectetur bibendum placerat aliquam dictum. Tincidunt eget tempus tortor congue diam turpis. Sit fusce tempor.',
  },
  cta: {
    title: "Explorem junts com incorporar la IA a la teva editorial",
    subtitle: "La IA no s'incorpora des de fora ni de manera experimental. Forma part del procés editorial, integrada en el dia a dia i amb criteris clars de qualitat.",
  },
}
