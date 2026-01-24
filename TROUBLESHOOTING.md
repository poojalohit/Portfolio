# GitHub Pages Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: Workflow Not Running

**Symptoms:** No workflow appears in the Actions tab

**Solutions:**
1. Check if the workflow file is in the correct location: `.github/workflows/deploy.yml`
2. Verify the file was committed and pushed:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add deployment workflow"
   git push
   ```
3. Check if GitHub Actions is enabled:
   - Go to Settings → Actions → General
   - Ensure "Allow all actions and reusable workflows" is selected

### Issue 2: Workflow Fails During Build

**Symptoms:** Red X in Actions tab, build step fails

**Common Causes:**
1. **Missing package-lock.json**
   - Solution: Generate it locally:
     ```bash
     npm install
     git add package-lock.json
     git commit -m "Add package-lock.json"
     git push
     ```

2. **TypeScript Errors**
   - Solution: Test build locally first:
     ```bash
     npm run build
     ```
   - Fix any TypeScript errors before pushing

3. **Missing Dependencies**
   - Solution: Ensure all dependencies are in package.json
   - Run `npm install` locally to verify

### Issue 3: Site Shows 404 or Blank Page

**Symptoms:** Site loads but shows 404 or blank page

**Solutions:**

1. **Repository Name Mismatch**
   - Check your actual repository name on GitHub
   - Update `vite.config.ts` if different:
     ```ts
     base: '/Your-Actual-Repo-Name/',
     ```
   - Commit and push the change

2. **Base Path Issue**
   - If repo is named exactly "Portfolio", keep `base: '/Portfolio/'`
   - If repo has different name, update accordingly
   - If using custom domain, use `base: '/'`

3. **Wait for Propagation**
   - GitHub Pages can take 5-10 minutes to update
   - Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue 4: GitHub Pages Not Enabled

**Symptoms:** No Pages option in Settings, or "Source" shows nothing

**Solutions:**
1. Go to Settings → Pages
2. Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
3. If "GitHub Actions" option doesn't appear:
   - Wait a few minutes after first push
   - Check if repository is Public (required for free GitHub Pages)
   - Verify you have admin access to the repository

### Issue 5: Workflow Runs But Doesn't Deploy

**Symptoms:** Build succeeds but site doesn't update

**Solutions:**
1. Check the "deploy" job in Actions (not just "build")
2. Ensure both jobs complete successfully
3. Check if Pages environment is set up:
   - Go to Settings → Environments
   - Should see "github-pages" environment

### Issue 6: Authentication Errors

**Symptoms:** Push fails with authentication error

**Solutions:**
1. Use Personal Access Token instead of password:
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `repo` scope
   - Use token as password when pushing

2. Or use SSH:
   ```bash
   git remote set-url origin git@github.com:YOUR_USERNAME/Portfolio.git
   ```

## Step-by-Step Diagnostic

### Step 1: Verify Local Build Works
```bash
npm install
npm run build
```
If this fails, fix errors before pushing.

### Step 2: Check Repository Name
1. Go to your GitHub repository
2. Check the URL: `github.com/YOUR_USERNAME/REPO_NAME`
3. Update `vite.config.ts` if repo name is different from "Portfolio"

### Step 3: Verify Workflow File
1. Check `.github/workflows/deploy.yml` exists
2. Verify it was committed:
   ```bash
   git log --oneline --all -- .github/workflows/deploy.yml
   ```

### Step 4: Check Actions Tab
1. Go to your repository → Actions tab
2. Look for "Deploy to GitHub Pages" workflow
3. Click on it to see if it ran
4. Check for any error messages

### Step 5: Verify Pages Settings
1. Settings → Pages
2. Source should be "GitHub Actions"
3. Should show deployment status

### Step 6: Check Deployment URL
1. Settings → Pages should show the URL
2. Try accessing: `https://YOUR_USERNAME.github.io/REPO_NAME/`
3. Note the trailing slash is important!

## Quick Fixes

### Fix 1: Regenerate package-lock.json
```bash
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Regenerate package-lock.json"
git push
```

### Fix 2: Update Base Path
If your repo is NOT named "Portfolio":
```bash
# Edit vite.config.ts
# Change: base: '/Portfolio/',
# To: base: '/Your-Repo-Name/',
git add vite.config.ts
git commit -m "Fix base path"
git push
```

### Fix 3: Re-run Workflow
1. Go to Actions tab
2. Click on the workflow run
3. Click "Re-run all jobs"

### Fix 4: Manual Deployment (Alternative)
If GitHub Actions keeps failing:
1. Build locally: `npm run build`
2. Create `docs` folder: `mkdir docs`
3. Copy dist contents: `cp -r dist/* docs/`
4. Commit and push:
   ```bash
   git add docs/
   git commit -m "Manual deployment"
   git push
   ```
5. Settings → Pages → Source → Select "main" branch and "/docs" folder

## Still Not Working?

Share these details:
1. What error message do you see in the Actions tab?
2. What is your repository name?
3. Is the workflow running at all?
4. What happens when you visit the Pages URL?
