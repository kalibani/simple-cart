<template>
  <b-container>
    <b-row
      class="cart-list"
      v-for="product in uniqueCart"
      :key="product._id">
      <b-col lg="4" md="4" sm="6" xs="12">
        <b-img :src="product.image" fluid alt="Responsive image" />
      </b-col>
      <b-col lg="8" md="8" sm="6" xs="12" class="image-detail">
        <small>
          {{product.manufacturer && product.manufacturer.name}}
        </small>
        <div class="product-detail">
          <h4>{{product.name}}</h4>
          <h5>Qty : {{product.count}}</h5>
        </div>
        <br>
        <p>{{product.description}}</p>
        <div class="product-price">
        <h4>Total : {{priceFormatter(product.price*product.count)}}</h4>
        </div>
        <div class="product-action">
          <b-button variant="danger"> Remove from cart</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { FORMATTER_CURRENCY_IDR } from '@/utils/textFormat'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('productCollection', ['cart']),
    uniqueCart () {
      return [...this.cart.reduce((arr, val) => {
        if (!arr.has(val._id)) {
          arr.set(val._id, {...val, count: 1})
        } else {
          arr.get(val._id).count++
        }
        return arr
      }, new Map()).values()]
    }
  },
  methods: {
    priceFormatter (payload) {
      return FORMATTER_CURRENCY_IDR.format(payload).replace(/^(\D+)/, '$1 ')
    }
  }
}
</script>

<style scoped>

h4{
  margin-top: 5px;
}
p {
  margin-top: 20px;
}

.cart-list {
  margin-top: 30px;
}

.product-detail h4 {
  float: left;
}

.product-detail h5 {
  float: right;
}

.product-price {
  float: left;
  font-size: 20px;
  font-weight: 600;
  color: #3d3d3d;
}

.product-action {
  float: right;
  font-size: 20px;
  font-weight: bold;
}

</style>
