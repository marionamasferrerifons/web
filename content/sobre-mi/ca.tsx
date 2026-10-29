import type { SobreMiContent } from './es'

const accent = (text: string) => <span style={{ color: 'var(--color-orange-400)' }}>{text}</span>
const bold = (text: string) => <strong style={{ fontWeight: 600, color: 'var(--color-blue-400)' }}>{text}</strong>

// Traducció del pilot (2026-09-16), repassada el 2026-10-19 — pendent de revisió de la Mariona.
export const sobreMiContentCa: SobreMiContent = {
  metadata: {
    title: 'Sobre mi',
    description:
      "Més de deu anys entre edició, docència i innovació tecnològica, ajudant editorials educatives a convertir la IA en un avantatge competitiu.",
  },
  hero: {
    photoAlt: 'Mariona Masferrer',
    tag: '[SOBRE MI]',
    title: <>Soc la Mariona i ajudo {accent('editorials educatives')} a traçar el seu camí en l&apos;era de la IA.</>,
    body: "Fa més de deu anys que treballo en la cruïlla entre edició, educació i innovació tecnològica. He estat editora, docent i ara acompanyo editorials que volen convertir la IA en un avantatge competitiu sense renunciar al rigor editorial i pedagògic.",
  },
  values: {
    tag: '[ELS MEUS VALORS]',
    title: 'Treballo sempre guiada per la integritat i el rigor.',
    items: [
      { title: 'Humanisme', description: 'Poso les persones al centre, perquè la tecnologia només té sentit si genera un impacte positiu real.' },
      { title: 'Excel·lència i estratègia', description: "Executo buscant l'excel·lència en cada detall, sense perdre la visió global i la mirada llarga. Una combinació que t'acosta a l'èxit." },
      { title: 'Innovació assenyada', description: "Integro noves tecnologies i metodologies només quan aporten un valor real a l'aprenentatge i al procés editorial. No innovo per innovar." },
      { title: 'Integritat', description: 'Actuo amb ètica i transparència per construir relacions de confiança, ja que les transformacions només són possibles amb bons companys de viatge.' },
      { title: 'Valentia compromesa', description: "M'atreveixo a qüestionar allò establert i a proposar camins diferents, però sempre després d'una anàlisi sòlida i amb responsabilitat." },
      { title: 'Proximitat', description: 'Escolto i cocreo amb les persones amb qui treballo, perquè les millors solucions neixen de la suma de perspectives, del diàleg i de la confiança.' },
    ],
  },
  history: {
    tag: '[LA MEVA HISTÒRIA]',
    title: 'De la literatura a la IA: un camí de ponts i confluències.',
    entries: [
      {
        title: 'Entre llibres i estratègia',
        description: "Vaig estudiar Filologia Catalana per amor a la literatura, però de seguida vaig descobrir que era més estratega que poeta. Mentre els meus companys somiaven escriure, jo buscava treballar en una editorial, el lloc on les humanitats i la gestió conflueixen.",
        milestones: [
          { date: '2004-2009', description: <>Vaig estudiar {bold('Filologia Catalana')} a la UAB</> },
          { date: '2009-2012', description: <>Vaig treballar com a {bold('gestora cultural')} a l&apos;IRL</> },
          { date: '2012-2013', description: <>Vaig fer un màster en {bold('Filosofia Contemporània')} a la UIB</> },
        ],
      },
      {
        title: 'El llibre digital',
        description: "Vaig viure de prop els debats sobre la fi del paper. Em vaig formar en edició digital i vaig dissenyar nous fluxos de producció. Vaig aprendre que, davant d'una disrupció, el més important és tenir una brúixola pròpia.",
        milestones: [
          { date: '2012-2014', description: <>La meva primera experiència com a {bold('coordinadora editorial')}</> },
          { date: '2014', description: <>Vaig fer un màster en {bold('edició digital')} a la UAH</> },
        ],
      },
      {
        title: "L'educació",
        description: "L'edició educativa sempre m'havia semblat un món llunyà. Però em vaig anar retrobant amb un interès que sempre hi havia estat: la meva mare mestra, els anys d'activisme estudiantil, les tardes fent classes de reforç...",
        milestones: [
          { date: '2015-2019', description: <>Feina intensa com a {bold('editora digital')} a Editorial Altamar</> },
        ],
      },
      {
        title: "Dins de l'aula",
        description: "Després d'uns anys treballant amb contingut educatiu, vaig voler saber què passa de debò en una aula. Em va servir per entendre la distància que de vegades hi ha entre el que produeix una editorial i el que necessiten el professorat i l'alumnat.",
        milestones: [
          { date: '2019-2021', description: <>{bold('Professora')} de llengua i literatura</> },
        ],
      },
      {
        title: 'Buenos Aires',
        description: "Com més temps passava a l'aula, més clara tenia una cosa: la meva formació pedagògica no estava a l'altura. Me'n vaig anar a Buenos Aires, em vaig especialitzar en pedagogia i vaig començar a treballar com a editora freelance especialitzada en contingut educatiu.",
        milestones: [
          { date: '2021', description: <>Vaig començar a treballar com a {bold('editora freelance')} especialitzada en educació</> },
          { date: '2022-2023', description: <>Em vaig formar en {bold('Pedagogies per a la Igualtat')} a la UBA</> },
        ],
      },
      {
        title: 'La intel·ligència artificial',
        description: "Quan la IA es va obrir al gran públic, em vaig formar, la vaig incorporar als meus fluxos i vaig desenvolupar un enfocament propi. Entendre els processos editorials des de dins em va permetre identificar com la IA podia enfortir les editorials i quins riscos calia mitigar.",
        milestones: [
          { date: '2023', description: <>Vaig estudiar el màster en {bold('IA i Innovació')} de Founderz</> },
        ],
      },
      {
        title: 'Avui',
        description: "Avui soc consultora d'implementació estratègica d'IA per a editorials educatives. Ajudo la direcció a decidir què fer amb la IA i a gestionar el canvi cultural i tecnològic al seu equip.",
        milestones: [
          { date: '2025', description: <>D&apos;editora a consultora d&apos;{bold('innovació')} editorial amb IA</> },
        ],
      },
    ],
  },
  quote: {
    tag: '[UNA CONVICCIÓ]',
    text: (
      <>
        “Treballo perquè les editorials incorporin la IA de manera crítica, i preservar així les millors pràctiques de l&apos;ofici d&apos;editar.
        <br /><br />
        Crec que han de continuar sent peces clau d&apos;una educació de qualitat. Per això les animo a definir, amb valentia i confiança, el paper que volen tenir en el futur de l&apos;educació.”
      </>
    ),
  },
  linkedin: {
    photoAlt: 'Mariona Masferrer',
    description: 'Ajudo editorials educatives a fer evolucionar la seva estratègia de negoci i els seus sistemes de producció en un sector transformat per la IA.',
    ctaLabel: 'VEURE EL PERFIL DE LINKEDIN',
  },
  cta: {
    title: 'Vols explorar el futur de la teva editorial?',
    subtitle: 'Si creus que et puc aportar valor o vols contrastar idees sobre el sector, estaré encantada de parlar amb tu.',
  },
}
