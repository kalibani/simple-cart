<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
          <router-link :to="{ name: 'ProductList' }">
            <i class="fas fa-home"></i>
          </router-link>
        </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-brand href="#">
          <router-link to="/admin">
            <i class="fas fa-user"></i>
          </router-link>
        </b-navbar-brand>
        <b-nav-form>
          <a class="navbar-text mx-auto" href="#">
            <b-form-input
              size="md"
              class="mr-sm-2"
              type="text"
              v-model="q"
              @input="emitEvent"
              placeholder="Search"/>
          </a>
        </b-nav-form>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({{cartLength}})
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
import bus from '@/utils/bus'
export default {
  data () {
    return {
      q: ''
    }
  },
  computed: {
    ...mapGetters('productCollection', ['cart']),
    cartLength () {
      return this.cart.length
    }
  },
  methods: {
    emitEvent (event) {
      bus.$emit('emitted', event)
    }
  }
}
</script>

<style scoped>
a {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.bg-light {
  border-bottom: 2px solid #F5F5F5;
  background-color: #fff !important;
}
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
