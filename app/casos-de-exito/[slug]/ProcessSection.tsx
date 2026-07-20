'use client';

import { useEffect, useRef, useState } from 'react';
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const [lightboxImage, setLightboxImage] = useState<ProcessImage | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      }).from('.process-content > *', { y: 32, opacity: 0, duration: 0.8, stagger: 0.15 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!lightboxImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

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
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightboxImage(image)}
                  aria-label="Ampliar imagen"
                  className="relative overflow-hidden rounded-[8px] flex-1 cursor-zoom-in"
                  style={{ minWidth: '280px', height: '320px' }}
                >
                  <img
                    src={image.asset.url}
                    alt={image.alt ?? ''}
                    className="size-full object-cover transition-transform duration-300 ease-out hover:scale-110"
                  />
                </button>
              )
            ))}
          </div>
        )}
      </div>

      {lightboxImage?.asset?.url && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-[24px] bg-black/90"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Cerrar"
            className="absolute flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            style={{ top: '24px', right: '24px', width: '44px', height: '44px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={lightboxImage.asset.url}
            alt={lightboxImage.alt ?? ''}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-[8px]"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          />
        </div>
      )}
    </section>
  );
}
