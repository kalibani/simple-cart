<template>
  <b-container>
    <b-row class="product-detail" v-if="product">
      <b-col lg="4" md="4" sm="6" xs="12">
        <b-img :src="product.image" fluid alt="Responsive image" />
      </b-col>
      <b-col lg="8" md="8" sm="6" xs="12" class="image-detail">
        <small>{{product.manufacturer && product.manufacturer.name}}</small>
        <h4>{{product.name}}</h4>
        <p>{{product.description}}</p>
        <div class="product-price">
          {{product.price}}
        </div>
        <div class="product-action">
          <b-button variant="warning" @click="addToCart(product)"> Add to cart</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  created () {
    this.getProductDetail(this.$route.params.id)
  },
  computed: {
    ...mapGetters('productCollection', ['product'])
  },
  methods: {
    ...mapActions('productCollection', ['getProductDetail']),
    ...mapMutations('productCollection', ['addToCart'])
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

.product-detail {
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
