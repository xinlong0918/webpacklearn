/**
 * Created by fan.xinlong on 2017/10/18.
 */
import './style/app.css'
import './style/common.less'
import Home from './components/home/home.js'
function App() {
    let app = document.getElementById('app')
    let home = new Home()
    app.innerHTML = home.template
}
new App();
