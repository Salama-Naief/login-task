/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: { "fluid-video": "56.25%" },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      colors: {
        mainColor: "#088fc4",
        secondaryColor: "#83c7e1",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
