import type { ProjectProposal, ProposalOwner, ProposalStep } from '@/lib/clientes'
import { monoStyle } from '../../ClientUi'

const bodyM = { fontSize: '16px', lineHeight: '24px', fontWeight: 300 } as const
const smallNote = { display: 'block', fontSize: '13px', lineHeight: '18px', fontWeight: 300, color: 'var(--color-text-secondary)' } as const

/** Colors de cada part: pastilla de l'etiqueta, punt numerat i fons de la targeta. */
const OWNER_STYLES: Record<ProposalOwner, { pill: string; avatar: string; box: string }> = {
  mariona: { pill: 'bg-blue-50 text-blue-400', avatar: 'bg-blue-500', box: 'bg-blue-50' },
  client: { pill: 'bg-orange-100 text-blue-800', avatar: 'bg-orange', box: 'bg-orange-100/40' },
}

const GAIN_ICONS = {
  speed: <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" strokeLinejoin="round" />,
  cost: <path d="M4 7h11M4 12h8M4 17h5M17 9v10m0 0-3-3m3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />,
  quality: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

function SectionHeading({ num, title, id }: { num: string; title: string; id: string }) {
  return (
    <div className="flex flex-col gap-[8px] pt-[20px]" style={{ borderTop: '2px solid var(--color-blue-400)' }}>
      <p style={{ ...monoStyle, color: 'var(--color-orange)' }}>{num}</p>
      <h2
        id={id}
        style={{
          fontSize: 'var(--text-title-m)',
          lineHeight: 'var(--text-title-m--line-height)',
          fontWeight: 400,
          color: 'var(--color-blue-400)',
          textWrap: 'balance',
        }}
      >
        {title}
      </h2>
    </div>
  )
}

function OwnerPill({ owner, label, process }: { owner: ProposalOwner; label: string; process: ProjectProposal['process'] }) {
  const styles = OWNER_STYLES[owner]
  return (
    <span
      className={`inline-flex items-center gap-[8px] rounded-full py-[2px] pl-[4px] pr-[12px] ${styles.pill}`}
      style={{ ...monoStyle, fontSize: '12px' }}
    >
      <span
        aria-hidden="true"
        className={`flex items-center justify-center w-[22px] h-[22px] rounded-full text-white ${styles.avatar}`}
        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: 0 }}
      >
        {process.owners[owner].initial}
      </span>
      {label}
    </span>
  )
}

