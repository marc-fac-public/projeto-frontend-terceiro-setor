import { defineConfig } from 'vite';

export default defineConfig({
  base: '/projeto-frontend-terceiro-setor/', // Configuração necessária para o GitHub Pages
  build: {
    outDir: 'dist',
    minify: 'esbuild', // Minificação ultrarrápida
  }
});
