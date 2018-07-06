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
