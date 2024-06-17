/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto']
      },
      backgroundImage: {
        'custom-image': "url('/src/assets/bglogin.jpg')",
        'login-image': "url('/src/assets/imglogin.png')",
      },
    },
  },
  plugins: [],
}

