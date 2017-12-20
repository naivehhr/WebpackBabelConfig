const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		person: './src/doclass/person.js'
	},
	// output: {
	// 	path: __dirname + '/build',
	// 	filename: '[name].js',
	// 	library: 'animation', // 会在window上对策一个animation对象
	// 	libraryTarget: 'umd', // 支持AMD CMD等
	// }
	output: {
		path: __dirname + '/build',
		filename: '[name].js',
		library: 'person', // 会在window上对策一个animation对象
		libraryTarget: 'umd', // 支持AMD CMD等
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index2.html',
			title: '我是一个粉刷匠',
			date: new Date(),
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		})
	],
}