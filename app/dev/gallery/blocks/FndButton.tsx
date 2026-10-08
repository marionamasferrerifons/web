const VARIANTS = [
  { label: 'Hero gran (HomeHeroSection)', circle: 27, bg: 'bg-grey', hoverBg: 'hover:bg-white' },
  { label: 'CTA band (CtaSection)', circle: 27, bg: 'bg-white', hoverBg: 'hover:bg-grey' },
  { label: 'Capçalera (Navbar)', circle: 28, bg: 'bg-white', hoverBg: 'hover:bg-grey' },
  { label: 'Menú mòbil (MobileMenu)', circle: 24, bg: 'bg-grey', hoverBg: 'hover:bg-white' },
]

export default function FndButton() {
  return (
    <div style={{ padding: '32px', background: 'var(--color-blue-500)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {VARIANTS.map((v) => (
        <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            type="button"
            className={`group flex items-center gap-[16px] ${v.bg} ${v.hoverBg} rounded-full cursor-pointer transition-colors duration-[330ms] ease-linear`}
            style={{ paddingLeft: '28px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px', border: 'none' }}
          >
            <span
              className="uppercase text-text-accent"
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              }}
            >
              RESERVAR UNA LLAMADA
            </span>
            <span className="flex items-center justify-center bg-orange rounded-full shrink-0" style={{ width: v.circle, height: v.circle }}>
              <img
                src="/arrow-white.svg"
                alt=""
                className="transition-transform duration-300 ease-out group-hover:rotate-45"
                style={{ width: v.circle * 0.6, height: v.circle * 0.6 }}
                aria-hidden="true"
              />
            </span>
          </button>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--color-blue-100)' }}>{v.label} — cercle {v.circle}px</p>
        </div>
      ))}
    </div>
  )
}
