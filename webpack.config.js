const path = require("path");

module.exports = {
	entry: {
		frontend: "./src/frontend.js",
		"update-category": "./src/update-category.jsx"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "blocks.[name].build.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["react"],
							plugins: ["transform-object-rest-spread"]
						}
					}
				]
			},
			{
				test: /\.svg$/,
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
				test: /\.scss$/,
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
			}
		]
	}
};
