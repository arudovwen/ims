<template>
  <b-container fluid class>
    <h5
      class="mb-5 text-center"
    >WASSCE for School Candidates 2020: List of Public/Private Schools in Imo State</h5>
    <b-row class="justify-content-between align-items-end mb-4">
      <b-col cols="12" sm="6" class="p0">
        <span class="mr-2 fs14">Page no: {{current_page}}</span>
        <span class="mr-2 fs14" @click="firstPage">
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </span>
        <span class="mr-2 fs14" @click="prev">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </span>
        <span class="mr-2 fs14" @click="next">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
        <span class="mr-2 fs14" @click="lastPage">
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </span>
        <span class="mr-2 fs14">Page: {{current_page}}</span>
        <span class="mr-2 fs14">Per page: {{row_number}}</span>
        <span class="fs14">Total: {{total}}</span>
      </b-col>
      <b-col cols="12" sm="6" class="p0">
        <b-form-group>
         
        
            <b-form-row class="align-items-center w-100 justify-content-center">
              <div class="d-flex align-items-center justify-content-center w-100 mb-3">
                    <b-form-checkbox v-model="all" class="pr-2 fs14 mr-3">Show all</b-form-checkbox>
            <div>  <label class=" mr-2 fs14 mb-2 mb-sm-0">Search by:</label></div>

              <b-form-radio
                v-model="filter"
                value="name of school"
                name="name"
                label="Name"
                class="mr-2  fs14"
              >Name of School</b-form-radio>

              <b-form-radio
                v-model="filter"
                value="centre no"
                name="present posting"
                label="Centre No"
                class="  fs14"
              >Centre No</b-form-radio>

              </div>
              <div class="d-flex w-100">
                <b-form-input :placeholder="'Search by '+ filter" class="fs14 m-0 mr-sm-2 " v-model="search"></b-form-input>
                <b-form-select v-model="filters" label="filter by" class="fs14">
                  <b-form-select-option value disabled="">Filter by</b-form-select-option>
                   <b-form-select-option value>All</b-form-select-option>
                  <b-form-select-option value="public">Public</b-form-select-option>
                  <b-form-select-option value="private">Private</b-form-select-option>
                </b-form-select>
              </div>
            </b-form-row>
         
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <div class="table-responsive">
        <b-table :fields="fields" :items="filtered">
          <template v-slot:cell(sn)="data">
            <div class>{{data.item.id}}</div>
          </template>
           <template v-slot:cell(centre_no)="data">
            <div class ="t-header">{{data.item.centre_no}}</div>
          </template>
           <template v-slot:cell(name_of_school)="data">
            <div class="t-header">{{data.item.name_of_school}}</div>
          </template>
          <template v-slot:cell(entry_figures)="data">
            <div class="t-header">{{data.item.entry_figures}}</div>
          </template>
        </b-table>
      </div>
    </b-row>
    <b-row>
      <b-col>
        <div class="navigation">
          <b-button type="button" class="prev_button mr-3" @click="prev" v-if="prev_page">Prev</b-button>
          <b-button class="next_button" @click="next" v-if="next_page">Next</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      all:false,
      search: "",
      filter: "",
      filters: "",
      row_number: 1,
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      total: 0,
      items: [],

      fields: [
        "sn",
        { key: "centre_no", sortable: true },
        { key: "name_of_school", sortable: true },
        "entry_figures",
        "type",
      ],
    };
  },
  computed: {
    filtered() {
      return this.items.filter((i) => {
        if (this.filter == "name of school") {
          return i.name_of_school
            .toLowerCase()
            .includes(this.search.toLowerCase());
        }
        if (this.filter == "centre no") {
          return i.centre_no.toLowerCase().includes(this.search.toLowerCase()) ;
        }
        if (this.filters !== "") {
          return i.type.toLowerCase() == this.filters.toLowerCase();
        }
        if (this.search == "" && this.filters == "") {
          return i;
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
  watch: {
    all:'getAllData'
  },
  methods: {
    getData() {
      axios
        .get("/api/wassce-private-school")
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data.data;
            this.total = res.data.total;
            this.row_number = res.data.per_page;
            this.last_page = res.data.last_page_url;
            this.first_page = res.data.first_page_url;
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
          }
        })
        .catch();
    },
    getAllData(){
      if (this.all) {
         axios
        .get("/api/all-wassce-private-school")
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data;
             this.next_page = '';
            this.prev_page = '';
            this.row_number = this.items.length
           
          }
        })
        .catch();
      }else{
        this.getData()
      }

        
    },
    firstPage() {
      axios.get(this.first_page).then((res) => {
        this.next_page = res.data.next_page_url;
        this.prev_page = res.data.prev_page_url;
        this.current_page = res.data.current_page;
        this.items = res.data.data;
      });
    },
    lastPage() {
      axios.get(this.last_page).then((res) => {
        this.next_page = res.data.next_page_url;
        this.prev_page = res.data.prev_page_url;
        this.current_page = res.data.current_page;
        this.items = res.data.data;
      });
    },
    next() {
      if (this.next_page) {
        axios.get(this.next_page).then((res) => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.items = res.data.data;
        });
      }
    },
    prev() {
      if (this.prev_page) {
        axios.get(this.prev_page).then((res) => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.items = res.data.data;
        });
      }
    },
  },
};
</script>
<style scoped>
.container-fluid {
  padding: 40px 30px;
}
h5 {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .wit {
    min-width: 150px;
  }
  .container-fluid {
    padding: 40px 0;
  }
  .fs14 {
    font-size: 14px;
  }
  .t-header{
    min-width:150px;
  }
  .p0 {
    padding: 0 !important;
    margin: 0 !important;
    text-align: center;
  }
}

@media (max-width: 425px) {
  .wit {
    min-width: 150px;
  }
  .container-fluid {
    padding: 40px 15px;
  }
  .fs14 {
    font-size: 12px;
  }
  /* .mb-1 {
    margin-bottom: 0 !important;
  } */
  .t-header{
    min-width:150px;
  }
}
</style>