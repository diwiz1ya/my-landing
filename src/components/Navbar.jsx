import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LimitedOfferBanner from './LimitedOfferBanner'; // 🔥 Импорт баннера

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  const links = [
    { to: '/',        label: 'Главная'      },
    { to: '/septik',  label: 'Септики'      },
    { to: '/drenazh', label: 'Дренаж'       },
    { to: '/livnevka',label: 'Ливневая'     },
    { to: '/service', label: 'Обслуживание' }
  ];

  const baseLinkClasses = 'relative group text-white font-medium text-2xl transition';
  const activeLink = 'text-yellow-400';
  const hoverLink = 'hover:text-yellow-400';

  function DesktopMenu() {
    return (
      <ul className="hidden md:flex space-x-8">
        {links.slice(1).map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`${baseLinkClasses} text-base ${location.pathname === to ? activeLink : hoverLink}`}
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  function MobileMenu() {
    return (
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center gap-8 px-6 h-screen text-white z-60 font-montserrat"
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`${baseLinkClasses} ${location.pathname === to ? activeLink : hoverLink}`}
              >
                {label}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-1/2 transform -translate-x-1/2" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur shadow-md font-montserrat">
      {/* Показываем баннер только на главной странице */}
      {location.pathname === '/' && <LimitedOfferBanner />}

      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-yellow-400 font-bold text-xl"
        >
          Сухой участок
        </Link>

        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden text-yellow-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="text-3xl">{menuOpen ? '×' : '☰'}</span>
        </button>

        <DesktopMenu />
      </div>

      <MobileMenu />
    </header>
  );
}
