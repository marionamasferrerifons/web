'use client';

import { useState } from 'react';
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
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
}

export type NavDropdownItem = {
  href: string;
  label: string;
}

export default function NavDropdown({ label, items, activePrefix }: { label: string; items: NavDropdownItem[]; activePrefix?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = activePrefix ? pathname.startsWith(activePrefix) : false;

  return (
    <div
      className="relative flex items-center gap-[4px]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="relative text-white whitespace-nowrap uppercase cursor-pointer"
        style={monoStyle}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        {isActive && (
          <span
            className="absolute left-0 right-0 bg-orange"
            style={{ bottom: '-6px', height: '1.5px' }}
            aria-hidden="true"
          />
        )}
      </button>
      <svg
        width="14" height="7" viewBox="0 0 14 7"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200"
        style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        aria-hidden="true"
      >
        <path d="M1 1L7 6L13 1" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {open && items.length > 0 && (
        // Top starts flush at 100% (no dead zone) — the 16px visual gap is
        // padding *inside* this hoverable box, so the pointer never leaves
        // the subtree while moving from the label down into the menu.
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: '100%', paddingTop: '16px', minWidth: '260px' }}
        >
          <div
            className="flex flex-col rounded-[16px] bg-blue-500 overflow-hidden"
            style={{ boxShadow: '0 12px 32px rgba(1, 44, 151, 0.35)' }}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white normal-case whitespace-nowrap px-[20px] py-[12px] hover:bg-blue-400 transition-colors duration-150"
                style={sansStyle}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
