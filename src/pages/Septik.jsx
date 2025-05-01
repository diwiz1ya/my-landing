import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Septik() {
  const images = [
    '/assets/septik/septik1.jpg',
    '/assets/septik/septik2.jpg',
    '/assets/septik/septik3.jpg',
    '/assets/septik/septik4.jpg',
    '/assets/septik/septik5.jpg',
    '/assets/septik/septik6.jpg',
    '/assets/septik/septik7.jpg',
    '/assets/septik/septik8.jpg',
    '/assets/septik/septik9.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <Helmet>
        <title>Установка септика в Пскове и области | Сухой участок</title>
        <meta
          name="description"
          content="Профессиональный монтаж септиков под ключ в Пскове и области. Подбор, установка, запуск, гарантия 5 лет. Работаем без скрытых платежей."
        />
      </Helmet>

      <div className="bg-black text-white min-h-screen py-16 sm:py-20 px-4 sm:px-6 font-montserrat">
        <div className="max-w-6xl mx-auto">
          {/* Сетка: текст + галерея */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Левая колонка */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
                Установка септика под ключ в Пскове и области
              </h1>

              <p className="text-base sm:text-lg text-gray-300 mb-8">
                Мы профессионально занимаемся монтажом септиков более 10 лет. Выполняем работы под ключ — от выезда инженера до полного запуска системы.
              </p>

              <ul className="list-disc list-inside text-gray-300 mb-12 space-y-2 text-sm sm:text-base">
                <li>Подбор септика по составу грунта и количеству пользователей</li>
                <li>Подготовка котлована, обсыпка, подключение трубопровода</li>
                <li>Запуск системы и подробный инструктаж клиента</li>
                <li>Гарантия на монтаж до 5 лет</li>
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                <Link to="/drenazh" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition">
                  Дренаж участка
                </Link>
                <Link to="/service" className="w-full sm:w-auto border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition">
                  Обслуживание септиков
                </Link>
              </div>
            </motion.div>

            {/* Правая колонка: Галерея + Цена */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-md relative">
                <img
                  src={selectedImage}
                  alt="Септик"
                  className="w-full h-auto rounded-lg shadow-lg transition-all duration-300"
                />

                {/* PNG с ценой */}
                <img
                  src="/icons/price-list-septik.png"
                  alt="Цена на установку септика"
                  className="absolute bottom-[-20px] right-[-20px] w-24 sm:w-32 md:w-36 h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-wrap justify-center mt-4 gap-2">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Миниатюра ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                      selectedImage === image ? 'ring-4 ring-yellow-400' : 'opacity-70 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Блок преимуществ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16"
          >
            {[
              { title: "10 лет опыта", text: "Более 10 лет на рынке Пскова и области. Надёжная команда профессионалов." },
              { title: "Гарантия на монтаж", text: "До 5 лет официальной гарантии на все монтажные работы и материалы." },
              { title: "Работа под ключ", text: "Берём все процессы на себя — от консультации до запуска септика в работу." },
              { title: "Честные цены", text: "Фиксированная стоимость без скрытых платежей и 'внезапных доплат'." }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/70 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-yellow-400 text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA + Кейс */}
          <section className="mt-20 py-16 bg-black border-t-4 border-b-4 border-yellow-400 text-white overflow-hidden relative rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Хотите, чтобы септик работал идеально?
              </h2>
              <p className="mb-8 text-base sm:text-lg text-gray-300">
                Мы подберём, доставим и установим септик — и вы забудете о запахах, авариях и проблемах с канализацией.
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

            {/* Кейс */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
                  Пример установки септика
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  <strong>Кейс:</strong> дача в Псковском районе, деревня "Лесная".<br />
                  <strong>Проблема:</strong> выгребная яма не справлялась, сильный запах летом.<br />
                  <strong>Решение:</strong> подбор септика Юнилос Астра 5, монтаж за 2 дня, проверка и запуск.<br />
                  <strong>Срок работ:</strong> 2 дня.<br />
                  <strong>Стоимость:</strong> от 95 000 ₽ под ключ.<br />
                  <strong>Результат:</strong> комфорт, чистота, никаких запахов. Клиент доволен.
                </p>

                <Link
                  to="/contact"
                  className="relative group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition overflow-hidden"
                >
                  <span className="relative z-10">Хочу такой же результат</span>
                  <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </div>

              <div className="flex justify-center">
                <img
                  src="/icons/septic-case1.png"
                  alt="Фото после установки септика"
                  className="rounded-xl shadow-lg w-full max-w-md"
                />
              </div>
            </motion.div>

            <div className="absolute inset-0 animate-wiggle-slow pointer-events-none"></div>
          </section>
        </div>
      </div>
    </>
  );
}
