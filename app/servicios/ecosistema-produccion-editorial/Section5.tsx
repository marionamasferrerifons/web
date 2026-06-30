const checkItems = [
  'Evaluaciones tipo test',
  'Diseño de índices',
  'Guías didácticas',
  'Redacción de actividades',
  'Redacción de contenido principal',
  'Redacción de retos y casos',
  'Desarrollo de solucionarios',
];

export default function Section5() {
  return (
    <section
      className="w-full flex flex-col items-center gap-[40px] pt-[56px] px-[20px] overflow-hidden"
      style={{ backgroundColor: '#ec937e' }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[16px] text-center">
        <p
          className="opacity-65 uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-white)',
          }}
        >
          [IMPACTO]
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-white)',
            maxWidth: '576px',
          }}
        >
          Produce <span style={{ color: 'var(--color-blue-400)' }}>más</span> con el mismo equipo
        </h2>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row items-end gap-[40px] lg:gap-[94px]" style={{ maxWidth: '1165px' }}>

        {/* Left: blue arch blob + stats */}
        <div className="relative shrink-0 hidden lg:block" style={{ width: 545, height: 576 }}>
          {/* Blob — rendered at its natural 576×544 size then rotated -90deg to make it appear as upward arch */}
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            <div style={{ width: 576, height: 544, transform: 'rotate(-90deg)', flexShrink: 0 }}>
              <img
                src="/s5-blue-blob.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Stats overlay — centered horizontally, ~50% down */}
          <div
            className="absolute flex flex-col gap-[60px]"
            style={{ left: '50%', transform: 'translateX(-50%)', top: 289, width: 419 }}
          >
            {/* TIEMPO DE PRODUCCIÓN + 60-90% */}
            <div className="flex flex-col">
              <p
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'var(--color-blue-200)',
                }}
              >
                TIEMPO DE PRODUCCIÓN
              </p>
              <div className="flex items-end gap-[8px]">
                <img src="/s5-arrow-down.svg" alt="" style={{ width: 52, height: 52 }} aria-hidden="true" />
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '80px',
                    lineHeight: '68px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-white)',
                  }}
                >
                  60–90%
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-grey)',
              }}
            >
              Reducción del tiempo de producción según tipología de contenido, calculada a partir de los flujos reales de la editorial.
            </p>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="lg:hidden flex flex-col gap-[16px] pb-[40px]">
          <p
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '24px',
              color: 'var(--color-blue-200)',
            }}
          >
            TIEMPO DE PRODUCCIÓN
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '64px',
              lineHeight: '64px',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-white)',
            }}
          >
            60–90%
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-grey)',
            }}
          >
            Reducción del tiempo de producción según tipología de contenido, calculada a partir de los flujos reales de la editorial.
          </p>
        </div>

        {/* Right: text + checklist */}
        <div
          className="flex flex-col gap-[32px] pb-[56px] w-full"
          style={{ paddingLeft: 0 }}
        >
          <div className="lg:pt-[78px] flex flex-col gap-[32px]">
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-white)',
                maxWidth: '525px',
              }}
            >
              Algunos ejemplos de tipologías que el sistema puede producir:
            </p>
            <ul className="flex flex-col gap-[24px]">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-center gap-[8px]">
                  <img
                    src="/s5-check-icon.svg"
                    alt=""
                    className="shrink-0"
                    style={{ width: 24, height: 24 }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '20px',
                      lineHeight: '28px',
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-blue-50)',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
