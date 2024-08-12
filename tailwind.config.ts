import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
         '3xl': '1600px', // New custom screen size
      },
      fontFamily: {
        cairo: ['Cairo'],
      },
      colors: {
        Melbourne: {
          100: "#F3F9F8",
          200: "#E6F3F1",
          300: "#CBE8E1",
          400: "#AADBD1",
          500: "#83CCBF",
          600: "#47C0AC",
          700: "#40AC9A",
          800: "#379585",
          900: "#2D796D",
        },
        Homeworld: {
          100: "#F2F5FD",
          200: "#E4ECFA",
          300: "#C6D6F5",
          400: "#A2BFF0",
          500: "#74A4EA",
          600: "#1984E5",
          700: "#1676CD",
          800: "#1366B1",
          900: "#105391",
        },
        lightGray:"#FBFBFB",
        medGray:"#DEDEDE",
        darkGray:"#595959",
        newGray:"#FDFDFD"
     
      },
    },
  },
  plugins: [],
};
export default config;
