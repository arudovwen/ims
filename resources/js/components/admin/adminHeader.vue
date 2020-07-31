<template>
  <div class="main_side_bar">
    <div class="overlay"></div>
    <div class="sides">
    
      <div class="side_header">
        <h4>ISM Dashboard</h4>
        <p>Welcome {{name}}</p>
      </div>
      <hr />
      <ul class="side_nav_items">
        <router-link to="/admin">
          <li class="single_nav_item">Home</li>
        </router-link>
         <router-link to="/admin/users" v-if="admin.role == 'administrator'">
          <li class="single_nav_item">Users</li>
        </router-link>
        <router-link to="/admin/directory">
          <li class="single_nav_item">Directory</li>
        </router-link>
        <router-link to="/admin/applications">
          <li class="single_nav_item">Applications</li>
        </router-link>
        <router-link to="/admin/payments">
          <li class="single_nav_item">Payments</li>
        </router-link>
        <router-link to="/admin/projects">
          <li class="single_nav_item">Projects</li>
        </router-link>
        <router-link to="/admin/programs">
          <li class="single_nav_item">Programs</li>
        </router-link>
        <router-link to="/admin/news">
          <li class="single_nav_item">News</li>
        </router-link>
        <li class="single_nav_item" @click="logout">Logout</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["showHeader"],
  data() {
    return {
      name: "",
      admin:{}
    };
  },
  components: {},
  mounted() {
    let admin = JSON.parse(localStorage.getItem("adminUser"));
      this.admin = JSON.parse(localStorage.getItem("adminUser"));
    this.name = admin.name;
  },
  methods: {
    logout() {
      localStorage.removeItem("adminUser");
      this.$router.push("/admin/auth/login");
    },
    handleHeader() {
      this.$emit("handleHeader");
    }
  }
};
</script>
<style scoped lang='scss'>
.main_side_bar {
  position: relative;
  height: 100vh;
  background: url("/images/imobanner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.sides {
  z-index: 2;
  position: absolute;
  width: 100%;
}
.side_nav_items,
.side_header {
  padding: 20px 0;
  color: hsl(120, 100%, 95%);
}
.side_header p {
  text-transform: capitalize;
}
.side_header {
  padding: 20px 15px;
}
hr {
  border-top: 2px solid hsl(60, 100%, 30%);
}
h4 {
  color: #ECEE53;
}
.single_nav_item {
  text-decoration: none;
  list-style: none;
  color: hsl(120, 100%, 96%);
  font-size: 16px;
  padding: 10px 15px;
}
li {
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}
a {
  text-decoration: none;
}
.overlay {
    background:  rgb(15, 122, 138, 0.9);
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 100%;
}
li:hover {
  background: hsl(120, 100%, 20%);
  border-left-color: hsl(60, 100%, 40%);
  border-right-color: hsl(60, 100%, 40%);
}
.router-link-exact-active {
  & li {
    background: hsl(120, 100%, 20%);
    border-top: 1px solid hsl(60, 100%, 30%);
    border-bottom: 1px solid hsl(60, 100%, 30%);
    border-left-color: hsl(60, 100%, 40%);
    border-right-color: hsl(60, 100%, 40%);
  }
}
</style>