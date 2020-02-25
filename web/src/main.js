import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//工具类
import './assets/scss/style.scss'

//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//阿里图标
import './assets/iconfont/iconfont.css'

//卡片组件
import Card from './components/Card.vue'
Vue.component('m-card', Card)
import CardList from './components/CardList.vue'
Vue.component('m-card-list', CardList)

//axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
