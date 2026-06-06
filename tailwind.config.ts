import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream backgrounds
        cream: {
          DEFAULT: '#FEFAEF',
          50: '#FEFAEF',
          100: '#FBF5E9',
          200: '#F6F0E0',
          300: '#EFE7D4',
        },
        // Dark plum (text + dark buttons)
        ink: {
          DEFAULT: '#1C1024',
          soft: '#2A1B33',
        },
        // Primary crimson / rose
        crimson: {
          DEFAULT: '#B83A52',
          500: '#B83A52',
          600: '#A8334A',
          card: '#BE4257',
        },
        forest: {
          DEFAULT: '#4C7A5D',
          500: '#4C7A5D',
          card: '#3E6A4F',
        },
        gold: {
          DEFAULT: '#D4A849',
          500: '#C9982E',
          card: '#CFA13B',
          deep: '#B39758',
        },
        blush: {
          DEFAULT: '#F2B9C2',
          deep: '#E79BAA',
        },
        muted: {
          DEFAULT: '#6F6757',
          soft: '#8C8475',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
