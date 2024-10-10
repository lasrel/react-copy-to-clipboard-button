/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryContrast: "rgb(var(--primary-contrast) / <alpha-value>)",

        text: "var(--text)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",

        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-top": "rgb(var(--surface-top) / <alpha-value>)",

        tag: "rgb(var(--tag) / <alpha-value>)",

        border: "rgb(var(--border) / <alpha-value>)",
        disabled: "rgb(var(--disabled) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
