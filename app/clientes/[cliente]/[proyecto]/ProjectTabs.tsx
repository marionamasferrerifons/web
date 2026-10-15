'use client'

import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent, type ReactNode } from 'react'
import { monoStyle } from '../../ClientUi'

export type ProjectTab = {
  id: string
  label: string
  badge?: string
  /** Prefixos d'àncora que obren aquesta pestanya (`bloque-`, `entrega-`). */
  anchors: string[]
  content: ReactNode
}

// La pestanya activa es deriva del hash: `#calendario` es pot compartir, i un
// enllaç a `#bloque-2` des del calendari obre el programa.
const TAB_EVENT = 'project-tab-change'

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  window.addEventListener(TAB_EVENT, onChange)
  return () => {
    window.removeEventListener('hashchange', onChange)
    window.removeEventListener(TAB_EVENT, onChange)
  }
}

const getHash = () => window.location.hash.slice(1)
const getServerHash = () => ''

export default function ProjectTabs({ tabs }: { tabs: ProjectTab[] }) {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash)
  const active =
    tabs.find((t) => t.id === hash || t.anchors.some((a) => hash.startsWith(a)))?.id ?? tabs[0].id
  const buttons = useRef<(HTMLButtonElement | null)[]>([])

  // Un enllaç a una secció d'una pestanya amagada: quan la pestanya ja és
  // visible, porta-hi la vista (el navegador no ho ha pogut fer).
  useEffect(() => {
    if (!hash || tabs.some((t) => t.id === hash)) return
    document.getElementById(hash)?.scrollIntoView({ block: 'start' })
  }, [hash, tabs])

  function select(id: string) {
    history.replaceState(null, '', `#${id}`)
    window.dispatchEvent(new Event(TAB_EVENT))
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length
    buttons.current[next]?.focus()
    select(tabs[next].id)
  }

  return (
    <>
      <div className="bg-grey px-[20px] md:px-[40px] print:hidden">
        <div role="tablist" aria-label="Vistas del proyecto" className="mx-auto w-full max-w-[1160px] flex gap-[4px] overflow-x-auto">
          {tabs.map((t, i) => {
            const selected = t.id === active
            return (
              <button
                key={t.id}
                ref={(el) => {
                  buttons.current[i] = el
                }}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={t.id}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`inline-flex items-center gap-[10px] min-h-[52px] px-[20px] rounded-t-[16px] whitespace-nowrap transition-colors focus-visible:outline-[3px] focus-visible:outline-blue-400 focus-visible:-outline-offset-[3px] ${
                  selected ? 'bg-white text-blue-800' : 'text-blue-400 hover:bg-white/55'
                }`}
                style={monoStyle}
              >
                {t.label}
                {t.badge && (
                  <span
                    className="rounded-full px-[8px] bg-orange-100"
                    style={{ ...monoStyle, fontSize: '12px', lineHeight: '20px', color: 'var(--color-blue-800)' }}
                  >
                    {t.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {tabs.map((t) => (
        <div
          key={t.id}
          id={t.id}
          role="tabpanel"
          aria-labelledby={`tab-${t.id}`}
          className={t.id === active ? '' : 'hidden print:block'}
        >
          {t.content}
        </div>
      ))}
    </>
  )
}
