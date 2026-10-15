import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  CLIENT_SPACES,
  deliveriesByUnit,
  formatDateLong,
  formatDateShort,
  formatDayMonth,
  formatMonth,
  getClientSpace,
  nextDelivery,
  type Block,
  type ClientProject,
  type Delivery,
  type Unit,
} from '@/lib/clientes'
import { ClientFooter, ClientHeader, DeliveryStatusPill, Em, StatusPill, monoStyle } from '../../ClientUi'
import DeliveryCalendarSection, { DeliverySummary } from './DeliveryCalendarSection'
import ProjectTabs from './ProjectTabs'

type Props = { params: Promise<{ cliente: string; proyecto: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return CLIENT_SPACES.flatMap((c) => c.projects.map((p) => ({ cliente: c.slug, proyecto: p.slug })))
}

function getProject(cliente: string, proyecto: string) {
  const space = getClientSpace(cliente)
  const project = space?.projects.find((p) => p.slug === proyecto)
  return space && project ? { space, project } : null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cliente, proyecto } = await params
  const found = getProject(cliente, proyecto)
  return { title: found ? `${found.project.title} · ${found.project.docType}` : 'Espacio de trabajo' }
}

const bodyM = { fontSize: '16px', lineHeight: '24px', fontWeight: 300 } as const

