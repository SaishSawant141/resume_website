# Resume Website

React (Vite) single-page resume with dark/light theme, deployable to GitHub Pages.

## Update content
Edit **`src/data/resume.js`** only (use `**text**` for bold), and replace
**`public/resume.pdf`** with your latest PDF. Empty contact fields are hidden.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create a GitHub repo and push this folder's contents to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds and publishes the site automatically.

Asset paths are relative (`base: "./"`), so no config change is needed for any repo name.
