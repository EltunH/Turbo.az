/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.htm', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      }
    },
    screens: {
      'xsm': '360px',
      'sm': '640px',
      'md': '768px',
      'tablet': '901px',
      'mini' : '400px',
      'lg': '1024px',
      'xl': '1200px',
    },
  },
  plugins: [],
}

