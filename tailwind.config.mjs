/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px'
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)"
    },
  	extend: {
  		colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        }
  		},
      borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),

  },
  plugins: [require("tailwindcss-animate")],
};
