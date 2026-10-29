/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Amb un layout arrel per idioma, la 404 de les URL sense ruta la pinta
    // app/global-not-found.tsx.
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/servicios/estrategia-editorial',
        destination: '/servicios/estrategia-de-ia',
        statusCode: 301,
      },
      // Les dues pàgines anteriors de producció s'unifiquen a Producción editorial con IA.
      {
        source: '/servicios/servicios-editoriales',
        destination: '/servicios/produccion-editorial-con-ia',
        statusCode: 301,
      },
      {
        source: '/servicios/ecosistema-produccion-editorial',
        destination: '/servicios/produccion-editorial-con-ia',
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
