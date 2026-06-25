import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // If you deploy to a GitHub Pages *project* site (e.g. user.github.io/repo),
  // set this to '/your-repo-name/'. For a custom domain, Netlify, Vercel,
  // Cloudflare Pages, or a user/organization GitHub Pages site, leave it as '/'.
  base: '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
})
