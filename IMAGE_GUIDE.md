# Portfolio Image Guide

## 📸 How to View Your Portfolio

### Option 1: View Locally (Development)

1. **Start the development server:**
   ```powershell
   cd "C:\Users\pooja\.cursor\worktrees\Portfolio\fck"
   npm run dev
   ```

2. **Open in browser:**
   - Go to: `http://localhost:5173`
   - The page will auto-reload when you make changes

### Option 2: View Online (GitHub Pages)

Once GitHub Actions finishes deploying:

1. **Check deployment status:**
   - Go to: https://github.com/poojalohit/Portfolio/actions
   - Wait for a green checkmark ✅

2. **View your portfolio:**
   - URL: **https://poojalohit.github.io/Portfolio/**
   - It may take 1-2 minutes after the build completes

---

## 🖼️ How to Add/Update Images

### 1. Professional Headshot (Hero Section)

**Location:** `public/headshot.jpg`

**Steps:**
1. Place your professional headshot image in the `public` folder
2. Name it exactly: `headshot.jpg`
3. Recommended size: **800x800px** or larger (square format works best)
4. Supported formats: `.jpg`, `.jpeg`, `.png`

**Example:**
```
public/
  └── headshot.jpg  ← Your image here
```

**After adding:**
- If running locally: The image will appear immediately (refresh the page)
- For GitHub Pages: Push the image file and wait for deployment

---

### 2. Travel Photos (Travel Section Carousel)

**Location:** `public/travel/`

**Naming Convention:**
- Format: `[city-name]-[number].jpg`
- Examples:
  - `dubai-1.jpg`
  - `dubai-2.jpg`
  - `nyc-1.jpg`
  - `barcelona-1.jpg`
  - `istanbul-1.jpg`
  - `athens-1.jpg`
  - `lisbon-1.jpg`
  - `marrakech-1.jpg`
  - `cairo-1.jpg`

**Steps:**
1. Add your travel photos to the `public/travel/` folder
2. Name them using the format: `[city]-[number].jpg`
3. The carousel will automatically display them sorted by city name
4. Recommended size: **1200x800px** or similar landscape format

**Example structure:**
```
public/
  └── travel/
      ├── dubai-1.jpg
      ├── dubai-2.jpg
      ├── nyc-1.jpg
      ├── nyc-2.jpg
      ├── barcelona-1.jpg
      ├── istanbul-1.jpg
      └── ... (other cities)
```

**Supported cities** (you can add photos for any city):
- Dubai
- New York / NYC
- Barcelona
- Istanbul
- Athens
- Lisbon
- Marrakech
- Cairo
- Or any other city you've visited!

---

### 3. Book Cover Images (Books Section)

**Current setup:** The Books section uses images from Goodreads URLs.

**To use custom book cover images:**

1. Add book cover images to `public/books/`
2. Name them: `sapiens.jpg`, `empire-of-pain.jpg`, `everybody-lies.jpg`
3. Update `src/components/Books.tsx` to use local images:

```typescript
// Change from:
coverUrl: 'https://images-na.ssl-images-amazon.com/images/...'

// To:
coverUrl: '/books/sapiens.jpg'
```

---

## 📝 Quick Reference

### Image File Locations

| Image Type | Location | File Name Format |
|------------|----------|------------------|
| Headshot | `public/` | `headshot.jpg` |
| Travel Photos | `public/travel/` | `[city]-[number].jpg` |
| Book Covers | `public/books/` | `[book-name].jpg` (optional) |

### Image Recommendations

- **Headshot:** Square (800x800px or larger), professional photo
- **Travel Photos:** Landscape (1200x800px), high quality
- **Book Covers:** Standard book cover ratio (2:3), 400x600px

### After Adding Images

1. **For local development:**
   - Images appear immediately (refresh browser)
   - No restart needed

2. **For GitHub Pages:**
   ```powershell
   git add public/
   git commit -m "Add portfolio images"
   git push origin main-worktree:main
   ```
   - Wait for GitHub Actions to deploy (check Actions tab)
   - Images will be live at: https://poojalohit.github.io/Portfolio/

---

## 🎨 Image Optimization Tips

1. **Compress images** before adding (use tools like TinyPNG or ImageOptim)
2. **Use JPG** for photos (smaller file size)
3. **Use PNG** only if you need transparency
4. **Keep file sizes under 500KB** for faster loading

---

## ❓ Troubleshooting

**Image not showing?**
- Check the file name matches exactly (case-sensitive)
- Ensure the file is in the correct folder
- For GitHub Pages: Make sure you pushed the image file
- Check browser console for 404 errors

**Image looks stretched?**
- Ensure proper aspect ratio
- Headshot should be square
- Travel photos should be landscape
