<template>
  <div class="">
    <app-header></app-header>
    <b-container fluid class="bv-example-row products">
      <b-container class="wrapper">
        <b-row
        class="justify-content-md-center"
        v-if="isLoading">
          <app-loader></app-loader>
        </b-row>
        <b-row v-else>
          <b-col md="4" lg="3" sm="6" xs="12" v-for="product in products" :key="product._id">
          <product-item :product="product"></product-item>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductItem from '@/components/product/ProductItem'
import AppHeader from '@/pages/AppHeader'
import AppLoader from '@/pages/AppLoader'
export default {
  created () {
    this.getProducts()
  },
  computed: {
    ...mapGetters('productCollection', ['products', 'isLoading'])
  },
  components: {
    AppHeader,
    AppLoader,
    ProductItem
  },
  methods: {
    ...mapActions('productCollection', ['getProducts', 'getProductDetail'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.products {
  background: #f7f8fb;
}

.wrapper {
  padding: 30px 0px;
}

</style>
