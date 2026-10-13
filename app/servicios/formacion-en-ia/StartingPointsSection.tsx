'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const iconPath = {
  stroke: 'var(--color-orange)',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const OPTIONS: { title: string; body: string; href: string; link: string; icon: ReactNode }[] = [
  {
    title: 'Quiero empezar a trabajar con IA',
    body: 'Quieres incorporar la IA a tu trabajo editorial, pero no sabes por dónde empezar ni qué herramientas tienen realmente sentido para ti. Te ayudo a crear una base sólida y práctica para dar los primeros pasos con criterio y sin perder más tiempo.',
    href: '#curso',
    link: 'Ver el curso',
    // Bandera de sortida
    icon: <path d="M8 28.5V4.5M8 6h15l-3.5 5 3.5 5H8M4.5 28.5h7" {...iconPath} />,
  },
  {
    title: 'Me cuesta aplicar lo aprendido',
    body: 'Has hecho cursos y probado herramientas, pero cuando intentas llevarlo a tus proyectos reales te atascas. Trabajamos juntos para resolver tus dificultades concretas y para que sepas usar la IA en tus proyectos reales del día a día.',
    href: '#acompanamiento',
    link: 'Ver el acompañamiento individual',
    // Peça de trencaclosques: el que has après encaixa en la teva feina
    icon: <path d="M5.5 12h6a3 3 0 1 1 6 0h6v6a3 3 0 1 1 0 6v6h-18Z" {...iconPath} />,
  },
  {
    title: 'Busco formación para mi equipo',
    body: 'La IA está transformando cómo se trabaja en las editoriales. Acompaño a tu equipo en este cambio: resuelvo sus dudas, genero confianza y les doy las herramientas y el apoyo que necesitan para adoptarla con criterio y autonomía.',
    href: '#empresas',
    link: 'Ver la formación para empresas',
    // Mateix traç que s3-icon-team.svg
    icon: (
      <path
        d="M9.334 24v-1.333a6.667 6.667 0 0 1 13.333 0V24M1.334 24v-1.333a4 4 0 0 1 4-4M30.666 24v-1.333a4 4 0 0 0-4-4M16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5.333 18.665a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333ZM26.667 18.665a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Z"
        {...iconPath}
      />
    ),
  },
];

/**
 * Secció 2 — tres punts de partida alternatius (no nivells consecutius), cada
 * un amb un enllaç intern a la seva targeta de servei. Les files (icona,
 * títol, text, enllaç) es comparteixen via CSS subgrid perquè quedin
 * alineades entre columnes. Per sota de `lg`, una columna.
 */
export default function StartingPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.options-title', {
        y: 24, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.options-title', start: 'top 85%' },
      });
      gsap.from('.option-card', {
        y: 32, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.options-grid', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="opciones-formacion"
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px] bg-white"
    >
      <div className="w-full flex flex-col gap-[48px]" style={{ maxWidth: '1160px' }}>
        <h2
          className="options-title text-center mx-auto"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            color: 'var(--color-blue-400)',
            maxWidth: '820px',
            textWrap: 'balance',
          }}
        >
          No te quedes fuera del{' '}
          <span style={{ color: 'var(--color-orange)' }}>futuro de la edición</span>
        </h2>

        <div className="options-grid grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
          {OPTIONS.map((o) => (
            <article
              key={o.href}
              className="option-card grid p-[24px] md:p-[32px]"
              style={{
                backgroundColor: 'var(--color-grey)',
                borderRadius: '24px',
                gridTemplateRows: 'subgrid',
                gridRow: 'span 4',
                rowGap: 0,
              }}
            >
              <span
                className="flex items-center justify-center rounded-full bg-white mb-[24px]"
                style={{ width: '64px', height: '64px' }}
                aria-hidden="true"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">{o.icon}</svg>
              </span>
              <h3
                className="pb-[16px]"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-title-s)',
                  lineHeight: 'var(--text-title-s--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                }}
              >
                {o.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--text-body-l--line-height)',
                  fontWeight: 300,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {o.body}
              </p>
              <a
                href={o.href}
                className="group flex items-center gap-[10px] min-h-[44px] w-full mt-[24px] pt-[16px] uppercase text-text-accent hover:text-blue-800 transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
                style={{
                  borderTop: '1px solid var(--color-blue-200)',
                  fontFamily: 'var(--font-dm-mono)',
                  fontWeight: 400,
                  fontSize: 'var(--text-body-accent-mono)',
                  lineHeight: 'var(--text-body-accent-mono--line-height)',
                  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                  outlineColor: 'var(--color-blue-800)',
                }}
              >
                {o.link}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-[250ms] group-hover:translate-y-[3px]"
                >
                  <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
