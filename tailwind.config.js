/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg1': '0px -5px 6px #000000',
        'lg2': '0px 0px 8px #000000',
      },
      backgroundImage: {
        "gradient1": "radial-gradient(#333 5%, transparent 60%)",
        "gradient2": "linear-gradient(90deg, #D9B6A1 0%, #7EB2B6 87%)",
        "gradient3": "radial-gradient(rgba(0,255,255,.05) 5%, transparent 70%)",
        "gradient4": "radial-gradient(rgba(255,125,0,.05) 5%, transparent 70%)",
      },
      fontFamily: {
        'PPNeueMachina-PlainLight': "PPNeueMachina-PlainLight",
        'PPNeueMachina-PlainSemibold': "PPNeueMachina-PlainSemibold",
        'PPNeueMachina-PlainThin': "PPNeueMachina-PlainThin",
        'PPNeueMachina-PlainBlack': "PPNeueMachina-PlainBlack",
        'MissionX': "MissionX",
        'ChakraPetch' : "Chakra Petch",
        'LattoLight' : 'Lato-Light',
      },
      screens: {
        'xxlg': {'min': '1820px'},
        'xlg': {'min': '1440px'}
      }
    },
  },
  plugins: [],
}