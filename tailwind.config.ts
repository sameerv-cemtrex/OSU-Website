import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        black: "#2b2b2b",
        "primary-orange": "hsl(var(--primary-orange) , 1)",
        "primary-blue": "hsl(var(--primary-blue) , 1)",
        "primary-green": "hsl(var(--primary-green) , 1)",
        "primary-pink": "hsl(var(--primary-pink) , 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "grozen-medical": "var(--grozen-medical)",
      },
    },
  },
  plugins: [],
};
export default config;
