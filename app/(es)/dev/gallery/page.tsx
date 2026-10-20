import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Galeria de blocs (dev)',
  robots: { index: false, follow: false },
}

export default function GalleryPage() {
  if (process.env.NODE_ENV === 'production') notFound()

  return (
    <>
      <style>{`body > header, body > footer { display: none !important; }`}</style>
      <GalleryClient />
    </>
  )
}
