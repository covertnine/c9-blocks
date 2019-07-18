const path = require("path");

module.exports = {
	entry: {
		"frontend": "./src/frontend.js",
		"register-category-icon": "./src/register-category-icon.jsx"
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
							presets: ["@babel/preset-react"]
						}
					}
				]
			}
		]
	}
};
