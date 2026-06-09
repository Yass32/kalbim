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
        // Backgrounds: white + light gray-lavender bands
        cream: {
          DEFAULT: '#FEFEFE',
          50: '#FEFEFE',
          100: '#F7F5F8',
          200: '#EEECEF',
          300: '#E4E1E6',
        },
        // Dark grey (headings, body strong, live badge)
        ink: {
          DEFAULT: '#515152',
          soft: '#3F3F40',
        },
        // Primary — neon pink / magenta
        crimson: {
          DEFAULT: '#92298E',
          500: '#92298E',
          600: '#7D2279',
          card: '#92298E',
        },
        // Secondary — matte lavender
        forest: {
          DEFAULT: '#BE8FC0',
          500: '#BE8FC0',
          card: '#AF7FB1',
        },
        // Tertiary — gray
        gold: {
          DEFAULT: '#A7A5A7',
          500: '#A7A5A7',
          card: '#A7A5A7',
          deep: '#8F8D8F',
        },
        // Soft lavender tint (featured surfaces)
        blush: {
          DEFAULT: '#EAD9EC',
          deep: '#BE8FC0',
        },
        muted: {
          DEFAULT: '#A7A5A7',
          soft: '#B9B7B9',
        },
        // Extra light lavender accent
        lilac: '#CDB0CE',
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
