<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
          <router-link :to="{ name: 'ProductList' }">
            <img src="http://az670635.vo.msecnd.net/shop-logos/32753/small/1480322046_MyPhone_multimedia_o_shop_logo.png" alt="Responsive image" width="190" height="65">
          </router-link>
        </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <a class="navbar-text mx-auto" href="#">
          <b-nav-form>
            <b-form-input size="md" class="mr-sm-2" type="text" placeholder="Search"/>
          </b-nav-form>
        </a>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({{cartLength}})</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('productCollection', ['cart']),
    cartLength () {
      return this.cart.length
    }
  }
}
</script>

<style scoped>
@media (min-width: 1025px) and (max-width: 1280px) {

  .form-inline .form-control {
    display: flex;
    width: 412px;
    margin-left: 123px;
    vertical-align: middle;
  }

}

@media (min-width: 1281px) {
  .form-inline .form-control {
    display: flex;
    width: 412px;
    margin-left: 114px;
    vertical-align: middle;
  }
}
</style>
