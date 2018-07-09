<template>
  <b-container class="admin">
    <b-row>
      <b-col lg="3" md="3" sm="12" xs="12">
        <b-list-group>
          <b-list-group-item to="/admin">Product List</b-list-group-item>
          <b-list-group-item to="/admin/new">New Product</b-list-group-item>
        </b-list-group>
      </b-col>
      <router-view></router-view>
    </b-row>
  </b-container>
</template>

<script>
export default {
}
</script>

<style scoped>
  .admin {
    margin-top: 30px;
  }
  .list-group-item.active {
    color: #495057;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .list-group-item.active:active {
    color: #fff;
    background-color: #007bff;
    border: 1px solid #007bff;
  }
</style>
