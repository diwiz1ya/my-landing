import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LimitedOfferBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyClosed = localStorage.getItem('bannerClosed');
    if (!alreadyClosed) setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('bannerClosed', 'true');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div className="bg-blue-600 text-white text-sm sm:text-base px-4 py-2 text-center relative">
            <span className="font-semibold">
              🎁 Только сегодня: скидка 15% на дренажные работы!
            </span>
            <button
              onClick={handleClose}
              className="absolute right-3 top-1 text-white hover:text-red-300 text-xl leading-none"
              aria-label="Закрыть баннер"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
