import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Связаться с нами | Сухой участок</title>
        <meta
          name="description"
          content="Оставьте заявку на установку септика или дренаж участка. Свяжитесь с командой «Сухой участок» — мы ответим в течение 15 минут."
        />
      </Helmet>

      <div className="bg-black text-white min-h-screen flex items-center justify-center py-16 px-4 font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full"
        >
          <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Оставить заявку
          </h1>

          <form
            action="mailto:your-email@example.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className="px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              className="px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              name="message"
              placeholder="Комментарий (необязательно)"
              className="px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition"
            >
              Отправить заявку
            </button>
          </form>

          <div className="mt-8 text-center text-gray-400 text-sm">
            Или свяжитесь напрямую: <br />
            <a href="tel:+79116957575" className="text-yellow-400 hover:underline">
              +7 (911) 695-75-75
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
