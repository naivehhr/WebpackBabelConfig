import tpl from './layer.html' 
import Tpl from './layer.ejs' // 这个东西返回的是个function,里面是要传入的参数
import './layer.less'
function layer() {
	return {
		name: 'layer',
		tpl: Tpl
	}
}

export default layer