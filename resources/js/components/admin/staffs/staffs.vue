<template>
  <div class="main-content">
   <div class="d-flex justify-content-between my-4">
      <h2>Staff List</h2>
      <div> <router-link to="/admin/staffs/add"><button class="button-green">Add staff <i class="fas fa-plus-circle" aria-hidden="true"></i></button></router-link></div>
   </div>
    <div class="form-control d-flex justify-content-between align-items-center">
      <div class="bar border-right">
        <i
          class="fa fa-angle-double-left pr-2"
          @click="firstPage"
          aria-hidden="true"
          v-if="first_page"
        ></i>
        <i class="fas fa-angle-left pr-2" @click="prev" v-if="prev_page"></i>
        <input type="number" class="row_numb pl-2" readonly v-model="current_page" />
        <i class="fas fa-angle-right pl-2" @click="next" aria-hidden="true" v-if="next_page"></i>
        <i
          class="fa fa-angle-double-right pl-2"
          @click="lastPage"
          aria-hidden="true"
          v-if="last_page"
        ></i>
      </div>
        <div class="bar border-right" @click="getAll"> <span class="mr-3"><input type="checkbox" v-model="all"> Show all</span> <button v-if="item" class="button-red" @click="multiDrop">Multi drop</button></div>
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

    <div class="table-responsive" v-if="filterSearch.length > 0">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>s/n</th>
            <th>Imssbn</th>
            <th>Surname</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Dob</th>
            <th>Doe</th>
            <th>Rank</th>
            <th>Cgl</th>
            <th>Department</th>
            <th>Bank Acc</th>
            <th>Bank Name</th>
            <th>Bvn</th>

            <th v-if="admin.role == 'administrator'">Edit</th>
            <th v-if="admin.role == 'administrator'">Drop</th>
            <th v-if="admin.role == 'administrator'">
              <input v-model="item" type="checkbox" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in filterSearch" :key="idx">
            <td scope="row">{{item.id}}</td>
            <td v-if="item.immsbn">{{item.immsbn}}</td>
             <td v-else class="text-center">-</td>
            <td v-if="item.surname">{{item.surname.toLowerCase()}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.first_name">{{item.first_name.toLowerCase()}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.middle_name">{{item.middle_name.toLowerCase()}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.dob">{{item.dob}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.doe">{{item.doe}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.current_rank">{{item.current_rank}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.cgl">{{item.cgl}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.department">{{item.department.toLowerCase()}}</td>
               <td v-else class="text-center">-</td>
            <td v-if="item.bank_name">{{item.bank_name.toLowerCase()}}</td>
            <td v-else class="text-center">-</td>
            <td v-if="item.bank_acc">{{item.bank_acc}}</td>
            <td v-else class="text-center">-</td>
            <td v-if="item.bvn">{{item.bvn}}</td>
            <td v-else class="text-center">-</td>
            <td v-if="admin.role == 'administrator'"><span @click="editStaff(item.id)" class="cpointer"><i class="fas fa-edit   mr-1 "></i> Change</span></td>
            <td v-if="admin.role == 'administrator'"><span @click="singleDrop(item.id)" class="cpointer"><i class="fas fa-minus-circle red mr-1" aria-hidden="true"></i> Drop</span></td>
            <td v-if="admin.role == 'administrator'">
              <input :value="item.id" v-model="items" type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="form-control text-center" v-else>No record</p>
    <div class="navigation" v-if="filterSearch.length > 1">
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
      row_number: 0,
      total_staffs: 0,
      search: "",
      staffs: [],
      item: false,
      items: [],
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      admin: {},
      all:false
    };
  },
  mounted() {
    this.admin = JSON.parse(localStorage.getItem("adminUser"));
     this.getAll()
  },
  watch: {
    all:'getAll',
    item: "multiSlect"
  },
  computed: {
    filterSearch() {
      return this.staffs.filter(item => {
        if (
          item.surname.toLowerCase().includes(this.search.toLowerCase()) ||
          item.first_name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.middle_name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.department.toLowerCase().includes(this.search.toLowerCase()) ||
          item.current_rank.toLowerCase().includes(this.search.toLowerCase()) ||
          item.cgl.includes(this.search)
        ) {
          return item;
        } 
    
      });
    }
  },
  methods: {
    editStaff(id){
    this.$router.push(`/admin/staffs/edit/${id}`)
    },
      multiSlect() {
      if (this.item) {
        this.staffs.forEach(ite => {
          this.items.push(ite.id);
        });
      } else {
        this.items = [];
      }
    },
    singleDrop(id){
        let con = confirm("Are you sure");
      if (con) {
        axios
          .delete(`/api/staff/${id}`, {
            headers: {
              Authorization: `Bearer ${this.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
               this.getAll()
            }
          });
      }
    },
    multiDrop(){
  let con = confirm("Are you sure");
      if (con) {
        if (this.item) {
          let data = {
            admins: this.items
          };
          axios
            .post(`/api/multi-staff-delete`, data, {
              headers: {
                Authorization: `Bearer ${this.admin.access_token}`
              }
            })
            .then(res => {
              if (res.status == 200) {
                this.getAll()
                this.items = []
                this.item = false
              }
            });
        } else {
          this.$toasted.info("Select a min of 2 users!");
        }
      }
    },
    getAll(){
     
      if (!this.all) {
          this.getStaffs();
      }else{
         this.staffs = []
         axios
        .get(`/api/all-staff`, {
          headers: {
            Authorization: `Bearer ${this.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.staffs = res.data;
          
          }
        });
      }
    },
    getStaffs() {
      axios
        .get(`/api/staff`, {
          headers: {
            Authorization: `Bearer ${this.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.staffs = res.data.data;
            this.total_staffs = res.data.total;
            this.row_number = res.data.per_page;
            this.last_page = res.data.last_page_url;
            this.first_page = res.data.first_page_url;
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
          }
        });
    },
    firstPage() {
      axios
        .get(this.first_page, {
          headers: {
            Authorization: `Bearer ${this.admin.access_token}`
          }
        })
        .then(res => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.staffs = res.data.data;
        });
    },
    lastPage() {
      axios
        .get(this.last_page, {
          headers: {
            Authorization: `Bearer ${this.admin.access_token}`
          }
        })
        .then(res => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.staffs = res.data.data;
        });
    },
    next() {
      if (this.next_page) {
        axios
          .get(this.next_page, {
            headers: {
              Authorization: `Bearer ${this.admin.access_token}`
            }
          })
          .then(res => {
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
            this.staffs = res.data.data;
          });
      }
    },
    prev() {
      if (this.prev_page) {
        axios
          .get(this.prev_page, {
            headers: {
              Authorization: `Bearer ${this.admin.access_token}`
            }
          })
          .then(res => {
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
  padding:30px 20px 50px;
  height: 100vh;
  overflow: scroll;
}
.bar {
  position: relative;
 width: 20%;
 text-align: center;
  font-size: 14px;
}
.red{
  color: var(--red,red);
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
th {
  font-size: 12px;
}
td {
  font-size: 13px;
  text-transform: capitalize;
}
td span{
  display: flex;
  align-items: center;
}
.next_button,.prev_button{
  padding:5px ;
  font-size: 14px;
}
.row_numb{
  width: 15%;
  font-size: 14px;
}
</style>