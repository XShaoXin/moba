import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      //props 被设置为 true，route.params 将会被设置为组件属性
      {path:'/categories/edit', component: CategoryEdit},
      {path:'/categories/edit/:id', component: CategoryEdit, props: true},
      {path:'/categories/list', component: CategoryList},

      {path:'/items/edit', component: ItemEdit},
      {path:'/items/edit/:id', component: ItemEdit, props: true},
      {path:'/items/list', component: ItemList},

      {path:'/heroes/edit', component: HeroEdit},
      {path:'/heroes/edit/:id', component: HeroEdit, props: true},
      {path:'/heroes/list', component: HeroList}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
