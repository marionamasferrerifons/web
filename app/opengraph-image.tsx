import { readFile } from 'fs/promises'
import { join } from 'path'
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Mariona Masferrer i Fons — Estrategia editorial con IA'

export default async function OpengraphImage() {
  const [dmSansRegular, dmSansMedium, logoSvg] = await Promise.all([
    readFile(join(process.cwd(), 'public/fonts/DMSans-Regular.ttf')),
    readFile(join(process.cwd(), 'public/fonts/DMSans-Medium.ttf')),
    readFile(join(process.cwd(), 'public/logo.svg'), 'utf-8'),
  ])
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(135deg, #011853 0%, #012C97 100%)',
        }}
      >
        <img src={logoDataUri} width={168} height={106} alt="" />
        <div
          style={{
            marginTop: 48,
            fontFamily: 'DM Sans Medium',
            fontSize: 56,
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          Mariona Masferrer i Fons
        </div>
        <div
          style={{
            marginTop: 20,
            fontFamily: 'DM Sans',
            fontSize: 32,
            color: '#EC9A37',
            textAlign: 'center',
          }}
        >
          Estrategia editorial con IA
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'DM Sans', data: dmSansRegular, weight: 400, style: 'normal' },
        { name: 'DM Sans Medium', data: dmSansMedium, weight: 500, style: 'normal' },
      ],
    }
  )
}
