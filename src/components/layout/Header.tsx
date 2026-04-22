import React, { useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

type NavItem = { to: string; label: string }

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Trang chủ' },
  { to: '/game', label: 'Game Ghép Thẻ' },
  { to: '/theory', label: 'Lý Thuyết' },
]

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const items = useMemo(() => NAV_ITEMS, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkBase =
    'font-playfair text-sm tracking-widest uppercase transition-colors duration-300'
  const linkIdle = 'text-sepia/80 hover:text-gold-classic'
  const linkActive = 'text-sepia border-b border-gold-classic'

  return (
    <header className="border-b border-gold-classic/30 bg-parchment-old/80 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-playfair font-bold text-sepia tracking-widest uppercase">
          MLN122
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {items.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-sepia/20 bg-parchment-light text-sepia hover:border-gold-classic/50 transition-colors"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="font-playfair text-lg leading-none">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {open ? (
        <div className="md:hidden border-t border-gold-classic/20 bg-parchment-old/90">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3">
            {items.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle} w-fit py-1`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

