<template>
  <div>
    <b-container fluid class="bv-example-row products">
      <b-container class="wrapper">
        <b-row
        class="justify-content-md-center"
        v-if="isLoading">
          <app-loader></app-loader>
        </b-row>
        <b-row v-else>
          <b-col md="4" lg="3" sm="6" xs="12" v-for="product in filterProducts" :key="product._id">
          <product-item :product="product"></product-item>
          </b-col>
          <h1 v-if="filterProducts && filterProducts.length === 0">No Query Result</h1>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import { FORMATTER_CURRENCY_IDR } from '@/utils/textFormat'
import { mapGetters, mapActions } from 'vuex'
import bus from '@/utils/bus'
import ProductItem from '@/components/product/ProductItem'
import AppLoader from '@/pages/AppLoader'
export default {
  data () {
    return {
      search: ''
    }
  },
  created () {
    this.getProducts()
    this.eventBusHandler()
  },
  computed: {
    ...mapGetters('productCollection', ['products', 'isLoading', 'query']),
    formattedProducts () {
      return this.products.map(item => ({
        ...item,
        price: FORMATTER_CURRENCY_IDR.format(item.price).replace(/^(\D+)/, '$1 ')
      }))
    },
    filterProducts () {
      const result = this.products.filter(product => product.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
      return result
    }
  },
  components: {
    AppLoader,
    ProductItem
  },
  methods: {
    ...mapActions('productCollection', ['getProducts', 'getProductDetail']),
    emitEvent () {
      bus.$emit('emitted', this.search)
    },
    onEvent (data) {
      this.search = data
    },
    eventBusHandler () {
      bus.$on('emitted', this.onEvent)
    }
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
