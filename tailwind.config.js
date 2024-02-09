/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black_text: "#1f1f1f",
        gray: "#525252",
        gray_white: "#dadada",
        green: "#078343",
        blue: "#004172",
      },
      fontFamily: {
        customFont: ['"Outfit"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
