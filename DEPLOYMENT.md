# GitHub Pages Deployment Guide

This guide explains how to deploy this Next.js CV template to GitHub Pages and configure it with your custom domain.

## Prerequisites

- A GitHub account
- (Optional) A custom domain name

## Automatic Deployment Setup

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Enabling GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to the `main` branch

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) will:
- Install dependencies using Yarn
- Build the Next.js app as a static site
- Upload the built files to GitHub Pages
- Deploy the site

Once the workflow completes, your site will be available at:
```
https://<your-username>.github.io/sample-nextjs-cv-template/
```

## Custom Domain Setup

### Option 1: Using a Custom Domain (e.g., cv.yourdomain.com)

1. **Configure DNS Settings** at your domain provider:
   - Add a **CNAME record**:
     - Name/Host: `cv` (or subdomain of your choice)
     - Value/Points to: `<your-username>.github.io`
     - TTL: 3600 (or default)

2. **Configure GitHub Pages**:
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter your domain: `cv.yourdomain.com`
   - Click **Save**
   - Wait for DNS check to complete
   - ✅ Check **Enforce HTTPS** once DNS is verified

3. **Update `next.config.js`** if needed:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // Remove basePath when using custom domain
   }
   
   module.exports = nextConfig
   ```

### Option 2: Using Root Domain (e.g., yourdomain.com)

1. **Configure DNS Settings** at your domain provider:
   - Add **A records** pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME record** for `www`:
     - Name/Host: `www`
     - Value: `<your-username>.github.io`

2. Follow steps 2-3 from Option 1, using your root domain

### Option 3: Using Repository Path (No Custom Domain)

If you're using the default `<username>.github.io/repository-name` URL:

1. Update `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/sample-nextjs-cv-template', // Your repository name
   }
   
   module.exports = nextConfig
   ```

2. Rebuild and redeploy by pushing to main branch

## Verifying Deployment

1. Wait for the GitHub Actions workflow to complete (usually 2-3 minutes)
2. Check the **Actions** tab in your repository to monitor progress
3. Once complete, visit your GitHub Pages URL or custom domain
4. Your CV should be live! 🎉

## Troubleshooting

### Site Not Loading
- Check the Actions tab for deployment errors
- Ensure GitHub Pages is enabled in repository settings
- Verify DNS settings if using custom domain (can take up to 48 hours)

### Images Not Showing
- Ensure images are in the `public/` directory
- Check that `images.unoptimized: true` is set in `next.config.js`

### 404 Errors on Subpages
- GitHub Pages serves static files only
- Ensure `output: 'export'` is set in `next.config.js`
- All routes should be pre-rendered during build

### Custom Domain Not Working
- Verify CNAME record is correctly configured
- Wait for DNS propagation (up to 48 hours)
- Check DNS with `dig cv.yourdomain.com` or `nslookup cv.yourdomain.com`
- Ensure HTTPS is enabled in GitHub Pages settings

## Local Development

To run the site locally:

```bash
cd app
yarn install
yarn dev
```

Visit `http://localhost:3000` to see your site.

To test the production build locally:

```bash
cd app
yarn build
npx serve out
```

## Updating Your CV

1. Edit the content in `app/src/data/resume-data.ts`
2. Commit and push your changes to the `main` branch
3. GitHub Actions will automatically rebuild and deploy your site

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
