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
        <h4>{{product.name}}</h4>
        <p>{{product.description}}</p>
        <div class="product-price">
          {{product.price}}
        </div>
        <div class="product-action">
          <b-button variant="danger"> Remove from cart</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('productCollection', ['cart']),
    uniqueCart () {
      return this.cart
        .filter((elem, index, self) =>
          self.findIndex(val => val._id === elem._id) === index)
    }
  },
  created () {
    console.log('cart', this.cart)
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
