<template>
  <div>
    <b-container>
      <b-row class="h-100 justify-content-center align-items-center" v-if="type==''">
        <b-col @click="handleType('group')" class="box shadow">Application Group</b-col>
        <b-col class="box shadow">
          <router-link to="/admin/form" >Forms</router-link>
        </b-col>
        <b-col  class="box shadow"><router-link to="/admin/app/list">Applications</router-link></b-col>
      </b-row>
      <b-row v-if="type=='group'">
        <b-col>
          <b-row>
            <h4 class="mb-4">Application Groups</h4>
          </b-row>

          <b-row class="mb-3">
            <b-col cols="9">
              <b-table :items="appGroups" :fields="appFields"  bordered hover>
                <template v-slot:cell(sn)="data">
                  <div>{{data.index+1}}</div>
                </template>
                <template v-slot:cell(action)="data">
                  <div>Edit</div>
                </template>
              </b-table>
            </b-col>
            <b-col cols="3" class="bg-lightwhite p-2">
              <b-form >
               <div class="text-center"> <strong>New Group</strong></div>
                <b-form-row>
                  <b-col>
                    <b-form-group>
                      <label for>Title</label>
                      <b-form-input placeholder="Title" class="mb-3" v-model="group.title"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group>
                      <label for>Phases</label>
                      <b-form-input
                        placeholder="4"
                        type="number"
                        class="mb-3"
                        v-model="group.phase"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group>
                      <label for>Description</label>
                      <b-form-textarea v-model="group.description"></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group>
                      <label for>Purpose</label>
                      <b-form-textarea v-model="group.purpose"></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group>
                      <b-button @click="addGroup">Create</b-button>
                    </b-form-group>
                  </b-col>
                </b-form-row>
              </b-form>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      type: "",
      appFields: ["sn", "title", "description", "purpose", "phases", "action"],
      appGroups: [],
      group: {
        title: "",
        description: "",
        purpose: "",
        phase: "",
      },
    };
  },
  mounted() {
    this.getGroups();
  },
  methods: {
    handleType(value) {
      this.type = value;
    },
    getGroups() {
      axios.get("/api/app-group").then((res) => {
        if (res.status == 200) {
          this.appGroups = res.data;
        }
      });
    },
    addGroup() {
      axios.post("/api/app-group", this.group).then((res) => {
        if (res.status == 201) {
          this.getGroups();
          this.group = {
            title: "",
            description: "",
            purpose: "",
            phase: "",
          };
        }
      });
    },
  },
};
</script>
<style scoped>
.container {
  padding: 50px 15px;
  height: 100vh;
}
.box{
  height: 200px;
  width: 32%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-lightwhite{
  background:#f7f8fa;
}
</style>