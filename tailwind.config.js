const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        mooli: ['"Mooli"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
