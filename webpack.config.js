const path = require("path");

module.exports = {
	entry: {
		"frontend": "./src/frontend.js",
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
							presets: ["react"]
						}
					}
				]
			}
		]
	}
};
