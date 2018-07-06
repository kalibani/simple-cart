// eslint-disable-next-line
import { fetchProducts, fetchProductDetail } from '@/API/productAPI'

const productCollection = {
  namespaced: true,
  state: {
    cart: [],
    products: [],
    product: {},
    isLoading: false
  },
  getters: {
    cart: state => state.cart,
    products: state => state.products,
    product: state => state.product,
    isLoading: state => state.isLoading
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProduct (state, payload) {
      state.product = payload
    },
    setIsLoading (state, payload) {
      state.isLoading = payload
    },
    addToCart (state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
    async getProducts ({ commit }) {
      try {
        commit('setIsLoading', true)
        const { data } = await fetchProducts()
        commit('setProducts', data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setIsLoading', false)
      }
    },
    async getProductDetail ({ commit }, productId) {
      try {
        const { data } = await fetchProductDetail(productId)
        commit('setProduct', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export default productCollection
