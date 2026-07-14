'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
            color: '#011853',
          }}
        >
          <p style={{ fontSize: '20px', fontWeight: 500 }}>Algo ha ido mal.</p>
          <p style={{ color: '#5880C4' }}>Vuelve a intentarlo en unos segundos.</p>
          <button
            onClick={() => reset()}
            style={{
              cursor: 'pointer',
              borderRadius: '999px',
              padding: '10px 20px',
              backgroundColor: '#012C97',
              color: 'white',
              border: 'none',
            }}
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
