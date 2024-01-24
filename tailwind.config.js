/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "hsl(180, 52%, 96%)",
        primary: "hsl(180, 29%, 50%)",
        secondary: "hsl(180, 31%, 95%)",
        dark: "hsl(180, 8%, 52%)",
        veryDark: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
