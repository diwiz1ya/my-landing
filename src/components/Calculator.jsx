import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [plotType, setPlotType] = useState('');
  const [hasWaterProblem, setHasWaterProblem] = useState('');
  const [needsSeptik, setNeedsSeptik] = useState('');
  const [area, setArea] = useState('');
  const [services, setServices] = useState({
    septik: false,
    drenazh: false,
    livnevka: false,
  });

  const prices = {
    septik: 90000,
    drenazh: 55000,
    livnevka: 50000,
  };

  const handleNextStep = () => {
    if (step === 3) {
      setServices({
        septik: needsSeptik === 'yes',
        drenazh: hasWaterProblem === 'yes',
        livnevka: false,
      });
    }
    setStep((prev) => prev + 1);
  };

  const calculatePrice = () => {
    let base = 0;
    if (services.septik) base += prices.septik;
    if (services.drenazh) base += prices.drenazh;
    if (services.livnevka) base += prices.livnevka;

    let extra = 0;
    if (Number(area) > 500) {
      extra = (Number(area) - 500) * 500;
    }

    return base + extra;
  };

  const handleServiceChange = (service) => {
    setServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  return (
    <section id="calculate" className="py-20 bg-gradient-to-b from-[#0B1320] to-[#05080F] text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          Рассчитайте стоимость работ
        </motion.h2>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-md space-y-6">
          {/* Шаг 1 */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg font-semibold mb-4">1. Тип участка:</p>
              <select
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={plotType}
                onChange={(e) => setPlotType(e.target.value)}
                required
              >
                <option value="">Выберите тип участка</option>
                <option value="house">Дом</option>
                <option value="dacha">Дача</option>
                <option value="snt">СНТ</option>
                <option value="other">Другое</option>
              </select>

              <button
                onClick={handleNextStep}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition w-full"
              >
                Далее
              </button>
            </motion.div>
          )}

          {/* Шаг 2 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg font-semibold mb-4">2. Есть ли проблема с водой на участке?</p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => { setHasWaterProblem('yes'); handleNextStep(); }}
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-black py-3 rounded-lg transition"
                >
                  Да, участок подтапливает
                </button>
                <button
                  onClick={() => { setHasWaterProblem('no'); handleNextStep(); }}
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-black py-3 rounded-lg transition"
                >
                  Нет, всё сухо
                </button>
                <button
                  onClick={() => { setHasWaterProblem('unknown'); handleNextStep(); }}
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-black py-3 rounded-lg transition"
                >
                  Не знаю
                </button>
              </div>
            </motion.div>
          )}

          {/* Шаг 3 */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg font-semibold mb-4">3. Нужно ли устанавливать септик?</p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => { setNeedsSeptik('yes'); handleNextStep(); }}
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-black py-3 rounded-lg transition"
                >
                  Да, нужен септик
                </button>
                <button
                  onClick={() => { setNeedsSeptik('no'); handleNextStep(); }}
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-black py-3 rounded-lg transition"
                >
                  Нет, не нужен
                </button>
              </div>
            </motion.div>
          )}

          {/* Шаг 4 */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-lg font-semibold mb-4">4. Площадь участка (м²):</p>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  min="0"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Введите площадь участка"
                />
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold">Выберите дополнительные работы:</p>
                {['septik', 'drenazh', 'livnevka'].map((service) => (
                  <label key={service} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={services[service]}
                      onChange={() => handleServiceChange(service)}
                      className="accent-yellow-400"
                    />
                    <span>
                      {{
                        septik: 'Установка септика',
                        drenazh: 'Дренаж участка',
                        livnevka: 'Ливневая канализация',
                      }[service]}
                    </span>
                  </label>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-xl font-bold mb-4">
                  Предварительная стоимость:{' '}
                  <span className="text-yellow-400">
                    {calculatePrice().toLocaleString()} ₽
                  </span>
                </p>

                <button
                  type="button"
                  onClick={() => alert('Спасибо! Мы скоро свяжемся с вами.')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition"
                >
                  Оставить заявку
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
