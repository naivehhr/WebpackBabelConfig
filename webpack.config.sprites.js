const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = {
	entry: './src/test.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name]-bundle.js'
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
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.(jpg|png)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: 'assets/[name]-[hash:5].[ext]' // 设置处打包后的路径 名称等
					}
				}
			},
			{
				test: /\.ejs$/,
				use: {
					loader: 'ejs-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
				}]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index3.html',
			template: 'index3.html',
			inject: 'body'
		}),
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, 'src/assets/sprite'),  //准备合并成sprit的图片存放文件夹
				glob: '*.png'  //哪类图片
			},
			target: {
				image: path.resolve(__dirname, 'src/assets/sprites.png'),  // sprite图片保存路径
				css: path.resolve(__dirname, 'src/assets/_sprites.scss')  // 生成的sass保存在哪里
			}
		})
	],
	resolve: {
		modules: [
			'node_modules',
			'assets/sprite' //css在哪里能找到sprite图
		]
	},
}