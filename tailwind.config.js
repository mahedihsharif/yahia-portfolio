module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      colors: {
        darkBlue: "rgba(0, 12, 34, 0.6)",
        white: "#FAFAFA",
        black: "#000",
      },
      screens: {
        // "2xl": { max: "1535px" },
        // xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "450px" },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
