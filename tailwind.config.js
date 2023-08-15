/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#eb5234",
          light: "#ed6f55",
          dark: "#781704",
        },
        secondary: {
          main: "#DCFAFF",
          light: "#0288D1",
          dark: "#0288D1",
        },
      },
    },
  },
  plugins: [],
};
