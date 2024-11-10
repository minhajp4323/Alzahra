/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jeko-medium': ['Jeko-Medium', 'sans-serif'], // Adding the custom Jeko-Medium font
      },
      screens: {
        xs: '320px', 
      },
    },
  },
  plugins: [],
};
