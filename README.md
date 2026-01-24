# Pooja Lohit - Portfolio

A high-performance, responsive, and ultra-modern personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark mode design with glassmorphism effects, interactive travel map, and project showcases.

## ✨ Features

- 🌙 **Dark Mode First** - Deep grays with vibrant NYU purple accents
- 🎨 **Glassmorphism Effects** - Modern frosted glass UI elements
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **High Performance** - Built with Vite for lightning-fast load times
- 🗺️ **Interactive Travel Map** - Shows 25/195 countries visited with location markers
- 📸 **Auto-playing Image Carousel** - Travel photos sorted by city
- 📚 **Interactive Project Flashcards** - Expandable project cards with detailed views
- 🎓 **Education Timeline** - Two-column layout showcasing NYU and Amity University
- 💼 **Work Experience** - Vertical timeline with company links
- 📖 **Books Section** - Currently reading and top recommendations with Goodreads link

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Simple Maps** - Interactive world map
- **Swiper** - Touch-enabled carousel
- **React Icons** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to GitHub Pages

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Configure Base Path** (if needed):
   - If your repository is named `Portfolio`, the base path in `vite.config.ts` is already set to `/Portfolio/`
   - If your repository has a different name, update the `base` property in `vite.config.ts`:
     ```ts
     base: '/your-repo-name/',
     ```
   - If deploying to `username.github.io` (user/organization site), set base to `/`:
     ```ts
     base: '/',
     ```

2. **Enable GitHub Pages**:
   - Go to your repository Settings > Pages
   - Under "Source", select **"GitHub Actions"**
   - Save the settings

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

4. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically:
     - Build the project
     - Deploy to GitHub Pages
   - Your site will be available at:
     - `https://[username].github.io/Portfolio/` (if repo is named Portfolio)
     - `https://[username].github.io/your-repo-name/` (for other repo names)
     - `https://[username].github.io/` (for user/organization sites)

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. Run `npm run build`
2. Copy the contents of the `dist` folder to the `docs` folder
3. Push to GitHub
4. Enable GitHub Pages in repository settings and select `docs` folder as source

## 📝 Adding Your Content

### Professional Headshot

Place your professional headshot image at:
```
public/headshot.jpg
```

The image should be square (recommended: 800x800px or higher) for best results.

### Travel Photos

Add your travel photos to the `public/travel/` directory with the following naming convention:

```
public/travel/
  ├── dubai-1.jpg
  ├── dubai-2.jpg
  ├── nyc-1.jpg
  ├── nyc-2.jpg
  ├── barcelona-1.jpg
  ├── istanbul-1.jpg
  └── ... (other cities)
```

The carousel will automatically display these images when available. Photos are sorted by city name.

### Updating Content

All content is defined in the component files:
- **Hero Section**: `src/components/Hero.tsx`
- **Education**: `src/components/Education.tsx`
- **Work Experience**: `src/components/WorkExperience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Travel**: `src/components/Travel.tsx`
- **Books**: `src/components/Books.tsx`

## 🎨 Customization

### Colors

NYU purple colors are defined in `tailwind.config.js`:
- `nyu-purple`: `#57068c`
- `nyu-purple-light`: `#7a1ba8`
- `nyu-purple-dark`: `#3d0059`

To customize, update the color values in `tailwind.config.js`.

### Styling

Global styles and glassmorphism utilities are in `src/index.css`. The design uses:
- Dark gray backgrounds (`bg-gray-900`, `bg-gray-800`)
- Glassmorphism effects (`.glass`, `.glass-strong`)
- Smooth animations via Framer Motion

## 📄 License

This project is private and personal.

## 👤 Author

**Pooja Lohit**
- LinkedIn: [pooja-lohit](https://www.linkedin.com/in/pooja-lohit/)
- Goodreads: [poojalohit](https://www.goodreads.com/poojalohit)
