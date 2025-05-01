import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from 'smooth-scroll'; // <-- добавили импорт

// Инициализация плавного скролла для всех ссылок-якорей
new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
