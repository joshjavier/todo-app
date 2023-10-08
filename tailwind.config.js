/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-blue': '#3A7BFD',
        'very-light-gray': '#FAFAFA',
        'very-light-grayish-blue': '#E4E5F1',
        'light-grayish-blue': '#D2D3DB',
        'dark-grayish-blue': '#9394A5',
        'very-dark-grayish-blue': '#484B6A',
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
