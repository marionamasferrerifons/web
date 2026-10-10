'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';

const labelStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: 'var(--text-body-accent-mono)',
  lineHeight: 'var(--text-body-accent-mono--line-height)',
  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
} as const;

// Bombolla de conversa genèrica (sense logotip de marca), com a la maqueta.
function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8L4 19Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowCircle() {
  return (
    <span className="flex items-center justify-center bg-orange rounded-full shrink-0" style={{ width: '40px', height: '40px' }}>
      <img
        src="/arrow-white.svg"
        alt=""
        className="transition-transform duration-300 ease-out group-hover:rotate-45"
        style={{ width: '16px', height: '16px' }}
        aria-hidden="true"
      />
    </span>
  );
}

type ButtonProps = {
  href: string;
  variant: 'primary' | 'secondary';
  /** Fons de la secció on va el botó: `color` (verd, blau...) o `white`. Només afecta la variant `primary`. */
  surface?: 'color' | 'white';
  inverted?: boolean;
  icon?: 'chat';
  children: ReactNode;
};

/**
 * Botó compartit de la pàgina "Estrategia de IA": variant `primary` (pastilla
 * + cercle taronja amb fletxa) i `secondary` (vora, sense cercle). La pastilla
 * principal és blanca sobre fons de color i gris sobre fons blanc, perquè
 * sempre contrasti amb la superfície. `inverted` commuta el color de
 * vora/text de la variant secundària quan el fons és fosc (--color-blue-500).
 * Un `href` intern (que no comença per `http`) navega amb `next/link`; un
 * d'extern obre en una pestanya nova.
 */
export default function Button({ href, variant, surface = 'color', inverted = false, icon, children }: ButtonProps) {
  const isExternal = href.startsWith('http');
  const Tag = isExternal ? 'a' : Link;
  const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  const focusClass = 'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]';

  if (variant === 'primary') {
    const surfaceClass = surface === 'white' ? 'bg-grey hover:bg-blue-100' : 'bg-white hover:bg-grey';
    return (
      <Tag
        href={href}
        {...externalProps}
        className={`group flex items-center justify-between md:justify-center gap-[16px] ${surfaceClass} rounded-full cursor-pointer transition-colors duration-[330ms] ease-linear w-full md:w-fit ${focusClass}`}
        style={{ paddingLeft: '24px', paddingRight: '8px', minHeight: '56px', outlineColor: 'var(--color-blue-800)' }}
      >
        <span className="text-text-accent uppercase whitespace-nowrap" style={labelStyle}>
          {children}
        </span>
        <ArrowCircle />
      </Tag>
    );
  }

  const color = inverted ? 'var(--color-white)' : 'var(--color-blue-500)';
  const hoverClass = inverted ? 'hover:bg-white/10' : 'hover:bg-blue-500/[0.07]';

  return (
    <Tag
      href={href}
      {...externalProps}
      className={`flex items-center justify-center gap-[12px] rounded-full cursor-pointer transition-colors duration-[330ms] ease-linear w-full md:w-fit ${hoverClass} ${focusClass}`}
      style={{
        paddingLeft: '24px',
        paddingRight: '24px',
        minHeight: '56px',
        border: `1.5px solid ${color}`,
        color,
        outlineColor: inverted ? 'var(--color-white)' : 'var(--color-blue-800)',
      }}
    >
      {icon === 'chat' && <ChatIcon />}
      <span className="uppercase whitespace-nowrap" style={labelStyle}>
        {children}
      </span>
    </Tag>
  );
}
