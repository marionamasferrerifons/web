import {
  DELIVERY_STATUS_LABEL,
  deliveriesByUnit,
  formatDateShort,
  formatDayMonth,
  formatMonth,
  formatWeekday,
  nextDelivery,
  type ClientProject,
} from '@/lib/clientes'
import { DELIVERY_STATUS_COLORS, DeliveryStatusPill, Em, monoStyle } from '../../ClientUi'
import { DaysLeft, DeliveryTimeline } from './DeliveryClient'

const bodyM = { fontSize: '16px', lineHeight: '24px', fontWeight: 300 } as const

/** Targeta «Próxima entrega» i barra de progrés de les unitats, a la capçalera del projecte. */
export function DeliverySummary({ project }: { project: ClientProject }) {
  const next = nextDelivery(project)
  const byUnit = deliveriesByUnit(project)
  const units = project.blocks.flatMap((b) => b.units.map((u) => u.code))
  const delivered = units.filter((c) => byUnit.get(c)?.status === 'entregada').length
  const titles = new Map(project.blocks.flatMap((b) => b.units.map((u) => [u.code, u.title] as const)))
  const cardClass = 'flex flex-col gap-[12px] min-w-0 px-[24px] py-[20px] rounded-[16px] bg-white'
  const labelStyle = { ...monoStyle, fontSize: '12px', color: 'var(--color-text-secondary)' }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[16px] print:hidden">
      <div className={cardClass}>
        <p style={labelStyle}>Próxima entrega</p>
        {next ? (
          <a href={`#${next.id}`} className="group flex flex-wrap items-center gap-[20px]">
            <span className="shrink-0 w-[76px] py-[8px] rounded-[12px] bg-blue-500 text-center text-white">
              <span className="block" style={{ fontSize: '32px', lineHeight: '36px', fontWeight: 400 }}>
                {+next.date.slice(8, 10)}
              </span>
              <span className="block" style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-blue-100)' }}>
                {formatDayMonth(next.date).split(' ')[1]}
              </span>
            </span>
            <span className="flex flex-col gap-[4px] min-w-0 flex-1">
              <span className="group-hover:underline" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 400, color: 'var(--color-blue-400)' }}>
                {next.units.join(' y ')} · {next.title}
              </span>
              <span style={bodyM}>
                <span style={{ color: 'var(--color-text-accent)' }}>
                  <DaysLeft date={next.date} />
                </span>{' '}
                · {formatWeekday(next.date)}, {formatDateShort(next.date)}
              </span>
            </span>
          </a>
        ) : (
          <p style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 400, color: 'var(--color-blue-400)' }}>
            Todo el material está entregado.
          </p>
        )}
      </div>

      <div className={cardClass}>
        <p style={labelStyle}>Progreso del material</p>
        <p style={bodyM}>
          <span style={{ fontSize: 'var(--text-body-xl)', lineHeight: 'var(--text-body-xl--line-height)', fontWeight: 400 }}>
            {delivered} de {units.length}
          </span>{' '}
          unidades entregadas
        </p>
        <ol className="flex gap-[3px]" aria-label="Estado de cada unidad">
          {units.map((code) => {
            const status = byUnit.get(code)?.status ?? 'programada'
            return (
              <li
                key={code}
                title={`${code} · ${titles.get(code)?.replaceAll('*', '')} · ${DELIVERY_STATUS_LABEL[status]}`}
                className="flex-1 h-[10px] rounded-[3px]"
                style={{ background: DELIVERY_STATUS_COLORS[status].dot }}
              >
                <span className="sr-only">
                  {code}: {DELIVERY_STATUS_LABEL[status]}
                </span>
              </li>
            )
          })}
        </ol>
        <p className="flex flex-wrap gap-x-[16px] gap-y-[4px]" style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--color-text-secondary)' }}>
          {(['entregada', 'en-preparacion', 'programada'] as const).map((s) => (
            <span key={s} className="inline-flex items-center gap-[6px]">
              <span aria-hidden="true" className="w-[10px] h-[10px] rounded-[3px]" style={{ background: DELIVERY_STATUS_COLORS[s].dot }} />
              {DELIVERY_STATUS_LABEL[s]}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

/** Pestanya «Calendario de entregas»: línia de temps i entregues agrupades per data. */
export default function DeliveryCalendarSection({ project, icsHref }: { project: ClientProject; icsHref: string }) {
  const deliveries = project.deliveries ?? []
  const withUnits = deliveries.filter((d) => d.units.length > 0)
  const next = nextDelivery(project)
  const units = new Map(project.blocks.flatMap((b) => b.units.map((u) => [u.code, { title: u.title, block: b.id }] as const)))
  let n = 0
  const timeline = deliveries.map((d) => ({
    id: d.id,
    date: d.date,
    short: d.units.length ? `E${++n}` : 'Inicio',
    dayMonth: formatDayMonth(d.date),
    status: d.status,
    label: d.label,
  }))

  return (
    <section aria-labelledby="calendario-titulo" className="px-[20px] md:px-[40px] pt-[64px] pb-[96px]">
      <div className="mx-auto w-full max-w-[1160px] flex flex-col gap-[32px]">
        <div className="flex flex-wrap items-end justify-between gap-[16px]">
          <div className="flex flex-col gap-[8px] min-w-0">
            <p style={{ ...monoStyle, color: 'var(--color-orange)' }}>Calendario de entregas</p>
            <h2
              id="calendario-titulo"
              style={{
                fontSize: 'var(--text-title-m)',
                lineHeight: 'var(--text-title-m--line-height)',
                fontWeight: 400,
                color: 'var(--color-blue-400)',
                textWrap: 'balance',
              }}
            >
              {withUnits.length} entregas, de {formatMonth(withUnits[0].date)} a {formatMonth(withUnits[withUnits.length - 1].date)}
            </h2>
            <p style={{ ...bodyM, color: 'var(--color-text-secondary)', maxWidth: '620px' }}>
              Cada entrega incluye el material completo de las unidades indicadas. Pulsa una fecha de la línea de tiempo para ir a su detalle.
            </p>
          </div>
          <a
            href={icsHref}
            download
            className="inline-flex items-center gap-[8px] min-h-[44px] px-[18px] rounded-full bg-white text-blue-400 hover:bg-blue-50 transition-colors focus-visible:outline-[3px] focus-visible:outline-blue-400 focus-visible:outline-offset-[2px] print:hidden"
            style={{ ...monoStyle, border: '1.5px solid var(--color-blue-400)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3.5 10h17M8 3v4M16 3v4M12 13v5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Añadir a mi calendario
          </a>
        </div>

        <DeliveryTimeline items={timeline} />

        <ol className="flex flex-col pt-[8px]">
          {deliveries.map((d, i) => {
            const isNext = d === next
            const done = d.status === 'entregada'
            return (
              <li
                key={d.id}
                id={d.id}
                className={`grid grid-cols-[88px_minmax(0,1fr)] md:grid-cols-[120px_minmax(0,1fr)_170px] gap-x-[20px] md:gap-x-[32px] gap-y-[16px] py-[28px] scroll-mt-[24px] break-inside-avoid ${
                  isNext ? 'bg-blue-50 rounded-b-[16px] -mx-[16px] px-[16px]' : ''
                }`}
                style={{ borderTop: i === 0 ? '2px solid var(--color-blue-400)' : '1px solid var(--color-blue-100)' }}
              >
                <div>
                  <p style={{ fontSize: '48px', lineHeight: '50px', fontWeight: 400, color: done ? 'var(--color-blue-500)' : 'var(--color-blue-400)' }}>
                    {+d.date.slice(8, 10)}
                  </p>
                  <p style={{ ...monoStyle, color: 'var(--color-text-secondary)' }}>
                    {formatDayMonth(d.date).split(' ')[1]} {d.date.slice(0, 4)}
                  </p>
                  <p style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--color-text-secondary)' }}>{formatWeekday(d.date)}</p>
                </div>

                <div className="flex flex-col gap-[12px] min-w-0">
                  <p style={{ ...monoStyle, color: 'var(--color-orange)' }}>{d.label}</p>
                  <h3 style={{ fontSize: 'var(--text-body-xl)', lineHeight: '30px', fontWeight: 400, color: 'var(--color-blue-400)', textWrap: 'balance' }}>
                    {d.title}
                  </h3>
                  {d.units.length > 0 ? (
                    <ul className="flex flex-col gap-[6px]">
                      {d.units.map((code) => {
                        const u = units.get(code)
                        return (
                          <li key={code} className="grid grid-cols-[auto_minmax(0,1fr)] gap-[12px] items-baseline">
                            <span className="rounded-[8px] px-[8px] bg-blue-500" style={{ ...monoStyle, fontSize: '13px', lineHeight: '22px', color: 'var(--color-white)' }}>
                              {code}
                            </span>
                            {u ? (
                              <a href={`#${u.block}`} className="hover:underline hover:text-blue-400" style={{ ...bodyM, fontWeight: 400 }}>
                                <Em text={u.title} />
                              </a>
                            ) : (
                              <span style={bodyM}>{code}</span>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  ) : (
                    d.note && <p style={{ ...bodyM, color: 'var(--color-text-secondary)' }}>{d.note}</p>
                  )}
                </div>

                <div className="col-start-2 md:col-start-auto flex flex-row flex-wrap md:flex-col items-center md:items-start gap-[8px]">
                  <DeliveryStatusPill status={d.status} />
                  <span style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--color-text-secondary)' }}>
                    {done ? 'Completado' : <DaysLeft date={d.date} />}
                  </span>
                  {isNext && <span style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-accent)' }}>Siguiente</span>}
                </div>
              </li>
            )
          })}
        </ol>

        <p className="flex flex-wrap gap-x-[24px] gap-y-[8px]" style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--color-text-secondary)' }}>
          <span>Las fechas pueden ajustarse; si cambia alguna, lo verás aquí.</span>
          {project.deliveriesUpdated && <span>Última actualización: {formatDateShort(project.deliveriesUpdated)}</span>}
        </p>
      </div>
    </section>
  )
}
