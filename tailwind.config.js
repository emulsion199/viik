const defaultTheme = require("tailwindcss/defaultTheme");

const COLORS = {
  white: "#FFF",
  black: "#101011",
  transparent: "transparent",
  bg: {
    default: "#FAF1E5",
    hover: "#EAE4D8",
  },
  primary: "#384C43",
  accent: "#A8493D",
  gray: {
    1: "#585A60",
    2: "#8C9098",
    3: "#B6B8C0",
    4: "#F2F4F8",
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
    },
    colors: COLORS,
  },

  plugins: [require("@headlessui/tailwindcss")({ prefix: "hui" })],
};
