/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
        'bh-yellow': '#FFD700', // BeeHappy Yellow
        'bh-dark-blue': '#1A2B4C', // BeeHappy Dark Blue
        'bh-light-blue-gray': '#B0C4DE', // Lighter blue/grey for text
        'bh-input-bg': '#2F4F6D', // Slightly lighter dark blue for inputs
        'bh-input-border': '#4A6D90', // Input border color
        'bh-error': '#FF6347', // Tomato red for errors
      },
    },
  },
  plugins: [],
}
