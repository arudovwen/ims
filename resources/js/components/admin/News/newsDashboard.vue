<template>
  <div id="main-body">
    <div class="box box_1">
      <div class="mini_box shadow-sm">
        <router-link to="/admin/create/news">Create News</router-link>
      </div>
      <div class="mini_box shadow-sm">
        <router-link to="/admin/create/announcement">Create Announcement</router-link>
      </div>
      <div class="mini_box shadow-sm">
        <router-link to="/admin/news/draft">Draft</router-link>
      </div>
    </div>
    <div class="box box_2">
      <div class="mini_box2 mini_first">
        <div
          class="d-flex flex-column justify-content-center align-items-center mini_b shadow-sm bg-white"
        >
          <h5>Current Announcement</h5>
          <h4>{{current[0].subject}}</h4>
        </div>
        <div class="mini_b mini_bb">
          <div class="mini_c shadow-sm p-2">
            <h5>All Announcement</h5>
            <table class="table">
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
      <div class="mini_box2 shadow-sm bg-white p-2">
        <h5>All News</h5>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Subject</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in news" :key="idx">
              <td scope="row">{{idx+1}}</td>
              <td>{{item.category}}</td>
              <td>{{item.subject}}</td>
              <td>{{item.status}}</td>
              <td>
                <router-link
                  :to="{
                 name:'ViewNews',
                params:{
                  type:'news',
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
      news: [],
      announcements: [],
      current: {}
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
  grid-template-rows: 1fr 3fr;
  grid-row-gap: 15px;
}
.box {
  width: 100%;
}
.box_1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  grid-template-columns: 1fr 2fr;
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
table {
  font-size: 14px;
}
</style>