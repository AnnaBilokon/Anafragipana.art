/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
	
    extend: {
		colors: {
			'main': '#FFFBF7',
			'indigo': '#1D053D',
		  },
		height: {
			'560': '35rem',
		  },
		  spacing: {
			'512': '32rem',
		  }
		 
	},
  },
  plugins: [],
}

