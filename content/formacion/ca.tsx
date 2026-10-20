import type { FormacionContent } from './es'

const span = (text: string, color: string) => <span style={{ color }}>{text}</span>

// Esborrany traduït amb IA (2026-10-19) — pendent de revisió de la Mariona.
export const formacionContentCa: FormacionContent = {
  metadata: {
    title: 'Formació en IA',
    description:
      "Formació per aplicar la IA a la feina editorial: curs d'iniciació amb Cálamo y Cran, acompanyament individual i formació a mida per a equips editorials.",
  },
  hero: {
    tag: '[FORMACIÓ EN IA]',
    title: <>Aprèn a {span('aplicar la IA', 'var(--color-blue-500)')} a la teva feina editorial.</>,
    body: "Tant si estàs començant com si ja t'has format i et costa portar a la pràctica el que has après, t'ajudo a treballar amb IA amb criteri professional i autonomia.",
  },
  startingPoints: {
    title: <>No et quedis fora del {span("futur de l'edició", 'var(--color-orange)')}</>,
    options: [
      {
        title: 'Vull començar a treballar amb IA',
        body: "Vols incorporar la IA a la teva feina editorial, però no saps per on començar ni quines eines tenen realment sentit per a tu. T'ajudo a crear una base sòlida i pràctica per fer els primers passos amb criteri i sense perdre més temps.",
        link: 'Veure el curs',
      },
      {
        title: "Em costa aplicar el que he après",
        body: "Has fet cursos i has provat eines, però quan intentes portar-ho als teus projectes reals t'encalles. Treballem junts per resoldre les teves dificultats concretes i perquè sàpigues fer servir la IA en els teus projectes reals del dia a dia.",
        link: "Veure l'acompanyament individual",
      },
      {
        title: 'Busco formació per al meu equip',
        body: "La IA està transformant la manera de treballar a les editorials. Acompanyo el teu equip en aquest canvi: en resolc els dubtes, genero confiança i li dono les eines i el suport que necessita per adoptar-la amb criteri i autonomia.",
        link: 'Veure la formació per a empreses',
      },
    ],
  },
  services: {
    authorsJoiner: 'i',
    items: [
      {
        tag: '[Curs]',
        status: 'Properament',
        title: "IA per a la feina d'edició",
        creditLabel: 'Un curs de',
        body: "Un curs pràctic per incorporar la IA a la feina editorial de manera estructurada. Comencem per les bases i construïm junts un sistema de treball complet. Ideal si vols començar amb una base sòlida i transferible a qualsevol projecte.",
        cta: "Pregunta'm pel curs",
      },
      {
        tag: '[Acompanyament individual]',
        status: undefined,
        title: 'Converteix la IA en la teva gran aliada',
        creditLabel: undefined,
        body: "Entens el que pot fer la IA, però quan intentes aplicar-la als teus projectes no sempre saps per on començar o què ajustar quan el resultat no és l'esperat. A les sessions individuals treballem sobre les teves tasques reals perquè la IA es converteixi en la teva gran aliada.",
        cta: 'Parlar del meu acompanyament',
      },
      {
        tag: '[Formació per a empreses]',
        status: undefined,
        title: 'Fes que el teu equip formi part del canvi',
        creditLabel: undefined,
        body: "La IA està transformant els fluxos de treball a les editorials. Acompanyo el teu equip en aquest canvi cultural i operatiu: resolem dubtes reals, generem confiança i li donem el mètode que necessita per adoptar la IA amb criteri i autonomia. Formació pràctica, adaptada al vostre context i orientada a resultats.",
        cta: 'Parlar de la formació del meu equip',
      },
    ],
  },
  cta: {
    title: "Explica'm què et costa portar a la pràctica.",
    subtitle: "Reserva una sessió gratuïta d'una hora per explicar-me en quin punt ets i què t'agradaria aconseguir amb IA.",
  },
}
