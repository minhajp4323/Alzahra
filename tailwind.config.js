/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jekoMedium: ["Jeko-Medium", "sans-serif"],
        gilroyLight: ["Gilroy-Light", "sans-serif"],
        gilroyUltraLight: ["Gilroy Ultra Light", "sans-serif"],
        // filson: ['Filson Pro', 'sans-serif'],  
      },
      screens: {
        xs: "320px",
        avg: "800px",
      },
    },
  },
  plugins: [],
};
