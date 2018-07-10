import {
  fetchProducts,
  fetchProductDetail,
  fetchManufacturers,
  postProduct,
  removeProduct,
  editProduct } from '@/API/productAPI'
import {
  succesNotification,
  failedNotification } from '@/utils/toasted'

const productCollection = {
  namespaced: true,
  state: {
    cart: [],
    products: [],
    product: {},
    manufacturers: [],
    isLoading: false,
    blurEffect: false
  },
  getters: {
    cart: state => state.cart,
    products: state => state.products,
    product: state => state.product,
    manufacturers: state => state.manufacturers,
    isLoading: state => state.isLoading,
    blurEffect: state => state.blurEffect
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
    setBlurEffect (state, payload) {
      state.blurEffect = payload
    },
    addProduct (state, payload) {
      state.products.push(payload)
    },
    setUpdate (state, payload) {
      const index = state.products
        .findIndex(product => product._id === payload._id)
      if (~index) {
        state.products.splice(index, 1, payload)
      }
    },
    deleteProduct (state, productId) {
      const index = state.products
        .findIndex(product => product._id === productId)
      if (~index) {
        state.products.splice(index, 1)
      }
    },
    setManufacturers (state, payload) {
      state.manufacturers = payload
    },
    addToCart (state, payload) {
      state.cart.push(payload)
    },
    removeCart (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    async getProducts ({ commit }) {
      try {
        commit('setIsLoading', true)
        const { data } = await fetchProducts()
        commit('setProducts', data)
      } catch (e) {
        failedNotification({
          message: 'Failed fetching data'
        })
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
    },
    async getManufacturers ({ commit }) {
      try {
        const { data } = await fetchManufacturers()
        commit('setManufacturers', data)
      } catch (e) {
        console.log(e)
      }
    },
    async addProduct ({commit}, product) {
      try {
        const { data } = await postProduct(product)
        commit('addProduct', data)
        succesNotification({
          message: 'Product Has Been Successfully Added'
        })
      } catch (e) {
        failedNotification({
          message: e
        })
      }
    },
    async deleteProduct ({ commit }, productId) {
      try {
        commit('setBlurEffect', true)
        commit('setIsLoading', true)
        const { data } = await removeProduct(productId)
        commit('deleteProduct', data)
      } catch (e) {
        failedNotification({
          message: e.message
        })
      } finally {
        commit('setIsLoading', false)
        commit('setBlurEffect', false)
        succesNotification({
          message: 'Delete Product Success'
        })
      }
    },
    async updateProduct ({ commit }, product) {
      try {
        // commit('setBlurEffect', true)
        // commit('setIsLoading', true)
        const { data } = await editProduct(product)
        commit('setUpdate', data)
      } catch (e) {
        failedNotification({
          message: e.message
        })
      } finally {
        succesNotification({
          message: 'Successfully Update Product'
        })
      }
    }
  }
}

export default productCollection
