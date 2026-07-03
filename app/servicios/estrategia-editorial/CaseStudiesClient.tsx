'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type CaseStudy = {
  _id: string
  title: string
  subtitle: string
  slug: string
  imageCard: {
    asset: { url: string } | null
    alt?: string
  } | null
}

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: 'var(--text-body-accent-mono)',
  lineHeight: 'var(--text-body-accent-mono--line-height)',
  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
}

type CaseStudiesClientProps = {
  caseStudies: CaseStudy[]
  tag?: string
  title?: React.ReactNode
  subtitle?: string
}

export default function CaseStudiesClient({
  caseStudies,
  tag = '[CASOS DE ÉXITO]',
  title = (
    <>
      Explora cómo he{' '}
      <span style={{ color: 'var(--color-orange-400)' }}>ayudado</span>
      {' '}a otras editoriales
    </>
  ),
  subtitle = 'Experiencias de editoriales educativas que ya han trabajado conmigo. Descubre cómo hemos colaborado y los resultados que hemos conseguido.',
}: CaseStudiesClientProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.cs-header', start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      });

      tl.from('.cs-tag',      { y: -20, opacity: 0, duration: 0.5 })
        .from('.cs-title',    { y: 48,  opacity: 0, duration: 0.9 }, '-=0.2')
        .from('.cs-subtitle', { y: 32,  opacity: 0, duration: 0.7 }, '-=0.5');

      gsap.utils.toArray<Element>('.cs-card').forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-grey py-[56px] px-[20px]">
      <div className="mx-auto flex flex-col gap-[40px]" style={{ maxWidth: '1400px' }}>

        {/* Header */}
        <div className="cs-header flex flex-col gap-[16px]">
          <p className="cs-tag text-blue-300 opacity-65 uppercase" style={monoStyle}>
            {tag}
          </p>
          <div className="flex flex-col gap-[16px] md:flex-row md:items-end md:justify-between">
            <h2
              className="cs-title"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-title-l)',
                lineHeight: 'var(--text-title-l--line-height)',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-blue-400)',
                maxWidth: '689px',
              }}
            >
              {title}
            </h2>
            <p
              className="cs-subtitle"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-m)',
                lineHeight: 'var(--text-body-m--line-height)',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-blue-300)',
                maxWidth: '453px',
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-[16px]">
          {caseStudies.map((item) => (
            <Link
              key={item._id}
              href={`/casos-de-exito/${item.slug}`}
              className="cs-card relative bg-white rounded-[16px] p-[16px] md:p-[32px] flex flex-col md:flex-row md:items-center gap-[16px] md:gap-[80px]"
              style={{ minHeight: '98px' }}
            >
              {/* Image thumbnail */}
              <div
                className="shrink-0 rounded-[16px] md:rounded-[10px] overflow-hidden w-full h-[140px] md:w-[156px] md:h-[98px]"
                style={{ backgroundColor: 'var(--color-green)' }}
              >
                {item.imageCard?.asset?.url && (
                  <img
                    src={item.imageCard.asset.url}
                    alt={item.imageCard.alt ?? item.title}
                    className="size-full object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[8px] pr-[48px] md:flex-1 md:flex-row md:gap-[24px] md:items-start md:pr-0">
                <p
                  className="flex-1"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-xl)',
                    lineHeight: '30px',
                    fontWeight: 300,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-500)',
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="flex-1"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-m)',
                    lineHeight: 'var(--text-body-m--line-height)',
                    fontWeight: 300,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-300)',
                  }}
                >
                  {item.subtitle}
                </p>
              </div>

              {/* Arrow button */}
              <div
                className="absolute right-[16px] bottom-[16px] md:static shrink-0 flex items-center justify-center rounded-full"
                style={{ width: '32px', height: '32px', backgroundColor: 'var(--color-orange)' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.7523 4.28299L13.1931 4.27026L6.43134 4.27026L6.43134 5.41498L11.8256 5.41419L3.84598 13.3938L4.64148 14.1893L12.6215 6.20928L12.6211 11.6039L13.765 11.6039L13.765 4.84223L13.7523 4.28299Z" fill="white"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
