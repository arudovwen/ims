<template>
  <div id="main-body">
    <div class="box box_1">
      <div class="mini_box shadow-sm">
        <router-link to="/admin/project/add">Add project</router-link>
      </div>
      <div class="mini_box shadow-sm">
        Latest Project
      </div>
   
    
    </div>
    <div class="box box_2">
      <div class="mini_box2 mini_first">
        <div class="mini_b shadow-sm bg-white"></div>
        <div class="mini_b mini_bb">
          <div class="mini_c shadow-sm"></div>
        
        </div>
      </div>
      <div class="mini_box2 shadow-sm bg-white p-2">
        <h5>All Projects</h5>
          <table class="table" v-if="projects.length">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,idx) in projects" :key="idx">
                  <td scope="row">{{idx+1}}</td>

                  <td>{{item.name}}</td>
                
                  <td>
                    <router-link
                      :to="{
                 name:'ViewProject',
                params:{
                 
                  id:item.id
                }
              }"
                      class="text-dark"
                    >View</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects:[]
    }
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    getProjects(){
       axios.get("/api/get-projects").then(res => {
        if (res.status == 200) {
          this.projects = res.data;
        }
      });
    }
  },
};
</script>

<style scoped>
#main-body {
  padding:15px;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-row-gap: 15px;
}
.box {
  width: 100%;
}
.box_1 {
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-column-gap: 15px;
}
.mini_box {
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box_2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}
.mini_box2 {
  height: 100%;
  width: 100%;
}
.mini_first {
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-row-gap: 15px;
}

.mini_bb {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 15px;
}
.mini_c {
  background: white;
}
</style>