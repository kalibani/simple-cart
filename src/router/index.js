import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/product/ProductList'
import ProductDetail from '@/components/product/ProductDetail'
import cart from '@/components/cart/cart'
import AdminSidebar from '@/components/admin/AdminSidebar'
// eslint-disable-next-line
import AdminProductList from '@/components/admin/AdminProductList'
import AdminProductNew from '@/components/admin/AdminProductNew'

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
    },
    {
      path: '/admin',
      component: AdminSidebar,
      children: [
        {
          path: '',
          name: 'AdminProductList',
          component: AdminProductList
        },
        {
          path: 'new',
          name: 'AdminProductNew',
          component: AdminProductNew
        }
      ]
    }
  ],
  mode: 'history'
})
