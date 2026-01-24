# Quick Fix - Get Your Portfolio Working on GitHub

## Issue Found: Git Not Configured

Your git identity needs to be set up. Follow these steps:

### Step 1: Configure Git (Required)

Run these commands with YOUR information:

```bash
git config --global user.name "Pooja Lohit"
git config --global user.email "your-email@example.com"
```

**Replace `your-email@example.com` with your actual email** (the one you use for GitHub).

### Step 2: Add Missing Files and Commit

```bash
git add DEPLOYMENT.md TROUBLESHOOTING.md
git commit -m "Initial commit: Portfolio website"
```

### Step 3: Check Your Repository Name

**IMPORTANT:** Before pushing, check:
1. What is your GitHub repository name?
2. Is it exactly "Portfolio" or something else?

If it's different, update `vite.config.ts`:
```ts
base: '/Your-Actual-Repo-Name/',
```

### Step 4: Connect and Push (If Not Done Yet)

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Under **"Source"**, select **"GitHub Actions"**
4. Save

### Step 6: Check Actions Tab

1. Go to **Actions** tab
2. You should see "Deploy to GitHub Pages" workflow
3. Wait for it to complete (green checkmark)
4. Your site will be live!

## Common Issues After This

### If Workflow Fails: Missing package-lock.json

```bash
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

### If Site Shows 404: Wrong Base Path

Check your repository name and update `vite.config.ts` accordingly.

### If Nothing Happens: Check Actions Tab

- Look for any error messages
- Make sure workflow file is in `.github/workflows/deploy.yml`
- Verify GitHub Actions is enabled in repository settings

## Need More Help?

Check `TROUBLESHOOTING.md` for detailed solutions to specific errors.
