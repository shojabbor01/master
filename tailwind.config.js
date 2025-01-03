/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '380px',
        'md': '575px',
        'lg' : '767px',
        'xl' : '992px',
        '2xl' : '1280px',
      }
    },
  },
  plugins: [],
}