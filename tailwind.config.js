/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jeko-medium': ['Jeko-Medium', 'sans-serif'], // Add 'Jeko-Medium' to the fontFamily
      },
    },
  },
  plugins: [],
};
