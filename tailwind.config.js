/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
        'bh-yellow': '#FFD700', // BeeHappy Yellow
        'bh-dark-blue': '#013A55', // BeeHappy Dark Blue 
        'bh-light-blue-gray': '#D5D5D5', // Lighter blue/grey for text
        'bh-input-bg': '#013A55', // Slightly lighter dark blue for inputs
        'bh-input-border': '#D5D5D5', // Input border color
        'bh-error': '#FF6347', // Tomato red for errors
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
