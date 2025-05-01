import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Drenazh() {
  return (
    <>
      <Helmet>
        <title>Дренаж участка в Пскове и области | Сухой участок</title>
        <meta
          name="description"
          content="Проектирование и монтаж эффективных дренажных систем для защиты участка от подтоплений и разрушения фундамента."
        />
      </Helmet>

      <div className="bg-black text-white min-h-screen py-16 sm:py-20 px-4 sm:px-6 font-montserrat">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Левая колонка с текстом */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
              Дренаж участка в Пскове и области
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Мы проектируем и устанавливаем эффективные дренажные системы,
              защищающие участок от подтоплений, заболачивания и разрушения фундамента.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2 text-sm sm:text-base">
              <li>Дренаж фундамента и подвалов</li>
              <li>Прокладка трубопроводов и колодцев</li>
              <li>Решение проблем с лужами и заболоченными зонами</li>
              <li>Индивидуальный проект под каждый участок</li>
            </ul>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/septik" className="w-full sm:w-auto relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden">
                <span className="relative z-10">Установка септика</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              <Link to="/livnevka" className="w-full sm:w-auto relative group border border-yellow-400 text-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden hover:bg-yellow-400">
                <span className="relative z-10">Ливневая канализация</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>
          </motion.div>

          {/* Правая колонка с картинкой */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <img src="/icons/drenazh.png" alt="Дренаж участка" className="w-full max-w-sm rounded-xl shadow-lg" />
            <img src="/icons/price-list-drenazh.png" alt="Цена на дренаж" className="absolute top-0 right-[-10px] sm:right-[-20px] w-24 sm:w-32 md:w-36 h-auto hover:scale-105 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* CTA + Кейс */}
        <section className="mt-16 py-16 bg-black border-t-4 border-b-4 border-yellow-400 text-white overflow-hidden relative">

          {/* CTA блок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Хотите сухой участок?
            </h2>
            <p className="mb-8 text-base sm:text-lg text-gray-300">
              Оставьте заявку — мы перезвоним в течение 15 минут и рассчитаем точную стоимость работ.
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

          {/* Кейс блок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Текст */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
                Реальный пример дренажа
              </h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                <strong>Кейс:</strong> участок в Псковском районе, посёлок "Тямша".<br />
                <strong>Проблема:</strong> заболачивание весной и осенью.<br />
                <strong>Решение:</strong> система дренажа + слив в колодец.<br />
                <strong>Срок работ:</strong> 5 дней.<br />
                <strong>Стоимость:</strong> от 55 000 ₽.<br />
                <strong>Результат:</strong> сухой участок круглый год.
              </p>
              <Link to="/contact" className="relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden">
                <span className="relative z-10">Хочу такой же результат</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>

            {/* Фото "до" и "после" */}
            <div className="grid grid-cols-2 gap-4">
              <img src="/icons/before.png" alt="До дренажа" className="rounded-xl shadow-lg" />
              <img src="/icons/after.png" alt="После дренажа" className="rounded-xl shadow-lg" />
            </div>
          </motion.div>

          <div className="absolute inset-0 animate-wiggle-slow pointer-events-none"></div>
        </section>
      </div>
    </>
  );
}
