import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
    const libEnv = loadEnv('', path.resolve(__dirname, 'GAB-config'));

    return {
        plugins: [
            vue(),
            vueDevTools(),
        ],
        define: {
            'import.meta.env': {
                ...libEnv
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
    }
})
