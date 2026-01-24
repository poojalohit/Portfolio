# Deployment Guide - Push to GitHub

## Step-by-Step Instructions

### Step 1: Commit Your Files

Your files are already staged. Commit them:

```bash
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository settings:
   - **Name**: `Portfolio` (or your preferred name)
   - **Description**: "Personal portfolio website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Rename branch to main (if not already)
git branch -M main

# Push your code
git push -u origin main
```

**Example:**
If your username is `poojalohit`, the command would be:
```bash
git remote add origin https://github.com/poojalohit/Portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **"Source"**, select **"GitHub Actions"**
5. The workflow will automatically deploy when you push to `main`

### Step 5: Wait for Deployment

- After pushing, go to the **Actions** tab in your repository
- You'll see a workflow running called "Deploy to GitHub Pages"
- Wait for it to complete (usually 2-3 minutes)
- Once complete, your site will be live!

### Step 6: Access Your Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/Portfolio/
```

**Example:**
```
https://poojalohit.github.io/Portfolio/
```

## Important Notes

### If Your Repository Name is Different

If you named your repository something other than "Portfolio", update `vite.config.ts`:

```ts
// Change this line:
base: '/Portfolio/',

// To match your repository name:
base: '/Your-Repository-Name/',
```

### Adding Your Headshot

Before or after deployment, add your headshot:
1. Place your photo at `public/headshot.jpg`
2. Commit and push:
   ```bash
   git add public/headshot.jpg
   git commit -m "Add headshot"
   git push
   ```

### Adding Travel Photos

1. Add photos to `public/travel/` directory
2. Name them: `[city]-[number].jpg` (e.g., `dubai-1.jpg`)
3. Commit and push:
   ```bash
   git add public/travel/
   git commit -m "Add travel photos"
   git push
   ```

## Troubleshooting

### Authentication Issues

If you get authentication errors when pushing:
- Use GitHub Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

### Build Fails

If the GitHub Actions workflow fails:
1. Check the Actions tab for error messages
2. Common issues:
   - Missing dependencies (should auto-install)
   - TypeScript errors (check locally with `npm run build`)
   - Repository name mismatch in `vite.config.ts`

### Site Not Loading

- Wait 5-10 minutes after first deployment
- Clear browser cache
- Check the Actions tab to ensure deployment succeeded
- Verify the repository name matches the `base` path in `vite.config.ts`

## Quick Command Reference

```bash
# Initial setup (already done)
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Connect to GitHub (do this after creating repo)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main
git push -u origin main

# Future updates
git add .
git commit -m "Update portfolio"
git push
```
