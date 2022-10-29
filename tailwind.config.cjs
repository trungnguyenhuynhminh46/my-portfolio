/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
