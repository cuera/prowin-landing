# Deploy Codebase → github.com/cuera/prowin-landing

Full overhaul: replaces everything in the remote repo with this local codebase.

---

## Step 1 — Verify you're in the right directory

```bash
pwd
# Expected: /e/delve-landing  (or similar path to this repo)
```

---

## Step 2 — Check current git status

```bash
git status
git remote -v
```

---

## Step 3 — Add the target remote (if not already set)

```bash
# Check if 'prowin' remote exists
git remote get-url prowin 2>/dev/null && echo "exists" || echo "not set"

# Add it (skip if it already exists)
git remote add prowin https://github.com/cuera/prowin-landing.git
```

If it already exists but points somewhere wrong:

```bash
git remote set-url prowin https://github.com/cuera/prowin-landing.git
```

---

## Step 4 — Stage all files

```bash
git add .
```

---

## Step 5 — Commit (skip if no new changes)

```bash
git commit -m "feat: full codebase overhaul — prowin landing site"
```

If nothing to commit, you'll see "nothing to commit" — that's fine, continue.

---

## Step 6 — Push to the remote repo (force overhaul)

```bash
# Push current branch as main, overwriting remote history
git push prowin master:main --force
```

> **What this does:** Takes your local `master` branch and force-pushes it
> as `main` on the `prowin-landing` repo, replacing everything there.

---

## Step 7 — Verify on GitHub

Open: https://github.com/cuera/prowin-landing

Confirm files match your local codebase.

---

## Troubleshooting

### Auth error (403 / permission denied)
```bash
# Use token-based URL instead
git remote set-url prowin https://<YOUR_GITHUB_TOKEN>@github.com/cuera/prowin-landing.git
git push prowin master:main --force
```
Get a token at: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → repo scope.

### Remote has protected branch rules
Disable branch protection on `main` temporarily:
GitHub → repo → Settings → Branches → Edit rule → uncheck "Require pull request" → Save

### "src refspec master does not match any"
```bash
# Your local branch might be named 'main' already
git branch
git push prowin main:main --force
```