function UnitCard({ unit, delivery }: { unit: Unit; delivery?: Delivery }) {
  const num = unit.code.replace(/\D/g, '')
  return (
    <li
      className="flex flex-col gap-[16px] p-[20px] md:p-[24px] rounded-[16px] break-inside-avoid"
      style={
        unit.proposal
          ? { background: 'var(--color-white)', border: '1.5px dashed var(--color-blue-200)' }
          : { background: 'var(--color-grey)' }
      }
    >
      <div className="flex gap-[12px] items-start">
        <span
          className="shrink-0 rounded-[8px] px-[8px] bg-blue-500"
          style={{ ...monoStyle, color: 'var(--color-white)' }}
        >
          {unit.code}
        </span>
        <h3 style={{ fontSize: '22px', lineHeight: '28px', fontWeight: 400, color: 'var(--color-blue-400)' }}>
          <Em text={unit.title} />
        </h3>
      </div>
      {unit.items && unit.items.length > 0 && (
        <ol className="flex flex-col gap-[8px] pt-[14px]" style={{ borderTop: '1px solid var(--color-blue-100)' }}>
          {unit.items.map((item, i) => (
            <li key={i} className="grid grid-cols-[40px_minmax(0,1fr)] gap-[8px]">
              <span style={{ ...monoStyle, fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                {num}.{i + 1}
              </span>
              <span style={{ ...bodyM, color: 'var(--color-blue-800)' }}>
                <Em text={item} />
              </span>
            </li>
          ))}
        </ol>
      )}
      {delivery && (
        <div
          className="mt-auto flex flex-wrap items-center justify-between gap-[8px] pt-[12px]"
          style={{ borderTop: '1px solid var(--color-blue-100)' }}
        >
          <a
            href={`#${delivery.id}`}
            className="hover:text-[var(--color-text-accent)] transition-colors print:no-underline"
            style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-secondary)' }}
          >
            Entrega · {formatDateLong(delivery.date)}
          </a>
          <DeliveryStatusPill status={delivery.status} />
        </div>
      )}
    </li>
  )
}

function PendingCallout({ pending }: { pending: NonNullable<Block['pending']> }) {
  return (
    <div className="flex flex-col gap-[16px] p-[24px] rounded-[16px] bg-orange-100 break-inside-avoid">
      <p style={{ ...monoStyle, color: 'var(--color-blue-800)' }}>{pending.title}</p>
      <p style={{ ...bodyM, fontWeight: 400, color: 'var(--color-blue-800)' }}>{pending.text}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
        {pending.options.map((o) => (
          <div key={o.label} className="flex flex-col gap-[4px] px-[20px] py-[16px] rounded-[12px] bg-white">
            <p style={{ ...monoStyle, color: 'var(--color-text-accent)' }}>{o.label}</p>
            <p style={{ ...bodyM, color: 'var(--color-blue-800)' }}>{o.text}</p>
          </div>
        ))}
      </div>
      <p style={{ ...bodyM, color: 'var(--color-blue-800)' }}>{pending.note}</p>
    </div>
  )
}

/** Dates d'entrega de les unitats d'un bloc, sense repetir: [«23 nov», «7 dic»]. */
function blockDates(block: Block, byUnit: Map<string, Delivery>) {
  const dates = new Set(block.units.map((u) => byUnit.get(u.code)?.date).filter((d) => d !== undefined))
  return [...dates].map(formatDayMonth)
}

function ProgramSection({ project }: { project: ClientProject }) {
  const byUnit = deliveriesByUnit(project)
  return (
    <section className="px-[20px] md:px-[40px] pt-[64px] pb-[96px]">
      <div className="mx-auto w-full max-w-[1160px] grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-[56px] items-start">

        <nav aria-label="Bloques del programa" className="hidden lg:flex flex-col gap-[8px] sticky top-[24px] print:hidden">
          <p className="px-[12px] pb-[8px]" style={{ ...monoStyle, color: 'var(--color-text-secondary)' }}>
            Programa formativo
          </p>
          <ol className="flex flex-col gap-[2px]">
            {project.blocks.map((b) => {
              const dates = blockDates(b, byUnit)
              return (
                <li key={b.id}>
                  <a
                    href={`#${b.id}`}
                    className="flex gap-[12px] px-[12px] py-[10px] rounded-[12px] text-blue-400 hover:bg-grey transition-colors"
                  >
                    <span style={{ ...monoStyle, color: 'var(--color-orange)' }}>{b.num}</span>
                    <span className="flex flex-col gap-[2px]">
                      <span style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>{b.short}</span>
                      {dates.length > 0 && (
                        <span style={{ ...monoStyle, fontSize: '12px', lineHeight: '18px', color: 'var(--color-text-secondary)' }}>
                          Entrega {dates.join(' · ')}
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="flex flex-col gap-[72px] min-w-0">
          {project.blocks.map((b) => {
            const dates = blockDates(b, byUnit)
            return (
              <section key={b.id} id={b.id} aria-labelledby={`${b.id}-titulo`} className="flex flex-col gap-[24px] scroll-mt-[24px]">
                <div className="flex flex-col gap-[8px] pt-[20px]" style={{ borderTop: '2px solid var(--color-blue-400)' }}>
                  <div className="flex flex-wrap items-center justify-between gap-x-[12px]">
                    <p style={{ ...monoStyle, color: 'var(--color-orange)' }}>Bloque {b.num}</p>
                    {dates.length > 0 && (
                      <p style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                        Entrega {dates.join(' y ')}
                      </p>
                    )}
                  </div>
                  <h2
                    id={`${b.id}-titulo`}
                    style={{
                      fontSize: 'var(--text-title-m)',
                      lineHeight: 'var(--text-title-m--line-height)',
                      fontWeight: 400,
                      color: 'var(--color-blue-400)',
                      textWrap: 'balance',
                    }}
                  >
                    {b.title}
                  </h2>
                </div>

                {b.pending && <PendingCallout pending={b.pending} />}

                <ol className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  {b.units.map((u) => (
                    <UnitCard key={u.code} unit={u} delivery={byUnit.get(u.code)} />
                  ))}
                </ol>
              </section>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default async function ClientProjectPage({ params }: Props) {
  const { cliente, proyecto } = await params
  const found = getProject(cliente, proyecto)
  if (!found) notFound()
  const { space, project } = found

  const deliveries = project.deliveries?.filter((d) => d.units.length > 0) ?? []
  const hasCalendar = deliveries.length > 0
  const next = nextDelivery(project)
  const facts = [
    ...project.facts,
    ...(hasCalendar
      ? [{ label: 'Entregas', value: `${deliveries.length} · ${formatMonth(deliveries[0].date).slice(0, 3)} – ${formatMonth(deliveries[deliveries.length - 1].date).slice(0, 3)}` }]
      : []),
    { label: 'Versión', value: `${project.version} · ${formatDateShort(project.date)}` },
  ]

  return (
    <div className="bg-white">
      <ClientHeader clientName={space.name} />

      <main>
        {/* Capçalera del projecte: el gris queda sota les cantonades arrodonides de la barra */}
        <section className={`bg-grey -mt-[24px] px-[20px] md:px-[40px] pt-[56px] ${hasCalendar ? 'pb-[40px]' : 'pb-[64px]'} print:mt-0 print:pt-0`}>
          <div className="mx-auto w-full max-w-[1160px] flex flex-col gap-[24px]">
            <Link
              href={`/clientes/${space.slug}`}
              className="inline-flex items-center gap-[8px] min-h-[44px] self-start text-blue-400 hover:text-[var(--color-text-accent)] transition-colors print:hidden"
              style={monoStyle}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Proyectos activos
            </Link>
            <div className="flex flex-wrap items-center gap-[12px]">
              <span style={{ ...monoStyle, color: 'var(--color-text-secondary)' }}>
                [{project.kind} · {project.docType}]
              </span>
              <StatusPill>{project.status}</StatusPill>
            </div>
            <h1
              style={{
                fontSize: 'var(--text-title-l)',
                lineHeight: 'var(--text-title-l--line-height)',
                fontWeight: 400,
                color: 'var(--color-blue-400)',
                maxWidth: '820px',
                textWrap: 'balance',
              }}
            >
              {project.title}
            </h1>
            <dl className="flex flex-wrap gap-x-[32px] gap-y-[12px]">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-[2px]">
                  <dt style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-secondary)' }}>{f.label}</dt>
                  <dd style={{ fontSize: 'var(--text-body-xl)', lineHeight: 'var(--text-body-xl--line-height)', fontWeight: 400 }}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p
              style={{
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                maxWidth: '760px',
              }}
            >
              {project.intro}
            </p>
            {hasCalendar && <DeliverySummary project={project} />}
          </div>
        </section>

        {hasCalendar ? (
          <ProjectTabs
            tabs={[
              { id: 'programa', label: 'Programa formativo', anchors: ['bloque-'], content: <ProgramSection project={project} /> },
              {
                id: 'calendario',
                label: 'Calendario de entregas',
                badge: next ? formatDayMonth(next.date) : undefined,
                anchors: ['entrega-'],
                content: (
                  <DeliveryCalendarSection project={project} icsHref={`/clientes/${space.slug}/${project.slug}/calendario.ics`} />
                ),
              },
            ]}
          />
        ) : (
          <ProgramSection project={project} />
        )}
      </main>

      <ClientFooter lead={hasCalendar ? '¿Dudas sobre el programa o el calendario?' : '¿Comentarios sobre la propuesta?'} />
    </div>
  )
}
