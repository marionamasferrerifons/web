'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type Logo = {
  src: string;
  alt: string;
};

export default function LogosSection({ logos }: { logos: Logo[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.logos-tag', { y: 16, opacity: 0, duration: 0.6 })
        .from('.logos-item', { y: 16, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col md:flex-row items-center justify-between gap-[24px] py-[40px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-blue-500)' }}
    >
      <p
        className="logos-tag uppercase shrink-0"
        style={{
          fontFamily: 'var(--font-dm-mono)',
          fontWeight: 400,
          fontSize: 'var(--text-body-accent-mono)',
          lineHeight: 'var(--text-body-accent-mono--line-height)',
          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
          color: 'var(--color-blue-200)',
        }}
      >
        [EDITORIALES PARA LAS QUE HE TRABAJADO]
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-[32px] gap-y-[24px]" style={{ mixBlendMode: 'luminosity' }}>
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="logos-item w-auto h-[60px]"
            style={{ opacity: 0.4 }}
          />
        ))}
      </div>
    </section>
  );
}
