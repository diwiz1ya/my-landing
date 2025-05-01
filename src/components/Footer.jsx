import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-400 pt-10 pb-6 mt-20 relative overflow-hidden">
      
      {/* Анимация плавного появления футера */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8"
      >

        {/* Логотип слева */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src="/assets/icons/pskov-kremlin.png" 
            alt="Псковский кремль" 
            className="h-24 md:h-32 object-contain mb-4 md:mb-2 animate-fade-in"
            loading="lazy"
          />
          <h2 className="text-xl font-bold text-yellow-400">
            Сухой участок
          </h2>
          <p className="text-sm max-w-xs text-gray-400 mt-2">
            Дренаж, септики, канализация — под ключ в Пскове и области
          </p>
        </div>

        {/* Навигация */}
        <div className="flex flex-col items-center gap-4 md:items-end text-center md:text-right">
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/septik" className="relative group text-sm hover:text-yellow-400 transition">
              <span>Септики</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/drenazh" className="relative group text-sm hover:text-yellow-400 transition">
              <span>Дренаж</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/livnevka" className="relative group text-sm hover:text-yellow-400 transition">
              <span>Ливневая</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/service" className="relative group text-sm hover:text-yellow-400 transition">
              <span>Обслуживание</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Контакты */}
          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <a href="tel:+79991234567" className="hover:text-yellow-400 transition block">+7 (911) 695-75-75</a>
            <a href="mailto:info@dryland.ru" className="hover:text-yellow-400 transition block">info@dryland.ru</a>
          </div>
        </div>

      </motion.div>

      {/* Полупрозрачная линия сверху футера */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-700 opacity-40" />

    </footer>
  );
}
