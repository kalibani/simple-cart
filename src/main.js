// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import money from 'v-money'
// import VeeValidate from 'vee-validate';
import VueCurrencyFilter from 'vue-currency-filter'
import store from './stores/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(money, {precision: 4})
Vue.use(BootstrapVue)
Vue.use(VueCurrencyFilter,
  {
    symbol: 'Rp',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: '',
    symbolPosition: 'front',
    symbolSpacing: true
  })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
