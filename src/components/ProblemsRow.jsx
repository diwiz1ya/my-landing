import React from 'react';

const problems = [
  {
    img: '/icons/waterlogged.png',
    title: 'Заболоченный участок вокруг дома',
  },
  {
    img: '/icons/mold.png',
    title: 'Сырость и плесень в подвалах',
  },
  {
    img: '/icons/cracked-foundation.png',
    title: 'Фундамент разрушается и осыпается',
  },
  {
    img: '/icons/cracked-walls.png',
    title: 'Трескаются подпорные стены',
  },
  {
    img: '/icons/puddles.png',
    title: 'Лужи после дождя и снега',
  },
  {
    img: '/icons/no-plants.png',
    title: 'Невозможно посадить растения',
  },
];

export default function ProblemsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center mb-12">
      {problems.map((problem, index) => (
        <div key={index} className="flex flex-col items-center text-center group">
          <img
            src={problem.img}
            alt={problem.title}
            className="h-30 mb-4 transform group-hover:scale-110 transition"
          />
          <p className="text-sm text-gray-200">{problem.title}</p>
        </div>
      ))}
    </div>
  );
}
