// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class', // 重要：啟用 class 模式以手動控制亮暗
  content: [],
  theme: {
    extend: {
      colors: {
        // 定義「湖水」色系
        lake: {
          50: '#f0fdfa',  // 淺水波光
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // 主色 (Light mode)
          600: '#0d9488', // 深水 (Dark mode 強調色)
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        }
      }
    }
  },
  plugins: [],
}