/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rosebrand: "#ec0f68",
        roseDeep: "#c90858",
        bluebrand: "#2f7cf6",
        amberbrand: "#d9a441",
        warm: "#fff8ef",
        cream: "#fffdf9"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      borderRadius: {
        card: "8px"
      }
    }
  },
  plugins: []
};