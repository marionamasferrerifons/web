'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LOGOS = [
  { src: '/home-logo-1.png', height: '52px', opacity: 0.4 },
  { src: '/home-logo-2.png', height: '32px', opacity: 0.4 },
  { src: '/home-logo-3.png', height: '28px', opacity: 0.3 },
  { src: '/home-logo-4.png', height: '52px', opacity: 0.4 },
  { src: '/home-logo-5.png', height: '24px', opacity: 0.4 },
];

export default function LogosSection() {
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

      <div className="flex flex-wrap items-center justify-center gap-x-[48px] gap-y-[24px]" style={{ mixBlendMode: 'luminosity' }}>
        {LOGOS.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt=""
            className="logos-item w-auto"
            style={{ height: logo.height, opacity: logo.opacity }}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
