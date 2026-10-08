'use client'

import { useEffect, useRef, useState } from 'react'

const TOKENS = [
  '--color-blue-800',
  '--color-blue-500',
  '--color-blue-400',
  '--color-blue-300',
  '--color-blue-200',
  '--color-blue-100',
  '--color-blue-50',
  '--color-text-secondary',
  '--color-text-secondary-strong',
  '--color-text-accent',
  '--color-orange',
  '--color-orange-200',
  '--color-orange-400',
  '--color-grey',
  '--color-green',
  '--color-white',
]

export default function FndColor() {
  const refs = useRef<Record<string, HTMLDivElement | null>>({})
  const [resolved, setResolved] = useState<Record<string, string>>({})

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const next: Record<string, string> = {}
      for (const token of TOKENS) {
        const el = refs.current[token]
        if (el) next[token] = getComputedStyle(el).backgroundColor
      }
      setResolved(next)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div style={{ padding: '32px', fontFamily: 'var(--font-dm-sans)', background: 'var(--color-white)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
        {TOKENS.map((token) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              ref={(el) => {
                refs.current[token] = el
              }}
              style={{ background: `var(${token})`, height: '64px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)' }}
            />
            <code style={{ fontSize: '12px' }}>{token}</code>
            <span style={{ fontSize: '12px', color: '#666' }}>{resolved[token] ?? '…'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
