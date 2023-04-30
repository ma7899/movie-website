/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
