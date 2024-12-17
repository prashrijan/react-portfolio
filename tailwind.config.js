/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-minus-80": "calc(100vh - 77px)",
      },
    },
  },
  plugins: [],
};
