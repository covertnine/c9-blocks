/**
 * Converts dash-separated strings to camelCase.
 *
 * @param {string} string Input dash-delimited string.
 * @return {string} Camel-cased string.
 */
const camelCaseDash = (string) =>
	string.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

/**
 * Define externals to load components through the wp global.
 */
const externals = [
	'components',
	'edit-post',
	'element',
	'plugins',
	'editor',
	'blocks',
	'hooks',
	'utils',
	'date',
	'data',
	'i18n',
	'block-editor',
	'compose',
	'keycodes',
	'rich-text',
	'shortcode',
	'viewport',
	'server-side-render',
].reduce(
	(externals, name) => ({
		...externals,
		[`@wordpress/${name}`]: `wp.${camelCaseDash(name)}`,
	}),
	{
		wp: 'wp',
		react: 'React',
		'react-dom': 'ReactDOM',
		lodash: 'lodash',
		jquery: 'jQuery',
		ga: 'ga',
		gtag: 'gtag',
		// Add other global libraries or localized data as needed.
	}
);

module.exports = externals;