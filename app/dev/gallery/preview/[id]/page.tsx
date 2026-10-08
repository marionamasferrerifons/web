import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRenderer } from '../../blocks'
import { getBlock } from '../../registry'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

/**
 * Ruta d'aïllament: renderitza UN sol bloc real dins un document propi, per
 * poder-lo carregar en un <iframe> amb el seu propi viewport i el seu propi
 * context d'scroll (vegeu app/dev/gallery/GalleryClient.tsx).
 *
 * El layout arrel (app/layout.tsx) injecta sempre <Navbar/> i <Footer/> al
 * voltant de `children`. Aquí es volen fora EXCEPTE quan el bloc que es vol
 * mostrar és precisament la capçalera o el peu — en aquest cas es deixen
 * visibles tal com són.
 */
export default async function PreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ variant?: string }>
}) {
  if (process.env.NODE_ENV === 'production') notFound()

  const { id } = await params
  const { variant } = await searchParams
  const variantId = variant || 'default'

  const block = getBlock(id)
  const render = getRenderer(id, variantId)

  if (!block || !render) {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <p>Bloc no trobat: {id} / {variantId}</p>
      </div>
    )
  }

  const showsOwnChrome = id === 'nav-header' || id === 'nav-footer'

  return (
    <>
      {!showsOwnChrome && (
        <style>{`body > header, body > footer { display: none !important; }`}</style>
      )}
      <PreviewSizeReporter />
      <div id="gallery-preview-root">{render()}</div>
    </>
  )
}

function PreviewSizeReporter() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            function report() {
              var h = document.documentElement.scrollHeight;
              window.parent.postMessage({ source: 'gallery-preview', height: h }, '*');
            }
            window.addEventListener('load', report);
            new ResizeObserver(report).observe(document.body);
            document.fonts && document.fonts.ready && document.fonts.ready.then(report);
            setTimeout(report, 300);
            setTimeout(report, 1200);
          })();
        `,
      }}
    />
  )
}
