import Vue from 'vue'
import App from './App.vue'
import vScroll from "./directives/ScrollWithAnimate/index"
import "./assets/animate.css"
Vue.config.productionTip = false
Vue.use(vScroll)
new Vue({
  render: h => h(App),
}).$mount('#app')
