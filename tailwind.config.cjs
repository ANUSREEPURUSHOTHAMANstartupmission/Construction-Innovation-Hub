const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Georgia', ...defaultTheme.fontFamily.sans],
				'heading': ['Merriweather', ...defaultTheme.fontFamily.sans],
				'other' : ['Work Sans', ...defaultTheme.fontFamily.sans],
				'poppins' : ['Poppins', ...defaultTheme.fontFamily.sans]
			},
		}
	},
	plugins: [
		require("tailwindcss-scoped-groups"),
		require('flowbite/plugin'),
	],
}
