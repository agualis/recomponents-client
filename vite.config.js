import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: '@vue/compat'
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })
  ],
  optimizeDeps: {
      // Allows to refresh recomponents with yarn link and yarn build:watch mode
      exclude: ['rebilly-recomponents-next'],
  }
});