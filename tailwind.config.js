/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        greenLight: '#88BD2D',
        greenDark: '#13953E',
        redAccent: '#D0342D',
        black: '#000000'
      },
      fontFamily: {
        rabbits: ['"Rabbits Dummy"', 'sans-serif'],
        howell: ['Howell', 'sans-serif']
      }
    },
  },
  plugins: [],
}