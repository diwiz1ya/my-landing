import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    name: 'Алексей П.',
    city: 'Псков',
    text: 'Отличная работа! Все сделали качественно и в срок. Рекомендую!',
  },
  {
    name: 'Марина С.',
    city: 'Остров',
    text: 'Очень довольна установкой септика. Команда профессиональная и вежливая!',
  },
  {
    name: 'Иван К.',
    city: 'Порхов',
    text: 'Дренаж участка сделали быстро и аккуратно. Спасибо за отличный сервис!',
  },
  {
    name: 'Ольга Р.',
    city: 'СНТ Берёзка',
    text: 'Ребята решили проблему с водой на участке за пару дней. Настоящие мастера!',
  },
  {
    name: 'Сергей Б.',
    city: 'Великие Луки',
    text: 'Заказывали установку ливневки. Всё чётко, быстро и по делу. Спасибо!',
  },
  {
    name: 'Татьяна В.',
    city: 'СНТ Зелёная Роща',
    text: 'Порадовала внимательность к деталям. Работы выполнены без нареканий!',
  },
];

export default function Testimonials() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    mode: "free-snap",
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
    },
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 5000);
    },
  });

  return (
    <section className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Отзывы клиентов
        </h2>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <p className="text-white/80 mb-6">"{testimonial.text}"</p>
              <div>
                <h3 className="text-yellow-400 font-bold text-lg">{testimonial.name}</h3>
                <p className="text-white/60 text-sm">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
