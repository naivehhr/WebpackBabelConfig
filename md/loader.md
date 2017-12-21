### Loader

和插件的区别？ 

> loader 用于加载待打包的资源，plugin 用于扩展 webpack。

#### 配置

* 在package.json 中也能配置/ .babelrc/ webpack中直接配置

```
"babel": {
	"presets": ["lastest"]
}
```

#### 注意各loader之间的先后引用顺序

* less/scss 会预先处理@import 引用的css的 所以不用设置importLoaders=1


#### 处理模板文件 

* ejs
* jsx

#### 图片文件

```
npm i -D file-loader
npm i -D url-loader // limit选择 如果大于设置则丢给file-loader处理，如果小于就把图片转换成base64  这俩不用同时写只写url-loader应该就行了

npm i -D image-webpack-loader // 压缩图片要放在最先处理
```

* css/less/scss 中引用的图片 background: url('../../assets/1.jpg');
* html 中img 标签
* 组件中引用图片	
	* 尽量使用CND或绝对路径地址
	* 相对路径地址有引用的地址不会被替换，找不到的	
	
```
file-loader
```
