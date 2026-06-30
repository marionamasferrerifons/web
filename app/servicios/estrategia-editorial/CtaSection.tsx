'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.cta-title',    { y: 56, opacity: 0, duration: 1.0 })
        .from('.cta-subtitle', { y: 36, opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.cta-button',   { y: 24, opacity: 0, duration: 0.6 }, '-=0.45');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center overflow-hidden px-[20px] py-[80px]"
      style={{
        backgroundColor: 'var(--color-blue-500)',
        borderRadius: '24px 24px 0 0',
      }}
    >
      <div className="flex flex-col gap-[40px] items-center" style={{ maxWidth: '765px' }}>

        <div className="flex flex-col gap-[16px] items-center text-center">
          <h2
            className="cta-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-xl)',
              lineHeight: 'var(--text-title-xl--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-white)',
              maxWidth: '718px',
            }}
          >
            Exploremos juntos las posibilidades que la IA ofrece a tu editorial
          </h2>
          <p
            className="cta-subtitle"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--text-body-m--line-height)',
              fontWeight: 300,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-100)',
              maxWidth: '453px',
            }}
          >
            Los contenidos de calidad, el rigor editorial y la excelencia pedagógica son más importantes que nunca en una educación transformada por la IA. Define el rumbo para que tu editorial lidere las aulas del futuro.
          </p>
        </div>

        <button
          className="cta-button group flex items-center gap-[16px] bg-white hover:bg-grey rounded-full cursor-pointer transition-colors duration-200"
          style={{ paddingLeft: '28px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px' }}
        >
          <span
            className="text-orange uppercase"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            }}
          >
            RESERVAR UNA LLAMADA
          </span>
          <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[27px]">
            <img src="/hero-arrow.svg" alt="" className="size-4 transition-transform duration-200 group-hover:rotate-45" aria-hidden="true" />
          </span>
        </button>

      </div>
    </section>
  );
}
