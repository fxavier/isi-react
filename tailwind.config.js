/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#0086C9',
          600: '#0073aa',
          700: '#005f8a',
          800: '#004c6b',
          900: '#003a4f',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00C1A2',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#334155',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0086C9 0%, #00C1A2 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(0, 134, 201, 0.1) 0%, rgba(0, 193, 162, 0.05) 100%)',
        'gradient-section': 'linear-gradient(135deg, rgba(0, 134, 201, 0.05) 0%, rgba(0, 193, 162, 0.03) 100%)',
      }
    },
  },
  plugins: [],
}