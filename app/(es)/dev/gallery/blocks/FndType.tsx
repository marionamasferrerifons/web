const TITLE_TOKENS = ['--text-title-xxl', '--text-title-xl', '--text-title-l', '--text-title-m', '--text-title-s']
const BODY_TOKENS = ['--text-body-xl', '--text-body-l', '--text-body-m', '--text-body-accent-mono']

export default function FndType() {
  return (
    <div style={{ padding: '32px', background: 'var(--color-white)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginBottom: '16px', opacity: 0.65 }}>
          TITULARS — es redueixen per sota de 768px (redimensiona la finestra per comprovar-ho)
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {TITLE_TOKENS.map((token) => (
            <div key={token}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: `var(${token})`,
                  lineHeight: `var(${token}--line-height)`,
                  color: 'var(--color-blue-400)',
                  margin: 0,
                }}
              >
                Aa — {token}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', marginBottom: '16px', opacity: 0.65 }}>
          COS — sense variant mòbil
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {BODY_TOKENS.map((token) => (
            <p
              key={token}
              style={{
                fontFamily: token.includes('mono') ? 'var(--font-dm-mono)' : 'var(--font-dm-sans)',
                fontSize: `var(${token})`,
                lineHeight: `var(${token}--line-height)`,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              El ritme vertical d&apos;una secció depèn de l&apos;escala tipogràfica — {token}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
