/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,
	coverageDirectory: 'coverage',
	preset: '@wordpress/jest-preset-default',
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
	},
	setupFiles: ['./jest.setup.js'],
};
