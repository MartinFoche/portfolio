/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f2ff',
          purple: '#550ecfff',
          pink: '#ff00e1',
          green: '#00ff9d',
          orange: '#ff8c00',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 10px #4fc3f7, 0 0 20px #4fc3f7, 0 0 40px #4fc3f7',
        'neon-purple': '0 0 10px #550ecfff, 0 0 20px #550ecfff, 0 0 40px #550ecfff',
      },
      keyframes: {
        'pulse-purple': {
          '0%, 100%': { background: '#1f0591ff' },
          '50%': { background: 'rgba(21, 0, 48, 1)' },
        },
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-purple': 'pulse-purple 4s ease-in-out infinite',
        'spin-once': 'spin-once 0.5s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
