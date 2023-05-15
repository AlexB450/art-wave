/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
	colors: {
		primary: '#1F2125',
		white: '#DAD9DC',
		gray: '#35373B',
		'light-gray': '#66686B',
		black: '#090909',
		blue: '#1D64EC',
		'light-blue': '84A3E2',
		green: '#0B9A55',
		'blue-gray': '#808EA9',
		orange: '#EB750D'
	}
}

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants.colors
		},
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},

			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif']
			},
			transitionProperty: {
				bg: 'background .2s linear'
			},
			backgroundImage: {
				'main-texture': "url('/images/texture.jpg')"
			}
		}
	},
	variables: {
		DEFAULT: {
			size: {
				head: '54px'
			}
		}
	},

	plugins: [require('@mertasan/tailwindcss-variables')]
}
