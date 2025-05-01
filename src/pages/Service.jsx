import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Service() {
  return (
    <>
      <Helmet>
        <title>Обслуживание и ремонт септиков в Пскове и области | Сухой участок</title>
        <meta
          name="description"
          content="Профессиональное техническое обслуживание, очистка и ремонт септиков всех типов в Пскове и области. Надёжная работа вашей автономной канализации."
        />
      </Helmet>

      <div className="bg-black text-white min-h-screen py-16 sm:py-20 px-4 sm:px-6 font-montserrat">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Левая колонка */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
              Обслуживание и ремонт септиков в Пскове и области
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Мы предлагаем профессиональное техническое обслуживание, и ремонт септиков всех типов.
              Своевременное сервисное обслуживание — залог долговечной и эффективной работы вашей автономной канализации.
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2 text-sm sm:text-base">
              <li>Регулярная откачка септиков</li>
              <li>Диагностика и устранение неисправностей</li>
              <li>Замена оборудования и ремонт систем</li>
              <li>Экстренный выезд при авариях</li>
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/septik" className="w-full sm:w-auto relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden">
                <span className="relative z-10">Установка септика</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              <Link to="/drenazh" className="w-full sm:w-auto relative group border border-yellow-400 text-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden hover:bg-yellow-400">
                <span className="relative z-10">Дренаж участка</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>
          </motion.div>

          {/* Правая колонка */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <img src="/icons/service.png" alt="Обслуживание септиков" className="w-full max-w-sm rounded-xl shadow-lg" />
            <img src="/icons/price-list.png" alt="Цена на обслуживание" className="absolute top-0 right-[-10px] sm:right-[-20px] w-24 sm:w-32 md:w-36 h-auto hover:scale-105 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* CTA + Кейс */}
        <section className="mt-16 py-16 bg-black border-t-4 border-b-4 border-yellow-400 text-white overflow-hidden relative">

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Хотите, чтобы септик работал без проблем?
            </h2>
            <p className="mb-8 text-base sm:text-lg text-gray-300">
              Закажите сервисное обслуживание — и забудьте о засорах, запахах и авариях!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:+79116957575" className="w-full sm:w-auto relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden">
                <span className="relative z-10">Позвонить нам</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
              <Link to="/contact" className="w-full sm:w-auto relative group border border-yellow-400 text-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden hover:bg-yellow-400">
                <span className="relative z-10">Оставить заявку онлайн</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>
          </motion.div>

          {/* Кейс */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Текст кейса */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
                Реальный случай обслуживания септика
              </h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                <strong>Кейс:</strong> частный дом, Псковский район, деревня "Уграда".<br />
                <strong>Проблема:</strong> септик забился, стояла вода в доме.<br />
                <strong>Решение:</strong> прочистка труб, промывка системы, замена компрессора.<br />
                <strong>Срок работ:</strong> 1 день.<br />
                <strong>Стоимость:</strong> от 12 000 ₽.<br />
                <strong>Результат:</strong> система работает как новая, запахи устранены.
              </p>

              <Link to="/contact" className="relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden">
                <span className="relative z-10">Заказать обслуживание</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>

            {/* Фото кейса */}
            <div className="flex justify-center">
              <img src="/icons/septic-case.png" alt="До и после обслуживания" className="rounded-xl shadow-lg w-full max-w-md h-auto object-contain" />
            </div>
          </motion.div>

          <div className="absolute inset-0 animate-wiggle-slow pointer-events-none"></div>
        </section>
      </div>
    </>
  );
}
