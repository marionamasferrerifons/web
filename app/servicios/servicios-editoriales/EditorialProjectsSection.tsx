'use client';

import { useRef, useEffect, type PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectImageUrl } from '@/sanity/image';

const CARD_WIDTH = 280;
const GAP = 16;
const ITEM_WIDTH = CARD_WIDTH + GAP;
const SCROLL_BY = ITEM_WIDTH * 3;

const metaTextStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-m)',
  lineHeight: 'var(--text-body-m--line-height)',
  fontWeight: 300,
  fontVariationSettings: '"opsz" 14',
  color: 'var(--color-text-secondary)',
} as const;

const metaLabelStyle = { fontWeight: 600 } as const;

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

function ProjectCard({ project }: { project: EditorialProject }) {
  return (
    <div className="group flex flex-col gap-[16px] shrink-0 cursor-pointer" style={{ width: CARD_WIDTH }}>

      {/* Year badge — visible on hover */}
      <div className="h-[32px] flex items-center">
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center px-[16px] rounded-[8px] overflow-hidden"
          style={{
            backgroundColor: 'var(--color-orange-400)',
            height: '32px',
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '24px',
            color: 'var(--color-blue-800)',
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Image */}
      <div className="relative rounded-[10px] overflow-hidden shrink-0" style={{ width: CARD_WIDTH, height: 380 }}>
        {project.image?.asset?._id ? (
          <Image
            src={projectImageUrl(project.image.asset._id)}
            alt={project.image.alt || project.title}
            fill
            sizes="280px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-green)' }} />
        )}
        {/* Blue gradient overlay — hidden on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 rounded-[10px]"
          style={{ background: 'linear-gradient(212.57deg, rgba(1, 44, 151, 0.18) 0.84%, rgba(1, 44, 151, 0) 39.95%)' }}
        />
        {/* Orange arrow — hidden on hover */}
        <div
          className="absolute top-[16px] right-[16px] flex items-center justify-center rounded-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          style={{ width: 32, height: 32, backgroundColor: 'var(--color-orange)' }}
        >
          <img src="/hero-arrow.svg" alt="" className="size-[16px]" aria-hidden="true" />
        </div>
      </div>

      {/* Text info — visible on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-[8px]">
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-l)',
            lineHeight: 'var(--text-body-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-500)',
          }}
        >
          {project.title}
        </p>
        <p style={metaTextStyle}>
          <span style={metaLabelStyle}>Rol:</span> {project.role}
        </p>
        <p style={metaTextStyle}>
          <span style={metaLabelStyle}>Etapa:</span> {project.grade}
        </p>
        <p style={metaTextStyle}>
          <span style={metaLabelStyle}>Editorial:</span> {project.publisher}
        </p>
      </div>

    </div>
  );
}

export default function EditorialProjectsSection({ projects }: { projects: EditorialProject[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  // Render 3 copies so we can loop seamlessly
  const tripled = [...projects, ...projects, ...projects];
  const SET_WIDTH = projects.length * ITEM_WIDTH;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Start scrolled to the middle copy
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = SET_WIDTH;
    }

    const ctx = gsap.context(() => {
      gsap.from('.s4-header > *', {
        y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.s4-header', start: 'top 80%' },
      });
      gsap.from('.s4-card', {
        x: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.s4-track', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Keeps the illusion of an infinite loop: silently jumps back to the
  // middle copy once the user has scrolled (by arrow or drag) into the
  // first or third copy of the track.
  const resetLoopBounds = (el: HTMLDivElement) => {
    if (el.scrollLeft >= SET_WIDTH * 2) {
      el.scrollLeft -= SET_WIDTH;
    } else if (el.scrollLeft < SET_WIDTH / 2) {
      el.scrollLeft += SET_WIDTH;
    }
  };

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el || isScrolling.current) return;
    isScrolling.current = true;

    el.scrollBy({ left: dir === 'next' ? SCROLL_BY : -SCROLL_BY, behavior: 'smooth' });

    setTimeout(() => {
      resetLoopBounds(el);
      isScrolling.current = false;
    }, 450);
  };

  // Mouse-only drag-to-scroll — touch/trackpad already get native
  // horizontal scrolling from overflow-x-auto, so we don't touch those.
  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX;
    dragStartScrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = dragStartScrollLeft.current - (e.pageX - dragStartX.current);
  };

  const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const el = scrollRef.current;
    if (!el) return;
    el.style.cursor = 'grab';
    el.style.userSelect = '';
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    resetLoopBounds(el);
  };

  return (
    <section ref={sectionRef} className="w-full py-[56px]" style={{ backgroundColor: 'var(--color-grey)' }}>
      <div className="w-full flex flex-col gap-[40px] px-[20px] md:px-[40px]" style={{ maxWidth: '1480px', margin: '0 auto' }}>

        {/* Header */}
        <div className="s4-header flex flex-col gap-[16px]">
          <p
            className="opacity-65 uppercase"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              color: 'var(--color-text-secondary)',
            }}
          >
            [PROYECTOS EDITORIALES]
          </p>
          <div className="flex flex-col gap-[16px] md:flex-row md:items-end md:justify-between">
            <h2
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
              Proyectos que ya he {' '}
              <span style={{ color: 'var(--color-orange-400)' }}>editado</span>{' '}
              y {' '}
              <span style={{ color: 'var(--color-orange-400)' }}>coordinado</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-m)',
                lineHeight: 'var(--text-body-m--line-height)',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-text-secondary)',
                maxWidth: '453px',
              }}
            >
              Desde 2021, todas las editoriales que han trabajado conmigo me han encargado el proyecto siguiente. La recurrencia es la mejor recompensa al trabajo bien hecho.
            </p>
          </div>
        </div>

        {/* Nav arrows */}
        <div className="flex justify-end gap-[12px]">
          <button
            onClick={() => scroll('prev')}
            aria-label="Anterior"
            className="flex items-center justify-center rounded-full size-[56px] bg-white hover:bg-gray-50 transition-colors duration-200"
            style={{ transform: 'rotate(180deg)' }}
          >
            <img src="/carousel-arrow.svg" alt="" className="size-[28px]" aria-hidden="true" />
          </button>
          <button
            onClick={() => scroll('next')}
            aria-label="Siguiente"
            className="flex items-center justify-center rounded-full size-[56px] bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <img src="/carousel-arrow.svg" alt="" className="size-[28px]" aria-hidden="true" />
          </button>
        </div>

      </div>

      {/* Carousel track — full viewport width, left-padded to match content */}
      <div
        ref={scrollRef}
        className="s4-track flex gap-[16px] overflow-x-auto pb-[8px] pl-[20px] md:pl-[40px]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {tripled.map((project, i) => (
          <div key={i} className="s4-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

    </section>
  );
}
