<template>
  <div id="main-body">
    <div class="box box_1">
      <div class="mini_box shadow-sm p-2 py-4">
        <div class="circle-box">
          <i class="fas fa-folder-open fa-3x icon" aria-hidden="true"></i>
        </div>
        <div class="content">
          <div class="text_header">Directory</div>
          <ul class="actions text-left">
            <li>
              <router-link to="/admin/lga">LGAs</router-link>
            </li>
            <li>
              <router-link to="/admin/directory">Schools</router-link>
            </li>
          </ul>
        </div>

        <!-- <hr> -->
      </div>
      <div class="mini_box shadow-sm p-2 py-4">
        <div class="circle-box">
          <i class="fas fa-credit-card fa-3x icon" aria-hidden="true"></i>
        </div>
        <div class="content">
          <div class="text_header">Payments</div>
          <ul class="actions text-left">
            <li>
              <router-link to>View</router-link>
            </li>
            <li>
              <router-link to>Verify</router-link>
            </li>
          </ul>
        </div>

        <!-- <hr> -->
      </div>

      <div class="mini_box shadow-sm p-2 py-4">
        <div class="circle-box">
          <i class="fa fa-list-alt fa-3x icon" aria-hidden="true"></i>
        </div>
        <div class="content">
          <div class="text_header">Applications</div>
          <ul class="actions text-left">
            <li>
              <router-link to>Check</router-link>
            </li>
            <li>
              <router-link to>Update</router-link>
            </li>
          </ul>
        </div>

        <!-- <hr> -->
      </div>

      <div class="mini_box shadow-sm p-2 py-4">
        <div class="circle-box">
          <i class="fas fa-newspaper fa-3x icon"></i>
        </div>
        <div class="content">
          <div class="text_header">News</div>
          <ul class="actions text-left">
            <li>
              <router-link to="/admin/news">Announcement</router-link>
            </li>
            <li>
              <router-link to="/admin/news">News Update</router-link>
            </li>
          </ul>
        </div>

        <!-- <hr> -->
      </div>
    </div>
    <div class="box box_2">
      <div class="mini_box2 mini_first">
        <div class="mini_b shadow-sm bg-white d-flex flex-column justify-content-center align-items-center">
            <h5>Current Announcement</h5>
          <h4 v-if="current.length">{{current[0].subject}}</h4>
        </div>
        <div class="mini_b mini_bb">
          <div class="mini_c shadow-sm p-2">
            <h5>Programs</h5>
            <table class="table table-hover table-inverse  table-bordered" v-if="programs.length">
              <tbody>
                <tr v-for="(item,idx) in programs" :key="idx">
                  <td scope="row" class="text-center">{{item.name}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mini_c shadow-sm p-2">
            <h5>Projects</h5>
            <table class="table table-hover table-inverse  table-bordered" v-if="projects.length">
              <tbody>
                <tr v-for="(item,idx) in projects" :key="idx">
                  <td scope="row" class="text-center">{{item.name}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="mini_box2 shadow-sm bg-white p-2 py-3">
         <h5> News</h5>

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
      projects: [],
      programs: [],
      current:[],
      admin:{},
      news:[],
        fields:['Sn',
      {     
        key:'category',sortable:true
      },
      {     
        key:'subject',sortable:true
      },'status','action']
    };
  },
  mounted() {
     this.admin = JSON.parse(localStorage.getItem("adminUser"));
    this.getProjects();
    this.getPrograms();
    this.getNews()
  },
  methods: {
      getNews() {
      axios.get("/api/get-news").then(res => {
        if (res.status == 200) {
          this.news = res.data.data;
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
    },
    getProjects() {
      axios.get("/api/get-projects").then(res => {
        if (res.status == 200) {
          this.projects = res.data;
        }
      });
        axios.get("/api/current-a").then(res => {
        if (res.status == 200) {
          this.current = res.data;
        }
      });
    },
    getPrograms() {
      axios.get("/api/get-programs").then(res => {
        if (res.status == 200) {
          this.programs = res.data;
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
  grid-template-rows: 1fr 3fr;
  grid-row-gap: 15px;
}
.mytable{
  max-height: 60vh;
  overflow: auto;
}
.box {
  width: 100%;
}
.box_1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 15px;
}
h5{
  color:#0f7a8a;
}
.circle-box {
  height: 100%;
  width: 100%;
  position: absolute;
  background: #0f7a8a;
  border-radius: 50%;
  right: -60%;
}
.content {
  padding-left: 15px;
}
.text_header {
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: #0f7a8a;
}
.actions li a {
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
}
.actions li:hover a {
  color: rgba(0, 0, 0, 0.84);
}
a {
  text-decoration: none;
}
.mini_box {
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.box_content_1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  justify-content: space-between;
  align-items: center;
}
.mini_box:hover .icon {
  transform: scale(1.06);
}
.fa-stack {
  color: transparent;
}
.icon {
  position: absolute;
  bottom: 50%;
  margin-bottom: -24px;
  left: 15%;
  color: hsl(120, 100%, 98%);
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
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}
.mini_c {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>