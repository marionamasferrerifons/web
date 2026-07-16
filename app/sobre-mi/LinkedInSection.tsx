'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LinkedInSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.linkedin-card', { y: 32, opacity: 0, duration: 0.8 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[56px] px-[20px] md:px-[40px] lg:px-[138px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="linkedin-card relative rounded-[24px] bg-white overflow-hidden w-full" style={{ maxWidth: '1164px' }}>
        <div className="relative">
          <img
            src="/about-linkedin-banner.svg"
            alt=""
            className="block w-full"
            style={{ aspectRatio: '1164 / 193' }}
            aria-hidden="true"
          />
          <div
            className="absolute rounded-full overflow-hidden size-[120px] md:size-[198px] left-[32px] md:left-[48px]"
            style={{
              top: '43%',
              border: '6px solid var(--color-white)',
            }}
          >
            <img
              src="/about-hero-photo.png"
              alt="Mariona Masferrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] pt-[100px] md:pt-[126px] px-[32px] md:px-[48px] pb-[32px] md:pb-[48px]"
        >
          <div className="flex flex-col gap-[16px]" style={{ maxWidth: '627px' }}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-title-s)',
                lineHeight: 'var(--text-title-s--line-height)',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-blue-800)',
              }}
            >
              Mariona Masferrer i Fons
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-blue-300)',
              }}
            >
              Ayudo a editoriales educativas a evolucionar su estrategia de negocio y sus sistemas de producción en un sector transformado por la IA.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/marionamasferrerifons/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[16px] rounded-[50px] pl-[28px] pr-[12px] py-[8px] w-fit shrink-0 bg-grey hover:bg-[#e5e5e5] transition-colors duration-200"
          >
            <span
              className="uppercase whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                color: 'var(--color-orange)',
              }}
            >
              VER PERFIL DE LINKEDIN
            </span>
            <span className="flex items-center justify-center rounded-full shrink-0 size-[27px]" style={{ backgroundColor: 'var(--color-orange)' }}>
              <img
                src="/hero-arrow.svg"
                alt=""
                className="size-4 transition-transform duration-200 group-hover:rotate-45"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
