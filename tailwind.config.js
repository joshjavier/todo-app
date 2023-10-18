/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-blue': '#3A7BFD',
        'very-light-gray': '#FAFAFA',
        'very-light-grayish-blue': '#E4E5F1',
        'light-grayish-blue': {
          DEFAULT: '#D2D3DB',
          dark: '#CACDE8',
        },
        'dark-grayish-blue': {
          DEFAULT: '#9394A5',
          dark: '#777A92',
        },
        'very-dark-grayish-blue': {
          DEFAULT: '#484B6A',
          'dark-1': '#4D5066',
          'dark-2': '#393A4C',
        },
        'very-dark-blue': '#161722',
        'very-dark-desaturated-blue': '#25273C',
      },
      boxShadow: {
        DEFAULT: '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
