/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'blue-customer':'#0E9EEF',
      'blue-hover-customer':'#0D8ED7',
      'blue-active-customer':'#0B7EBF',
      'pink-customer':'#EE10B0',
      'dark-customer':'#181818',
      'white-customer':'#FFFFFF',
      'blue-white-customer':'#E7F5FD',
      'blue-white-hover-customer':'#DBF0FD',
      'blue-white-active-customer':'#B4E1FA',
      'gray-customer':"#818181",
      'transparent':"#00000000",
      'bg-songs-card':'#1F1F1F',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
