import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[100vh] pt-28 sm:pt-24 md:pt-20 flex items-center justify-center overflow-hidden bg-black">
      
      {/* Видео на фоне */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-auto min-w-full min-h-full max-w-none opacity-60"
      >
        <source src="/assets/video/water.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео фон.
      </video>

      {/* Тёмная маска поверх видео */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Контент */}
      <div className="relative z-10 px-4 mx-auto max-w-2xl text-center text-white font-sans">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold leading-tight mb-6 drop-shadow-lg"
        >
          Сухой участок — <br /> Псков и область
        </motion.h1>

        {/* Новый продающий текст */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-black/40 backdrop-blur-md rounded-lg px-4 py-3 mb-6 text-white/90 shadow-lg"
        >
          <p className="text-base sm:text-lg leading-relaxed font-montserrat font-extrabold">
            Продажа и монтаж дренажных систем и септиков<br />
            Цены завода-изготовителя<br />
            Качественный монтаж с гарантией
          </p>
        </motion.div>

        {/* Иконка септика */}
        <img
          src="/icons/septiklos.png"
          alt="Септик"
          className="mx-auto mb-8 w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[320px] animate-pulse drop-shadow-[0_0_12px_#facc15]"
        />

        {/* Кнопки */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center flex-wrap gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Получить консультацию
          </motion.button>

          <motion.a
            href="#calculate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition text-center"
          >
            Рассчитать стоимость
          </motion.a>
        </motion.div>
      </div>

      {/* Модалка */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
