<template>
  <div class="product-wrapper">
    <router-link :to="{ name: 'ProductDetail', params: {id: product._id} }" @click.native="setProduct(product)">
      <div class="image-wrapper">
        <b-img fluid :src="product.image" alt="Thumbnail" />
      </div>
      <div class="product-description">
        <small>{{product.manufacturer.name}}</small>
        <h4>{{product.name}}</h4>
        <div class="product-price">
          {{product.price | currency}}
        </div>
        <div class="product-action">
          <b-button variant="warning" @click.stop.prevent="addToCart(product)"> Add to cart</b-button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('productCollection', ['addToCart', 'setProduct'])
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.product-wrapper {
  background: #fff;
  border-radius: 1px;
  width: 100%;
  min-height: 390px;
  margin-top: 20px;
}

.product-wrapper:hover {
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
  transform: translateY(-10px);
  box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, .5);
}

.image-wrapper{
  width: 100%;
  padding: 20px 20px 10px 20px;
}

.image-wrapper img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
}

.product-description {
  padding: 0 10px 10px 10px;
}

.product-description small {
  color: #808080;
}

.product-description h4 {
  margin: 3px 0 5px;
  font-size: 20px;
  color: #3d3d3d;
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

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .product-action {
    float: right;
    font-size: 20px;
    font-weight: bold;
  }

  .product-action button {
    width: 100px;
  }

}
</style>
