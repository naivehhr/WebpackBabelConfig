### Webpack 

- [ ] 基本配置
- [ ] webpack-dev-server
- [ ] 代理
- [ ] loader(css\scss\less\file\img)
- [ ] 雪碧图
- [ ] 打包
- [ ] 静态包拆分


### 配置

#### webpack.config.js

```
module.exports = {
	entry: {
		animation: 'mian.js'
	},
	out: {
		path: __dirname + '/build',
		filename: '[name].js',
		library: 'animation',
		libraryTarget: 'umd'
	}
}
```

#### webpack-dev-server

```
webpack-dev-server -d --config webpack.config.dev.js


output: {
	publicPath: '/assets/', // 对外资源访问地址吧
}
```
[output.publicPath](https://doc.webpack-china.org/configuration/output/#output-publicpath)
