import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Septik from './pages/Septik';
import Drenazh from './pages/Drenazh';
import Livnevka from './pages/Livnevka';
import Service from './pages/Service';
import Contact from './pages/Contact';
import LimitedOfferBanner from './components/LimitedOfferBanner'; // 🔥 Добавлено

export default function App() {
  const location = useLocation(); // ловим текущий путь

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <LimitedOfferBanner /> {/* 🔥 Баннер сверху */}
        <Navbar />
        <main className="flex-grow pt-16">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={<PageWrapper><Home /></PageWrapper>}
              />
              <Route
                path="/septik"
                element={<PageWrapper><Septik /></PageWrapper>}
              />
              <Route
                path="/drenazh"
                element={<PageWrapper><Drenazh /></PageWrapper>}
              />
              <Route
                path="/livnevka"
                element={<PageWrapper><Livnevka /></PageWrapper>}
              />
              <Route
                path="/service"
                element={<PageWrapper><Service /></PageWrapper>}
              />
              <Route
                path="/contact"
                element={<PageWrapper><Contact /></PageWrapper>}
              />
              <Route
                path="*"
                element={<PageWrapper><Home /></PageWrapper>}
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

// Обёртка для анимации страниц
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
