const paths = require("./paths");
const externals = require("./externals");
const autoprefixer = require("autoprefixer");
const babelPreset = require("./babel-preset");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// cleanup empty css-js files
class MiniCssExtractPluginCleanup {
	constructor(deleteWhere = /blocks\.(bootstrap|editor)\.build\.js$/) {
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

module.exports = {
	mode: "development",
	watch: true,
	entry: {
		blocks: paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
		"blocks.frontend": paths.pluginBlocksFrontendJs,
		"blocks.editor": paths.pluginBlocksEditorJs,
		"blocks.bootstrap": paths.pluginBlocksBootstrapJs
	},
	output: {
		pathinfo: true,
		path: paths.pluginDist,
		filename: "[name].build.js"
	},
	devtool: "inline-source-map",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].build.css"
		}),
		new MiniCssExtractPluginCleanup(),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				// Lossless optimization with custom option
				plugins: [
					["gifsicle", { interlaced: true }],
					["jpegtran", { progressive: true }],
					["optipng", { optimizationLevel: 5 }],
					[
						"svgo",
						{
							plugins: [
								{
									removeViewBox: false
								}
							]
						}
					]
				]
			}
		}),
		new LodashModuleReplacementPlugin({
			collections: true,
			paths: true
		}),
		// new BundleAnalyzerPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
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
						cacheDirectory: true,
						sourceMap: true
					}
				}
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
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
						memo: true,
						prettier: false,
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
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: "url-loader",
					options: { sourceMap: true }
				}
			}
		]
	},
	// stats: "minimal",
	externals: externals,
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "blocks.vendors",
					chunks: "all"
				}
			}
		}
	}
};
