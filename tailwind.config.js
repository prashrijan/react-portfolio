/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-minus-80": "calc(100vh - 76px)",
      },
      screens: {
        tablet: { max: "1024px" }, // Treat all screens <= 1024px as tablet/mobile
      },
    },
  },
  plugins: [],
};
