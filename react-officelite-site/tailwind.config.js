  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#FAFAFA',
        'slate-blue': '#333950',
        'slate-blue-opacity-50': 'rgba(51,57,80,0.50)',
        'slate-blue-opacity-40': 'rgba(51,57,80,0.40)',
        'blue-gray': '#747B95',
        'royal-blue': '#5175FF',
        'royal-blue-hover': '#829CFF',
        'midnight-blue': '#25293A',
        'royal-blue-opacity': 'rgba(81,117,255,0.15)',
        'royal-blue-opacity-35': 'rgba(81,117,255,0.35)',
        'royal-blue-opacity-10': 'rgba(81,117,255,0.1)',
        'white-opacity': 'rgba(255,255,255,0.75)',
        'white-opacity-50': 'rgba(255,255,255,0.5)',
        'form-line': 'rgba(116,123,149,0.50)',
        'form-line-2': 'rgba(116,123,149,0.25)',
        'error': '#F05B5B'
      },
      boxShadow: {
        'get-started': '0px 25px 25px -10px rgba(63, 91, 194, 0.25)',
        'cards': '0px 50px 50px -25px rgba(75, 92, 154, 0.25)',
        'selection-box': '0px 50px 50px -25px rgba(75, 92, 154, 0.75)',
        'form': '0px 50px 50px -25px rgba(75, 92, 154, 0.25)'
      },
      backgroundImage: {
        'pattern-header': 'url("/assets/home/bg-pattern-header.svg")',
        'pattern-pricing': 'url("/assets/home/bg-pattern-pricing.svg")',
        'pattern-footer': 'url("/assets/home/bg-pattern-footer.svg")',
      }
    },
  },
  plugins: [],
};