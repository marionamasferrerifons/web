const RADII = [24, 20, 16, 14, 10, 8, 6, 4]

const SHAPES = [
  { src: '/hero-ellipse.svg', label: 'hero-ellipse.svg' },
  { src: '/home-hero-shape.svg', label: 'home-hero-shape.svg' },
  { src: '/hero-vector16.svg', label: 'hero-vector16.svg' },
  { src: '/case-hero-blob-left.svg', label: 'case-hero-blob-left.svg' },
  { src: '/enfoque-hero-shape.svg', label: 'enfoque-hero-shape.svg' },
  { src: '/about-hero-blob.svg', label: 'about-hero-blob.svg' },
]

export default function FndShape() {
  return (
    <div style={{ padding: '32px', background: 'var(--color-white)', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginBottom: '16px', opacity: 0.65 }}>RADIS DE CANTONADA EN ÚS</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {RADII.map((r) => (
            <div key={r} style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'var(--color-orange-200)', borderRadius: `${r}px` }} />
              <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginTop: '4px' }}>{r}px</p>
            </div>
          ))}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'var(--color-green)', borderRadius: '9999px' }} />
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginTop: '4px' }}>ple</p>
          </div>
        </div>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginBottom: '16px', opacity: 0.65 }}>MOSTRARI DE FORMES DECORATIVES (SVG a public/)</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
          {SHAPES.map((s) => (
            <div key={s.src} style={{ background: 'var(--color-blue-500)', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <img src={s.src} alt="" style={{ maxWidth: '100%', maxHeight: '80px' }} />
              <code style={{ fontSize: '11px', color: 'var(--color-blue-100)' }}>{s.label}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
