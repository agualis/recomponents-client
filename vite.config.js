import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        // Allows to refresh recomponents with yarn link and yarn build:watch mode
        exclude: ['rebilly-recomponents-next']
    }
});