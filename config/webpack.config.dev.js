/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 *
 * Webpack basics — If you are new the Webpack here's all you need to know:
 *     1. Webpack is a module bundler. It bundles different JS modules together.
 *     2. It needs and entry point and an ouput to process file(s) and bundle them.
 *     3. By default it only understands common JavaScript but you can make it
 *        understand other formats by way of adding a Webpack loader.
 *     4. In the file below you will find an entry point, an ouput, and a babel-loader
 *        that tests all .js files excluding the ones in node_modules to process the
 *        ESNext and make it compatible with older browsers i.e. it converts the
 *        ESNext (new standards of JavaScript) into old JavaScript through a loader
 *        by Babel.
 *
 * TODO: Instructions.
 *
 * @since 1.0.0
 */

const webpack = require("webpack");
const paths = require("./paths");
const externals = require("./externals");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const babelPreset = require("./babel-preset");

// Extract style.css for both editor and frontend styles.
const blocksCSSPlugin = new ExtractTextPlugin({
	filename: "./dist/blocks.style.build.css"
});

// Extract editor.css for editor styles.
const editBlocksCSSPlugin = new ExtractTextPlugin({
	filename: "./dist/blocks.editor.build.css"
});

// Configuration for the ExtractTextPlugin — DRY rule.
const extractConfig = {
	use: [
		// "postcss" loader applies autoprefixer to our CSS.
		{
			loader: "css-loader",
			options: {
				sourceMap: true
			}
		},
		{
			loader: "postcss-loader",
			options: {
				ident: "postcss",
				plugins: [
					autoprefixer({
						flexbox: "no-2009"
					})
				],
				sourceMap: true
			}
		},
		// "sass" loader converts SCSS to CSS.
		{
			loader: "sass-loader",
			options: {
				// Add common CSS file for variables and mixins.
				data: '@import "./src/block-colors.scss";\n',
				outputStyle: "nested",
				sourceMap: true
			}
		}
	]
};

// Export configuration.
module.exports = {
	entry: {
		"./dist/blocks.build": paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
		"./dist/blocks.frontend.build": paths.pluginBlocksFrontendJs,
		"./dist/blocks.update-category.build": paths.pluginBlocksUpdateCategoryJs
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// The dist folder.
		path: paths.pluginDist,
		filename: "[name].js" // [name] = './dist/blocks.build' as defined above.
	},
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	devtool: false,
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						// @remove-on-eject-begin
						babelrc: false,
						presets: [babelPreset],
						// @remove-on-eject-end
						// This is a feature of `babel-loader` for webpack (not Babel itself).
						// It enables caching results in ./node_modules/.cache/babel-loader/
						// directory for faster rebuilds.
						cacheDirectory: true
					}
				}
			},
			{
				test: /style\.s?css$/,
				exclude: /(node_modules|bower_components|src\/components)/,
				use: blocksCSSPlugin.extract(extractConfig)
			},
			{
				test: /editor\.s?css$/,
				exclude: /(node_modules|bower_components|src\/components)/,
				use: editBlocksCSSPlugin.extract(extractConfig)
			},
			{
				test: /src\/components\/.+\/editor\.s?css$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
						options: {
							url: false
						}
					},
					{
						loader: "sass-loader" // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules|bower_components|src\/blocks)/,
				use: {
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [
								{
									removeViewBox: false
								}
							]
						}
					}
				}
			}
		]
	},
	// Add plugins.
	plugins: [
		blocksCSSPlugin,
		editBlocksCSSPlugin,
		new webpack.SourceMapDevToolPlugin({})
	],
	stats: "minimal",
	// stats: 'errors-only',
	// Add externals.
	externals: externals
};
