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
        primary: {
          DEFAULT: '#0C3354',
          light:   '#1464a0',
          dark:    '#071e38',
          50:      '#e8f0f8',
          100:     '#c5d8ed',
          200:     '#9ebfe1',
          300:     '#74a4d4',
          400:     '#4f8ec9',
          500:     '#0C3354',
          600:     '#0a2c48',
          700:     '#07203a',
          800:     '#05162a',
          900:     '#030d1c',
        },
        surface: {
          DEFAULT: '#0a1628',
          2:       '#0f2040',
          3:       '#162b52',
        },
        accent: '#38bdf8',
        border: '#1a3050',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(20,100,160,0.35) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(15,32,64,0.9) 100%)',
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
        'card':   '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(12,51,84,0.5)',
        'glow':   '0 0 30px rgba(20,100,160,0.3)',
      },
    },
  },
  plugins: [],
}
