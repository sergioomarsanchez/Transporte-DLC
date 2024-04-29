import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#40A48E",
          50: "#e2f2ef",
          100: "#c5e5de",
          200: "#a9d7ce",
          300: "#8cc9be",
          400: "#6fbba4",
          500: "#40A48E",
          600: "#328877",
          700: "#246c60",
          800: "#165049",
          900: "#083432",
        },
        secondary: {
          DEFAULT: "#FE6CBA",
          50: "#fff8f2",
          100: "#fde2df",
          200: "#fbcac4",
          300: "#faadb9",
          400: "#f98caa",
          500: "#FE6CBA",
          600: "#f759a1",
          700: "#f04698",
          800: "#e9338e",
          900: "#e22084",
        },
        accent: {
          DEFAULT: "#FE8436",
          50: "#fff2ed",
          100: "#fde4d9",
          200: "#fbc6ca",
          300: "#faa8bb",
          400: "#f98caa",
          500: "#FE8436",
          600: "#f76061",
          700: "#f03c8c",
          800: "#e91e82",
          900: "#e20077",
        },
        lightText: '#001F0D',
        lightBackground: '#eefff5',
        darkText: '#e0ffed',
        darkBackground: '#000f06',
      },
    },
  },
  plugins: [],
};
export default config;
