import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/product/ProductList'
import ProductDetail from '@/components/product/ProductDetail'
import cart from '@/components/cart/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ],
  mode: 'history'
})
