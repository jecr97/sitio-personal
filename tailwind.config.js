/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
          light:   'rgb(var(--primary-light-rgb) / <alpha-value>)',
          dark:    'rgb(var(--primary-dark-rgb) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface-rgb) / <alpha-value>)',
          2:       'rgb(var(--surface-2-rgb) / <alpha-value>)',
          3:       'rgb(var(--primary-dark-rgb) / <alpha-value>)',
        },
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        border: 'rgb(var(--border-rgb) / <alpha-value>)',
        highlight: 'rgb(var(--highlight-rgb) / <alpha-value>)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgb(var(--primary-light-rgb) / 0.3) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgb(var(--surface-rgb) / 0.95) 0%, rgb(var(--surface-2-rgb) / 0.9) 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '.5' },
        },
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.6s ease both',
        'fade-in':     'fadeIn 0.5s ease both',
        'fade-in-up-delay-1': 'fadeInUp 0.6s 0.15s ease both',
        'fade-in-up-delay-2': 'fadeInUp 0.6s 0.30s ease both',
        'fade-in-up-delay-3': 'fadeInUp 0.6s 0.45s ease both',
      },
      boxShadow: {
        'card':   'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'glow':   'var(--shadow-glow)',
      },
    },
  },
  plugins: [],
}
