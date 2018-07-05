<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
          <router-link :to="{ name: 'ProductList' }">
            <img src="https://www.jakmall.com/images/desktop/logo@2x.png?2" alt="Responsive image" width="130" height="35">
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
          <b-nav-item href="#"><i class="fa fa-shopping-cart"></i> Cart (0)</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
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
