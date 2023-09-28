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
			animation: {
        scroll: 'scroll 70s linear infinite',
        integrations: 'scrollIntegrations 50s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-320px*7))' }
        },
        scrollIntegrations: {
          '0%': { transform: 'translateX(calc(-240px*5))' },
          '100%': { transform: 'translateX(0)' }
        }
			}
		},
	},
	plugins: [],
}
