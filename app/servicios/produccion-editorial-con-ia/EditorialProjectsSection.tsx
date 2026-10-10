'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectImageUrl } from '@/sanity/image';
import SectionTag from '@/components/service/SectionTag';

export type EditorialProject = {
  _id: string;
  year: string;
  grade: string;
  publisher: string;
  role: string;
  title: string;
  image: {
    asset: { _id: string; url: string } | null;
    alt?: string;
  } | null;
};

const metaStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-m)',
  lineHeight: '24px',
  fontWeight: 300,
} as const;

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: 'var(--text-body-accent-mono)',
  lineHeight: 'var(--text-body-accent-mono--line-height)',
  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
} as const;

function ArrowIcon({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'next' ? 'M5 12h14M13 6l6 6-6 6' : 'M19 12H5M11 6l-6 6 6 6'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project }: { project: EditorialProject }) {
  return (
    <li
      className="project-card shrink-0 snap-start flex flex-col overflow-hidden w-[76%] sm:w-[280px]"
      style={{ backgroundColor: 'var(--color-grey)', borderRadius: '16px' }}
    >
      {/* La coberta es mostra sencera (object-contain) dins una caixa 7:10,
          la proporció més habitual dels llibres; les més quadrades queden
          assentades a la base, com en una prestatgeria. */}
      <div className="shrink-0 px-[24px] pt-[24px]">
        <div className="relative w-full" style={{ aspectRatio: '7 / 10' }}>
          {project.image?.asset?._id ? (
            <Image
              src={projectImageUrl(project.image.asset._id)}
              alt={project.image.alt || `Cubierta de ${project.title}`}
              fill
              sizes="(min-width: 640px) 232px, 65vw"
              className="object-contain object-bottom"
              style={{ filter: 'drop-shadow(0 6px 12px rgba(1, 24, 83, 0.16))' }}
            />
          ) : (
            <div className="absolute inset-0 rounded-[8px]" style={{ backgroundColor: 'var(--color-blue-100)' }} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[12px] flex-1 p-[24px]">
        <div className="flex flex-wrap items-center gap-[8px]">
          <span
            className="uppercase"
            style={{ ...monoStyle, backgroundColor: 'var(--color-orange-400)', color: 'var(--color-blue-800)', borderRadius: '6px', padding: '0 8px' }}
          >
            {project.year}
          </span>
          <span className="uppercase" style={{ ...monoStyle, fontSize: '12px', color: 'var(--color-text-secondary)' }}>
            {project.grade}
          </span>
        </div>
        <h3
          className="line-clamp-3"
          title={project.title}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-l)',
            lineHeight: '26px',
            fontWeight: 400,
            color: 'var(--color-blue-500)',
          }}
        >
          {project.title}
        </h3>
        <dl className="flex flex-col gap-[4px] mt-auto">
          <div className="flex gap-[6px]">
            <dt style={{ ...metaStyle, fontWeight: 400, color: 'var(--color-text-secondary)' }}>Rol:</dt>
            <dd style={{ ...metaStyle, color: 'var(--color-blue-800)' }}>{project.role}</dd>
          </div>
          <div className="flex gap-[6px]">
            <dt style={{ ...metaStyle, fontWeight: 400, color: 'var(--color-text-secondary)' }}>Editorial:</dt>
            <dd style={{ ...metaStyle, color: 'var(--color-blue-800)' }}>{project.publisher}</dd>
          </div>
        </dl>
      </div>
    </li>
  );
}

/**
 * Carrusel de projectes editorials (project-carousel), redissenyat: tota la
 * informació de cada projecte és visible sempre (sense capa blava ni contingut
 * rere hover), els projectes van dels més recents als més antics i el
 * desplaçament fa servir scroll-snap natiu (lliscable en tàctil, navegable amb
 * teclat i amb els botons). Sense bucle infinit: els botons es desactiven als
 * extrems.
 */
export default function EditorialProjectsSection({ projects }: { projects: EditorialProject[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Del més recent al més antic. parseInt tolera anys com «2023-2024»; com que
  // sort és estable, dins d'un mateix any es manté l'«Orden» manual de Sanity.
  const sorted = useMemo(
    () => [...projects].sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0)),
    [projects],
  );

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.projects-header > *', {
        y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.projects-header', start: 'top 80%' },
      });
      gsap.from('.project-card', {
        x: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.projects-track', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scroll = (direction: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.project-card');
    const step = card ? card.offsetWidth + 16 : 296;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: direction === 'next' ? step * 2 : -step * 2, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const navButtonClass =
    'flex items-center justify-center rounded-full size-[56px] transition-colors duration-200 disabled:opacity-40 disabled:cursor-default enabled:hover:bg-blue-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]';

  return (
    <section ref={sectionRef} className="w-full py-[64px] md:py-[96px]" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="px-[20px] md:px-[40px]">
        <div
          className="projects-header mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-[24px] lg:gap-[40px] lg:items-end"
          style={{ maxWidth: '1160px' }}
        >
          <div className="lg:col-span-5 flex flex-col gap-[16px]">
            <SectionTag color="var(--color-text-secondary)">[PROYECTOS EDITORIALES]</SectionTag>
            <h2
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-title-l)',
                lineHeight: 'var(--text-title-l--line-height)',
                fontWeight: 400,
                color: 'var(--color-blue-400)',
                textWrap: 'balance',
              }}
            >
              Proyectos que ya he{' '}
              <span style={{ color: 'var(--color-orange-400)' }}>editado</span>
              {' '}y{' '}
              <span style={{ color: 'var(--color-orange-400)' }}>coordinado</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-[24px]">
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                maxWidth: '560px',
              }}
            >
              Desde 2021, todas las editoriales que han trabajado conmigo me han encargado el proyecto siguiente. La recurrencia es la mejor recompensa al trabajo bien hecho.
            </p>
            <div className="flex gap-[12px]">
              <button
                type="button"
                onClick={() => scroll('prev')}
                disabled={atStart}
                aria-label="Proyectos anteriores"
                aria-controls="editorial-projects-track"
                className={navButtonClass}
                style={{ backgroundColor: 'var(--color-grey)', color: 'var(--color-blue-500)', outlineColor: 'var(--color-blue-800)' }}
              >
                <ArrowIcon direction="prev" />
              </button>
              <button
                type="button"
                onClick={() => scroll('next')}
                disabled={atEnd}
                aria-label="Proyectos siguientes"
                aria-controls="editorial-projects-track"
                className={navButtonClass}
                style={{ backgroundColor: 'var(--color-grey)', color: 'var(--color-blue-500)', outlineColor: 'var(--color-blue-800)' }}
              >
                <ArrowIcon direction="next" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul
        ref={trackRef}
        id="editorial-projects-track"
        onScroll={updateEdges}
        tabIndex={0}
        aria-label="Proyectos editoriales, desplazamiento horizontal"
        className="projects-track mt-[40px] flex gap-[16px] overflow-x-auto snap-x snap-mandatory pb-[16px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[-3px]"
        style={{
          paddingInline: 'max(20px, calc((100% - 1160px) / 2))',
          scrollPaddingInline: 'max(20px, calc((100% - 1160px) / 2))',
          scrollbarWidth: 'thin',
          outlineColor: 'var(--color-blue-800)',
        }}
      >
        {sorted.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ul>
    </section>
  );
}
