<template>
  <b-col lg="9" md="9" sm="12" xs="12">
    <b-row>
      <b-col lg="6" md="6" sm="12" xs="12">
        <b-form-group
          label="Product Name :"
          label-for="exampleInput1"
          >
          <b-form-input
            type="text"
            v-model="model.name"
            placeholder="Enter product">
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Price :"
          label-for="exampleInput2">
          <money
            v-model="model.price"
            v-bind="money"
            class="form-control">
          </money>
        </b-form-group>
        <b-form-group label="Manufacturers :"
            label-for="exampleInput3">
          <b-form-select
            id="exampleInput3"
            v-model="model.manufacturer">
            <template slot="first">
              <option :value="null" disabled>
                -- Please select manufacture --
              </option>
            </template>
            <option
              v-for="manufacture in manufacturers"
              :key="manufacture._id"
              :value="manufacture._id">
              {{ manufacture.name }}
            </option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col lg="6" md="6" sm="12" xs="12">
        <b-form-group
          label="Image URL :"
          label-for="exampleInput1"
          >
          <b-form-input
            type="text"
            v-model="model.image"
            placeholder="Enter url">
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Description :"
          label-for="exampleInput11"
          >
          <b-form-textarea
            id="textarea1"
            v-model="model.description"
            placeholder="Enter description"
            :rows="5">
          </b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
    <div class="btn-custom">
      <b-button
        v-if="buttonShow"
        variant="outline-secondary"
        @click="addProduct(model)">
        Add Product
      </b-button>
      <b-button
        v-else
        variant="outline-secondary"
        @click="updateProduct(model)">
        Update Product
      </b-button>
    </div>
  </b-col>
</template>

<script>
import { Money } from 'v-money'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      model: {
        price: 0
      },
      money: {
        decimal: '',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 0,
        masked: false
      },
      buttonShow: true
    }
  },
  components: {
    Money
  },
  computed: {
    ...mapGetters('productCollection', [
      'manufacturers',
      'product'
    ])
  },
  methods: {
    ...mapActions('productCollection', [
      'getManufacturers',
      'getProductDetail',
      'addProduct',
      'updateProduct'
    ]),
    ...mapMutations('productCollection', ['setProduct']),
    getData () {
      const params = this.$route.params.id
      if (params) {
        this.buttonShow = false
        this.getProductDetail(params)
      } else {
        this.buttonShow = true
        const obj = {}
        this.setProduct(obj)
      }
    }
  },
  watch: {
    product (value) {
      if (value) {
        this.model = value
      }
    }
  },
  created () {
    this.getManufacturers()
    this.getData()
  }
}
</script>

<style scoped>
.btn-custom {
  float: right;
}
</style>
