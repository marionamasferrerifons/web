'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

const sansStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 400,
}

export type MobileMenuItem = { href: string; label: string };

export default function MobileMenu({
  servicesItems,
  caseStudiesItems,
}: {
  servicesItems: MobileMenuItem[];
  caseStudiesItems: MobileMenuItem[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the menu whenever the route changes (e.g. after tapping a link).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden ml-auto">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 flex flex-col justify-center items-center gap-[5px] size-[40px] cursor-pointer"
      >
        <span
          className="block w-[22px] bg-white transition-transform duration-200"
          style={{ height: '1.5px', transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
        />
        <span
          className="block w-[22px] bg-white transition-opacity duration-200"
          style={{ height: '1.5px', opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-[22px] bg-white transition-transform duration-200"
          style={{ height: '1.5px', transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
        />
      </button>

      {open && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 bg-blue-500 overflow-y-auto"
          style={{ top: 'var(--navbar-height)' }}
        >
          <div className="flex flex-col gap-[28px] px-[25px] py-[32px]">
            <div className="flex flex-col gap-[16px]">
              <p className="uppercase text-white" style={monoStyle}>Servicios</p>
              <div className="flex flex-col gap-[16px] pl-[12px]">
                {servicesItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-white" style={sansStyle}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {caseStudiesItems.length > 0 && (
              <div className="flex flex-col gap-[16px]">
                <p className="uppercase text-white" style={monoStyle}>Casos de éxito</p>
                <div className="flex flex-col gap-[16px] pl-[12px]">
                  {caseStudiesItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-white" style={sansStyle}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link href="/enfoque" className="text-white uppercase" style={monoStyle}>
              Enfoque
            </Link>

            <Link href="/sobre-mi" className="text-white uppercase" style={monoStyle}>
              Sobre mí
            </Link>

            <div
              className="flex items-center gap-[12px] pt-[24px]"
              style={{ borderTop: '1px solid rgba(242, 242, 242, 0.15)' }}
            >
              <div
                className="flex items-center gap-[8px] border border-[#d4d4d4] rounded-full px-[11px]"
                style={{ height: '28px' }}
              >
                <span className="text-white" style={monoStyle}>ES</span>
                <svg
                  width="14" height="7" viewBox="0 0 14 7"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M1 1L7 6L13 1" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <button
              className="group flex items-center justify-center gap-[8px] bg-grey rounded-full px-[20px] cursor-pointer"
              style={{ height: '44px' }}
            >
              <span className="text-orange uppercase" style={{ ...monoStyle, fontSize: '12px' }}>
                Reservar una llamada
              </span>
              <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[24px]">
                <img src="/hero-arrow.svg" alt="" className="size-[14px]" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
