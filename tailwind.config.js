/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nyu-purple': '#57068c',
        'nyu-purple-light': '#7a1ba8',
        'nyu-purple-dark': '#3d0059',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
