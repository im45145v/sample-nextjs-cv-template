# Quick Start Guide - GitHub Pages Deployment

## 🎯 Goal
Deploy your CV to GitHub Pages and link it with your custom domain.

## ⚡ Quick Setup (3 Steps)

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 2: Deploy
Push this PR to the `main` branch - the site will automatically deploy!

### Step 3: Configure Custom Domain (Optional)
Follow the detailed instructions in [DEPLOYMENT.md](DEPLOYMENT.md)

## 🌐 Your Site Will Be Live At

- **Default URL**: `https://<your-username>.github.io/sample-nextjs-cv-template/`
- **With Custom Domain**: `https://cv.yourdomain.com` (after DNS setup)

## 📝 DNS Configuration Example

For a subdomain like `cv.yourdomain.com`:

| Type | Name | Value |
|------|------|-------|
| CNAME | cv | `<your-username>.github.io` |

Then in GitHub Settings → Pages → Custom domain, enter: `cv.yourdomain.com`

## 🔧 What Changed?

This PR makes the app static (GitHub Pages only supports static sites):
- ✅ Removed server-side features (GraphQL API, Vercel Analytics)
- ✅ Configured Next.js for static export
- ✅ Added automated deployment workflow
- ✅ All styling and fonts work correctly

## 📚 Full Documentation

See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Complete DNS setup instructions
- Troubleshooting guide
- Alternative deployment options
- Local testing instructions

## ✨ No Changes Needed!

Your CV content in `app/src/data/resume-data.ts` works exactly as before.
Just merge this PR and you're ready to deploy! 🚀
