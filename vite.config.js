import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is set to 'dist'
    rollupOptions: {
      input: './src/main.jsx',  // Point to your main entry file
    },
  },
});
