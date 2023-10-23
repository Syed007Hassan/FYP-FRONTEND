

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    // },
  },
  
  plugins: [  require('flowbite/plugin')({
    charts: true,
}),],
screens: {
  'sm': '640px', // Apply responsive classes at or above 640px
  'md': '768px', // Apply responsive classes at or above 768px
  'lg': '1024px', // Apply responsive classes at or above 1024px
},
};
