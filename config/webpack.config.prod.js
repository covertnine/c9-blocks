const paths = require("./paths");
const externals = require("./externals");
const autoprefixer = require("autoprefixer");
const babelPreset = require("./babel-preset");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
	mode: "production",
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
		new LodashModuleReplacementPlugin()
		// new BundleAnalyzerPlugin(),
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
						cacheDirectory: true
					}
				}
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
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
						}
					}
				}
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules|bower_components)/,
				issuer: {
					test: /\.(scss|css|less)$/
				},
				use: "svg-url-loader"
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: "url-loader"
			}
		]
	},
	stats: "minimal",
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
