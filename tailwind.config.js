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
        // New vibrant color palette
        'lime': '#39ff14',
        'lime-dark': '#2ecc00',
        'yellow': '#ffeb3b',
        'yellow-dark': '#fdd835',
        'cyan': '#00bcd4',
        'cyan-dark': '#0097a7',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        // Keep purple for compatibility, but can be replaced
        'nyu-purple': '#57068c',
        'nyu-purple-light': '#7a1ba8',
        'nyu-purple-dark': '#3d0059',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
