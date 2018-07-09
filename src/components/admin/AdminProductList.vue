<template>
  <b-col md="9" lg="9" sm="12" xs="12">
    <b-table responsive striped hover stacked="md" :items="products" :fields="fields">
      <template slot="Edit" slot-scope="row">
        <b-link to="/admin/new">
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
  </b-col>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      }
    }
  },
  computed: {
    ...mapGetters('productCollection', ['products'])
  },
  methods: {
    ...mapActions('productCollection', [
      'getProducts',
      'deleteProduct'
    ])
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="css">
</style>
