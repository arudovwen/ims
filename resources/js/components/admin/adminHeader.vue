<template>
  <div class="main_side_bar">
    <div class="side_header">
      <h4>ISM Dashboard</h4>
      <p>Welcome</p>
    </div>
    <hr />
    <ul class="side_nav_items">
      <li>Home</li>
      <router-link to="/admin/directory"><li class="single_nav_item">Directory</li></router-link>
      <li>Applications</li> 
      <li>Payments</li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
.side_nav_items,
.side_header {
  padding: 20px 15px;
}
.single_nav_item{
    text-decoration: none;
    list-style: none;
    color: rgba(0, 0, 0,0.74);
}
</style>