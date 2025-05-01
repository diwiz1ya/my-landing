import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Консультация и осмотр',
    description: 'Выезжаем на участок, оцениваем ситуацию, подбираем оптимальные решения.',
    image: '/steps/consultation.jpg',
  },
  {
    title: 'Проектирование',
    description: 'Разрабатываем проект системы дренажа или септика с учётом особенностей участка.',
    image: '/steps/design.jpg',
  },
  {
    title: 'Монтаж работ',
    description: 'Выполняем все работы с гарантией качества и соблюдением технологий.',
    image: '/steps/installation.jpg',
  },
  {
    title: 'Сдача и обслуживание',
    description: 'Сдаём проект и даём рекомендации. При необходимости — сервисное обслуживание.',
    image: '/steps/delivery.jpg',
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-black py-16 px-4 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Как мы работаем</h2>

      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-none">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative min-w-[300px] sm:min-w-[380px] md:min-w-[480px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/50"
            style={{
              backgroundImage: `url(${step.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute bottom-0 w-full bg-black/50 p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2 drop-shadow-lg">{step.title}</h3>
              <p className="text-white/90 text-sm drop-shadow-md">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
