<template>
  <b-container fluid>
    <b-row class="justify-content-between align-items-center mb-4">
      <b-col>
        <span class="mr-4">Current page:{{current_page}}</span>
        <span class="mr-4">Row per page :{{row_number}}</span>
        <span>Total No : {{total}}</span>
      </b-col>
      <b-col>
        <b-form-group>
          <b-form-select v-model="filter"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <b-form-input placeholder="search" v-model="search"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-table :fields="fields"></b-table>
    </b-row>
    <b-row>
      <b-col>
          <div class="navigation" >
            <b-button type="button" class="prev_button" @click="prev" v-if="prev_page">
              <i class="fa fa-arrow-circle-left mc1 prev" aria-hidden="true"></i> Prev
            </b-button>
            <b-button class="next_button" @click="next" v-if="next_page">
              Next
              <i class="fa fa-arrow-circle-right mc1 next" aria-hidden="true"></i>
            </b-button>
          </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      filter:'',
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
        { key: "name_of_proprietor", sortable: true },
        { key: "location", sortable: true },
        "year_of_approval",
        "lga",
        "phone_no",
      ],
    };
  },
  mounted() {},
  methods: {
    getData() {
      axios
        .get('/api/approved-private-school')
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
.container-fluid{
  padding: 40px 30px;
   width: 90%;
  margin: 0 auto;
}
</style>