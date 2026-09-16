'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Pill = { dot: string; text: string; mlClass: string };

type Section2Props = {
  title: ReactNode;
  pills: Pill[];
};

export default function Section2({ title, pills }: Section2Props) {
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
          {title}
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
                  color: 'var(--color-text-secondary)',
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
