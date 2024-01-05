import type { Config } from 'tailwindcss'

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
      fontSize: {
        small: "14px",
      },
      textColor: {
        "dark-text": "#343434",
        "light-text": "#a3a3a3",
        "light-hover-text": "#fff",
        white: "#f0f0f0",
        lime: "#d6fb41",
      },
      backgroundColor: {
        "light-gray": "#a3a3a3",
        "try-color": "#eaff96",
        "try-hover-color": "#F1FFB9",
        background: "#161616",
        nav: "#0e0e0e",
        "dark-gray": "#1d1d1d",
      },
      borderColor: {
        "dark-gray": "#1d1d1d",
      },
    },
  },
  plugins: [],
};
export default config
