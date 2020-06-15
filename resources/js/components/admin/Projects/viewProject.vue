<template>
  <div class="main">
    <div class="top_nav">
      <div class="side_">
        
       <router-link :to="{
            name:'EditProject',
            params:{
                id:item.id
            }
       }" class="mr-4">
              <i class="fas fa-edit text-blue " >Edit</i>
       </router-link>
      
        <i @click="del" class="fa fa-trash text-red" aria-hidden="true">Delete</i>
      </div>
  
    </div>
    <div class="main_body">
      <h3>{{item.name}}</h3>
      <div class="my-3"><img :src="item.cover_image" height="100" alt=""></div>
      <div class="body" v-html="item.about"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
     
    getNews() {
     
        axios.get(`/api/get-project/${this.$route.params.id}`).then(res => {
          if (res.status == 200) {
            this.item = res.data;
          }
        });
    
    },
    del() {
      let d = confirm("Are you sure?");
      if (d) {
      
          axios
            .delete(`/api/delete-project/${this.$route.params.id}`)
            .then(res => {
              if (res.status == 200) {
                this.$router.push("/admin/projects");
              }
            });
        
      }
    }
  }
};
</script>

<style scoped>
.main {
  padding: 40px 20px;
}
.main_body {
  background: white;
  padding: 20px;
}
.top_nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.text-blue {
  color: blue;
}
</style>