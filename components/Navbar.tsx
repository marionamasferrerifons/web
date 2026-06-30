const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

export default function Navbar() {
  return (
    <header
      className="w-full bg-blue-500 px-[25px] py-[24px]"
      style={{ borderRadius: '0 0 24px 24px' }}
    >
      <div className="relative flex items-center h-[40px]">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Mariona Masferrer"
          style={{ height: '39.843px', width: '60.44px', objectFit: 'contain' }}
        />

        {/* Nav links — centred */}
        <nav
          className="absolute left-1/2 -translate-x-1/2 flex gap-[24px] items-center"
          aria-label="Navegación principal"
        >
          <a href="#" className="text-white whitespace-nowrap" style={monoStyle}>
            Enfoque
          </a>

          <div className="relative flex items-center gap-[4px]">
            <a href="#" className="text-white whitespace-nowrap uppercase" style={monoStyle}>
              Servicios
            </a>
            <svg
              width="14" height="7" viewBox="0 0 14 7"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              className="rotate-90"
              aria-hidden="true"
            >
              <path d="M1 1L7 6L13 1" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative flex items-center gap-[4px]">
            <a href="#" className="text-white whitespace-nowrap" style={monoStyle}>
              Casos de éxito
            </a>
            <svg
              width="14" height="7" viewBox="0 0 14 7"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              className="rotate-90"
              aria-hidden="true"
            >
              <path d="M1 1L7 6L13 1" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-[8px]">

          {/* Language selector */}
          <div
            className="flex items-center gap-[8px] border border-[#d4d4d4] rounded-full px-[11px]"
            style={{ height: '28px' }}
          >
            <span className="text-white" style={monoStyle}>ES</span>
            <svg
              width="14" height="7" viewBox="0 0 14 7"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              className="rotate-90"
              aria-hidden="true"
            >
              <path d="M1 1L7 6L13 1" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* CTA button */}
          <button
            className="group flex items-center gap-[4px] bg-grey hover:bg-white rounded-full pl-[11px] pr-[4px] cursor-pointer transition-colors duration-200"
            style={{ height: '28px' }}
          >
            <span
              className="text-orange whitespace-nowrap"
              style={{ ...monoStyle, fontSize: '10px' }}
            >
              RESERVAR UNA LLAMADA
            </span>
            <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[19px]">
              <img src="/hero-arrow.svg" alt="" className="size-[12px] transition-transform duration-200 group-hover:rotate-45" aria-hidden="true" />
            </span>
          </button>

        </div>
      </div>
    </header>
  )
}
