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
        // Modern Dark Palette - 60-30-10 Rule
        // 60% - Dominant: Deep charcoal backgrounds
        'charcoal': '#1E1E1E',              // Main background (deep charcoal, not pure black)
        'charcoal-dark': '#171717',         // Darker variant for depth
        
        // 30% - Secondary: Elevated card surfaces
        'surface': '#2A2A2A',               // Card backgrounds
        'surface-elevated': '#333333',      // Hover/active card states
        'surface-light': '#3A3A3A',         // Lightest surface for contrast
        
        // 10% - Accent: Interactive elements
        'accent-blue': '#5B8DB8',           // Muted blue for links and interactive elements
        'accent-blue-hover': '#6B9BD1',     // Lighter blue for hover states
        'accent-blue-light': '#7BAED9',     // Lightest blue for active states
        'accent-gold': '#D4AF37',           // Subtle gold for CTAs and highlights
        'accent-gold-hover': '#E5C04A',      // Lighter gold for hover
        'accent-gold-light': '#F0D56B',      // Lightest gold for active states
        
        // Text colors - High contrast, warm tones
        'text-primary': '#F5F5F5',          // Primary text (high contrast warm white)
        'text-secondary': '#D4D4D4',        // Secondary text
        'text-muted': '#A0A0A0',            // Muted text for less important info
        
        // Legacy mappings for backward compatibility
        'dark-brown-bg': '#1E1E1E',
        'dark-surface': '#2A2A2A',
        'light-text': '#F5F5F5',
        'warm-gold': '#D4AF37',
        'medium-brown': '#5B8DB8',
        'cream-beige': '#2A2A2A',
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
