import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    console.log('Dev');
    return {
      plugins: [
        react({
          jsxImportSource: '@emotion/react',
        }),
      ],
      server: {
        port: 3000,
      },

      build: {
        minify: 'esbuild',
        rollupOptions: {
          output: {
            entryFileNames: `guide.js`,
            assetFileNames: `[name].[ext]`,
          },
        },
      },
    };
  } else {
    return {
      plugins: [react()],
      server: {
        port: 3000,
      },

      build: {
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
          output: {
            entryFileNames: `guide.js`,
            assetFileNames: `[name].[ext]`,
          },
        },
      },
    };
  }
});
