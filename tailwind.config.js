/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'], // для тела
      },
    },
  },
  plugins: [
    scrollbar,
  ],
}
