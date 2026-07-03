'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.problem-shape', { opacity: 0, duration: 0.9 })
        .from('.problem-title', { y: 32, opacity: 0, duration: 0.8 }, '-=0.6');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex justify-center py-[56px] md:py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <img
        src="/home-problem-shape.svg"
        alt=""
        className="problem-shape absolute hidden lg:block"
        style={{ right: '-24px', top: '-1px', width: '360px', height: '213px', transform: 'scaleY(-1)' }}
        aria-hidden="true"
      />

      <div className="relative w-full" style={{ maxWidth: '1400px' }}>
        <p
          className="problem-title"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-xxl)',
            lineHeight: 'var(--text-title-xxl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
            maxWidth: '689px',
          }}
        >
          El problema principal es{' '}
          <span style={{ color: 'var(--color-orange-400)' }}>cómo integrar</span>
          {' '}IA sin perder calidad
        </p>
      </div>
    </section>
  );
}
