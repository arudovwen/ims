<template>
  <div class="p-3">
    <div class=" shadow-sm bg-white p-2">
      <h4>Draft</h4>
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
                 name:'EditNews',
                params:{
                  type:'draft',
                  id:item.id
                }
              }"
                class="text-dark"
              >Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: []
    };
  },
  mounted() {
      this.getNews()
  },
  methods: {
    getNews() {
      axios.get("/api/get-drafts").then(res => {
        if (res.status == 200) {
          this.news = res.data;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>