import { Fragment } from 'react'
import Link from 'next/link'

export const CONTACT_EMAIL = 'mariona@masferrerifons.com'

export const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
  textTransform: 'uppercase',
} as const

/** Converteix *text* en cursiva. */
export function Em({ text }: { text: string }) {
  return (
    <>
      {text.split('*').map((part, i) =>
        i % 2 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  )
}

/** Capçalera simplificada: el logotip porta a la web principal. */
export function ClientHeader({ clientName }: { clientName: string }) {
  return (
    <header
      className="relative z-10 flex items-center justify-between gap-[16px] h-[88px] px-[20px] md:px-[40px] bg-blue-500 print:hidden"
      style={{ borderRadius: '0 0 24px 24px' }}
    >
      <div className="flex items-center gap-[20px]">
        <Link
          href="/"
          aria-label="Ir a la web de Mariona Masferrer i Fons"
          className="flex items-center min-h-[44px] rounded-[8px] focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[3px]"
        >
          <img src="/logo.svg" alt="" style={{ height: '40px', width: 'auto', display: 'block' }} />
        </Link>
        <span aria-hidden="true" className="hidden md:block w-px h-[28px]" style={{ background: 'rgba(255,255,255,.35)' }} />
        <span className="hidden md:block" style={{ ...monoStyle, color: 'var(--color-blue-100)' }}>
          Espacio de trabajo compartido
        </span>
      </div>
      <span style={{ ...monoStyle, color: 'var(--color-white)' }}>{clientName}</span>
    </header>
  )
}

export function ClientFooter({ lead }: { lead: string }) {
  const textStyle = {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 300,
    color: 'var(--color-text-secondary)',
  }
  return (
    <footer
      className="px-[20px] md:px-[40px] pt-[24px] pb-[32px] bg-grey print:hidden"
      style={{ borderTop: '1px solid #E0E6F2' }}
    >
      <div className="mx-auto w-full max-w-[1160px] flex flex-wrap justify-between gap-[12px]">
        <p style={textStyle}>Espacio privado. Por favor, no compartas este enlace fuera de tu equipo.</p>
        <p style={textStyle}>
          {lead}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline" style={{ color: 'var(--color-text-accent)' }}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  )
}

export function StatusPill({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center gap-[8px] whitespace-nowrap rounded-full px-[12px] py-[2px] bg-orange-100"
      style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-blue-800)' }}
    >
      <span aria-hidden="true" className="w-[8px] h-[8px] rounded-full bg-orange" />
      {children}
    </span>
  )
}
