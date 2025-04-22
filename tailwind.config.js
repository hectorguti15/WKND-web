/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF0080',
        'neon-blue': '#00F0FF',
        'neon-purple': '#7F00FF',
        'neon-green': '#00FF66',
        'primary': '#FF5F1F',
        'secondary': '#FC2E20',
        'dark-bg': '#080708',
        'dark-surface': '#121212',
      },
      boxShadow: {
        'neon-pink': '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px #FF0080, 0 0 15px #FF0080',
        'neon-blue': '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px #00F0FF, 0 0 15px #00F0FF',
        'neon-purple': '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px #7F00FF, 0 0 15px #7F00FF',
        'neon-green': '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px #00FF66, 0 0 15px #00FF66',
      },
      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px currentColor' },
          '100%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px currentColor, 0 0 30px currentColor' }
        }
      },
      backgroundImage: {
        'disco-dots': 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dots-sm': '20px 20px',
        'dots-md': '30px 30px',
        'dots-lg': '40px 40px',
      },
    },
  },
  plugins: [],
}