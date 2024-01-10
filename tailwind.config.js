/** @type {import('tailwindcss').Config} */

module.exports = {
content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ffc001",
        secondary: "#ff9c01",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        title: ['Sevillana', 'cursive'], // Add 'cursive' here or use it in styles
        singleDay: ['Single Day', 'cursive'], // Add 'cursive' here or use it in styles
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

