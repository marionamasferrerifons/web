import type { EnfoqueContent } from './es'

const accent = (text: string, color = 'var(--color-orange-400)') => <span style={{ color }}>{text}</span>

// Traducció del pilot (2026-09-16), repassada el 2026-10-19 — pendent de revisió
// de la Mariona. Els textos provisionals (lorem ipsum) es mantenen com en castellà.
export const enfoqueContentCa: EnfoqueContent = {
  metadata: {
    title: 'Enfocament i metodologia amb IA',
    description:
      "Treballo en la cruïlla entre tecnologia, contingut i ús real per integrar la IA a la teva editorial sense comprometre la qualitat ni el valor pedagògic del resultat.",
  },
  hero: {
    tag: '[ENFOCAMENT]',
    title: <>Hola Lorem ipsum dolor sit amet {accent('consectetur')}. Eu imperdiet cursus cras.</>,
    body: "Treballo en el punt on la tecnologia, el contingut i l'ús real es creuen, per integrar la IA sense comprometre la qualitat ni el valor educatiu.",
    ctaLabel: 'Reservar una trucada',
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
        text: 'Combinar criteri editorial, mirada pedagògica i comprensió tecnològica permet integrar nous processos sense perdre claredat, intenció ni qualitat.',
        color: 'var(--color-text-secondary)',
      },
    ],
  },
  criterio: {
    tag: '[EL MEU ENFOCAMENT]',
    title: <>El {accent('criteri', 'var(--color-blue-400)')} d&apos;algú que coneix el sector</>,
    layers: [
      {
        label: 'EDITORIAL',
        title: 'Entenc com funciona una editorial per dins',
        body: 'Des dels processos de producció fins a les decisions estratègiques, cosa que permet aplicar IA sense trencar allò que ja funciona.',
        benefits: ['Benefici 1', 'Benefici 1', 'Benefici 1'],
      },
      {
        label: 'PEDAGOGIA',
        title: "Entenc el contingut des de qui l'ensenya i qui el produeix",
        body: "Haver treballat com a docent em permet entendre com s'utilitza el contingut a la pràctica, un aspecte clau a l'hora d'aplicar IA sense perdre valor educatiu.",
        benefits: [],
      },
      {
        label: 'TECNOLOGIA',
        title: 'Faig servir la IA a la pràctica',
        body: "Treballo amb IA des de dins del procés editorial, cosa que permet entendre'n els límits, els riscos i el veritable potencial.",
        benefits: [],
      },
    ],
  },
  workPrinciples: {
    tag: '[PRINCIPIS DE TREBALL]',
    title: <>Una manera de treballar que {accent('impacta')} en el resultat final</>,
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Metus tincidunt velit leo imperdiet malesuada congue nisi. Lectus egestas lacinia neque egestas nunc nibh pellentesque tortor vitae.',
    cardTitle: 'Projectes més clars, coherents i sostenibles',
    cardBody: 'La combinació entre criteri editorial, pedagogia i tecnologia permet desenvolupar continguts útils, ben estructurats i pensats per mantenir-se sòlids també a llarg termini.',
  },
  cta: {
    title: 'Explorem junts com incorporar la IA a la teva editorial',
    subtitle: "La IA no s'incorpora des de fora ni de manera experimental. Forma part del procés editorial, integrada en el dia a dia i amb criteris clars de qualitat.",
  },
}
