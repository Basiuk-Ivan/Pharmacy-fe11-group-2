// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: './',
//   build: {
//     minify: true,
//     rollupOptions: {
//       output: {
//         chunkFileNames: 'js/[name]-[hash].js',
//         entryFileNames: '[name]-[hash].js',

//         assetFileNames: ({ name }) => {
//           if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
//             return 'images/[name]-[hash][extname]';
//           }

//           if (/\.css$/.test(name ?? '')) {
//             return '[name]-[hash][extname]';
//           }

//           return '[name]-[hash][extname]';
//         }
//       }
//     }
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  // Завантажуємо змінні оточення для поточного середовища
  const env = dotenv.config({
    path: `.env.${mode}`
  }).parsed;

  // Передаємо змінні оточення в конфігурацію Vite
  return {
    plugins: [react()],
    base: './',
    build: {
      minify: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: '[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'images/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return '[name]-[hash][extname]';
            }
            return '[name]-[hash][extname]';
          }
        }
      }
    },
    define: {
      'process.env': env
    }
  };
});
