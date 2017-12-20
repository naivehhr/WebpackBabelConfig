const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js',
	},
	output: {
		path: __dirname+ '/dist',
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'http:cdn.com'
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
			filename: 'index.html',
			template: 'index2.html',
			title: 'Main',
			inject: 'body',
			chunks: ['main']
		}),
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index2.html',
			title: 'A HTML',
			inject: 'body',
			chunks: ['main', 'a']
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index2.html',
			title: 'B HTML',
			inject: 'body',
			chunks: ['main', 'b']
		}),
		new htmlWebpackPlugin({
			filename: 'c.html',
			template: 'index2.html',
			title: 'C HTML',
			inject: 'body',
			chunks: ['main', 'c']
		})
	]
}