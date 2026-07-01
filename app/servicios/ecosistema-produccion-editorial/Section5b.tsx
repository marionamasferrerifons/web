'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ventajas = [
  {
    label: 'VENTAJA 1',
    title: 'Progresivo',
    desc: 'Empieza con una tipología de contenido, valida el impacto y amplía cuando veas resultados. Sin grandes inversiones iniciales ni actos de fe.',
  },
  {
    label: 'VENTAJA 2',
    title: 'Activo propio',
    desc: 'Todo lo construido te pertenece. Vive en archivos que controlas tú, compatible con las herramientas de hoy y las del futuro.',
  },
  {
    label: 'VENTAJA 3',
    title: 'No disruptivo',
    desc: 'Se integra en tus flujos y herramientas actuales. Sin cambios forzados ni curvas de aprendizaje.',
  },
  {
    label: 'VENTAJA 4',
    title: 'Escalable hacia IA privada',
    desc: 'Empieza con Claude, ChatGPT o Gemini y migra hacia una instancia privada cuando quieras aumentar la seguridad y el control de costes.',
  },
];

export default function Section5b() {
  const sectionRef   = useRef<HTMLElement>(null);
  const lineRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const descWrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      // Measure natural heights before collapsing
      const heights = descWrapRefs.current.map(el => el?.scrollHeight ?? 100);

      // Collapse all descriptions and reset lines
      descWrapRefs.current.forEach(el => {
        if (el) gsap.set(el, { height: 0, overflow: 'hidden', opacity: 0 });
      });
      lineRefs.current.forEach(el => {
        if (el) gsap.set(el, { scaleX: 0, opacity: 1 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.5,
          start: 'top top',
          end: '+=3600',
        },
      });

      ventajas.forEach((_, i) => {
        const h    = heights[i];
        const base = i * 1.1;

        // Expand description
        tl.to(descWrapRefs.current[i], { height: h, opacity: 1, duration: 0.25, ease: 'power2.out' }, base);
        // Orange line fills left to right
        tl.to(lineRefs.current[i],     { scaleX: 1, duration: 0.55, ease: 'none' }, base + 0.15);
        // Line disappears
        tl.to(lineRefs.current[i],     { opacity: 0, duration: 0.1 }, base + 0.7);
        // Description collapses
        tl.to(descWrapRefs.current[i], { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' }, base + 0.75);
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-[40px] xl:gap-[28px] 2xl:gap-[40px] px-[20px] py-[56px]"
      style={{ backgroundColor: 'var(--color-white)' }}
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
            color: 'var(--color-blue-300)',
          }}
        >
          [VENTAJAS]
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
            maxWidth: '685px',
          }}
        >
          Crea la infraestructura de producción del{' '}
          <span style={{ color: 'var(--color-orange-400)' }}>futuro</span>
        </h2>
      </div>

      {/* Content */}
      <div
        className="w-full flex flex-col lg:flex-row items-start justify-between gap-[32px]"
        style={{ maxWidth: '1400px' }}
      >
        {/* Left: animated rows */}
        <div className="flex flex-col w-full lg:w-[661px] shrink-0">
          {ventajas.map((v, i) => (
            <div
              key={i}
              className="relative px-[16px] py-[24px] xl:py-[16px] 2xl:py-[24px]"
              style={{ borderBottom: '1px solid var(--color-blue-300)' }}
            >
              {/* Orange progress line — scaleX 0→1 from left */}
              <div
                ref={el => { lineRefs.current[i] = el; }}
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: '1px',
                  backgroundColor: 'var(--color-orange)',
                  transformOrigin: 'left center',
                }}
              />

              {/* Label + title — always visible */}
              <div className="flex flex-col gap-[8px]">
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontWeight: 400,
                    fontSize: 'var(--text-body-accent-mono)',
                    lineHeight: 'var(--text-body-accent-mono--line-height)',
                    letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                    color: 'var(--color-blue-300)',
                  }}
                >
                  {v.label}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '24px',
                    lineHeight: '32px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-400)',
                  }}
                >
                  {v.title}
                </p>
              </div>

              {/* Description wrapper — height animated 0 ↔ natural */}
              <div ref={el => { descWrapRefs.current[i] = el; }}>
                <p
                  className="pt-[8px]"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '20px',
                    lineHeight: '28px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-300)',
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: illustration */}
        <div
          className="order-first lg:order-none w-full lg:w-[661px] shrink-0 rounded-[24px] overflow-hidden h-[300px] lg:h-[400px] xl:h-[460px] 2xl:h-[524px]"
        >
          <img
            src="/s5b-ventajas-diagram.png"
            alt="GEM Especialista workflow"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
