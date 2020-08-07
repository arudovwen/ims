<template>
  <div>
    <b-container fluid>
      <h4 class="mb-4">All Appointments</h4>
      <div class="d-flex justify-content-between mb-3">
        <!-- <b-form-select v-model="filter" class="w-25">
          <b-form-select-option value>Filter</b-form-select-option>
          <b-form-select-option value="commissioner">Commissioner</b-form-select-option>
          <b-form-select-option
            v-for="(item,idx) in depts"
            :key="idx"
            :value="item.name"
          >{{item.name}}</b-form-select-option>
        </b-form-select> -->
        <JsonCSV :data="appointments" name="Schedules.csv" :fields="fields">
          <b-button>
            Export Csv
            <i class="fas fa-file-csv"></i>
          </b-button>
        </JsonCSV>
      </div>
      <b-table responsive :items="appointments" :fields="fields" bordered hover>
        <template v-slot:cell(sn)="data">{{data.index+1}}</template>
        <template v-slot:cell(date)="data">{{data.item.date | moment('ddd, MMM D YYYY')}}</template>

        <template v-slot:cell(reason_for_visit)="data">
          <div class="tab">{{data.item.reason_for_visit }}</div>
        </template>
    
        <template v-slot:cell(name)="data">
          <div class="tab name">{{data.item.name }}</div>
        </template>
 
        <template v-slot:cell(organization)="data">
          <div class="tab">{{data.item.organization?data.item.organization:'-' }}</div>
        </template>

         <template v-slot:cell(status)="data">
          <div class="tab d-flex stat"> <span v-if="data.item.status.toLowerCase()=='pending'"><span class="mr-4 cpointer" @click="handleStatus(data.item.id,'accepted')">Accept <i class="fa fa-check text-success" aria-hidden="true"></i></span> <span @click="handleStatus(data.item.id,'declined')" class="cpointer">Decline <i class="fa fa-times text-danger" aria-hidden="true"></i></span></span>
          
          <span v-else>{{data.item.status}}</span></div>
        </template>
      
      </b-table>
    </b-container>
  </div>
</template>
<script>
import JsonCSV from "vue-json-csv";
export default {
  data() {
    return {
      appointments: [],
      fields: [
        "sn",
        "name",
        "phone_no",
        "organization",
        "type",
        "reason_for_visit",
        "date",
        "time",
        "status",
      ],
      downloadData: [],
      filter: "",
      depts: [],
    };
  },
  components: {
    JsonCSV,
  },
  mounted() {
    this.getSchedules();
    this.getDepts();
  },
  computed: {
    // sorted() {
    //   return this.appointments.filter((item) => {
    //     if (this.filter == "") {
    //       return item;
    //     }
    //     return item.department.toLowerCase() == this.filter.toLowerCase();
    //   });
    // },
  },
  methods: {
    handleStatus(id,stat){
     let data = {
       status:stat
     }
     axios.put(`/api/appointment/${id}`,data).then(res=>{
      if (res.status==200) {
         this.getSchedules()
      }
     })
    },
    getDepts() {
      axios.get("/api/department").then((res) => {
        if (res.status == 200) {
          this.depts = res.data;
        }
      });
    },
    getSchedules() {
      axios.get("/api/appointment").then((res) => {
        if (res.status == 200) {
          this.appointments = res.data;
        }
      });
    },
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 50px 15px;
}
td {
  text-transform: capitalize;
}
.stat{
    text-transform: capitalize;
}

@media (max-width: 425px) {
  .form {
    padding: 15px;
  }
  .tab {
    min-width: 150px;
  }
  .name {
    min-width: 150px;
  }
}
</style>