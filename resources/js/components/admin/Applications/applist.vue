<template>
  <div >
     
    <b-container>
       <b-col cols="12">
    <div class="text-right" ><router-link to="/admin/forms"><b-button variant="outline-darkgreen">Back</b-button></router-link></div>
        </b-col >
         <h5 class="mb-4">Applications</h5>
      <b-table :items="items" :fields="fields" bordered>
        <template v-slot:cell(sn)="data">
          <div>{{data.index+1}}</div>
        </template>
    
        <template v-slot:cell(action)="data">
          <div class="tab d-flex justify-content-between stat">
              <span class="" @click="view(data.item.id)">View</span>
            <span v-if="data.item.status.toLowerCase()=='pending'">
              <span class="mr-4 cpointer" @click="handleStatus(data.item.id,'approved')">
                Approve
                <i class="fa fa-check text-success" aria-hidden="true"></i>
              </span>
              <span @click="handleStatus(data.item.id,'declined')" class="cpointer">
                Decline
                <i class="fa fa-times text-danger" aria-hidden="true"></i>
              </span>
            </span>
          </div>
        </template>
      
      </b-table>
    </b-container>

   <b-modal id="modal-1" size="lg"  hide-footer >
   <Review  :id="id"/>
  </b-modal>
  </div>
</template>

<script>
import Review from './template'
export default {
  data() {
    return {
      fields: ["sn","full_name",'phone', "group", "phase", "name", "price", "status", "action"],
      items: [],
      id:null
    };
  },
  components:{
  Review
  },
  mounted() {
    this.getItems();
  },
  methods: {
      handleStatus(id,stat){
     let data = {
       status:stat
     }
     axios.put(`/api/application/${id}`,data).then(res=>{
      if (res.status==200) {
         this.getItems()
      }
     })
    },
    getItems() {
      axios.get("/api/application").then((res) => {
        if (res.status == 200) {
          this.items = res.data;
        }
      });
    },
    view(id) {
        this.id = id
        this.$bvModal.show('modal-1')
    //   const { id, title } = data;
    //   this.$router.push(`/form/${id}/${title.replace(/ /g, "-")}`);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 50px 15px;
}
</style>