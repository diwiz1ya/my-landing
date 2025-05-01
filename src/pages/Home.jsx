import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowWeWork from '../components/HowWeWork';
import BeforeAfter from '../components/BeforeAfter';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Сухой участок — Дренаж и Септики под ключ в Пскове</title>
        <meta
          name="description"
          content="Профессиональный монтаж септиков, дренажных систем и ливневых канализаций в Пскове и области. Под ключ, с гарантией."
        />
      </Helmet>

      <div className="bg-black text-white font-montserrat">
        <Hero />
        <Problem />
        <HowWeWork />
        <BeforeAfter />
        <Calculator />
        <Testimonials />
      </div>
    </>
  );
}
