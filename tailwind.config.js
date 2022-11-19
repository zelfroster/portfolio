module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Caveat', 'cursive'],
        main: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        fg: {
          light: "#2B2D42",
          dark: "#EDF2F4"
        },
        bg: {
          light: "#EDF2F4",
          dark: "#15192C"
        },
        primary: {
          light: "#DB1E4A",
          dark: "#EC4257"
        },
        secondary: "#8D99AE",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
