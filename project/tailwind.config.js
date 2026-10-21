/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070709',
          900: '#0b0b0e',
          850: '#101014',
          800: '#16161b',
          750: '#1c1c22',
          700: '#232329',
          600: '#2e2e36',
          500: '#3e3e48',
        },
        cream: {
          50: '#fcfaf6',
          100: '#f5f1ea',
          200: '#e7e2d8',
          300: '#cfc9bd',
          400: '#a39e93',
          500: '#807b71',
          600: '#5c5851',
        },
        gold: {
          200: '#f5d99a',
          300: '#f0c878',
          400: '#e8b25a',
          500: '#d99a3c',
          600: '#b87d28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        display: ['3.25rem', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'display-lg': ['4.25rem', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
      },
      boxShadow: {
        glow: '0 0 90px -20px rgba(232, 178, 90, 0.3)',
        soft: '0 30px 70px -30px rgba(0,0,0,0.8)',
        card: '0 20px 50px -24px rgba(0,0,0,0.65)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-7px) rotate(0.5deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.5' },
          '70%': { transform: 'scale(1.9)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(6px)', opacity: '0.3' },
          '100%': { transform: 'translateY(0)', opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 1.2s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite',
        shimmer: 'shimmer 3s linear infinite',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
