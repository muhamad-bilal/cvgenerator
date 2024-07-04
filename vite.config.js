// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    loader: 'jsx', // Treat .js files as .jsx
    include: [
      // Only include specific directories and files
      'src/**/*.js',
      'src/**/*.jsx',
    ],
    exclude: [
      // Exclude any files or directories you don't want to include
      'node_modules',
    ],
  },
});
