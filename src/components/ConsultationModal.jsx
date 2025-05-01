import React from 'react';
import { motion } from 'framer-motion';

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 rounded-2xl p-8 w-full max-w-md mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          Оставить заявку
        </h2>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            className="px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <textarea
            placeholder="Комментарий (необязательно)"
            rows="3"
            className="px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition"
          >
            Отправить заявку
          </button>
        </form>
      </motion.div>
    </div>
  );
}
