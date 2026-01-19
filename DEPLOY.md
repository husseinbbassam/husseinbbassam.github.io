# Deployment Guide

Your portfolio is ready for production! Here are the best free hosting options and how to use them.

## Option 1: Vercel or Netlify (Recommended)
This is the easiest method. It connects to your GitHub repository and automatically deploys whenever you push changes.

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).
3.  Sign up (you can use your GitHub account).
4.  Click **"Add New Project"** or **"New Site from Git"**.
5.  Select your repository.
6.  The default settings (Framework: Vite, Build Command: `npm run build`, Output Directory: `dist`) should be correct automatically.
7.  Click **Deploy**.

**Pros:**
*   Automatic deployment on push.
*   Zero configuration required for the URL path.
*   Fast global CDN.

---

## Option 2: GitHub Pages
This hosts your site directly from your repository on GitHub.

### Setup
1.  **Repository Name:**
    *   If your repository is named `username.github.io`, you can skip step 2.
    *   If your repository has any other name (e.g., `portfolio`), you MUST open `vite.config.ts` and add the base path:
        ```typescript
        export default defineConfig({
          base: '/your-repo-name/', // <--- Add this line
          plugins: [react()],
          // ...
        })
        ```

2.  **Deploy:**
    Run the following command in your terminal:
    ```bash
    npm run deploy
    ```

3.  **Activate in GitHub:**
    *   Go to your repository on GitHub.
    *   Go to **Settings** > **Pages**.
    *   Under "Build and deployment" > "Source", select **Deploy from a branch**.
    *   Select the **`gh-pages`** branch.
    *   Your site will be live at `https://your-username.github.io/repo-name/`.

**Pros:**
*   Free and integrated with GitHub.
*   Standard for developer portfolios.

## Option 3: Manual Upload (Netlify Drop)
If you don't want to use Git:
1.  Run `npm run build` locally.
2.  Go to [Netlify Drop](https://app.netlify.com/drop).
3.  Drag and drop the `dist` folder created in your project folder.
