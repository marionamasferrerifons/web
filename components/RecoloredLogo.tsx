import type { CSSProperties } from 'react';

const LUMINANCE_MASK_LOGOS = ['mcgrawhill'];

function normalizeLogoName(name: string) {
  return name.toLowerCase().replace(/é/g, 'e').replace(/\s+/g, '');
}

export function needsLuminanceMask(name: string) {
  return LUMINANCE_MASK_LOGOS.some((n) => normalizeLogoName(name).includes(n));
}

type RecoloredLogoProps = {
  src: string;
  /** Client/brand name (or the source alt text) — used only to pick the
   * recoloring technique, not rendered. */
  name: string;
  alt?: string;
  opacity?: number;
  style?: CSSProperties;
  className?: string;
  'aria-hidden'?: boolean;
};

// Recolors any logo to a translucent white silhouette so it blends into a
// colored background, regardless of the source asset's own colors. Falls
// back to a luminance mask for assets with no transparency at all (e.g.
// McGraw-Hill's solid red-square logo), which a brightness/invert filter
// can't handle since that technique relies on alpha to reveal the shape.
export default function RecoloredLogo({ src, name, alt = '', opacity = 0.4, style, className, ...rest }: RecoloredLogoProps) {
  if (needsLuminanceMask(name)) {
    return (
      <div
        role="img"
        aria-label={alt || name}
        className={className}
        style={{
          // The mask branch has no intrinsic size (it's a plain div), so it
          // needs a default box shape — square works for the one asset that
          // needs this path today. Callers can override via style.
          aspectRatio: '1 / 1',
          opacity,
          backgroundColor: 'white',
          maskImage: `url(${src})`,
          maskMode: 'luminance',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          ...style,
        } as CSSProperties}
        {...rest}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ filter: 'brightness(0) invert(1)', opacity, ...style }}
      {...rest}
    />
  );
}
