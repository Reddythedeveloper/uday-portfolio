/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.05)",
        glassBorder: "rgba(255, 255, 255, 0.1)",
        cyan: {
           400: '#22d3ee',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-up': 'floatUp 1s ease-out forwards',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}