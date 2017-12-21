import './css/common.css'
import Layer from './components/layer/layer'
const App = function () {
	console.log(Layer)
	var dom = document.getElementById('app')
	var layer = new Layer()
	console.log(layer.tpl)
	dom.innerHTML = layer.tpl({
		name:'huhaoran'
	})
}

new App()