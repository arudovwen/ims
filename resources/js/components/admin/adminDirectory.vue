<template>
  <div class="container-fluid">
    <div class="main-content">
      <div class="left_side">
        <div class="side_bar">
          <ul>
            <h6>Category</h6>
            <li>
              <p @click="handleClick('')">All</p>
              <p @click="handleClick('nursery')">Nursery</p>
              <p @click="handleClick('primary')">Primary</p>
              <p @click="handleClick('secondary')">Secondary</p>
              <p @click="handleClick('tertiary')">Tertiary</p>
            </li>
            <h6>Filter</h6>
            <li>
              <p @click="handleClick('boarding')">Boarding</p>
              <p @click="handleClick('day')">Day</p>
            </li>
            <li>
              <p @click="handleClick('private')">Private</p>
              <p @click="handleClick('public')">Public</p>
            </li>
            <li>
              <p @click="handleClick('individual')">Individually Owned</p>
              <p @click="handleClick('faith')">Faith Based</p>
            </li>
            <li>
              <p @click="handleClick('accredited')">Accredited</p>
              <p @click="handleClick('non-accredited')">Non-accredited</p>
            </li>
            <h6>LGAs</h6>
            <li>
              <div class="form-group px-2 text-center">
                <select class="custom-select mb-2" v-model="lga">
                  <option value="selected">Select one</option>
                  <option :value="lga.name.toLowerCase()" v-for="(lga,index) in lgas" :key="index" class="lga_name">{{lga.name}}</option>
                </select>
                 <button class="button-green" @click="lgaShow" v-if="!showlga">Add new</button>
              </div>
              <div class="form-group px-2 text-center" v-if="showlga">
             
                <input type="text"
                  class="form-control mb-2"  v-model="lga_name" aria-describedby="helpId" placeholder="Enter lga name">
              
                 <button class="button-green" @click="addLga">Add </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right_side">
       <div class="d-flex justify-content-between align-items-center mb-4">
          <h4 class="filter_item mb-3">{{filter_item}} Schools</h4>
        <div>
         <router-link to="/admin/school/add"> <button class="button-green mr-3">Add school</button></router-link>
           <small @click="reset" class="reset">Reset filter</small>
        </div>
        </div>
        <div class="top_bar">
           <div class="bar border-right">
            <i class="fa fa-angle-double-left pr-2" @click="firstPage" aria-hidden="true" v-if="first_page"></i>
            <i class="fas fa-angle-left pr-2" @click="prev" v-if="prev_page"></i>
            <input type="number" class="row_numb pl-2" v-model="current_page" />
            <i class="fas fa-angle-right pl-2" @click="next" aria-hidden="true" v-if="next_page"></i>
            <i class="fa fa-angle-double-right pl-2" @click="lastPage" aria-hidden="true" v-if="last_page"></i>
          </div>
          <div class="bar border-right">Number of rows {{row_number}}</div>
          <div class="bar border-right">Total Schools {{total_schools}}</div>
          <div class="bar" v-if="admin">
            <label class="custom-control custom-checkbox m-0">
              <input type="checkbox" v-model="item" value="checkedValue" class />
              <span class="custom-control-indicator">Select all</span>
            </label>
          </div>

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
        <div class="table-responsive">
          <table class="table table-hover">
            <thead class="thead-inverse">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
                <th v-if="admin">
                  <input type="checkbox" v-model="item" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(school,idx) in sortedSchools" :key="idx">
                <td scope="row">{{school.id}}</td>
                <td scope="row">{{school.id}}</td>
                <td>{{school.name!='null'?school.name: '-'}}</td>
                <td>{{ school.address!='null'?school.address: '-'}}</td>
                <td>{{school.phone_no!='null'?school.phone_no: '-'}}</td>
                <td>{{school.email!='null'?school.email: '-'}}</td>

                <td class="action">
                  <tr class="border-0">
                    <td class="border-0 py-0" v-if="admin">
                      <i class="fas fa-edit action_icon" @click="editSchool(school.id)">Edit</i>
                    </td>
                    <td class="border-0 py-0">
                      <i class="fa fa-eye" @click="viewSchool(school.id)">View</i>
                    </td>
                    <td class="border-0 py-0" v-if="admin">
                      <i
                        class="fa fa-minus-circle text-red"
                        @click="deleteSchool(school.id)"
                        aria-hidden="true"
                      >Drop</i>
                    </td>
                  </tr>
                </td>
                <td v-if="admin">
                  <input type="checkbox" v-model="items" :value="school.id" />
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right mt-2" v-if="items.length">
            <button class="button">Remove all</button>
          </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      filter_item: "",
      lga: "selected",
      lgas:[],
      items: [],
      item: false,
      row_number: 1,
      schools: [],
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      total_schools: 0,
      admin:true,
      showlga:false,
      lga_name:''
    };
  },
  mounted() {
    this.retrieveSchools();
    this.getLgas()
  },
  watch: {
    search: "handleSearch",
    lga: "handleLga",
    item: "selectAll"
  },
  methods: {
     reset(){
      this.filter_item = ''
    },
    getLgas(){
      axios.get('/api/show-lgas').then(res=>{
        if (res.status == 200) {
          this.lgas = res.data
          
        }
      }).catch(err=>{

      })
    },
    lgaShow(){
      this.showlga = !this.showlga
    },
    addLga(){
      let data = {
        lga : this.lga_name
      }
       if (this.lga_name.length !== '') {
          axios.post('/api/create-lga', data).then(res=>{
        if (res.status == 201) {
          this.getLgas()
          this.$toasted.info('Successful')
          this.showlga = false
        }
      })
       }
    },
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
          this.schools = res.data.data;
        });
      }
    },
    prev() {
      if (this.prev_page) {
        axios.get(this.prev_page).then(res => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.schools = res.data.data;
        });
      }
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.schools.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    handleClick(type) {
      this.filter_item = type;
      this.search = "";
      this.lga = "selected";
    },
    handleSearch() {
      this.filter_item = this.search;
      this.lga = "selected";
    },
    handleLga() {
      this.filter_item = this.lga;
      this.search = "";
    },
    retrieveSchools() {
      axios
        .get("/api/get-schools")
        .then(res => {
          if (res.status == 200) {
            this.schools = res.data.data;
            this.total_schools = res.data.total;
            this.row_number = res.data.per_page;
            this.last_page = res.data.last_page_url;
            this.first_page = res.data.first_page_url;
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
          }
        })
        .catch(err => {
          console.log("retrieveSchools -> err", err);
        });
    },
    editSchool(id) {
      axios
        .get(`/api/get-school/${id}`)
        .then(res => {
          if (res.status == 200) {
               this.$router.push(`/admin/school/edit?id=${id}`)
          }
        })
        .catch(err => {
          console.log("edit -> err", err);
        });
    },
    viewSchool(id) {
      axios
        .get(`/api/get-school/${id}`)
        .then(res => {
          if (res.status == 200) {
            this.$router.push(`/admin/school/view?id=${id}`)
          }
        })
        .catch(err => {
          console.log("edit -> err", err);
        });
    },
    deleteSchool(id) {
      let del = confirm("Are you sure about this?");
      if (del) {
        axios
          .delete(`/api/delete-school/${id}`)
          .then(res => {
            if (res.status == 200) {
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
    deleteSchools() {
      let del = confirm("Are you sure about this?");
      if (del) {
        axios
          .post("/api/mass-delete", this.items)
          .then(res => {
            if (res.status == 200) {
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    }
  },
  computed: {
       sortedSchools(){
          if (this.filter_item == 'nursery'||this.filter_item == 'primary' || this.filter_item == 'secondary'|| this.filter_item == 'tertiary') {
              return this.schools.filter(item=>{
                  return item.level.toLowerCase() == this.filter_item.toLowerCase()
              })
          }
          if (this.filter_item == 'boarding'||this.filter_item == 'day') {
              return this.schools.filter(item=>{
                  return item.type.toLowerCase() == this.filter_item.toLowerCase()
              })
          }
          if (this.filter_item == 'private'||this.filter_item == 'public' ) {
              return this.schools.filter(item=>{
                  return item.sector.toLowerCase() == this.filter_item.toLowerCase()
              })
          }
           if (this.filter_item == 'individual'||this.filter_item == 'faith' ) {
              return this.schools.filter(item=>{
                  return item.ownership.toLowerCase() == this.filter_item.toLowerCase()
              })
          }
           if (this.filter_item == 'accredited'||this.filter_item == 'non-accredited' ) {
              return this.schools.filter(item=>{
                  return item.accreditation.toLowerCase() == this.filter_item.toLowerCase()
              })
          }
           if (this.lga !== 'selected') {
              return this.schools.filter(item=>{
                  return item.lga.toLowerCase() == this.filter_item.toLowerCase()
              })
          }
          if (this.search !== '') {
              return this.schools.filter(item=>{
                return  item.name.toLowerCase().includes(this.search.toLowerCase())
              })
          }
         
              return this.schools
     
      }
  }
};
</script>

<style scoped lang="scss">
.container-fluid {
  background: #f7f8fa;
}
.main-content {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  padding: 15px 0px;
}

.filter_item {
  text-transform: capitalize;
}
.action {
  width: 1%;
}
.action_icon {
  font-size: 13px;
}
th {
  color: #006600;
}

.navigation {
  display: flex;
  width: 20%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 30px;
}
.prev,
.next {
  font-size: 14px;
}
.prev_button,
.next_button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
}
h6{
  color: #006600;
}
.fa-minus-circle:before {
  content: "\f056";
  color: #dc3545;
}
.button {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #dc3545;
  text-decoration: none;
  color: white;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: initial;
  position: relative;
  transition: background-color 0.6s ease;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(white, 0.1);
    border-radius: 100%;
    transition: width 0.3s ease, height 0.3s ease;
  }
  &:focus,
  &:hover {
    background: darken(#dc3545, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}
.top_bar {
  padding: 5px 10px;
  background: #f7fafa;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  align-items: center;
}
.row_numb {
  width: 30px;
}
.row_numb::placeholder {
  text-align: center;
}
.reset{
  cursor: pointer;
}
.bar {
  position: relative;
  padding-right: 15px;
}


.left_side {
  width: 20%;
  height: 100vh;
}
.side_bar {
  background: white;
  border-radius: 5px;
  height: 100vh;
  width: 93%;
  padding: 20px 0;
}
.search_bar {
  position: relative;
  margin-bottom: 0;
}
.search_input {
  border-color: #f7f8fa;
  height: 25px;
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

ul h6 {
  padding: 10px 15px;
}
li p {
  font-size: 15px;
  font-weight: 200;
  padding: 6px 40px;
  margin: 0;
}
li p:hover {
  background: #f7f8fa;
  cursor: pointer;
}
li {
  border-bottom: 1px solid #f7f8fa;
}
.right_side {
  width: 80%;
  height: 100vh;
  background: white;
  padding: 15px;
  border-radius: 5px;
  overflow: scroll;
}
</style>