function StepCard({ step, num, isLast, process }: { step: ProposalStep; num: number; isLast: boolean; process: ProjectProposal['process'] }) {
  const styles = OWNER_STYLES[step.owner]
  return (
    <li className="relative flex flex-col gap-[14px] min-w-0 snap-start">
      {!isLast && (
        <span aria-hidden="true" className="absolute top-[19px] left-1/2 h-[2px] bg-blue-200" style={{ width: 'calc(100% + 12px)' }} />
      )}
      <span
        className={`relative z-[1] self-center flex items-center justify-center w-[40px] h-[40px] rounded-full text-white ${styles.avatar}`}
        style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '15px', boxShadow: '0 0 0 6px var(--color-white)' }}
      >
        {num}
      </span>
      <div className={`flex-1 flex flex-col gap-[10px] p-[18px] rounded-[16px] ${styles.box}`}>
        <span style={{ ...monoStyle, fontSize: '11px', lineHeight: '18px', color: 'var(--color-text-secondary)' }}>{step.where}</span>
        <h3
          style={{
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 400,
            color: step.owner === 'client' ? 'var(--color-blue-800)' : 'var(--color-blue-400)',
            textWrap: 'pretty',
          }}
        >
          {step.title}
        </h3>
        {step.note && (
          <p style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>{step.note}</p>
        )}
        {step.video && (
          <a
            href={step.video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-[8px] p-[8px] rounded-[12px] bg-grey text-blue-800 hover:bg-blue-100 transition-colors focus-visible:outline-[3px] focus-visible:outline-blue-800 focus-visible:outline-offset-[2px]"
          >
            <span
              aria-hidden="true"
              className="flex items-center justify-center w-full aspect-video rounded-[8px]"
              style={{ background: 'linear-gradient(135deg, var(--color-blue-400), var(--color-blue-800))' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-125">
                <path d="M7 5v14l12-7z" fill="#FFFFFF" />
              </svg>
            </span>
            <span style={{ fontSize: '13px', lineHeight: '17px' }}>{step.video.label}</span>
          </a>
        )}
        <span className="mt-auto self-start">
          <OwnerPill owner={step.owner} label={process.owners[step.owner].name} process={process} />
        </span>
      </div>
    </li>
  )
}

function ProcessSection({ process }: { process: ProjectProposal['process'] }) {
  return (
    <section aria-labelledby="proceso-titulo" className="px-[20px] md:px-[40px] pt-[64px] md:pt-[80px] pb-[64px] md:pb-[80px]">
      <div className="mx-auto w-full max-w-[1160px] flex flex-col gap-[28px]">
        <SectionHeading num="01" title={process.title} id="proceso-titulo" />
        <div className="flex flex-wrap gap-[12px]">
          <OwnerPill owner="mariona" label={process.owners.mariona.role} process={process} />
          <OwnerPill owner="client" label={process.owners.client.role} process={process} />
        </div>
        {/* A les pantalles estretes la fila es manté horitzontal i es desplaça. */}
        <ol
          tabIndex={0}
          aria-label={process.title}
          className="grid grid-flow-col auto-cols-[minmax(220px,1fr)] xl:grid-flow-row xl:grid-cols-6 gap-[12px] overflow-x-auto xl:overflow-visible snap-x snap-mandatory pb-[12px] xl:pb-0 focus-visible:outline-[3px] focus-visible:outline-blue-800 focus-visible:outline-offset-[3px]"
        >
          {process.steps.map((step, i) => (
            <StepCard key={step.title} step={step} num={i + 1} isLast={i === process.steps.length - 1} process={process} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function ComparisonTable({ comparison }: { comparison: ProjectProposal['gains']['comparison'] }) {
  const columns = 'md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_56px_minmax(0,1fr)_120px]'
  return (
    <div className="flex flex-col gap-[16px] pt-[32px]">
      <h3
        id="comparativa-titulo"
        style={{ fontSize: 'var(--text-body-xl)', lineHeight: 'var(--text-body-xl--line-height)', fontWeight: 400, color: 'var(--color-blue-400)' }}
      >
        {comparison.title}
      </h3>
      <div role="table" aria-labelledby="comparativa-titulo" className="rounded-[24px] overflow-hidden" style={{ border: '1px solid var(--color-blue-100)' }}>
        <div role="row" className={`hidden md:grid ${columns} items-center gap-[16px] px-[28px] py-[14px] bg-blue-50`}>
          <span role="columnheader" style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-secondary)' }}>{comparison.headers.concept}</span>
          <span role="columnheader" style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-secondary)' }}>{comparison.headers.classic}</span>
          <span />
          <span role="columnheader" style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-accent)' }}>{comparison.headers.proposed}</span>
          <span />
        </div>
        {comparison.rows.map((row) => (
          <div
            key={row.concept}
            role="row"
            className={`grid grid-cols-[1fr_auto] ${columns} items-center gap-x-[16px] gap-y-[6px] px-[20px] md:px-[28px] py-[18px] md:py-[20px]`}
            style={{ borderTop: '1px solid var(--color-blue-100)', fontVariantNumeric: 'tabular-nums' }}
          >
            <div role="cell" className="col-span-2 md:col-span-1">
              <span style={{ display: 'block', fontSize: '18px', lineHeight: '24px', color: 'var(--color-blue-400)' }}>{row.concept}</span>
              {row.conceptNote && <span style={smallNote}>{row.conceptNote}</span>}
            </div>
            <div role="cell" className="col-span-2 md:col-span-1" style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>
              <span className="block md:hidden" style={{ ...monoStyle, fontSize: '12px', lineHeight: '18px' }}>{comparison.headers.classic}</span>
              {row.classicStruck ? <s style={{ textDecorationColor: 'var(--color-blue-200)' }}>{row.classic}</s> : row.classic}
              {row.classicNote && <span style={smallNote}>{row.classicNote}</span>}
            </div>
            <span aria-hidden="true" className="hidden md:flex justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="var(--color-orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div role="cell" style={{ fontSize: '18px', lineHeight: '24px', color: 'var(--color-blue-800)' }}>
              <span className="block md:hidden" style={{ ...monoStyle, fontSize: '12px', lineHeight: '18px', color: 'var(--color-text-accent)' }}>{comparison.headers.proposed}</span>
              {row.proposedAmount && <b style={{ fontWeight: 500 }}>{row.proposedAmount}</b>}
              {row.proposed}
              {row.proposedNote && <span style={smallNote}>{row.proposedNote}</span>}
            </div>
            <span
              role="cell"
              className={`justify-self-end whitespace-nowrap rounded-full px-[10px] ${row.deltaTone === 'saving' ? 'bg-green text-blue-800' : 'bg-blue-50 text-blue-400'}`}
              style={{ ...monoStyle, fontSize: '12px' }}
            >
              {row.delta}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-[12px] px-[20px] md:px-[28px] py-[18px] bg-blue-500 text-white" style={bodyM}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
            <path d="m5 12 4.5 4.5L19 7" stroke="var(--color-orange-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {comparison.footnote}
        </div>
      </div>
    </div>
  )
}

function GainsSection({ gains }: { gains: ProjectProposal['gains'] }) {
  return (
    <section aria-labelledby="ganancias-titulo" className="px-[20px] md:px-[40px] pb-[64px] md:pb-[80px]">
      <div className="mx-auto w-full max-w-[1160px] flex flex-col gap-[28px]">
        <SectionHeading num="02" title={gains.title} id="ganancias-titulo" />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {gains.items.map((g) => (
            <li key={g.title} className="flex flex-col gap-[14px] p-[28px] rounded-[20px] bg-grey">
              <span aria-hidden="true" className="flex items-center justify-center w-[48px] h-[48px] rounded-[14px] bg-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="1.8">
                  {GAIN_ICONS[g.icon]}
                </svg>
              </span>
              <h3 style={{ fontSize: 'var(--text-body-xl)', lineHeight: 'var(--text-body-xl--line-height)', fontWeight: 400, color: 'var(--color-blue-400)' }}>
                {g.title}
              </h3>
              <p style={{ ...bodyM, color: 'var(--color-blue-800)' }}>{g.text}</p>
            </li>
          ))}
        </ul>
        <ComparisonTable comparison={gains.comparison} />
      </div>
    </section>
  )
}

function BudgetSection({ budget }: { budget: ProjectProposal['budget'] }) {
  return (
    <section id="pressupost" aria-labelledby="pressupost-titulo" className="px-[20px] md:px-[40px] pb-[64px] md:pb-[96px]">
      <div className="mx-auto w-full max-w-[1160px] flex flex-col gap-[28px]">
        <SectionHeading num="03" title={budget.title} id="pressupost-titulo" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[32px] md:gap-[40px] p-[28px] md:p-[40px] rounded-[24px] bg-blue-500 text-white">
          <div className="flex flex-col gap-[8px]">
            <p style={{ ...monoStyle, color: 'var(--color-blue-200)' }}>{budget.label}</p>
            <h3 style={{ fontSize: 'var(--text-title-s)', lineHeight: 'var(--text-title-s--line-height)', fontWeight: 400 }}>{budget.heading}</h3>
            <p className="pt-[8px]" style={{ ...bodyM, color: 'var(--color-blue-100)', maxWidth: '520px' }}>{budget.text}</p>
          </div>
          <a
            href={budget.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-[10px] min-h-[48px] px-[28px] rounded-full bg-orange text-white hover:opacity-90 transition-opacity focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[3px]"
            style={{ fontSize: '16px', fontWeight: 400 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            {budget.viewLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

/** Proposta de treball: procés pas a pas, beneficis i enllaç al pressupost. */
export default function ProposalSections({ proposal }: { proposal: ProjectProposal }) {
  return (
    <>
      <ProcessSection process={proposal.process} />
      <GainsSection gains={proposal.gains} />
      <BudgetSection budget={proposal.budget} />
    </>
  )
}
