<template>
  <div id="main-body">
    <div class="box box_1">
      <div class="mini_box shadow-sm">
        <router-link to="/admin/directory/school" class="icon-text">School Directory</router-link>
      </div>
      <div class="mini_box shadow-sm">
        <router-link to="/admin/lga" class="icon-text">LGAs Directory</router-link>
      </div>
    </div>
    <div class="box box_2">
      <div class="mini_box2 mini_first">
        <div class="mini_b shadow-sm bg-white d-flex justify-content-center align-items-center">
          <router-link to="/admin/staffs" class="icon-text">Staff Directory</router-link>
        </div>
      </div>

       <div class="mini_box2 mini_first">
        <div class="mini_b shadow-sm bg-white d-flex justify-content-center align-items-center">
          <router-link to="/admin/staffs" class="icon-text">Department Directory</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: [],
    };
  },
  mounted() {
    this.getprograms();
  },
  methods: {
    getprograms() {
      axios.get("/api/get-programs").then((res) => {
        if (res.status == 200) {
          this.programs = res.data;
        }
      });
    },
  },
};
</script>

<style scoped>
#main-body {
  padding: 15px;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-row-gap: 15px;
}
.box {
  width: 100%;
}
.box_1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  grid-template-rows: 1fr ;
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