'use client';

export type ErrorCopy = { title: string; body: string; retry: string }

export default function ErrorContent({
  copy,
  reset,
}: {
  reset: () => void
  copy: ErrorCopy
}) {
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
        [ERROR]
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
        {copy.title}
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
        {copy.body}
      </p>
      <button
        onClick={() => reset()}
        className="mt-[8px] inline-flex items-center rounded-full px-[24px] py-[12px] transition-colors duration-200 cursor-pointer"
        style={{
          backgroundColor: 'var(--color-blue-500)',
          color: 'var(--color-white)',
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-body-m)',
          border: 'none',
        }}
      >
        {copy.retry}
      </button>
    </main>
  );
}
