# How to Add Travel Images

To add your travel photos to the portfolio:

## Step 1: Prepare Your Images

1. Resize your images to a reasonable size (recommended: 800-1200px width)
2. Save them as JPG or PNG files
3. Name them according to the cities in the carousel:
   - `dubai-1.jpg`
   - `nyc-1.jpg` (or `new-york-1.jpg`)
   - `barcelona-1.jpg`
   - `istanbul-1.jpg`
   - `athens-1.jpg`
   - `lisbon-1.jpg`
   - `marrakech-1.jpg`
   - `cairo-1.jpg`

## Step 2: Add Images to the Project

1. Copy your image files into the `public/travel/` folder
   ```
   public/
     travel/
       dubai-1.jpg
       nyc-1.jpg
       barcelona-1.jpg
       ... (other images)
   ```

## Step 3: Update the Travel Component (if needed)

If you want to add more cities or change the existing ones, edit `src/components/Travel.tsx`:

```typescript
const travelPhotos = [
  { city: 'Dubai', filename: 'dubai-1.jpg', alt: 'Dubai' },
  { city: 'New York', filename: 'nyc-1.jpg', alt: 'New York City' },
  // Add more cities here:
  { city: 'Paris', filename: 'paris-1.jpg', alt: 'Paris' },
]
```

## Step 4: Test Locally

1. Run `npm run dev` to start the development server
2. Navigate to the Travel section
3. Verify that your images appear in the carousel

## Step 5: Deploy

1. Commit your images:
   ```bash
   git add public/travel/
   git commit -m "Add travel photos"
   git push origin main
   ```

2. The images will automatically be deployed with your next GitHub Actions build

## Tips

- **Image Format**: JPG is recommended for photos (smaller file size)
- **Image Size**: Keep images under 500KB each for faster loading
- **Aspect Ratio**: Images will be cropped to fit the carousel, so landscape photos work best
- **Multiple Photos**: You can add multiple photos per city by updating the array:
  ```typescript
  { city: 'Dubai', filename: 'dubai-1.jpg', alt: 'Dubai' },
  { city: 'Dubai', filename: 'dubai-2.jpg', alt: 'Dubai' },
  ```

## Current Cities in Carousel

- Dubai
- New York
- Barcelona
- Istanbul
- Athens
- Lisbon
- Marrakech
- Cairo

You can modify this list in `src/components/Travel.tsx` to match your actual travel photos.
