import Vue from 'vue'
import Toasted from 'vue-toasted'
Vue.use(Toasted)

const errorOptions = {
  type: 'error',
  icon: 'exclamation-triangle',
  duration: 3000,
  iconPack: 'fontawesome'
}

const successOptions = {
  type: 'success',
  icon: 'thumbs-up',
  duration: 3000,
  iconPack: 'fontawesome'
}

Vue.toasted.register('my_app_error', payload => {
  if (!payload.message) {
    return 'Oops.. Something Went Wrong..'
  }

  return payload.message
}, errorOptions)

Vue.toasted.register('my_app_success', payload => {
  if (!payload.message) {
    return 'Success Add Product..'
  }

  return payload.message
}, successOptions)

export const succesNotification = payload => {
  return Vue.toasted.global.my_app_success(payload)
}

export const failedNotification = payload => {
  return Vue.toasted.global.my_app_error(payload)
}
