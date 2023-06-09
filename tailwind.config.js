/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bold: ["GalanoGrotesqueBold", "sans-serif"],
        extrabold: ["GalanoGrotesqueExtraBold", "sans-serif"],
        medium: ["GalanoGrotesqueMedium", "sans-serif"],
        regular: ["GalanoGrotesqueRegular", "sans-serif"],
      },
      colors: {
        mainColor: "#FF0D87",
        textColor: "#9C9C9C",
        borderColor: "#DEDEDE",
      },
    },
  },
  plugins: [],
};
