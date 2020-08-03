<template>
  <div>
    <b-container>
      <h4>All Schedules</h4>
      <div class="text-right mb-3">
        <JsonCSV :data="appointments" name="Schedules.csv" :fields="fields">
          <b-button>
            Download Csv
            <i class="fas fa-file-csv"></i>
          </b-button>
        </JsonCSV>
      </div>
      <b-table :items="appointments" :fields="fields" bordered hover>
        <template v-slot:cell(sn)="data">{{data.index+1}}</template>
        <template v-slot:cell(date)="data">{{data.item.date | moment('ddd, MMM D YYYY')}}</template>
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
        "whom_to_see",
        "department",
        "date",
        "time",
        "status",
      ],
      downloadData: [],
    };
  },
  components: {
    JsonCSV,
  },
  mounted() {
    this.getSchedules();
  },
  methods: {
    getSchedules() {
      axios.get("/api/appointment").then((res) => {
        if (res.status == 200) {
          this.appointments = res.data;
          //   this.downloadData = JSON.stringify(this.appointments);
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 50px 20px;
}
td {
  text-transform: capitalize;
}
</style>