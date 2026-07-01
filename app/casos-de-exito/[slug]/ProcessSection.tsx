'use client';

import { useEffect, useRef } from 'react';
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react';
import gsap from 'gsap';

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-[20px] last:mb-0" style={{ whiteSpace: 'pre-line' }}>{children}</p>,
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ fontWeight: 700, fontSize: '20px' }}>{children}</strong>
    ),
  },
};

type ProcessImage = {
  asset: { url: string } | null
  alt?: string
}

type ProcessSectionProps = {
  title: string
  text: PortableTextBlock[]
  images: ProcessImage[]
}

export default function ProcessSection({ title, text, images }: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasImages = images && images.length > 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-content > *', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="process-content flex flex-col items-center gap-[40px] w-full" style={{ maxWidth: '690px' }}>
        <div className="flex flex-col gap-[32px] w-full">
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

        {hasImages && (
          <div className="flex flex-wrap gap-[24px] justify-center w-full">
            {images.map((image, i) => (
              image.asset?.url && (
                <img
                  key={i}
                  src={image.asset.url}
                  alt={image.alt ?? ''}
                  className="rounded-[8px] object-cover flex-1"
                  style={{ minWidth: '280px', height: '320px' }}
                />
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
