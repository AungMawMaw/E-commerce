/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
        regular: "400",
        bold: "700",
      },
      fontSize: {
        nav: ["16px", "24px"], // font-size 16px, line-height 24px
        "header-lg": ["24px", "24px"], // font-size 24px, line-height 24px
      },
      fontWeight: {
        header: "700",
      },
      padding: {
        header: "1rem 2rem", // Adjust as needed
      },
      margin: {
        header: "1.5rem 0", // Adjust as needed
      },
      colors: {
        primary: "#000000", // Primary color
        secondary: "#FFFFFF", // Secondary color
        "primary-red": "#DB4444", // red
        "secendary-red": "#ED3833",
        "primary-green": "#73F467", //green
        "primary-yellow": "#ECF860",
        "primary-gray": "C1C0C1",

        accent: "#d946ef", // Accent color
        background: "#f1f5f9", // Background color

        "primary-bg": "#FFFFFF", // Secondary background
        "secondary-bg": "#000000", // Primary background
        "primary-bg-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
