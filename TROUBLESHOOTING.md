# Portfolio Troubleshooting Guide

## 🔍 Common Issues and Solutions

### Issue 1: Page Shows Content But No Interactivity

**Symptoms:**
- Content is visible but navigation doesn't work
- No animations
- Buttons don't respond

**Possible Causes:**
1. JavaScript bundle not loading
2. Build failed but old version is cached
3. Base path mismatch

**Solutions:**

1. **Check Browser Console:**
   - Press `F12` to open Developer Tools
   - Go to "Console" tab
   - Look for red error messages
   - Share the errors you see

2. **Check Network Tab:**
   - In Developer Tools, go to "Network" tab
   - Refresh the page
   - Look for failed requests (red entries)
   - Check if `index.js` or `index.css` are loading

3. **Clear Browser Cache:**
   - Press `Ctrl + Shift + Delete`
   - Select "Cached images and files"
   - Clear and refresh

---

### Issue 2: Blank White/Black Page

**Symptoms:**
- Page loads but shows nothing
- Just a blank screen

**Possible Causes:**
1. JavaScript error preventing render
2. CSS not loading
3. React app not mounting

**Solutions:**

1. **Check Console for Errors:**
   ```javascript
   // Common errors:
   - "Failed to load module"
   - "Cannot read property of undefined"
   - "React is not defined"
   ```

2. **Verify GitHub Actions Build:**
   - Go to: https://github.com/poojalohit/Portfolio/actions
   - Check if latest build has green checkmark ✅
   - If red X, click it to see error details

3. **Check if Base Path is Correct:**
   - URL should be: `https://poojalohit.github.io/Portfolio/`
   - NOT: `https://poojalohit.github.io/` (missing /Portfolio/)

---

### Issue 3: 404 Errors for Assets

**Symptoms:**
- Images not loading
- Styles not applying
- Console shows 404 errors

**Solutions:**

1. **Verify Base Path in vite.config.ts:**
   ```typescript
   base: '/Portfolio/',  // Must match your repo name
   ```

2. **Check Asset Paths:**
   - All assets should be relative to `/Portfolio/`
   - Example: `/Portfolio/headshot.jpg`

---

### Issue 4: Build Failing on GitHub Actions

**Symptoms:**
- GitHub Actions shows red X
- Site not updating

**Common Causes:**
1. TypeScript errors
2. Missing dependencies
3. Build script errors

**Solutions:**

1. **Check Build Logs:**
   - Go to: https://github.com/poojalohit/Portfolio/actions
   - Click on failed workflow
   - Scroll to "Build" step
   - Read error messages

2. **Fix TypeScript Errors:**
   - Run locally: `npm run build`
   - Fix any errors shown
   - Commit and push fixes

---

## 🛠️ Quick Diagnostic Steps

### Step 1: Check Local Build
```powershell
cd "C:\Users\pooja\.cursor\worktrees\Portfolio\fck"
npm run build
```
- If this fails, fix errors before pushing
- If this succeeds, the issue is likely deployment-related

### Step 2: Check GitHub Actions
1. Visit: https://github.com/poojalohit/Portfolio/actions
2. Check latest workflow status
3. If failed, read error messages

### Step 3: Check Browser Console
1. Open: https://poojalohit.github.io/Portfolio/
2. Press `F12`
3. Check Console tab for errors
4. Check Network tab for failed requests

### Step 4: Verify URL
- Correct: `https://poojalohit.github.io/Portfolio/`
- Wrong: `https://poojalohit.github.io/` (missing /Portfolio/)

---

## 📋 What to Share When Asking for Help

1. **What you see:**
   - Blank page?
   - Content but no interactivity?
   - Error messages?

2. **Browser Console Errors:**
   - Copy any red error messages

3. **GitHub Actions Status:**
   - Is the latest build passing or failing?

4. **URL you're accessing:**
   - Full URL you're trying to view

---

## 🔧 Quick Fixes

### Fix 1: Force Rebuild
1. Make a small change (add a space in README.md)
2. Commit and push
3. This triggers a new build

### Fix 2: Clear GitHub Pages Cache
1. Go to repository Settings > Pages
2. Change source and save
3. Change back to GitHub Actions and save
4. This forces a fresh deployment

### Fix 3: Verify Base Path
Ensure `vite.config.ts` has:
```typescript
base: '/Portfolio/',
```

---

## 📞 Still Not Working?

Share:
1. Screenshot of the page
2. Browser console errors (F12 > Console)
3. GitHub Actions build status
4. The exact URL you're accessing
