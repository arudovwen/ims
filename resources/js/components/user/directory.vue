<template>
  <div class="container-fluid">
    <div class="main-content">
      <div class="left_side" :class="{absolute:filter}">
        <div class="side_bar">
          <div class="mobile-filter" @click="handleFilter">
          <span >  Filters <i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>
          </div>
          <div class="mobile-filter-option text-right" v-if="filter">
           <input type="text" class="form-control " style="text-transform:capitalize" :value="filter_item" readonly /> <br>
              <button type="button" class="btn btn-primary btn-sm ml-auto" @click="handleFilter">Apply</button>
          </div>
          <ul v-if="!filterOpen">
            <h6>Category</h6>
            <li>
              <p @click="handleClick('all')">All</p>
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
              <div class="form-group px-2">
                <select class="custom-select" v-model="lga">
                  <option value="selected" disabled>Select one</option>
                    <option :value="lga.name" v-for="(lga,idx) in lgas" :key="idx">{{lga.name}}</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right_side">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="filter_item mb-3">{{filter_item}} Schools</h4>
        <small @click="reset"  class="reset">Reset filter</small>
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
        <div class="">
          <table class="table table-hover table-responsive-sm" v-if="sortedSchools.length">
            <thead class="thead-inverse">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              
              </tr>
            </thead>
            <tbody>
              <tr v-for="(school,idx) in sortedSchools" :key="idx">
                <td scope="row">{{school.id}}</td>
                <td>{{school.name}}</td>
                <td>{{school.address}}</td>
                <td>{{school.phone_no}}</td>
                <td>{{school.email}}</td>

                 <td class="">
                   <span @click="viewSchool(school.id)" class="action">   <i class="fa fa-eye" ></i> <span class="mobile-none">View</span></span>
                    
                    </td>
              
              </tr>
            </tbody>
          </table>
          
          <div v-else class="text-center form-control">
            No record avaialble !
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
      admin:false,
      filter:false,
      filterOpen:false,
      lgas:[]

    };
  },
  mounted() {
    this.retrieveSchools();
    this.getLgas()
    if (window.innerWidth < 768) {
      this.filterOpen = true
    }
  },
  watch: {
    search: "handleSearch",
    lga: "handleLga",
    item: "selectAll"
  },
  methods: {
      getLgas(){
      axios.get('/api/show-lgas').then(res=>{
        if (res.status == 200) {
          this.lgas = res.data
          
        }
      }).catch(err=>{

      })
    },
    reset(){
      this.filter_item = ''
    },
    handleFilter(){
      this.filter = !this.filter
      this.filterOpen = !this.filterOpen
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
 
    viewSchool(id) {
     this.$router.push(`/directory/school/${id}`)
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
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  padding: 20px;
}
.filter_item {
  text-transform: capitalize;
}
.action {

  cursor:pointer;
}
.action_icon {
  font-size: 13px;
}
th {
  color: #006600;
  font-size: 13px;
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
.reset{
  cursor: pointer;
}
.top_bar {
  padding: 5px;
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
.bar {
  position: relative;
  padding-right: 15px;
}

button:focus {
  outline: none;
}
.left_side {
  width: 25%;
  height: 100vh;
}
.side_bar {
  background: white;
  border-radius: 5px;
  min-height: 400px;
  width: 90%;
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
  width: 75%;
  min-height: 100vh;
  background: white;
  padding: 15px;
  border-radius: 5px;
}
.mobile-filter{
  display: none;
}
@media(max-width:1024px){
  .main-content{
    width:100%;
    padding:20px 0;
    position: relative;
  }

}
@media(max-width:768px){
  .side_bar{
    height: auto;
    overflow: hidden;
    min-height: auto;
    padding:15px 10px;
    width:100%;
     background: #f7f8fa;
     position: relative;
  }
  .left_side{
    width: 100%;
    position: fixed;
    height: auto;
    z-index: 2;
    bottom: 0;
   

  }
  .right_side{
    width: 100%;
    z-index: 1;
  }
  .mobile-filter{
    display: block;
    text-align:center;
  }
  .container-fluid{
    padding: 0;
  }
  .main-content{
    padding-top: 0;
  }
  .mobile-filter-option{
    position:absolute;
    right: 10px;
    top: 70px;
    width:50%;
  
  }
  .top_bar{
    flex-direction: column;
  }
  .bar{
    margin-bottom: 10px;
    border:none !important;
  }
  li p{
    font-size: 14px;
  }
}
</style>