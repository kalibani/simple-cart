import axios from 'axios'

const baseURL = 'https://scotch-vue-shop-api.herokuapp.com/api/v1'

export const fetchProducts = () => {
  const config = {
    url: baseURL + '/products',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios(config)
}

export const fetchProductDetail = productId => {
  const config = {
    url: baseURL + `/products/${productId}`,
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios(config)
}
