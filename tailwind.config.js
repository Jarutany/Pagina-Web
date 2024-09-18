/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    colors:{
      white: '#FFFFFF',
      black:'#000000',
      lightGreen: '#B3DBD8',
      grey:'#D9D9D9',
      darkGrey: '#2C2C2C'
    },
    screens: {
      sm: '640px',   // Small devices (640px and up)
      md: '768px',   // Medium devices (768px and up)
      lg: '1024px',  // Large devices (1024px and up)
      xl: '1280px',  // Extra large devices (1280px and up)
      '2xl': '1536px', // 2x Extra large devices (1536px and up)
    },
    extend: {},
  },
  plugins: [],
}

