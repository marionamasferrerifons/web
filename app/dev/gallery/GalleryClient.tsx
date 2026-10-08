'use client'

import { useEffect, useRef, useState } from 'react'
import { GROUPS, BLOCKS, type BlockEntry, type Recommendation } from './registry'

const WIDTHS = [
  { label: 'Mòbil · 390px', value: 390 },
  { label: 'Tauleta · 768px', value: 768 },
  { label: 'Portàtil · 1280px', value: 1280 },
  { label: 'Escriptori · 1440px', value: 1440 },
]

const RECOMMENDATION_LABEL: Record<Recommendation, string> = {
  conservar: 'Conservar',
  adaptar: 'Adaptar',
  retirar: 'Retirar (proposta)',
}

const RECOMMENDATION_COLOR: Record<Recommendation, string> = {
  conservar: 'var(--color-green)',
  adaptar: 'var(--color-orange-200)',
  retirar: 'var(--color-orange)',
}

function PreviewFrame({ blockId, variantId, width }: { blockId: string; variantId: string; width: number }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(400)
  const [containerWidth, setContainerWidth] = useState(width)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.data || e.data.source !== 'gallery-preview') return
      if (iframeRef.current && e.source === iframeRef.current.contentWindow) {
        setHeight(Math.max(200, e.data.height))
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const update = () => setContainerWidth(el.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const scale = Math.min(1, containerWidth / width)
  const src = `/dev/gallery/preview/${blockId}?variant=${variantId}`
  const cappedHeight = expanded ? height : Math.min(height, 900)

  return (
    <div ref={wrapperRef} style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          height: cappedHeight * scale,
          overflow: 'hidden',
          position: 'relative',
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '8px',
        }}
      >
        <div style={{ width, height: cappedHeight, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
          <iframe
            ref={iframeRef}
            src={src}
            title={`${blockId} / ${variantId}`}
            style={{ width, height: cappedHeight, border: 0, overflow: expanded ? 'visible' : 'auto' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', color: '#888', fontFamily: 'monospace' }}>
          {scale < 0.999
            ? `viewport real ${width}px · mostrat al ${Math.round(scale * 100)}%`
            : `viewport real ${width}px`}
          {height > 900 ? ` · contingut de ${height}px` : ''}
        </span>
        <div style={{ display: 'flex', gap: '12px' }}>
          {height > 900 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              style={{ fontSize: '11px', background: 'none', border: 'none', color: 'var(--color-text-accent, #cf330f)', cursor: 'pointer', padding: 0 }}
            >
              {expanded ? 'Reduir' : 'Desplegar'}
            </button>
          )}
          <a href={src} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: 'var(--color-text-accent, #cf330f)' }}>
            Obrir a mida real ↗
          </a>
        </div>
      </div>
    </div>
  )
}

function BlockCard({ block, width }: { block: BlockEntry; width: number }) {
  const [variantIdx, setVariantIdx] = useState(0)
  const variant = block.variants[variantIdx]

  return (
    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div>
          <code style={{ fontSize: '11px', color: '#888' }}>{block.id}</code>
          <h3 style={{ margin: '2px 0 0', fontSize: '18px' }}>{block.name}</h3>
        </div>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: '999px',
            background: RECOMMENDATION_COLOR[block.recommendation],
            whiteSpace: 'nowrap',
          }}
        >
          {RECOMMENDATION_LABEL[block.recommendation]}
        </span>
      </div>

      <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>{block.whenToUse}</p>

      {block.variants.length > 1 && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {block.variants.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setVariantIdx(i)}
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid #ddd',
                background: i === variantIdx ? '#222' : '#fff',
                color: i === variantIdx ? '#fff' : '#333',
                cursor: 'pointer',
              }}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      {variant.note && (
        <p style={{ fontSize: '12px', color: '#996515', background: '#fff6e5', padding: '8px 10px', borderRadius: '6px', margin: 0 }}>
          {variant.note}
        </p>
      )}

      <PreviewFrame blockId={block.id} variantId={variant.id} width={width} />

      <details>
        <summary style={{ fontSize: '12px', cursor: 'pointer', color: '#555' }}>Fitxer / pàgines</summary>
        <div style={{ fontSize: '12px', color: '#666', marginTop: '6px' }}>
          <p style={{ margin: '4px 0' }}>
            <strong>Fitxers:</strong> {variant.files.join(', ')}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Pàgines:</strong> {variant.pages.join(', ')}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Recomanació:</strong> {block.rationale}
          </p>
        </div>
      </details>
    </div>
  )
}

export default function GalleryClient() {
  const [width, setWidth] = useState(1280)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f4f4f4', minHeight: '100vh', paddingBottom: '80px' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#fff',
          borderBottom: '1px solid #eee',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: '20px' }}>Galeria de blocs visuals</h1>
          <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#888' }}>
            Només de desenvolupament — no és a la navegació pública. {BLOCKS.length} blocs.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {WIDTHS.map((w) => (
            <button
              key={w.value}
              onClick={() => setWidth(w.value)}
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                background: width === w.value ? '#222' : '#fff',
                color: width === w.value ? '#fff' : '#333',
                cursor: 'pointer',
              }}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {GROUPS.map((group) => {
          const groupBlocks = BLOCKS.filter((b) => b.group === group.id)
          if (groupBlocks.length === 0) return null
          return (
            <section key={group.id}>
              <h2 style={{ fontSize: '22px', marginBottom: '4px' }}>{group.label}</h2>
              <p style={{ fontSize: '13px', color: '#666', marginTop: 0, marginBottom: '16px', maxWidth: '720px' }}>{group.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '20px' }}>
                {groupBlocks.map((block) => (
                  <BlockCard key={block.id} block={block} width={width} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
