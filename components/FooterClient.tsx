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
        scrollTrigger: { trigger: footerRef.current, start: 'top 85%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.footer-divider', { scaleX: 0, transformOrigin: 'left', duration: 0.9, ease: 'power2.inOut' })
        .from('.footer-column', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
        .from('.footer-bottom', { opacity: 0, duration: 0.6 }, '-=0.3');
    }, footerRef);

    return () => ctx.revert();
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px]">
          <div className="footer-column flex flex-col gap-[16px]">
            <img
              src="/logo.svg"
              alt="Mariona Masferrer"
              style={{ height: '32px', width: 'auto' }}
            />
            <p style={{ ...linkStyle, fontSize: '14px', color: 'var(--color-blue-100)', maxWidth: '220px' }}>
              Sistemas de producción editorial con IA, con el criterio humano en el centro.
            </p>
          </div>

          <div className="footer-column flex flex-col gap-[16px]">
            <p className="uppercase" style={columnHeaderStyle}>Servicios</p>
            <div className="flex flex-col gap-[12px]">
              {SERVICES_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors duration-200 w-fit"
                  style={linkStyle}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column flex flex-col gap-[16px]">
            <p className="uppercase" style={columnHeaderStyle}>Casos de éxito</p>
            <div className="flex flex-col gap-[12px]">
              {caseStudiesItems.length > 0 ? (
                caseStudiesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-orange-400 transition-colors duration-200 w-fit"
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

          <div className="footer-column flex flex-col gap-[16px]">
            <p className="uppercase" style={columnHeaderStyle}>Navegación</p>
            <div className="flex flex-col gap-[12px]">
              <Link href="/" className="text-white hover:text-orange-400 transition-colors duration-200 w-fit" style={linkStyle}>
                Inicio
              </Link>
              <Link href="/enfoque" className="text-white hover:text-orange-400 transition-colors duration-200 w-fit" style={linkStyle}>
                Enfoque
              </Link>
              <Link href="/sobre-mi" className="text-white hover:text-orange-400 transition-colors duration-200 w-fit" style={linkStyle}>
                Sobre mí
              </Link>
              <a
                href="https://www.linkedin.com/in/marionamasferrerifons/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-200 w-fit"
                style={linkStyle}
              >
                LinkedIn ↗
              </a>
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
