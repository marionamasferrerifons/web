import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center text-center gap-[16px] px-[20px]"
      style={{ minHeight: '70vh' }}
    >
      <p
        style={{
          fontFamily: 'var(--font-dm-mono)',
          fontWeight: 400,
          fontSize: 'var(--text-body-accent-mono)',
          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
          color: 'var(--color-text-secondary)',
        }}
      >
        [404]
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-title-m)',
          lineHeight: 'var(--text-title-m--line-height)',
          fontWeight: 400,
          color: 'var(--color-blue-800)',
        }}
      >
        Esta página no existe
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-body-m)',
          lineHeight: 'var(--text-body-m--line-height)',
          color: 'var(--color-text-secondary)',
          maxWidth: '420px',
        }}
      >
        Puede que el enlace esté roto o que la página se haya movido.
      </p>
      <Link
        href="/"
        className="mt-[8px] inline-flex items-center rounded-full px-[24px] py-[12px] transition-colors duration-200"
        style={{
          backgroundColor: 'var(--color-blue-500)',
          color: 'var(--color-white)',
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-body-m)',
        }}
      >
        Volver al inicio
      </Link>
    </main>
  )
}
