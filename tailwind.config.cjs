module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1700px" },
      lg: { max: "1200px" },
      md: { max: "990px" },
      sm: { max: "768px" },
      ss: { max: "500px" },
      xs: { max: "420px" },
    },
    container: {
      padding: "15px",
      center: true,
    },
    extend: {
      colors: {
        primary: "#001529",
        secondary: "#cf0000",
        lightgray: "#b3b3b3",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
