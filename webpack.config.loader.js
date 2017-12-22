const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name]-bundle.js',
		chunkFilename: "chunkfile.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader?importLoaders=1' // 专门处理importLoader的
				}, {
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: (loader) => [
							require('autoprefixer')(),
						]
					}
				}]
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader?importLoaders=1' // 专门处理importLoader的
				}, {
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: (loader) => [
							require('autoprefixer')(),
						]
					}
				}, {
					loader: 'less-loader',
				}]
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.ejs$/,
				use: {
					loader: 'ejs-loader'
				}
			},
			// {
			// 	test: /\.(jpg|png)$/i,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: 'assets/[name]-[hash:5].[ext]' // 设置处打包后的路径 名称等
			// 		}
			// 	}
			// },
			{
				test: /\.(jpg|png)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 20000, //byte
						name: 'assets/[name]-[hash:5].[ext]' // 设置处打包后的路径 名称等
					}
				}, {
					loader: 'image-webpack-loader'
				}]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index3.html',
			template: 'index3.html',
			inject: 'body'
		})
	],
	resolve: {
		modules: [
			'node_modules',
			'assets/sprite' //css在哪里能找到sprite图
		]
	},
}