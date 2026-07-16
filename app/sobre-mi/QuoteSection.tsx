'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.quote-tag',   { y: -20, opacity: 0, duration: 0.5 })
        .from('.quote-text',  { y: 32,  opacity: 0, duration: 0.9 }, '-=0.25')
        .from('.quote-shape', { opacity: 0, duration: 1 }, '-=0.7');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex justify-center py-[64px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-orange-400)' }}
    >
      <img
        src="/about-quote-shape-left.svg"
        alt=""
        className="quote-shape absolute hidden md:block left-0"
        style={{ width: '215px', height: '709px', top: '-30px' }}
        aria-hidden="true"
      />
      <img
        src="/about-quote-shape-right.svg"
        alt=""
        className="quote-shape absolute hidden md:block right-0"
        style={{ width: '216px', height: '623px', top: '-123px' }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-[24px] items-center text-center" style={{ maxWidth: '687px' }}>
        <p
          className="quote-tag uppercase opacity-65"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-white)',
          }}
        >
          [UNA CONVICCIÓN]
        </p>
        <p
          className="quote-text"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-s)',
            lineHeight: 'var(--text-title-s--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-white)',
          }}
        >
          “Creo que las editoriales educativas deben seguir siendo piezas clave de una educación de calidad.
          <br /><br />
          No quiero que incorporen la IA de forma acrítica. Quiero que preserven las mejores prácticas del oficio de editar y que definan, con valentía y confianza, el papel que quieren jugar en el futuro de la educación”
        </p>
      </div>
    </section>
  );
}
