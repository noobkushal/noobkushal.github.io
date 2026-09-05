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
        cyber: {
          bg: '#060A12',
          card: '#0D1424',
          panel: '#121B2E',
          border: '#1B2842',
          hover: '#223252',
          accent: '#06B6D4',
          purple: '#A855F7',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        heading: ['Syne', 'Outfit', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
