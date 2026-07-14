'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative text-white hover:text-orange whitespace-nowrap uppercase transition-colors duration-200"
      style={monoStyle}
    >
      {children}
      {isActive && (
        <span
          className="absolute left-0 right-0 bg-orange"
          style={{ bottom: '-6px', height: '1.5px' }}
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
