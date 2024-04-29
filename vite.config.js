import react from '@vitejs/plugin-react';
import reactPages from 'vite-plugin-react-pages';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    reactPages()
  ]
});
