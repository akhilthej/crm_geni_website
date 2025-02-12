/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0c665d",
          100: "#073a35",
          STYLE1: "#fec84a",
        },
        secoundry: {
          DEFAULT: "#ccdcd9",
        },
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" }
        }
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out infinite"
      },
      
      width: {
        'a4': '210mm', // Define A4 width
      },
      height: {
        'a4': '297mm', // Define A4 height
      },
      maxWidth: {
        'a4': '210mm', // Define A4 max width
      },
      maxHeight: {
        'a4': '297mm', // Define A4 max height
      },
    },
  },
  plugins: [],
}
