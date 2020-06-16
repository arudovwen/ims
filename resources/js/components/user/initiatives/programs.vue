<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-12" v-for="(item,idx) in programs"  :key="idx">
        <div class="card">
          <img class="card-img-top" :src="item.cover_image" alt />
          <div class="card-body">
            <h4 class="card-title">{{item.name}}</h4>
            <p class="card-text" v-html="item.about"></p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: []
    };
  },
  mounted() {
    this.getPrograms();
  },
  methods: {
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
.container {
  background: #f7f8fa;
  height: 100vh;
  padding-top: 50px;
}
</style>