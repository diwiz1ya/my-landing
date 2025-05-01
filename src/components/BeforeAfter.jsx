import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

export default function BeforeAfter() {
  return (
    <section className="bg-gradient-to-b from-[#0B1320] to-[#05080F] py-20 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
        Как мы преображаем участки
      </h2>

      <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/2]">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="/before-after/before.jpg"
              alt="До"
              className="object-cover"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="/before-after/after.jpg"
              alt="После"
              className="object-cover"
            />
          }
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '16px',
            transition: 'all 0.4s ease',
          }}
          handle={
            <div className="h-14 w-14 bg-yellow-400 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold text-black">⇄</span>
            </div>
          }
        />
      </div>

      <div className="max-w-5xl mx-auto flex justify-between text-white text-lg mt-4 px-2 sm:px-6">
        <span>До</span>
        <span>После</span>
      </div>
    </section>
  );
}
