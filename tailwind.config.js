/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#43c88c",
        "primary-hover": "#149348",
        secondary: "#1a1a1a",
        "secondary-hover": "#333333",
        "secondary-active":"#404040",
        text: "#a1a1a1",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
