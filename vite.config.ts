import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './', // Use relative paths for assets (fixes 404s on GitHub Pages)
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      build: {
        target: ['es2015', 'safari14'], // Support Safari 14+ and ES2015 for compatibility
        cssTarget: ['safari14'], // Ensure CSS transformations work in Safari 14+
      },
      define: {
        // Env variables can be handled here if needed
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
