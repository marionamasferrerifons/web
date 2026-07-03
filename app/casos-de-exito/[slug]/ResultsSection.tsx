'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ResultItem = {
  number: string
  label: string
}

const cardStyles = [
  { backgroundColor: 'var(--color-orange-400)', numberColor: 'var(--color-blue-500)' },
  { backgroundColor: 'var(--color-orange)', numberColor: 'var(--color-blue-500)' },
  { backgroundColor: 'var(--color-blue-400)', numberColor: 'var(--color-blue-200)' },
];

export default function ResultsSection({ results }: { results: ResultItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.result-tag', { y: -16, opacity: 0, duration: 0.6 })
        .from('.result-card', { y: 32, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.15');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[64px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="flex flex-col items-center gap-[24px] w-full" style={{ maxWidth: '1154px' }}>
        <p
          className="result-tag uppercase text-center"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-300)',
          }}
        >
          Resultados
        </p>

        <div className="flex flex-col md:flex-row gap-[20px] items-stretch w-full">
          {results.map((result, i) => (
            <div
              key={i}
              className="result-card flex-1 flex flex-col justify-between rounded-[16px] p-[24px]"
              style={{ backgroundColor: cardStyles[i].backgroundColor, minHeight: '200px' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-title-xl)',
                  lineHeight: 'var(--text-title-xl--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: cardStyles[i].numberColor,
                }}
              >
                {result.number}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--text-body-l--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-white)',
                }}
              >
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
