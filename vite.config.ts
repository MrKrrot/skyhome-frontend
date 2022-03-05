import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* eslint-disable */
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
    },
})
