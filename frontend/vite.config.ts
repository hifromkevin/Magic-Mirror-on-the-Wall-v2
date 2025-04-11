import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  envDir: '../',
  envPrefix: 'REACT_',
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
});
