/** @type {import('tailwindcss').Config}  */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [require('tw-elements/dist/plugin')],
  theme: {
    extend: {
      colors: {
        primary: '#ED5829',
      },
    },
    fontFamily: {
      helvetica: ['Helvetica', 'Inter', 'sans-serif'],
    },
  },
};
