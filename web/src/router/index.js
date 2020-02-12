import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Main,
    children: [
      { path: '/', component: Home, name: 'home'},
      { path: '/article/:id', component: Article, name:'article', props: true}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router