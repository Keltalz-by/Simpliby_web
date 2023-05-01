/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ERegular: ["ERegular", "sans-serif"],
        Ebold: ["Ebold", "sans-serif"],
        Esemi: ["Esemi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
