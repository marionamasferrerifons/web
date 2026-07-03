'use client';

import { useEffect, useRef } from 'react';
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const itemComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p style={{ margin: 0 }}>{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 600 }}>{children}</strong>,
  },
};

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <circle cx="16" cy="16" r="16" fill="var(--color-blue-100)" />
      <path d="M12 12L20 20M20 12L12 20" stroke="var(--color-blue-300)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <circle cx="16" cy="16" r="16" fill="var(--color-blue-500)" />
      <path d="M10 16.5L14 20.5L22 12" stroke="var(--color-white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type BeforeAfterItem = {
  text: PortableTextBlock[]
}

type BeforeAfterSectionProps = {
  beforeItems: BeforeAfterItem[]
  afterItems: BeforeAfterItem[]
}

export default function BeforeAfterSection({ beforeItems, afterItems }: BeforeAfterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.ba-title', { y: 32, opacity: 0, duration: 0.7, stagger: 0.15 })
        .from('.ba-item', { y: 24, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div
        className="before-after-content grid grid-cols-1 md:grid-cols-2 gap-x-[64px] gap-y-[48px] w-full"
        style={{ maxWidth: '1164px' }}
      >
        <div className="flex flex-col gap-[32px]">
          <h2
            className="ba-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-s)',
              lineHeight: 'var(--text-title-s--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-300)',
            }}
          >
            Antes
          </h2>
          <div className="flex flex-col gap-[24px]">
            {beforeItems.map((item, i) => (
              <div key={i} className="ba-item flex gap-[16px] items-center">
                <XIcon />
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-l)',
                    lineHeight: 'var(--text-body-l--line-height)',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-300)',
                  }}
                >
                  <PortableText value={item.text} components={itemComponents} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[32px]">
          <h2
            className="ba-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-s)',
              lineHeight: 'var(--text-title-s--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-500)',
            }}
          >
            Después
          </h2>
          <div className="flex flex-col gap-[24px]">
            {afterItems.map((item, i) => (
              <div key={i} className="ba-item flex gap-[16px] items-center">
                <CheckIcon />
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-l)',
                    lineHeight: 'var(--text-body-l--line-height)',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-500)',
                  }}
                >
                  <PortableText value={item.text} components={itemComponents} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
