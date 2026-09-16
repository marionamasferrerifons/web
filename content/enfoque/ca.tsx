import type { EnfoqueContent } from './types'

// Primer esborrany traduït amb IA (2026-09-16) — pendent de validació de la clienta.
export const enfoqueContentCa: EnfoqueContent = {
  hero: {
    tag: '[ENFOCAMENT]',
    title: (
      <>
        Hola Lorem ipsum dolor sit amet <span style={{ color: 'var(--color-orange-400)' }}>consectetur</span>. Eu imperdiet cursus cras.
      </>
    ),
    body: "Treballo en el punt on la tecnologia, el contingut i l'ús real es creuen, per integrar la IA sense comprometre la qualitat ni el valor educatiu.",
    ctaLabel: 'RESERVAR UNA TRUCADA',
  },
  challenge: {
    titleSegments: [
      { text: 'El repte actual és incorporar tecnologia', color: 'var(--color-blue-400)' },
      { text: 'respectant i entenent', color: 'var(--color-orange-400)' },
      { text: 'el que ja funciona', color: 'var(--color-blue-400)' },
    ],
    bodySegments: [
      {
        text: 'En projectes editorials i educatius, la tecnologia impacta directament en la qualitat del contingut, els equips i la manera de treballar.',
        color: 'var(--color-text-secondary)',
      },
    ],
  },
  approach: {
    titleSegments: [
      { text: 'Per això', color: 'var(--color-blue-400)' },
      { text: "l'enfocament importa", color: 'var(--color-orange-400)' },
      { text: "tant com l'eina", color: 'var(--color-blue-400)' },
    ],
    bodySegments: [
      {
        text: "Combinar criteri editorial, mirada pedagògica i comprensió tecnològica permet integrar nous processos sense perdre claredat, intenció ni qualitat.",
        color: 'var(--color-text-secondary)',
      },
    ],
  },
  criterio: {
    tag: '[EL MEU ENFOCAMENT]',
    title: (
      <>
        El <span style={{ color: 'var(--color-blue-400)' }}>criteri</span> d&apos;algú que coneix el sector
      </>
    ),
    editorial: {
      label: 'EDITORIAL',
      title: 'Entenc com funciona una editorial per dins',
      body: "Des dels processos de producció fins a les decisions estratègiques, cosa que permet aplicar IA sense trencar allò que ja funciona.",
      benefits: ['Benefici 1', 'Benefici 1', 'Benefici 1'],
    },
    pedagogia: {
      label: 'PEDAGOGIA',
      title: "Entenc el contingut des de qui l'ensenya i qui el produeix",
      body: "Haver treballat com a docent em permet entendre com s'utilitza el contingut a la pràctica, un aspecte clau a l'hora d'aplicar IA sense perdre valor educatiu.",
      benefits: [],
    },
    tecnologia: {
      label: 'TECNOLOGIA',
      title: 'Faig servir la IA a la pràctica',
      body: "Treballo amb IA des de dins del procés editorial, cosa que permet entendre'n els límits, els riscos i el veritable potencial.",
      benefits: [],
    },
  },
  workPrinciples: {
    tag: '[PRINCIPIS DE TREBALL]',
    title: (
      <>
        Una manera de treballar que <span style={{ color: 'var(--color-orange-400)' }}>impacta</span> en el resultat final
      </>
    ),
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Metus tincidunt velit leo imperdiet malesuada congue nisi. Lectus egestas lacinia neque egestas nunc nibh pellentesque tortor vitae.',
    cardTitle: 'Projectes més clars, coherents i sostenibles',
    cardBody: 'La combinació entre criteri editorial, pedagogia i tecnologia permet desenvolupar continguts útils, ben estructurats i pensats per mantenir-se sòlids també a llarg termini.',
  },
  caseStudies: {
    tag: "[CASOS D'ÈXIT]",
    title: (
      <>
        Explora com he <span style={{ color: 'var(--color-orange-400)' }}>ajudat</span> altres editorials
      </>
    ),
    subtitle: 'Experiències d’editorials educatives que ja han treballat amb mi. Descobreix com hem col·laborat i els resultats que hem aconseguit.',
  },
  cta: {
    title: 'Explorem junts com incorporar la IA a la teva editorial',
    subtitle: "La IA no s'incorpora des de fora ni de manera experimental. Forma part del procés editorial, integrada en el dia a dia i amb criteris clars de qualitat.",
  },
}
