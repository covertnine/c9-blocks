const paths = require('./paths');
const externals = require('./externals');
const autoprefixer = require('autoprefixer');
const babelPreset = require('./babel-preset');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
//const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const BundleAnalyzerPlugin =
// 	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	resolve: {
		fallback: {
			fs: false,
			tls: false,
			net: false,
			path: false,
			zlib: false,
			http: false,
			https: false,
			stream: false,
			crypto: false,
			'crypto-browserify': require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
		},
	},
	entry: {
		blocks: paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
		'blocks.frontend': paths.pluginBlocksFrontendJs,
		'blocks.editor': paths.pluginBlocksEditorJs,
		'blocks.bootstrap': paths.pluginBlocksBootstrapJs,
		'blocks.registration': paths.pluginBlocksRegisterJs,
	},
	output: {
		pathinfo: true,
		path: paths.pluginDist,
		filename: '[name].build.js',
	},
	devtool: false,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].build.css',
		}),
		new CleanWebpackPlugin({
			protectWebpackAssets: false,
			cleanAfterEveryBuildPatterns: [
				'*.LICENSE.txt',
				'blocks.bootstrap.build.js',
				'blocks.editor.build.js',
			],
		}),
		new NodePolyfillPlugin({ excludeAliases: ['console'] }),
		new ImageMinimizerPlugin({
			minimizer: {
				implementation: ImageMinimizerPlugin.imageminMinify,
				options: {
					// Lossless optimization with custom option
					plugins: [
						['gifsicle', { interlaced: true }],
						['jpegtran', { progressive: true }],
						['optipng', { optimizationLevel: 5 }],
						[
							'svgo',
							{
								plugins: [
									{
										name: 'preset-default',
										params: {
											overrides: {
												removeViewBox: false,
											},
										},
									},
								],
							},
						],
					],
				},
			},
		}),
		// new BundleAnalyzerPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						// @remove-on-eject-begin
						babelrc: false,
						presets: [babelPreset],
						// @remove-on-eject-end
						// This is a feature of `babel-loader` for webpack (not Babel itself).
						// It enables caching results in ./node_modules/.cache/babel-loader/
						// directory for faster rebuilds.
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									autoprefixer({
										flexbox: 'no-2009',
									}),
								],
							},
						},
					},
					// "sass" loader converts SCSS to CSS.
					{
						loader: 'sass-loader',
						options: {
							// Add common CSS file for variables and mixins.
							additionalData: '@import "./src/block-colors.scss";\n',
							sassOptions: {
								fiber: false,
								outputStyle: 'compressed',
							},
						},
					},
				],
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules|bower_components)/,
				issuer: /\.(js|jsx|mjs)$/,
				use: {
					loader: '@svgr/webpack',
					options: {
						memo: true,
						prettier: false,
						svgoConfig: {
							plugins: [
								{
									removeViewBox: false,
								},
							],
						},
					},
				},
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules|bower_components)/,
				issuer: /\.(scss|css|less)$/,
				use: 'svg-url-loader',
				type: 'javascript/auto',
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: 'url-loader',
			},
		],
	},
	stats: 'minimal',
	externals: externals,
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false,
					},
				},
			}),
			//new CssMinimizerPlugin(),
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'blocks.vendors',
					chunks: 'all',
				},
			},
		},
	},
};
