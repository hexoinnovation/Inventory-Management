/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontfamily: {
        Quicksand: ["quick", "sans-serif"],
      },
    },
  },
  plugins: [],
  dark: "class",
};
