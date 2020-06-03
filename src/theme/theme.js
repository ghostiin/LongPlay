export const theme = {
	colors: {
		bgColor: '#18141A',
		dark: '#18141A',
		main: '#783EDE',
		light: '#B088F5',
		text: '#fff',
		sub: 'rgba(255,255,255,0.5)' /*半透明 */
	},
	fonts: {
		main: {
			light: 'Lato-Light',
			regular: 'Lato-Regular',
			bold: 'Lato-Bold'
		},
		text: {
			light: 'Poppins-Light',
			regular: 'Poppins-Regular',
			bold: 'Poppins-Bold'
		}
	},
	mediaQueries: {
		'below-768': `only screen and (max-width: 768px)`,
		'above-768': `only screen and (min-width: 768px)`,
		'above-992': `only screen and (min-width: 992px)`,
		'above-1200': `only screen and (min-width: 1200px)`,
		'above-1536': `only screen and (min-width: 1537px)`
	}
};
