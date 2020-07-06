<template>
  <div class="main-content">
    <h2>Staff List</h2>
    <div class="form-control d-flex justify-content-between align-items-center">
      <div class="bar border-right">
        <i
          class="fa fa-angle-double-left pr-2"
          @click="firstPage"
          aria-hidden="true"
          v-if="first_page"
        ></i>
        <i class="fas fa-angle-left pr-2" @click="prev" v-if="prev_page"></i>
        <input type="number" class="row_numb pl-2" v-model="current_page" />
        <i class="fas fa-angle-right pl-2" @click="next" aria-hidden="true" v-if="next_page"></i>
        <i
          class="fa fa-angle-double-right pl-2"
          @click="lastPage"
          aria-hidden="true"
          v-if="last_page"
        ></i>
      </div>
      <div class="bar border-right">Number of rows {{row_number}}</div>
      <div class="bar border-right">Total Staffs {{total_staffs}}</div>

      <div class="bar">
        <div class="form-group search_bar">
          <input
            type="text"
            class="form-control search_input rounded-pill"
            v-model="search"
            aria-describedby="helpId"
            placeholder="Search row"
          />
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>S/N</th>
          <th>IMSSBN</th>
          <th>SURNAME</th>
          <th>FIRST NAME</th>
          <th>MIDDLE NAME</th>
          <th>DOB</th>
          <th>DOE</th>
          <th>CURRENT RANK</th>
          <th>CGL</th>
          <th>DEPARTMENT</th>
          <th v-if="admin.role == 'administrator'">EDIT</th>
          <th v-if="admin.role == 'administrator'">DROP</th>
          <th v-if="admin.role == 'administrator'">
            <input v-model="item" type="checkbox" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td v-if="admin.role == 'administrator'">Change</td>
          <td v-if="admin.role == 'administrator'">Drop</td>
          <td v-if="admin.role == 'administrator'">
            <input type="checkbox" />
          </td>
        </tr>
      </tbody>
    </table>
      <div class="navigation">
            <button type="button" class="prev_button" @click="prev" v-if="prev_page">
              <i class="fa fa-arrow-circle-left mc1 prev" aria-hidden="true"></i> Prev
            </button>
            <button class="next_button" @click="next" v-if="next_page">
              Next
              <i class="fa fa-arrow-circle-right mc1 next" aria-hidden="true"></i>
            </button>
          </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        row_number:0,
        total_staffs:0,
      search: "",
      staffs: [],
      item: "",
      items: [],
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      total_schools: 0,
      admin:{}
    };
  },
  mounted() {
        this.admin = JSON.parse(localStorage.getItem("adminUser"));
  },
  methods: {
    firstPage() {
      axios.get(this.first_page).then(res => {
        this.next_page = res.data.next_page_url;
        this.prev_page = res.data.prev_page_url;
        this.current_page = res.data.current_page;
        this.schools = res.data.data;
      });
    },
    lastPage() {
      axios.get(this.last_page).then(res => {
        this.next_page = res.data.next_page_url;
        this.prev_page = res.data.prev_page_url;
        this.current_page = res.data.current_page;
        this.schools = res.data.data;
      });
    },
    next() {
      if (this.next_page) {
        axios.get(this.next_page).then(res => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.staffs = res.data.data;
        });
      }
    },
    prev() {
      if (this.prev_page) {
        axios.get(this.prev_page).then(res => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.staffs = res.data.data;
        });
      }
    }
  }
};
</script>
<style scoped>
.main-content {
  padding: 20px;
  height: 100vh;
  overflow: scroll;
}
.bar {
  position: relative;
  padding-right: 15px;
  font-size: 14px;
}
.search_bar {
  position: relative;
  margin-bottom: 0;
}
.search_input {
  border-color: #f7f8fa;
  height: 30px;
  font-size: 13px;
}
.form-control::placeholder {
  font-size: 13px;
}
.fa-search {
  position: absolute;
  font-size: 12px;
  right: 14px;
  top: 50%;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.44);
}
</style>