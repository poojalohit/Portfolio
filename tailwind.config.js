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
        // Autumn color palette (Azalea Design Co.)
        'main-rose': '#8B5B6D',             // Main Color 1: Deep muted rose
        'main-blue': '#3E5C76',            // Main Color 2: Dark slate blue
        'accent-peach': '#D09E8B',          // Accent Color: Muted peach/terracotta
        'neutral-grey': '#C7C4C2',          // Neutral Color 1: Light warm grey
        'neutral-pink': '#E4D4D2',          // Neutral Color 2: Very light desaturated pink
        
        // Legacy color mappings (for backward compatibility)
        'cream-beige': '#E4D4D2',          // Mapped to neutral-pink
        'warm-gold': '#D09E8B',             // Mapped to accent-peach
        'medium-brown': '#8B5B6D',          // Mapped to main-rose
        'dark-brown': '#3E5C76',            // Mapped to main-blue
        'dark-brown-bg': '#1A1A1A',         // Dark background (from map reference)
        'dark-surface': '#2A2A2A',          // Elevated surfaces (from map reference)
        'light-text': '#E8E8E8',            // Light text color
        'dusty-rose': '#8B5B6D',            // Alias for main-rose
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
