const colors = require('tailwindcss/colors');

const withOpacityValue =
	(varName) =>
	({ opacityValue }) =>
		opacityValue === undefined
			? `hsl(var(--${varName}))`
			: `hsla(var(--${varName}) / ${opacityValue})`;

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		colors: {
			primary: {
				100: withOpacityValue('primary-color-100'),
				200: withOpacityValue('primary-color-200'),
				300: withOpacityValue('primary-color-300'),
				400: withOpacityValue('primary-color-400'),
				500: withOpacityValue('primary-color-500'),
				600: withOpacityValue('primary-color-600'),
				700: withOpacityValue('primary-color-700'),
				800: withOpacityValue('primary-color-800'),
				900: withOpacityValue('primary-color-900'),
			},
			surface: {
				100: withOpacityValue('surface-100'),
				200: withOpacityValue('surface-200'),
				300: withOpacityValue('surface-300'),
				400: withOpacityValue('surface-400'),
			},
			copy: {
				base: withOpacityValue('text-base'),
				muted: withOpacityValue('text-muted'),
			},
			secondary: colors.emerald,
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			fancy: ['Pushster', 'cursive'],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
