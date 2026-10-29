const MONO_STYLE = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: 'var(--text-body-accent-mono)',
  lineHeight: 'var(--text-body-accent-mono--line-height)',
  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
} as const

export default function FndTag() {
  return (
    <div style={{ padding: '32px', background: 'var(--color-grey)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p className="uppercase" style={{ ...MONO_STYLE, color: 'var(--color-text-secondary)', opacity: 0.65 }}>
        [SERVICIOS] — amb claudàtors i opacitat .65 (patró dominant)
      </p>
      <p className="uppercase" style={{ ...MONO_STYLE, color: 'var(--color-text-secondary)' }}>
        [SERVICIOS] — amb claudàtors, sense opacitat
      </p>
      <p className="uppercase" style={{ ...MONO_STYLE, color: 'var(--color-text-secondary)', opacity: 0.65 }}>
        Contexto — sense claudàtors (pàgines de cas d&apos;èxit)
      </p>
      <p className="uppercase" style={{ ...MONO_STYLE, color: 'var(--color-text-accent)' }}>
        [¿QUé INCLUYE?] — error de redacció real (è minúscula)
      </p>
    </div>
  )
}
