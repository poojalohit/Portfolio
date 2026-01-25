# How to Push to GitHub - Fix 403 Error

## The Problem
You're getting a 403 Permission Denied error because GitHub requires a Personal Access Token instead of a password.

## Solution: Use a Personal Access Token

### Step 1: Create a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name like "Portfolio Push"
4. **IMPORTANT**: Select BOTH of these scopes:
   - **`repo`** scope (this gives full repository access)
   - **`workflow`** scope (this allows updating GitHub Actions workflows)
5. Click **"Generate token"**
6. **COPY THE TOKEN IMMEDIATELY** - you won't see it again!

**Note**: If you already have a token, you need to create a NEW one with the `workflow` scope. Existing tokens cannot have scopes added to them.

### Step 2: Push Using the Token

**Option A: Use Token in URL (One-time setup)**

Run this command (replace `YOUR_TOKEN` with your actual token):

```powershell
cd "C:\Users\pooja\.cursor\worktrees\Portfolio\fck"
git remote set-url origin https://YOUR_TOKEN@github.com/poojalohit/Portfolio.git
git -c http.proxy= -c https.proxy= push -u origin main-worktree:main
```

**Option B: Use Token When Prompted (Recommended)**

1. Run the push command:
   ```powershell
   cd "C:\Users\pooja\.cursor\worktrees\Portfolio\fck"
   git -c http.proxy= -c https.proxy= push -u origin main-worktree:main
   ```

2. When prompted for:
   - **Username**: Enter `poojalohit`
   - **Password**: Paste your Personal Access Token (NOT your GitHub password)

### Step 3: Verify the Push

After pushing, check: https://github.com/poojalohit/Portfolio

You should see your files there!

## Alternative: Use SSH (If you have SSH keys set up)

```powershell
git remote set-url origin git@github.com:poojalohit/Portfolio.git
git push -u origin main-worktree:main
```

## After Successful Push

Once pushed, GitHub Actions will automatically:
1. Build your portfolio
2. Deploy it to GitHub Pages
3. Make it available at: https://poojalohit.github.io/Portfolio/
