'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const pills = [
  {
    dot: '#E5A27C',
    text: 'Los outputs de la IA no cumplen con los estándares de calidad que caracterizan tu editorial',
    mlClass: 'md:ml-[135px]',
  },
  {
    dot: '#AFE0D6',
    text: 'El equipo editorial dedica más tiempo corrigiendo y reescribiendo lo que genera la IA que creando el contenido manualmente',
    mlClass: 'md:ml-[186px]',
  },
  {
    dot: 'var(--color-blue-300)',
    text: 'Cada editor/a hace la guerra por su cuenta, investigando qué hacer con la IA de forma aislada y sin protocolos claros',
    mlClass: 'md:ml-[85px]',
  },
  {
    dot: 'var(--color-orange-400)',
    text: 'Se malgasta tiempo probando la última herramienta del mercado en busca de una solución mágica',
    mlClass: 'md:ml-[272px]',
  },
];

export default function Section2() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.s2-title', {
        y: 48, opacity: 0, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: '.s2-title', start: 'top 85%' },
      });

      gsap.from('.s2-pill', {
        y: 32, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.s2-pills', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[80px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="w-full flex flex-col gap-[40px]" style={{ maxWidth: '1400px' }}>

        {/* Title */}
        <h2
          className="s2-title"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
            maxWidth: '690px',
          }}
        >
          La IA promete aliviar la carga de trabajo. Pero{' '}
          <span style={{ color: 'var(--color-orange-400)' }}>sin tu criterio</span>
          , la multiplica.
        </h2>

        {/* Staggered pills — right-aligned on desktop */}
        <div className="s2-pills flex flex-col gap-[16px] md:self-end" style={{ maxWidth: '785px', width: '100%' }}>
          {pills.map((pill, i) => (
            <div
              key={i}
              className={`s2-pill flex items-center gap-[8px] bg-white rounded-[8px] px-[14px] py-[14px] ${pill.mlClass}`}
            >
              <span
                className="shrink-0 rounded-full size-[10px]"
                style={{ backgroundColor: pill.dot }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-300)',
                }}
              >
                {pill.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
