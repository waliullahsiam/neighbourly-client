/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["'Nunito Sans',sans-serif"],
        roboto: ["'Roboto',sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

