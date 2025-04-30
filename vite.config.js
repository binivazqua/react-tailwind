import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// prettier-ignore
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    watch: {
      ignored: ['**/.git/**', '**/.vscode/**', '**/node_modules/**']
    }
  }

})

