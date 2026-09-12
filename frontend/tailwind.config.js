/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          50: '#f6f7f8',
          100: '#eceff1',
          200: '#cfd8dc',
          300: '#90a4ae',
          400: '#607d8b',
          500: '#455a64',
          600: '#37474f',
          700: '#263238',
          800: '#1a2327',
          900: '#0f171a',
          950: '#090e10',
        },
        eco: {
          emerald: '#10b981',
          forest: '#059669',
          mint: '#34d399',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        },
        accent: {
          amber: '#f59e0b',
          violet: '#8b5cf6',
          sky: '#38bdf8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.3)',
        'glow-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'carbon-mesh': 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 75%)',
      }
    },
  },
  plugins: [],
}
