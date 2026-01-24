# Pooja Lohit - Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌙 Dark mode first design
- 🎨 Glassmorphism effects
- 📱 Fully responsive
- ⚡ High performance with Vite
- 🗺️ Interactive travel map
- 📚 Projects showcase with interactive flashcards

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Simple Maps
- Swiper

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The site is configured for GitHub Pages deployment using GitHub Actions.

### Automatic Deployment

1. Push your code to the `main` branch on GitHub
2. The GitHub Actions workflow will automatically build and deploy your site
3. Go to repository Settings > Pages
4. Under "Source", select "GitHub Actions"
5. The site will be available at `https://[username].github.io/Portfolio/`

### Manual Deployment

If you prefer manual deployment:

1. Run `npm run build`
2. Copy the contents of the `dist` folder to the `docs` folder (or `gh-pages` branch)
3. Push to GitHub
4. Enable GitHub Pages in repository settings

### Adding Your Headshot

Place your professional headshot image at `public/headshot.jpg` for it to appear in the Hero section.

### Adding Travel Photos

Add your travel photos to `public/travel/` directory with the following naming convention:
- `dubai-1.jpg`, `dubai-2.jpg`, etc.
- `nyc-1.jpg`, `nyc-2.jpg`, etc.
- Similar pattern for other cities

The carousel will automatically display these images when available.
