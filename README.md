# Next.js CV

[![1-click-deploy](https://defang.io/deploy-with-defang.png)](https://portal.defang.dev/redirect?url=https%3A%2F%2Fgithub.com%2Fnew%3Ftemplate_name%3Dsample-nextjs-cv-template%26template_owner%3DDefangSamples)

This is a sample of a Next.js CV web application that can be deployed to GitHub Pages or other hosting platforms.

The template is based off of the repository https://github.com/BartoszJarocki/cv on GitHub.

## 🚀 GitHub Pages Deployment

This repository is configured for automatic deployment to GitHub Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on:
- Setting up GitHub Pages deployment
- Configuring custom domains
- DNS configuration
- Troubleshooting

**Quick Start:**
1. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)
2. Push to the `main` branch to trigger automatic deployment
3. Your CV will be live at `https://<username>.github.io/sample-nextjs-cv-template/`

## Prerequisites

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

## Development

### Option 1: Using Docker

To run the application locally with Docker:

```bash
docker compose up --build
```

### Option 2: Using Yarn (for GitHub Pages deployment)

To run the application locally:

```bash
cd app
yarn install
yarn dev
```

The app will be available at `http://localhost:3000`

## Configuration

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration). 

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```bash
defang config set API_KEY
```

## Deployment

### GitHub Pages (Recommended for custom domains)

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete GitHub Pages deployment instructions.

### Defang Deployment

> [!NOTE]
> Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground

Deploy your application to the Defang Playground by opening up your terminal and typing:
```bash
defang compose up
```

#### BYOC

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

---

Title: Next.js CV

Short Description: A Next.js web app that displays a minimalist CV.

Tags: Next.js, React, TypeScript, JavaScript

Languages: nodejs
