// tailwind.config.js
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [

    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./tailwind.config.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#1a1a2e',
        'accent-cyan': '#00BCD4',
        'accent-purple': '#8b5cf6',
        'accent-pink': '#ff006e',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)'
      },
      borderColor: {
        'accent-cyan': '#00f5ff',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      animation: {
        'background-shift': 'backgroundShift 20s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        backgroundShift: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        gradientRadial: 'radial-gradient(var(--tw-gradient-stops))'
      }
    },
  },
  safelist: [
    'from-accent-cyan',
  ],
  plugins: [flowbitePlugin],
  tailwindcss: {},
    autoprefixer: {},
};
