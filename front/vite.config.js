import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Agrega un alias para resolver la ruta del archivo VAMOS.png
      '/assets/VAMOS.png': path.resolve(__dirname, 'src/assets/VAMOS.png'),
    },
  },
})
