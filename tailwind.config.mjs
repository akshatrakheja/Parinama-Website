/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#e8f0eb',
          100: '#c5d9cb',
          200: '#9ebfaa',
          300: '#77a589',
          400: '#568f6e',
          500: '#357954',
          600: '#2a6343',
          700: '#1f4d33',
          800: '#173824',
          900: '#0e2316',
          DEFAULT: '#1d3b2d',
        },
        gold: {
          DEFAULT: '#D19900',
          light: '#f0b800',
          dark:  '#a37800',
        },
        sage: {
          DEFAULT: '#77C788',
          light: '#96d4a4',
          dark:  '#57a869',
        },
        cream: '#efede3',
        charcoal: '#000000',
        ink: '#111111',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        serif:   ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem',    { lineHeight: '1.05' }],
        '6xl': ['3.75rem', { lineHeight: '1.0' }],
        '7xl': ['4.5rem',  { lineHeight: '0.95' }],
        '8xl': ['6rem',    { lineHeight: '0.9' }],
        '9xl': ['8rem',    { lineHeight: '0.88' }],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};
