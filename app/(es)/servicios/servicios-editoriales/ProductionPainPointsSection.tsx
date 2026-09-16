'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Pill({ dot, text, indent = false }: { dot: string; text: string; indent?: boolean }) {
  return (
    <div
      className="s2-pill bg-white inline-flex items-center gap-[8px] p-[14px] rounded-[8px] w-fit"
      style={{ marginLeft: indent ? '80px' : '0' }}
    >
      <div className="rounded-full shrink-0 size-[10px]" style={{ backgroundColor: dot }} />
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-body-m)',
          lineHeight: 'var(--text-body-m--line-height)',
          fontWeight: 400,
          fontVariationSettings: '"opsz" 14',
          color: 'var(--color-text-secondary)',
        }}
      >
        {text}
      </p>
    </div>
  );
}

type Section2Props = {
  title1: string;
  title2: ReactNode;
  row1: { dot: string; text: string; indent?: boolean }[];
  row2: { dot: string; text: string; indent?: boolean }[];
};

export default function Section2({ title1, title2, row1, row2 }: Section2Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title entrance — one-shot fade + slide up, matching the header
      // treatment used in ServiceOfferingsSection (.s3-header)
      gsap.from('.s2-title-1', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.s2-title-1', start: 'top 80%' },
      });

      gsap.from('.s2-title-2', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.s2-title-2', start: 'top 80%' },
      });

      // Pills: hidden initially, each row animates in independently once that row is in view
      gsap.set('.s2-pill', { opacity: 0, y: 24 });
      ['.s2-pills-row-1', '.s2-pills-row-2'].forEach((rowSelector) => {
        ScrollTrigger.create({
          trigger: rowSelector,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(`${rowSelector} .s2-pill`, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.12,
            });
          },
          once: true,
        });
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
      <div className="w-full flex flex-col gap-[134px]" style={{ maxWidth: '1400px' }}>

        {/* Row 1: Title left | Pills right */}
        <div className="flex flex-col gap-[40px] md:flex-row md:items-start md:gap-[40px]">
          <h2
            className="s2-title-1 flex-1"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
            }}
          >
            {title1}
          </h2>

          <div className="s2-pills-row-1 flex flex-col gap-[16px] flex-1">
            {row1.map((pill, i) => (
              <Pill key={i} {...pill} />
            ))}
          </div>
        </div>

        {/* Row 2: Pills left | Title right */}
        <div className="flex flex-col gap-[40px] md:flex-row md:items-end md:gap-[40px]">
          <div className="s2-pills-row-2 flex flex-col gap-[16px] flex-1">
            {row2.map((pill, i) => (
              <Pill key={i} {...pill} />
            ))}
          </div>

          <h2
            className="s2-title-2 flex-1 text-left md:text-right"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
            }}
          >
            {title2}
          </h2>
        </div>

      </div>
    </section>
  );
}
