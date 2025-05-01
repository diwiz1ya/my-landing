import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Livnevka() {
  return (
    <>
      <Helmet>
        <title>Ливневая канализация в Пскове и области | Сухой участок</title>
        <meta
          name="description"
          content="Проектирование и монтаж надёжных ливневых систем для отвода дождевых и талых вод в Пскове и области."
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
              Ливневая канализация в Пскове и области
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Проектируем и монтируем надёжные ливневые системы для отвода дождевых и талых вод.
              Защищаем участок и строения от подтоплений в любое время года.
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2 text-sm sm:text-base">
              <li>Сбор воды с кровли и территории</li>
              <li>Установка дождеприёмников и колодцев</li>
              <li>Подключение к централизованной или автономной системе отвода</li>
              <li>Комплексные решения под ключ</li>
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/drenazh" className="w-full sm:w-auto relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden">
                <span className="relative z-10">Дренаж участка</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
              <Link to="/service" className="w-full sm:w-auto relative group border border-yellow-400 text-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden hover:bg-yellow-400">
                <span className="relative z-10">Обслуживание септиков</span>
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
            <img
              src="/icons/livnevka.png"
              alt="Ливневая канализация"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
            <img
              src="/icons/price-list-livneka.png"
              alt="Цена на ливнёвку"
              className="absolute top-0 right-[-10px] sm:right-[-20px] w-24 sm:w-32 md:w-36 h-auto hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* CTA + Кейс */}
        <section className="mt-16 py-16 bg-black border-t-4 border-b-4 border-yellow-400 text-white overflow-hidden relative">

          {/* CTA часть */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Нужен надёжный отвод воды?
            </h2>
            <p className="mb-8 text-base sm:text-lg text-gray-300">
              Оставьте заявку — мы перезвоним в течение 15 минут и предложим лучшее решение для вашего участка.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+79116957575"
                className="w-full sm:w-auto relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden"
              >
                <span className="relative z-10">Позвонить нам</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto relative group border border-yellow-400 text-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden hover:bg-yellow-400"
              >
                <span className="relative z-10">Оставить заявку онлайн</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>
          </motion.div>

          {/* Кейс часть */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Левая часть */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
                Реальный пример ливнёвки
              </h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                <strong>Кейс:</strong> частный дом в Пскове, ул. Садовая.<br />
                <strong>Проблема:</strong> вода с крыши заливала участок и подвал.<br />
                <strong>Решение:</strong> установка ливнёвки с дождеприёмниками и отводом в коллектор.<br />
                <strong>Срок работ:</strong> 4 дня.<br />
                <strong>Стоимость:</strong> от 50 000 ₽.<br />
                <strong>Результат:</strong> участок сухой даже после сильных дождей.
              </p>

              <Link
                to="/contact"
                className="relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden"
              >
                <span className="relative z-10">Хочу такую же ливнёвку</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>

            {/* Правая часть */}
            <div className="flex justify-center">
              <img
                src="/icons/livnevka-case.png"
                alt="Кейс ливнёвки"
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </motion.div>

          <div className="absolute inset-0 animate-wiggle-slow pointer-events-none"></div>
        </section>
      </div>
    </>
  );
}
