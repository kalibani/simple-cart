import axios from 'axios'

const baseURL = 'https://scotch-vue-shop-api.herokuapp.com/api/v1'
const header = { 'Content-type': 'application/json' }

export const fetchProducts = () => {
  const config = {
    url: `${baseURL}/products`,
    method: 'get',
    headers: header
  }

  return axios(config)
}

export const fetchProductDetail = productId => {
  const config = {
    url: `${baseURL}/products/${productId}`,
    method: 'get',
    headers: header
  }

  return axios(config)
}

export const fetchManufacturers = () => {
  const config = {
    url: `${baseURL}/manufacturers`,
    method: 'get',
    headers: header
  }

  return axios(config)
}

export const postProduct = payload => {
  const config = {
    url: `${baseURL}/products`,
    method: 'post',
    data: payload,
    headers: header
  }

  return axios(config)
}

export const removeProduct = productId => {
  const config = {
    url: `${baseURL}/products/${productId}`,
    method: 'delete',
    headers: header
  }

  return axios(config)
}

export const updateProduct = (payload) => {
  const config = {
    url: `${baseURL}/products/${payload._id}`,
    method: 'put',
    data: payload,
    headers: header
  }

  return axios(config)
}
