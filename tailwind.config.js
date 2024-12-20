/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: [
    './templates/**/*.{html,js}',
    "./**/forms.py",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add custom fonts
      },
      colors: {
        primary: '#aff6aa',
        secondary: '#6656ff',
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #aff6aa, #6656ff)',
      },
      boxShadow: {
        deep: '0 8px 20px rgba(0, 0, 0, 0.3)',
      },
      textShadow: {
        custom: '1px 1px 5px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    daisyui
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'), // Ensure this plugin is installed
  ],
};

