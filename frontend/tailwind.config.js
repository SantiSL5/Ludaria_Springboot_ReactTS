const flowbite = require("flowbite-react/tailwind");
const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStroke: {
        1: '1px',
        2: '2px',
        3: '3px',
      },
      textStrokeColor: {
        black: '#000',
        white: '#fff',
      },
      colors: {
        'custom-orange': '#FB5D1C',
        'custom-grey': '#F5F5F5',
        'custom-black': '#222222',
      }
    },
  },
  plugins: [
    require('tailwindcss-text-stroke'),
    flowbite.plugin(),
    nextui(),
  ],
}