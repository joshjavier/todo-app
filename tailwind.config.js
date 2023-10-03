/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-light-gray': '#FAFAFA',
        'very-light-grayish-blue': '#E4E5F1',
        'dark-grayish-blue': '#9394A5',
        'very-dark-grayish-blue': '#484B6A',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
