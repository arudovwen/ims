<template>
  <div id="main-body">
    <div class="box box_1">
      <div class="mini_box shadow-sm">
        <router-link to="/admin/create/news" ><b-button class="mb-3" block>Create News</b-button></router-link>
         <router-link to="/admin/create/announcement"><b-button class="mb-3" block>Create Announcement</b-button></router-link>
         <router-link to="/admin/news/draft"><b-button block=""> Draft</b-button></router-link>
      </div>
       <div class="mini_box2 mini_first">
        <div
          class="d-flex flex-column justify-content-center align-items-center mini_b shadow-sm bg-white p-2"
        >
          <h5>Current Announcement</h5>
          <strong v-if="current.length" >{{current[0].subject}}</strong>
        </div>
        <div class="mini_b mini_bb">
          <div class="mini_c shadow-sm p-2">
            <h5>All Announcement</h5>
            <table class="table" v-if="announcements.length">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,idx) in announcements" :key="idx">
                  <td scope="row">{{idx+1}}</td>

                  <td>{{item.subject}}</td>
                  <td>{{item.status}}</td>
                  <td>
                    <router-link
                      :to="{
                 name:'ViewNews',
                params:{
                  type:'announcement',
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
    
    </div>
    <div class="box box_2">
     
      <div class="mini_box2 shadow-sm bg-white p-2">
        <h5>All News</h5>

       <div class="mytable">
          <b-table :items="news" :fields="fields">
          <template v-slot:cell(Sn)= "data">

          {{data.index+1}}
              
            
          </template>
           <template v-slot:cell(action)="data">
          <span > <router-link
                  :to="{
                 name:'ViewNews',
                params:{
                  type:'news',
                  id:data.item.id
                }
              }"
                  class="text-dark"
                >View</router-link></span>
          </template>
        </b-table>
       </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
      announcements: [],
      current: {},
      fields:['Sn',
      {     
        key:'category',sortable:true
      },
      {     
        key:'subject',sortable:true
      },{     
        key:'status',sortable:true
      },'action']
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      axios.get("/api/get-news").then(res => {
        if (res.status == 200) {
          this.news = res.data;
        }
      });

      axios.get("/api/get-announcements").then(res => {
        if (res.status == 200) {
          this.announcements = res.data;
        }
      });
      axios.get("/api/current-a").then(res => {
        if (res.status == 200) {
          this.current = res.data;
        }
      });
    }
  }
};
</script>

<style scoped>
#main-body {
  padding: 15px;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: 30% 70%;
 
}
h5{
  color:#0f7a8a;
}
.box {
  width: 100%;
}
.box_1 {

  display: grid;
  grid-template-columns: 1fr ;
  grid-column-gap: 15px;
  grid-template-rows: 20% 80%;
  grid-row-gap: 15px;
}
.mini_box {
  height: 100%;
  background: white;
 text-align: center;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 40px;
}
a{
  text-decoration: none;
}
.box_2 {
 
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
table {
  font-size: 14px;
}
.mytable{
  max-height: 80vh;
  overflow: auto;
}
</style>