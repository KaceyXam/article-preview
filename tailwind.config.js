/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
            scale: 0,
          },
          "100%": {
            opacity: 1,
            scale: 1,
          },
        },
        animation: {
          "fading-in": "fade-in 175ms linear infinite ",
        },
      },
    },
  },
  plugins: [],
};
