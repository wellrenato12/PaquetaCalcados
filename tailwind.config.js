/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        customRgba: 'rgba(56,56,56,0.04)',
        customRgba2: 'rgba(207, 93, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
