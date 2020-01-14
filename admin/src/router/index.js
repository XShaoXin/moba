import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

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
      {path:'/heroes/list', component: HeroList},
      
      {path:'/articles/edit', component: ArticleEdit},
      {path:'/articles/edit/:id', component: ArticleEdit, props: true},
      {path:'/articles/list', component: ArticleList},
      
      {path:'/ads/edit', component: AdEdit},
      {path:'/ads/edit/:id', component: AdEdit, props: true},
      {path:'/ads/list', component: AdList},
      
      {path:'/admin_users/edit', component: AdminUserEdit},
      {path:'/admin_users/edit/:id', component: AdminUserEdit, props: true},
      {path:'/admin_users/list', component: AdminUserList},

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
