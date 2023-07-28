/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
      },
      colors: {
        customGreen: '#6ef96e',
        customBg: '#1f2023',
        customDarkBg1: 'rgb(31, 32, 35)',
        customDarkBg3: 'rgb(48, 49, 54)',
        customDarkBg3Hover: 'rgb(55, 56, 62)',
        customGrayBorder: 'rgb(255,255,255,0.1)',
        customGrayText: 'rgb(174, 178, 183)',
        customDarkBgTransparent: 'rgb(31, 32, 35, 0.7)',
        customDarkBgTransparentDarker: 'rgb(0,0,0,0.5)',
        customDarkBgTransparentLighter: 'rgb(48, 49, 54, 0.7)',
        customDarkBlue: '#212135'
      },
      fontFamily: {
        Inter: 'Inter'
      },
      screens: {
        xs: '530px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xll: '1400px',
        '2xl': '1536px'
      }
    }
  }
}
