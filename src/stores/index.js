import Vue from 'vue'
import Vuex from 'vuex'
import productCollection from './productCollection'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    productCollection
  }
})

export default store
