/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#081854',
        backgroundColor: '#F4F3FF',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
};
