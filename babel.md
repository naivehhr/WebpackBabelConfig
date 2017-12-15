## Babel 转码

###配置

* 创建.babelrc

```
{
	"presets": [
		"env",
		"stage-2"
	],
	"plugins": []
}
```

* 安装相关依赖

```
npm install --save-dev babel-preset-react
npm install --save-dev babel-preset-stage-2
...
```

* webpack-loader

```
npm install --save-dev babel-loader babel-core 
```
* webpack.config.js

```
rules: [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					"env",
					"stage-2"
				]
			}
		}
	}
]
```
