/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#EA3568",
      gray: "#9A999B",
      border: "#42424A",
      dark: "#19161C",
      whiteSecondary: "#F0F0F0",
      white: "#FFFFFF",
      black: "#000000",
      primaryOpacity: "#ea356826",
      grayDark: "#999999",
      orange: "#F74E39",
      darkSurface: "#1A1D1F",
      surfaceQuaternary: "#272B30",
      lightGreen: "#B4E3CA",
      lightPink: "#CABDFD",
      lightSky: "#B0E4FB",
      lightGray: "#9A9FA5",
      sky: {
        500: "linear-gradient(180deg, rgba(0, 10, 255, 0.50) 0%, rgba(0, 0, 0, 0.00) 136.61%), linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%)"
      },
      cyan: {
        100: "rgba(255, 255, 255, 0.3)",
        200: "rgba(255, 255, 255, 0.04)",
        300: "rgba(255, 255, 255, 0.08)",
        400: "rgba(255, 255, 255, 0.5)",
        500: "rgba(255, 255, 255, 0.1)",
      },
      green: {
        100: "#22BA8C",
      },
      pink: {
        200: "rgba(234, 53, 104, 0.15)",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
