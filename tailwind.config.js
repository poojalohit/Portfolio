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
        // Muted, earthy color palette
        'light-blue-grey': '#E8E8E8',      // Very light blue-grey
        'dusty-rose': '#D4A5A5',           // Dusty rose / muted pink
        'taupe': '#8B7D7D',                // Medium brownish-grey / taupe
        'slate-blue': '#6B8FA3',           // Muted blue / slate blue
        'charcoal': '#2C2C2C',             // Dark navy / charcoal
        'dark-bg': '#1A1A1A',              // Dark background
        'dark-surface': '#2A2A2A',          // Elevated surfaces
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
