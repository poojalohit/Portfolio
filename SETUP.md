# Portfolio Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Headshot**
   - Place your professional headshot at: `public/headshot.jpg`
   - Recommended size: 800x800px (square, will be cropped to circle)
   - Supported formats: JPG, PNG, WebP

3. **Add Travel Photos** (Optional)
   - Create a `public/travel/` directory
   - Add photos with naming convention: `[city-name]-[number].jpg`
   - Examples:
     - `dubai-1.jpg`, `dubai-2.jpg`
     - `nyc-1.jpg`, `nyc-2.jpg`
     - `barcelona-1.jpg`, etc.
   - The carousel will automatically display available images

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Colors
Edit `tailwind.config.js` to customize the NYU purple color:
```js
colors: {
  'nyu-purple': '#57068c',        // Main purple
  'nyu-purple-light': '#7a1ba8',  // Lighter variant
  'nyu-purple-dark': '#3d0059',   // Darker variant
}
```

### Content Updates
- **Hero Section**: Edit `src/components/Hero.tsx`
- **Education**: Edit `src/components/Education.tsx`
- **Work Experience**: Edit `src/components/WorkExperience.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Travel**: Edit `src/components/Travel.tsx` (countries list)
- **Books**: Edit `src/components/Books.tsx`

## Deployment

### Important: Repository Name
If your GitHub repository is NOT named "Portfolio", update `vite.config.ts`:
```ts
base: '/Your-Repository-Name/',
```

### GitHub Pages (Automatic)
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on push to `main`

### GitHub Pages (Manual)
1. Run `npm run build`
2. Copy `dist` folder contents to `docs` folder
3. Push to GitHub
4. Enable Pages in Settings > Pages

## Project Structure

```
Portfolio/
├── public/
│   ├── headshot.jpg          # Your professional photo
│   └── travel/               # Travel photos directory
├── src/
│   ├── components/
│   │   ├── Navigation.tsx    # Floating nav bar
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Education.tsx     # Education section
│   │   ├── WorkExperience.tsx # Work experience
│   │   ├── Projects.tsx      # Projects with flashcards
│   │   ├── Travel.tsx        # Travel map & carousel
│   │   └── Books.tsx         # Books section
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
└── package.json
```

## Features

- ✅ Dark mode first design
- ✅ Glassmorphism effects
- ✅ Smooth animations (Framer Motion)
- ✅ Responsive design
- ✅ Interactive map (25 countries)
- ✅ Auto-playing photo carousel
- ✅ Project flashcards with modal details
- ✅ Sticky floating navigation
- ✅ Smooth scroll navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Map not loading
- Check internet connection (map loads from CDN)
- Verify `react-simple-maps` is installed

### Images not showing
- Verify image paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/` directory

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Clear `node_modules` and reinstall if needed
