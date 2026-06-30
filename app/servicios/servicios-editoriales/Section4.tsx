'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CARD_WIDTH = 280;
const GAP = 16;
const ITEM_WIDTH = CARD_WIDTH + GAP;
const SCROLL_BY = ITEM_WIDTH * 3;

const projects = [
  { year: '2024', grade: '2º primaria', publisher: 'Editorial SM', title: 'Cuaderno de Lengua Castellana y Literatura', image: '/project-placeholder.jpg' },
  { year: '2024', grade: '3º primaria', publisher: 'Editorial SM', title: 'Cuaderno de Matemáticas', image: '/project-placeholder.jpg' },
  { year: '2023', grade: '1º ESO', publisher: 'Editorial Edebé', title: 'Lengua y Literatura', image: '/project-placeholder.jpg' },
  { year: '2023', grade: '4º primaria', publisher: 'Editorial Vicens Vives', title: 'Ciencias Naturales', image: '/project-placeholder.jpg' },
  { year: '2023', grade: '2º ESO', publisher: 'Editorial Santillana', title: 'Geografía e Historia', image: '/project-placeholder.jpg' },
  { year: '2022', grade: '5º primaria', publisher: 'Editorial Anaya', title: 'Ciencias Sociales', image: '/project-placeholder.jpg' },
  { year: '2022', grade: '3º ESO', publisher: 'Editorial Edebé', title: 'Biología y Geología', image: '/project-placeholder.jpg' },
  { year: '2022', grade: '1º primaria', publisher: 'Editorial SM', title: 'Matemáticas Activas', image: '/project-placeholder.jpg' },
  { year: '2021', grade: '6º primaria', publisher: 'Editorial Vicens Vives', title: 'Lengua Castellana', image: '/project-placeholder.jpg' },
  { year: '2021', grade: '4º ESO', publisher: 'Editorial Santillana', title: 'Física y Química', image: '/project-placeholder.jpg' },
  { year: '2021', grade: '2º primaria', publisher: 'Editorial Anaya', title: 'Educación Artística', image: '/project-placeholder.jpg' },
  { year: '2020', grade: '1º bachillerato', publisher: 'Editorial SM', title: 'Historia de España', image: '/project-placeholder.jpg' },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
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
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Blue gradient overlay — hidden on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 rounded-[10px]"
          style={{ background: 'linear-gradient(212.57deg, rgba(1, 44, 151, 0.45) 0.84%, rgba(1, 44, 151, 0) 39.95%)' }}
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
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-[8px]" style={{ minHeight: 92 }}>
        <div className="flex items-center gap-[8px]">
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--text-body-m--line-height)',
              fontWeight: 300,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-300)',
            }}
          >
            {project.grade}
          </span>
          <span style={{ color: 'var(--color-blue-300)' }}>·</span>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--text-body-m--line-height)',
              fontWeight: 300,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-300)',
            }}
          >
            {project.publisher}
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-xl)',
            lineHeight: 'var(--text-body-xl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-500)',
          }}
        >
          {project.title}
        </p>
      </div>

    </div>
  );
}

// Render 3 copies so we can loop seamlessly
const tripled = [...projects, ...projects, ...projects];
const SET_WIDTH = projects.length * ITEM_WIDTH;

export default function Section4() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

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

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el || isScrolling.current) return;
    isScrolling.current = true;

    el.scrollBy({ left: dir === 'next' ? SCROLL_BY : -SCROLL_BY, behavior: 'smooth' });

    // After animation, silently reset to middle copy if needed
    setTimeout(() => {
      if (el.scrollLeft >= SET_WIDTH * 2) {
        el.scrollLeft -= SET_WIDTH;
      } else if (el.scrollLeft < SET_WIDTH / 2) {
        el.scrollLeft += SET_WIDTH;
      }
      isScrolling.current = false;
    }, 450);
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
              color: 'var(--color-blue-300)',
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
              Explora los proyectos que ya he{' '}
              <span style={{ color: 'var(--color-orange-400)' }}>liderado</span>
            </h2>
            <p
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
              Proyectos de editoriales educativas que ya han trabajado conmigo. Descubre cómo hemos trabajado y los resultados que hemos conseguido.
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
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
