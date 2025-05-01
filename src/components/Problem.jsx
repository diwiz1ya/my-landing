import React from 'react';
import ProblemsRow from './ProblemsRow'; // Импорт PNG-иконок

export default function Problem() {
  const stats = [
    { value: "80%", label: "участков без дренажа" },
    { value: "50%", label: "экономия на благоустройстве" },
    { value: "20 лет", label: "срок службы систем" },
    { value: "5 лет", label: "гарантия на монтаж" },
  ];

  const benefits = [
    "Повышение комфорта на участке",
    "Защита фундамента от подмывания",
    "Экономия на ремонте и откачке",
  ];

  return (
    <section
      className="relative py-16 sm:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/textures/water-grass-bg-horizontal.jpg')" }}
    >
      {/* Тёмный полупрозрачный оверлей для читаемости текста */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Контент блока */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center">
          Участок тонет?
        </h2>

        {/* Иконки (ProblemsRow) */}
        <ProblemsRow />

        {/* Блок с цифрами */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center shadow-md hover:shadow-lg transition"
            >
              <p className="text-3xl font-extrabold text-yellow-400">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Блок с преимуществами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-left shadow-md hover:shadow-lg transition flex items-start"
            >
              <div className="w-6 h-6 mt-1 text-black bg-yellow-400 rounded-full flex items-center justify-center mr-4 shrink-0">
                ✓
              </div>
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
