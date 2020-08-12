<template>
  <div>
    <b-container>
       
      <b-table :items="items" :fields="fields" bordered>
        <template v-slot:cell(sn)="data">
          <div>{{data.index+1}}</div>
        </template>
        <template v-slot:cell(action)="data">
          <div class="d-flex">
            <div class="mr-4" @click="view(data.item)">view</div>

            <div @click="drop(data.item.id)">drop</div>
          </div>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["sn", "title", "group", "phase", "action"],
      items: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios.get("/api/form-template").then((res) => {
        if (res.status == 200) {
          this.items = res.data;
        }
      });
    },
      drop(id) {
      axios.delete(`/api/form-template/${id}`).then((res) => {
        if (res.status == 200) {
         this.getItems()
         this.$toasted.info('Deleted')
        }
      });
    },
    view(data) {
      const { id, title } = data;
      this.$router.push(`/admin/form/template/${id}`);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 50px 15px;
}
</style>