<template>
  <b-col md="9" lg="9" sm="12" xs="12">
    <b-table
      responsive
      striped
      hover
      stacked="md"
      :items="products"
      :fields="fields"
      :style="{ filter: filterStyle, zIndex: 0}"
      class="table">
      <template slot="Edit" slot-scope="data">
        <b-link :to="'/admin/edit/'+data.item._id">
          <i class="far fa-edit"></i>
        </b-link>
      </template>
      <template slot="price" slot-scope="data">
        {{data.item.price | currency}}
      </template>
      <template slot="Delete" slot-scope="data">
        <b-link @click="deleteProduct(data.item._id)">
          <i class="far fa-trash-alt"></i>
        </b-link>
      </template>
    </b-table>
    <div class="loader-wrapper" v-if="isLoading">
      <app-loader></app-loader>
    </div>
  </b-col>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppLoader from '@/pages/AppLoader'
export default {
  data () {
    return {
      fields: {
        name: {
          label: 'Product Name'
        },
        price: {
          label: 'Price'
        },
        'manufacturer.name': {
          label: 'Manufacturer'
        },
        Edit: {
          label: ''
        },
        Delete: {
          label: ''
        }
      },
      filterStyle: 'none'
    }
  },
  components: {
    AppLoader
  },
  computed: {
    ...mapGetters('productCollection', [
      'products',
      'isLoading',
      'blurEffect'
    ])
  },
  methods: {
    ...mapActions('productCollection', [
      'getProducts',
      'deleteProduct'
    ])
  },
  watch: {
    blurEffect (value) {
      if (value) {
        this.filterStyle = 'opacity(30%)'
      } else {
        this.filterStyle = 'none'
      }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>
.table{
  white-space:nowrap;
}
  .loader-wrapper {
    position: absolute;
    display: block;
    z-index: 10;
    margin-left: 100px;
    left: 300px;
    text-align: center;
    top: 275px;
    overflow:hidden;
  }
</style>
