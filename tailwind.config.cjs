/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				qGreen: '#6EF96E',
				qBg: '#1F2122',
				qBlack: '#1E1E1E',
				qGray: '#303037',
				qPurple: '#E66EF9',
				qSky: '#6ED8F9',
				qRed: '#FF0B0B',
				qPaperGreen: 'rgba(110, 249, 110, 0.1)',
			},
		},
	},
	plugins: [],
}
