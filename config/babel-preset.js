module.exports = {
	presets: [
		[
			// 'env',
			'@babel/preset-env',
			{
				// Do not transform modules to CJS.
				modules: false,
				targets: {
					browsers: [
						'last 2 Chrome versions',
						'last 2 Edge versions',
						'last 2 Firefox versions',
						'last 2 Safari versions',
						'last 2 iOS versions',
						'last 1 Android version',
						'last 1 ChromeAndroid version',
					],
				},
			},
		],
	],
	plugins: [
		['@babel/plugin-proposal-class-properties'],
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'wp.element.createElement',
			},
		],
		// Polyfills the runtime needed for async/await and generators.
		['@babel/plugin-transform-runtime'],
	],
};
