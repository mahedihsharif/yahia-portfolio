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
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
