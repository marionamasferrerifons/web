/**
 * Etiqueta de secció d'aquesta pàgina: DM Mono 14px majúscules, SENSE
 * opacitat (a diferència del patró `opacity: .65` dominant a la resta del
 * lloc — vegeu docs/visual-criteria.md, incoherència 8/9).
 */
export default function SectionTag({ children, color = 'var(--color-blue-400)' }: { children: string; color?: string }) {
  return (
    <p
      className="uppercase"
      style={{
        fontFamily: 'var(--font-dm-mono)',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '-0.5px',
        color,
      }}
    >
      {children}
    </p>
  );
}
