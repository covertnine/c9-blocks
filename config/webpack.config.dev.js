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
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelPreset = require("./babel-preset");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// utils
const endsWith = require("lodash/endsWith");
// cleanup empty css-js files
class MiniCssExtractPluginCleanup {
	constructor(deleteWhere = /\.css.build.js$/) {
		this.shouldDelete = new RegExp(deleteWhere);
	}
	apply(compiler) {
		compiler.hooks.emit.tapAsync(
			"MiniCssExtractPluginCleanup",
			(compilation, callback) => {
				Object.keys(compilation.assets).forEach(asset => {
					if (this.shouldDelete.test(asset)) {
						delete compilation.assets[asset];
					}
				});
				callback();
			}
		);
	}
}

// Export configuration.
module.exports = {
	entry: {
		"/dist/blocks": paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
		"/dist/blocks.frontend": paths.pluginBlocksFrontendJs,
		"/dist/blocks.update-category": paths.pluginBlocksUpdateCategoryJs
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// The dist folder.
		path: paths.pluginDist,
		filename: "[name].build.js" // [name] = './dist/blocks.build' as defined above.
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
				test: /\.s?css$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					MiniCssExtractPlugin.loader, // "postcss" loader applies autoprefixer to our CSS.
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
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: {
					loader: "url-loader",
					options: { sourceMap: true }
				}
			}
		]
	},
	// Add plugins.
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].style.build.css",
			chunkFilename: "[name]"
		}),
		new MiniCssExtractPluginCleanup(),
		new webpack.SourceMapDevToolPlugin({}),
		new LodashModuleReplacementPlugin()
		// new BundleAnalyzerPlugin()
	],
	stats: "minimal",
	// stats: 'errors-only',
	// Add externals.
	externals: externals,
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "/dist/blocks.vendors",
					chunks: "all"
				},
				editorCSS: {
					name: "/dist/blocks.editor.build.css",
					test(module) {
						return (
							"css/mini-extract" === module.type &&
							endsWith(module._identifier, "editor.scss")
						);
					},
					chunks: "all",
					enforce: true
				},
				bootstrapCSS: {
					name: "/dist/blocks.bootstrap.build.css",
					test(module) {
						return (
							"css/mini-extract" === module.type &&
							endsWith(module._identifier, "bootstrap.css")
						);
					},
					chunks: "all",
					enforce: true
				}
			}
		}
	}
};
