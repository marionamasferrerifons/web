'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CriterioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.criterio-tag',   { y: -20, opacity: 0, duration: 0.5 })
        .from('.criterio-title', { y: 48,  opacity: 0, duration: 0.9 }, '-=0.2')
        .from('.criterio-subtitle', { y: 24, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.criterio-shape', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleTextStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: 'var(--text-title-s)',
    lineHeight: 'var(--text-title-s--line-height)',
    fontWeight: 400,
    fontVariationSettings: '"opsz" 14',
    color: 'var(--color-white)',
  };

  const bodyTextStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: 'var(--text-body-l)',
    lineHeight: '24px',
    fontWeight: 400,
    fontVariationSettings: '"opsz" 14',
    color: 'var(--color-white)',
  };

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col gap-[64px] md:gap-[80px] items-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="flex flex-col gap-[16px] items-center text-center" style={{ maxWidth: '690px' }}>
        <p
          className="criterio-tag uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-300)',
            opacity: 0.65,
          }}
        >
          [MI ENFOQUE]
        </p>
        <p
          className="criterio-title"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-xl)',
            lineHeight: 'var(--text-title-xl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
          }}
        >
          El <span style={{ color: 'var(--color-orange-400)' }}>criterio</span> de alguien que conoce el sector
        </p>
        <p
          className="criterio-subtitle"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-m)',
            lineHeight: 'var(--text-body-m--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-300)',
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices blandit vestibulum volutpat blandit vulputate fermentum pulvinar.
        </p>
      </div>

      {/* Row height is a function of viewport width (clamped), not of child content —
          letting Pedagogía's circle (aspect-square, h-full) drive the row's height via
          flex content-sizing created a feedback loop that made it balloon and overlap
          its siblings at in-between viewport widths. */}
      <div className="w-full flex flex-col md:flex-row gap-[10px] items-stretch md:h-[clamp(260px,34vw,478px)]" style={{ maxWidth: '1400px' }}>
        {/* Editorial — orange arch shape (actual SVG outline, not a CSS approximation) */}
        <div className="criterio-shape group relative overflow-hidden flex-1 aspect-[449/478] md:aspect-auto" style={{ minHeight: '260px' }}>
          <img
            src="/home-criterio-editorial.svg"
            alt=""
            className="absolute inset-0 size-full"
            style={{ objectFit: 'fill' }}
            aria-hidden="true"
          />
          <div className="absolute flex items-center gap-[16px]" style={{ left: '48px', top: '48px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '32px', lineHeight: '38px', color: 'var(--color-white)' }}>
              Editorial
            </p>
            <span className="flex items-center justify-center bg-white rounded-full shrink-0 size-[30px]">
              <img src="/arrow-orange.svg" alt="" className="size-[18px]" aria-hidden="true" />
            </span>
          </div>
          <div
            className="absolute flex flex-col gap-[8px] opacity-100 translate-y-0 md:opacity-0 md:translate-y-[12px] transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0"
            style={{ left: '48px', right: '32px', bottom: '32px' }}
          >
            <p style={{ ...bodyTextStyle, fontWeight: 600 }}>Entiendo cómo funciona una editorial por dentro.</p>
            <p style={bodyTextStyle}>Desde los procesos de producción hasta las decisiones estratégicas, lo que permite aplicar IA sin romper lo que ya funciona.</p>
          </div>
        </div>

        {/* Pedagogía — green circle; full width on mobile to match Editorial/Tecnología,
            fixed 1:1 (aspect-square) so it stays a true circle instead of stretching. */}
        <div
          className="criterio-shape group relative overflow-hidden shrink-0 aspect-square w-full md:w-auto md:h-full flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-green)', borderRadius: '9999px' }}
        >
          <div className="flex flex-col gap-[16px] items-center text-center px-[24px]">
            <div className="flex items-center gap-[12px]">
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '32px', lineHeight: '38px', color: 'var(--color-white)' }}>
                Pedagogía
              </p>
              <span className="flex items-center justify-center bg-white rounded-full shrink-0 size-[30px]">
                <img src="/arrow-orange.svg" alt="" className="size-[18px]" aria-hidden="true" />
              </span>
            </div>
            <div
              className="flex flex-col gap-[8px] opacity-100 max-h-none md:opacity-0 md:max-h-0 overflow-hidden transition-all duration-300 md:group-hover:opacity-100 md:group-hover:max-h-[200px]"
              style={{ maxWidth: '360px' }}
            >
              <p style={{ ...bodyTextStyle, fontWeight: 600 }}>Entiendo el contenido desde quien lo enseña y quien lo produce.</p>
              <p style={bodyTextStyle}>Haber trabajado como docente me permite entender cómo se usa el contenido en la práctica, algo clave a la hora de aplicar IA sin perder valor educativo.</p>
            </div>
          </div>
        </div>

        {/* Tecnología — coral arch shape (actual SVG outline, not a CSS approximation) */}
        <div className="criterio-shape group relative overflow-hidden flex-1 aspect-[457/478] md:aspect-auto" style={{ minHeight: '260px' }}>
          <img
            src="/home-criterio-tecnologia.svg"
            alt=""
            className="absolute inset-0 size-full"
            style={{ objectFit: 'fill' }}
            aria-hidden="true"
          />
          <div className="absolute flex items-center gap-[16px]" style={{ right: '48px', top: '150px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '32px', lineHeight: '38px', color: 'var(--color-white)' }}>
              Tecnología
            </p>
            <span className="flex items-center justify-center bg-white rounded-full shrink-0 size-[30px]">
              <img src="/arrow-orange.svg" alt="" className="size-[18px]" aria-hidden="true" />
            </span>
          </div>
          <div
            className="absolute flex flex-col gap-[8px] opacity-100 translate-y-0 md:opacity-0 md:translate-y-[12px] transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0"
            style={{ left: '32px', right: '32px', top: '230px' }}
          >
            <p style={{ ...bodyTextStyle, fontWeight: 600 }}>Uso la IA en la práctica</p>
            <p style={bodyTextStyle}>Trabajo con IA desde dentro del proceso editorial, lo que permite entender sus límites, sus riesgos y su verdadero potencial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
