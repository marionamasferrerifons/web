'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const columnHeaderStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: '12px',
  letterSpacing: '0.5px',
  color: 'var(--color-blue-200)',
}

const linkStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-m)',
  lineHeight: 'var(--text-body-m--line-height)',
  fontWeight: 400,
  fontVariationSettings: '"opsz" 14',
}

const monoSmallStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: '13px',
  color: 'var(--color-blue-200)',
}

const SERVICES_ITEMS = [
  { href: '/servicios/estrategia-editorial', label: 'Innovación editorial con IA' },
  { href: '/servicios/servicios-editoriales', label: 'Servicios editoriales con IA aplicada' },
  { href: '/servicios/ecosistema-produccion-editorial', label: 'Sistema de producción editorial con IA' },
]

export type FooterLinkItem = { href: string; label: string };

export default function FooterClient({ caseStudiesItems }: { caseStudiesItems: FooterLinkItem[] }) {
  const footerRef = useRef<HTMLElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      })
        .from('.footer-divider', { scaleX: 0, transformOrigin: 'left', duration: 0.9, ease: 'power2.inOut' })
        .from('.footer-column', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
        .from('.footer-bottom', { opacity: 0, duration: 0.6 }, '-=0.3');
    }, footerRef);

    // Preceding sections (case studies in particular) render variable-length
    // Sanity content and swap in web fonts after mount, both of which can
    // change page height after ScrollTrigger already cached its positions.
    // Re-measure once things settle so the footer's trigger point stays accurate.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready?.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgb(229, 162, 124) 0.3%, rgb(115, 103, 137) 46.3%, rgb(1, 44, 151) 92.2%)',
        borderRadius: '0px',
      }}
    >
      <div
        className="relative flex flex-col gap-[56px] px-[20px] md:px-[40px] py-[64px] md:py-[96px]"
        style={{ maxWidth: '1440px', margin: '0 auto' }}
      >
        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-[auto_1fr] gap-[40px]">
          <div className="footer-column flex flex-col gap-[16px]">
            <img
              src="/logo.svg"
              alt="Mariona Masferrer"
              style={{ height: '32px', width: 'auto' }}
            />
            <p style={{ ...linkStyle, fontSize: '14px', color: 'var(--color-blue-100)', maxWidth: '220px' }}>
              Sistemas de producción editorial con IA, con el criterio humano en el centro.
            </p>

            <div style={{ height: '1px', width: '100%', maxWidth: '220px', backgroundColor: 'rgba(242, 242, 242, 0.2)' }} />

            <div className="flex flex-col gap-[12px]">
              <a
                href="mailto:mariona@masferrerifons.com"
                className="flex items-center gap-[8px] text-white hover:text-orange transition-colors duration-200 w-fit"
                style={{ ...linkStyle, fontSize: '14px' }}
              >
                <span className="flex items-center justify-center shrink-0" style={{ width: '18px', height: '18px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 12L12 15.5L17 12" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 20V9.13238C2 8.42985 2.3686 7.77884 2.97101 7.41739L10.971 2.61739C11.6044 2.23738 12.3956 2.23738 13.029 2.6174L21.029 7.4174C21.6314 7.77884 22 8.42985 22 9.13238V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z" stroke="var(--color-orange)" strokeWidth="1.5"/>
                  </svg>
                </span>
                mariona@masferrerifons.com
              </a>
              <a
                href="tel:+34622803203"
                className="flex items-center gap-[8px] text-white hover:text-orange transition-colors duration-200 w-fit"
                style={{ ...linkStyle, fontSize: '14px' }}
              >
                <span className="flex items-center justify-center shrink-0" style={{ width: '18px', height: '18px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                (+34) 622 80 32 03
              </a>
            </div>
          </div>

          <div className="contents lg:flex lg:gap-[40px] lg:justify-self-end">
          <div className="footer-column flex flex-col gap-[16px]">
            <p className="uppercase" style={columnHeaderStyle}>Servicios</p>
            <div className="flex flex-col gap-[12px]">
              {SERVICES_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-orange transition-colors duration-200 w-fit"
                  style={linkStyle}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column flex flex-col gap-[16px]" style={{ maxWidth: '220px' }}>
            <p className="uppercase" style={columnHeaderStyle}>Casos de éxito</p>
            <div className="flex flex-col gap-[12px]">
              {caseStudiesItems.length > 0 ? (
                caseStudiesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-orange transition-colors duration-200 w-fit"
                    style={{ ...linkStyle, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                  >
                    {item.label}
                  </Link>
                ))
              ) : (
                <p style={{ ...linkStyle, color: 'var(--color-blue-200)' }}>Próximamente</p>
              )}
            </div>
          </div>

          <div className="footer-column flex flex-col gap-[16px]" style={{ width: '150px' }}>
            <p className="uppercase" style={columnHeaderStyle}>Navegación</p>
            <div className="flex flex-col gap-[12px]">
              <Link href="/" className="text-white hover:text-orange transition-colors duration-200 w-fit" style={linkStyle}>
                Inicio
              </Link>
              <Link href="/enfoque" className="text-white hover:text-orange transition-colors duration-200 w-fit" style={linkStyle}>
                Enfoque
              </Link>
              <Link href="/sobre-mi" className="text-white hover:text-orange transition-colors duration-200 w-fit" style={linkStyle}>
                Sobre mí
              </Link>
              <a
                href="https://www.linkedin.com/in/marionamasferrerifons/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange transition-colors duration-200 w-fit"
                style={linkStyle}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          </div>
        </div>

        <div className="footer-divider w-full" style={{ height: '1px', backgroundColor: 'rgba(242, 242, 242, 0.2)' }} />

        {/* Bottom bar */}
        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-[16px]">
          <p style={monoSmallStyle}>© {year} Mariona Masferrer i Fons. Todos los derechos reservados.</p>
          <p style={monoSmallStyle}>Diseñado con criterio editorial + IA</p>
        </div>
      </div>
    </footer>
  );
}
