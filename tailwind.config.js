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
        400: "400", // Default normal weight
        500: "500",
        600: "600",
        700: "700", // Bold weight
        800: "800",
        900: "900",
      },
      fontSize: {
        nav: ["16px", "24px"], // font-size 16px, line-height 24px
        "header-lg": ["24px", "24px"], // font-size 24px, line-height 24px
        "banner-lg": ["48px", "60px"], // font-size 24px, line-height 24px
        clock: ["32px", "30px"], // font-size 24px, line-height 24px
        "clock-xsm": ["11px", "18px"], // font-size 24px, line-height 24px
        // clock: {
        //   DEFAULT: ["32px", "30px"], // font-size 24px, line-height 24px
        //   xsm: ["11px", "18px"],
        // },
      },
      fontWeight: {
        header: "700",
      },
      padding: {
        header: "1rem 2rem",
        "primary-x": "135px",
        "banner-l": "68px",
      },
      margin: {
        header: "1.5rem 0", // Adjust as needed
        "primary-x": "135px",
      },

      colors: {
        primary: {
          DEFAULT: "#000000", // Default primary color
          red: "#DB4444", // Primary red
          green: "#73F467", // Primary green
          yellow: "#ECF860", // Primary yellow
          gray: "#C1C0C1", // Primary gray
        },
        secondary: {
          DEFAULT: "#FFFFFF", // Default secondary color
          red: "#ED3833", // Secondary red
          gray: "#F5F5F5",
        },

        accent: "#d946ef", // Accent color
        background: "#f1f5f9", // Background color
      },
    },
  },
  plugins: [],
};
