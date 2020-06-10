<template>
  <div id="main-body">
    <div class="box box_2">
      <div class="mini_box2 mini_first">
        <div class="mini_b d-flex justify-content-center align-items-center shadow-sm bg-white">
          <div class="form-group px-2 text-center">
            <input
              type="text"
              class="form-control mb-2"
              v-model="name"
              aria-describedby="helpId"
              placeholder="Enter lga name"
            />

            <button class="button-blue" @click="addLga">Add</button>
          </div>
        </div>
        <div class="mini_b mini_bb"  v-if="id !==null">
          <div class="mini_c shadow-sm d-flex flex-column justify-content-center align-items-center" >
              <h5 class="mb-3" >{{old_name}}</h5>
            <div class="form-group px-2 text-center">
              <input
                type="text"
                class="form-control mb-2"
                v-model="edit_name"
                aria-describedby="helpId"
                placeholder="Enter lga name"
              />

              <button class="button-blue" @click="update">Update</button>
            </div>
          </div>
          <div class="mini_c shadow-sm"></div>
        </div>
      </div>
      <div class="mini_box2 shadow-sm bg-white p-2">
        <table class="table">
          <thead>
            <tr>
              <th>Lga</th>
              <th class="text-center">Action</th>
              <th>
                <input type="checkbox" v-model="item" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(lga,index) in lgas" :key="index">
              <td scope="row">{{lga.name}}</td>
              <td class="text-center">
                <span class="mr-4 pr-2" @click="editLga(lga.id)">
                  Edit
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </span>
                <span class="pr-2" @click="deleteLga(lga.id)">
                  Drop
                  <i class="fas fa-minus-circle text-danger" aria-hidden="true"></i>
                </span>
              </td>
              <td>
                <input type="checkbox" v-model="items" :value="lga.id" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lgas: [],
      name: "",
      items: [],
      item: false,
      edit_name: "",
      old_name:'',
      id:null
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getLgas();
  },
  methods: {
    selectAll() {
      if (this.item) {
        this.items = [];
        this.lgas.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    getLgas() {
      axios
        .get("/api/show-lgas")
        .then(res => {
          if (res.status == 200) {
            this.lgas = res.data;
          }
        })
        .catch(err => {});
    },

    addLga() {
      let data = {
        lga: this.name
      };
      if (this.name.length !== "") {
        axios.post("/api/create-lga", data).then(res => {
          if (res.status == 201) {
            this.getLgas();
            this.name = "";
            this.$toasted.info("Successful");
            this.showlga = false;
          }
        });
      }
    },
    editLga(id) {
      axios.get(`/api/edit-lga/${id}`).then(res => {
        if (res.status == 200) {
          this.old_name = res.data.name;
          this.id = res.data.id
        }
      });
    },
    update() {
      let data = {
        name: this.edit_name
      };
      if (this.edit_name.length !== "") {
        axios.put(`/api/update-lga/${this.id}`, data).then(res => {
          if (res.status == 200) {
            this.edit_name = '';
            this.old_name = ''
            this.getLgas();
          }
        });
      }
    },
    deleteLga(id) {
      let del = confirm("Are you sure?");
      if (del) {
        if (this.name.length !== "") {
          axios.delete(`/api/delete-lga/${id}`).then(res => {
            if (res.status == 200) {
              this.getLgas();
            }
          });
        }
      }
    }
  }
};
</script>

<style scoped>
#main-body {
  padding: 15px;
  height: 100vh;
  overflow: auto;
  display: grid;
}
.box {
  width: 100%;
}
.box_1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 15px;
}
.mini_box {
  height: 100%;
  background: white;
}
.box_2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}
.mini_box2 {
  height: 95vh;
  max-height: 100vh;
  width: 100%;
  overflow: auto;
}
.mini_first {
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-row-gap: 15px;
}
.mini_b {
}
.mini_bb {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}
.mini_c {
  background: white;
}
</style>