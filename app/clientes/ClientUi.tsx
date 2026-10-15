import { Fragment } from 'react'
import Link from 'next/link'
import { DELIVERY_STATUS_LABEL, type DeliveryStatus } from '@/lib/clientes'

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

/** Colors de cada estat d'entrega: pastilla, punt i segment de la barra de progrés. */
export const DELIVERY_STATUS_COLORS: Record<DeliveryStatus, { bg: string; dot: string; text: string }> = {
  programada: { bg: 'var(--color-blue-50)', dot: 'var(--color-blue-100)', text: 'var(--color-blue-400)' },
  'en-preparacion': { bg: 'var(--color-orange-100)', dot: 'var(--color-orange)', text: 'var(--color-blue-800)' },
  entregada: { bg: 'var(--color-green)', dot: 'var(--color-blue-500)', text: 'var(--color-blue-800)' },
}

export function DeliveryStatusPill({ status }: { status: DeliveryStatus }) {
  const c = DELIVERY_STATUS_COLORS[status]
  return (
    <span
      className="inline-flex items-center gap-[6px] whitespace-nowrap rounded-full px-[10px]"
      style={{ ...monoStyle, fontSize: '12px', lineHeight: '22px', background: c.bg, color: c.text }}
    >
      <span
        aria-hidden="true"
        className="w-[7px] h-[7px] rounded-full"
        style={{ background: status === 'programada' ? 'var(--color-blue-300)' : c.dot }}
      />
      {DELIVERY_STATUS_LABEL[status]}
    </span>
  )
}
