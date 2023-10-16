/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // ...
  theme: {
    extend: {
      spacing: {
        180: "calc(100vh - 180px)",
      },
    },
  },
  variants: {},
  plugins: [],
};
