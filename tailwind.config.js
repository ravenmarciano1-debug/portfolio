/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Sora', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        bg: '#080c10',
        surface: '#0e1419',
        border: '#1e2830',
        accent: '#00e5a0',
        'accent-dim': '#00b87d',
        muted: '#4a5568',
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-16px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
