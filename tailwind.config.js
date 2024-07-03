/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        sinkImg: 'url("/ourproducts/sink.webp")',
        panelsImg: 'url("/ourproducts/panels.webp")',
        urinalImg: 'url("/ourproducts/urinal.webp")',
        mirrorImg: 'url("/ourproducts/mirror.webp")',
      },
      colors: {
        primary: {
          default: '#F9F8EB',
        },
        secondary: {
          default: '#415865',
        },
      },
      animation: {
        "skew-scroll": "skew-scroll 15s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        "skew-scroll": {
          "0%": {
            transform:
              "rotatex(20deg)  translateZ(0) translateY(0)",
          },
          "100%": {
            transform:
              "rotatex(0deg)   translateZ(0) translateY(-100vh)",
          },
        },
        scroll: {
          to: {
            transform: "translateY(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
});
