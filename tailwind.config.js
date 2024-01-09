module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue_gray: { 400: "#8594a3", 900: "#21243d", "900_01": "#142850" },
        red: { A200: "#ff6464", A100: "#ff7c7c" },
        blue: { "100_3f": "#bbe1fa3f" },
        cyan: { 600: "#00a8cc" },
        white: { A700: "#ffffff" },
        gray: { 100: "#edf7fa", 300: "#e0e0e0" },
      },
      fontFamily: { heebo: "Heebo" },
      boxShadow: { bs: "0px 4px  10px 0px #bbe1fa3f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
