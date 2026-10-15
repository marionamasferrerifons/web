'use client'

import { useSyncExternalStore } from 'react'
import type { DeliveryStatus } from '@/lib/clientes'
import { monoStyle } from '../../ClientUi'

// La pàgina és estàtica: tot el que depèn del dia d'avui es calcula al navegador.
const noop = () => () => {}
const todayIso = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}
const useToday = () => useSyncExternalStore(noop, todayIso, () => null)

const dayNumber = (iso: string) => Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1, +iso.slice(8, 10)) / 864e5

/** «Faltan 18 días». No mostra res fins que el navegador sap quin dia és. */
export function DaysLeft({ date }: { date: string }) {
  const today = useToday()
  if (!today) return null
  const n = dayNumber(date) - dayNumber(today)
  const text = n === 0 ? 'Hoy' : n === 1 ? 'Mañana' : n > 0 ? `Faltan ${n} días` : n === -1 ? 'Ayer' : `Hace ${-n} días`
  return <>{text}</>
}

export type TimelineItem = { id: string; date: string; short: string; dayMonth: string; status: DeliveryStatus; label: string }

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

/** Línia de temps a escala, del primer dia del mes de la primera entrega fins a mig mes després de l'última. */
export function DeliveryTimeline({ items }: { items: TimelineItem[] }) {
  const today = useToday()
  const first = items[0].date
  const last = items[items.length - 1].date
  const start = `${first.slice(0, 7)}-01`
  const lastY = +last.slice(0, 4)
  const lastM = +last.slice(5, 7)
  const end = `${lastM === 12 ? lastY + 1 : lastY}-${String((lastM % 12) + 1).padStart(2, '0')}-15`
  const span = dayNumber(end) - dayNumber(start)
  const pct = (iso: string) => `${(((dayNumber(iso) - dayNumber(start)) / span) * 100).toFixed(2)}%`

  const months: string[] = []
  let y = +start.slice(0, 4)
  let m = +start.slice(5, 7)
  for (let iso = start; iso <= end; iso = `${y}-${String(m).padStart(2, '0')}-01`) {
    months.push(iso)
    if (++m > 12) {
      m = 1
      y++
    }
  }
  const lastDone = [...items].reverse().find((i) => i.status === 'entregada')
  const showToday = today && today >= start && today <= end
  const axisTop = 86

  return (
    <div className="overflow-x-auto pb-[4px]">
      <div className="relative min-w-[720px] h-[150px] rounded-[16px] bg-blue-50">
        {months.map((m, i) => (
          <div
            key={m}
            className="absolute top-0 bottom-0 pl-[10px] pt-[10px]"
            style={{ left: pct(m), borderLeft: '1px solid var(--color-blue-100)', ...monoStyle, fontSize: '12px', lineHeight: '16px', color: 'var(--color-text-secondary)' }}
          >
            {MONTHS[+m.slice(5, 7) - 1]}
            {i > 0 && m.slice(5, 7) === '01' ? ` ${m.slice(0, 4)}` : ''}
          </div>
        ))}
        <div aria-hidden="true" className="absolute left-0 right-0 h-[2px] bg-blue-200" style={{ top: axisTop }} />
        {lastDone && <div aria-hidden="true" className="absolute left-0 h-[2px] bg-blue-500" style={{ top: axisTop, width: pct(lastDone.date) }} />}
        {showToday && (
          <div aria-hidden="true" className="absolute top-[38px] bottom-[14px]" style={{ left: pct(today), borderLeft: '2px dashed var(--color-text-accent)' }}>
            <span className="absolute top-[-4px] left-[6px] whitespace-nowrap" style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', color: 'var(--color-text-accent)' }}>
              Hoy
            </span>
          </div>
        )}
        {items.map((it) => {
          const done = it.status === 'entregada'
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              aria-label={`${it.label}, ${it.dayMonth}`}
              className="group absolute flex flex-col items-center gap-[6px] -translate-x-1/2 rounded-[8px] focus-visible:outline-[3px] focus-visible:outline-blue-400 focus-visible:outline-offset-[3px]"
              style={{ left: pct(it.date), top: axisTop - 10 }}
            >
              <span
                aria-hidden="true"
                className="w-[22px] h-[22px] rounded-full transition-transform group-hover:scale-115"
                style={{ background: done ? 'var(--color-blue-500)' : 'var(--color-white)', border: `3px solid ${done ? 'var(--color-blue-500)' : 'var(--color-blue-400)'}` }}
              />
              <span className="whitespace-nowrap text-center" style={{ ...monoStyle, fontSize: '12px', lineHeight: '14px', color: 'var(--color-blue-400)' }}>
                <span className="block" style={{ color: 'var(--color-blue-800)' }}>{it.short}</span>
                {it.dayMonth}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
