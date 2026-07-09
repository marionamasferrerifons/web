import { BOOKING_URL } from '@/lib/constants';

export default function Section7() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-[20px] py-[80px]"
      style={{
        backgroundColor: '#012c97',
        borderRadius: '24px 24px 0 0',
      }}
    >
      <div className="flex flex-col gap-[40px] items-center text-center" style={{ maxWidth: '765px' }}>
        <div className="flex flex-col gap-[16px] items-center">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(40px, 5vw, 56px)',
              lineHeight: '1.07',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-white)',
              maxWidth: '678px',
            }}
          >
            Optimiza tu producción editorial, liberando tiempo y presupuesto
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: '#d5e4fb',
              maxWidth: '453px',
            }}
          >
            Un sistema integrado en el día a día de tu equipo y con resultados medibles desde el primer proyecto.
          </p>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-[16px] pl-[28px] pr-[12px] py-[8px] rounded-full overflow-hidden"
          style={{ backgroundColor: 'var(--color-white)' }}
        >
          <span
            className="uppercase"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              color: 'var(--color-orange)',
            }}
          >
            RESERVAR UNA LLAMADA
          </span>
          <span
            className="flex items-center justify-center rounded-full shrink-0 size-[27px]"
            style={{ backgroundColor: 'var(--color-orange)' }}
          >
            <img
              src="/s7-arrow.svg"
              alt=""
              className="size-[16px] transition-transform duration-200 group-hover:rotate-45"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </section>
  );
}
