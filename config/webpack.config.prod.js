/* eslint-disable camelcase */
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

const paths = require("./paths");
const webpack = require("webpack");
const externals = require("./externals");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const babelPreset = require("./babel-preset");

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = "true" === process.env.GENERATE_SOURCEMAP;

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
			loader: "css-loader"
		},
		{
			loader: "postcss-loader",
			options: {
				ident: "postcss",
				plugins: [
					autoprefixer({
						flexbox: "no-2009"
					})
				]
			}
		},
		// "sass" loader converts SCSS to CSS.
		{
			loader: "sass-loader",
			options: {
				// Add common CSS file for variables and mixins.
				data: '@import "./src/block-colors.scss";\n',
				outputStyle: "nested"
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
	devtool: shouldUseSourceMap ? "source-map" : false,
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
				exclude: /(node_modules|bower_components)/,
				issuer: {
					test: /\.(js|jsx|mjs)$/
				},
				use: {
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [
								{
									removeViewBox: false
								}
							]
						},
						sourceMap: true
					}
				}
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules|bower_components)/,
				issuer: {
					test: /\.(scss|css|less)$/
				},
				use: {
					loader: "svg-url-loader",
					options: { sourceMap: true }
				}
			}
		]
	},
	// Add plugins.
	plugins: [
		blocksCSSPlugin,
		editBlocksCSSPlugin,
		// Minify the code.
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				// Disabled because of an issue with Uglify breaking seemingly valid code:
				// https://github.com/facebookincubator/create-react-app/issues/2376
				// Pending further investigation:
				// https://github.com/mishoo/UglifyJS2/issues/2011
				comparisons: false
			},
			mangle: {
				safari10: true,
				except: ["__", "_n", "_x", "_nx"]
			},
			output: {
				comments: false,
				// Turned on because emoji and regex is not minified properly using default
				// https://github.com/facebookincubator/create-react-app/issues/2488
				ascii_only: true
			},
			sourceMap: shouldUseSourceMap
		})
	],
	stats: "minimal",
	// stats: 'errors-only',
	// Add externals.
	externals: externals
};
