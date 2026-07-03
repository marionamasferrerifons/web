'use client';

import { useEffect, useRef } from 'react';
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-[20px] last:mb-0" style={{ whiteSpace: 'pre-line' }}>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-[20px] flex flex-col gap-[16px]">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ whiteSpace: 'pre-line' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ fontWeight: 700, fontSize: '18px' }}>{children}</strong>
    ),
  },
};

type SolutionSectionProps = {
  title: string
  text: PortableTextBlock[]
}

export default function SolutionSection({ title, text }: SolutionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      }).from('.solution-content > *', { y: 32, opacity: 0, duration: 0.8, stagger: 0.15 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="solution-content flex flex-col gap-[16px] w-full" style={{ maxWidth: '690px' }}>
        <p
          className="uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-300)',
          }}
        >
          Solución
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
          }}
        >
          {title}
        </h2>

        <div
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-300)',
          }}
        >
          <PortableText value={text} components={bodyComponents} />
        </div>
      </div>
    </section>
  );
}
