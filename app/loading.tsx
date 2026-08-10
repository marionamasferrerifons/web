export default function Loading() {
  return (
    <main
      className="flex items-center justify-center"
      style={{ minHeight: '70vh' }}
      aria-label="Cargando"
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '3px solid var(--color-blue-100)',
          borderTopColor: 'var(--color-blue-500)',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  )
}
