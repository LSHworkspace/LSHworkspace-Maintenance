import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// .env Load
dotenv.config()

console.log('Base URL:', process.env.VITE_BASE_URL)

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  plugins: [react()],
})
