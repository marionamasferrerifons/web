const WIDTHS = [
  { label: 'Contenidor ple', value: 1400 },
  { label: 'Contingut estret', value: 1160 },
  { label: 'Prosa / titular', value: 690 },
  { label: 'Nota lateral', value: 453 },
]

const SPACING = [40, 56, 64, 80, 96, 112]

export default function FndLayout() {
  return (
    <div style={{ padding: '32px', background: 'var(--color-white)', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginBottom: '16px', opacity: 0.65 }}>
          AMPLADES MÀXIMES DE CONTINGUT (barres a escala, màxim 100% de l&apos;ample disponible)
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {WIDTHS.map((w) => (
            <div key={w.label}>
              <div style={{ width: `min(100%, ${w.value}px)`, height: '28px', background: 'var(--color-blue-100)', borderRadius: '4px' }} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                {w.label} — ~{w.value}px
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginBottom: '16px', opacity: 0.65 }}>
          RITME VERTICAL (py en ús)
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
          {SPACING.map((s) => (
            <div key={s} style={{ textAlign: 'center' }}>
              <div style={{ width: '32px', height: `${s}px`, background: 'var(--color-orange-200)', borderRadius: '4px' }} />
              <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>{s}px</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
