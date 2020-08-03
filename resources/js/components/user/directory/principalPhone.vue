<template>
  <b-container fluid>
    <b-row class="justify-content-between align-items-center mb-4">
      <b-col cols="12" sm="8">
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
      <b-col cols="12" sm="4">
        <b-form-row class="align-items-center w-100">
          <div class="d-flex justify-content-center align-items-center mb-3 w-100">
            <b-form-checkbox v-model="all" class="pr-3 fs14">Show all</b-form-checkbox>
            <div class="d-flex justify-content-center align-items-center ">
              <label class="mr-2 fs14 mb-1">Search by:</label>
               <b-form-radio
              v-model="filter"
              value="name"
              name="name"
              label="Name"
              class="mr-2 fs14"
            >Name</b-form-radio>

            <b-form-radio
              v-model="filter"
              value="present posting"
              name="present posting"
              label="Present Possting"
              class="mr-3 fs14"
            >Present Posting</b-form-radio>
            </div>

           
          </div>
          <b-form-input :placeholder="'Search by '+ filter" v-model="search" class="fs14"></b-form-input>
        </b-form-row>
      </b-col>
    </b-row>
    <b-row>
      <b-table responsive :fields="fields" :items="filtered">
        <template v-slot:cell(sn)="data">{{data.item.id}}</template>
        <template v-slot:cell(remarks)="data">{{data.item.remarks == ''?'-':data.item.remarks}}</template>
        <template v-slot:cell(name)="data">
          <div class="t-header">{{data.item.name}}</div>
        </template>
        <template v-slot:cell(present_posting)="data">
          <div class="t-header">{{data.item.present_posting}}</div>
        </template>
      </b-table>
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
       all: false,
      search: "",
      filter: "",
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
        { key: "name", sortable: true },
        { key: "present_posting", sortable: true },
        "sect",
        "lga",
        { key: "zone", sortable: true },
        "phone_no",
        "remarks",
      ],
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    all: "getAllData",
  },
   computed: {
      filtered() {
      return this.items.filter((i) => {
        if (this.filter == "name") {
          return i.name.toLowerCase().includes(this.search.toLowerCase());
        } else {
          return i.present_posting
            .toLowerCase()
            .includes(this.search.toLowerCase());
        }
      });
    },
   },
  methods: {
    getAllData() {
      if (this.all) {
        axios
          .get("/api/all-principal-phone")
          .then((res) => {
            if (res.status == 200) {
              this.items = res.data;
              this.next_page = "";
              this.prev_page = "";
              this.row_number = this.items.length;
            }
          })
          .catch();
      } else {
        this.getData();
      }
    },
  
    getData() {
      axios
        .get("/api/principal-phone")
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
  .p0 {
    padding: 0 !important;
    margin: 0 !important;
    text-align: center;
  }
  .t-header {
    min-width: 150px;
  }
}

@media (max-width: 425px) {
  .wit {
    min-width: 150px;
  }
  .container-fluid {
    padding: 40px 10px;
  }
  .fs14 {
    font-size: 12px;
  }
  /* .mb-1 {
    margin-bottom: 0 !important;
  } */
}
</style>