<template>
  <div>
    
    <b-container v-if="type=='option'">
      <h4 class="text-center mb-5">Form Settings</h4>
      <b-form>
        <b-form-group>
          <h5>General Information</h5>
          <b-form-row>
            <b-col class="mb-3" cols="6">
              <label for>Form Title</label>
              <b-form-input placeholder="title" v-model="options.title"></b-form-input>
            </b-col>
            <b-col class="mb-3" cols="6">
              <label for>Application Group</label>
              <b-form-select v-model="options.app_group">
                <b-form-select-option value disabled>Select Group</b-form-select-option>
                <b-form-select-option
                  :value="item.title"
                  v-for="(item,idx) in appGroups"
                  :key="idx"
                >{{item.title}}</b-form-select-option>
              </b-form-select>
            </b-col>
            <b-col class="mb-3" cols="12">
              <label for>Form Description</label>
              <b-form-textarea v-model="options.description"></b-form-textarea>
            </b-col>
          </b-form-row>
        </b-form-group>

        <b-form-group>
          <h5>Form Phase</h5>
          <b-form-row>
            <b-form-input
              type="number"
              v-model="options.phase"
              placeholder="Phase number"
              class="w-25"
            ></b-form-input>
            <!-- <b-col  class="mb-3" cols="12">
              <label for>Title</label>
              <b-form-input v-model="options.step.title"></b-form-input>
            </b-col>
            <b-col  class="mb-3" cols="6">
              <label for>Purpose</label>
              <b-form-textarea v-model="options.step.purpose"></b-form-textarea>
            </b-col>
            <b-col  class="mb-3" cols="6">
              <label for>Description</label>
              <b-form-textarea v-model="options.step.description"></b-form-textarea>
            </b-col>
            <b-col cols="12">
              <label for>Feedback/Confirmation Message</label>
              <b-form-textarea v-model="options.step.feedback"></b-form-textarea>
            </b-col>-->
          </b-form-row>
        </b-form-group>
        <b-form-group>
          <h5>Feedback</h5>
          <b-form-row>
            <b-col class="mb-3" cols="12">
              <b-form-radio v-model="options.feedback.type" value="manual">Manual</b-form-radio>
              <b-form-radio v-model="options.feedback.type" value="automatic">Automatic</b-form-radio>
            </b-col>
            <b-col class="mb-3" cols="12">
              <label for>Title</label>
              <b-form-input v-model="options.feedback.title"></b-form-input>
            </b-col>
            <b-col class="mb-3" cols="6">
              <label for>Text</label>
              <b-form-textarea v-model="options.feedback.text"></b-form-textarea>
            </b-col>
            <b-col class="mb-3" cols="6">
              <label for>Purpose</label>
              <b-form-textarea v-model="options.feedback.purpose"></b-form-textarea>
            </b-col>
          </b-form-row>
        </b-form-group>

        <b-form-group>
          <h5>Signature</h5>
          <b-form-row>
            <b-form-group>
              <b-form-radio :value="true" v-model="options.signature">Yes</b-form-radio>
              <b-form-radio :value="false" v-model="options.signature">No</b-form-radio>
            </b-form-group>
          </b-form-row>
        </b-form-group>
        <b-form-group>
          <h5>Payment</h5>
          <b-form-row>
            <b-form-group>
              <b-form-radio :value="true" v-model="options.payment">Yes</b-form-radio>
              <b-form-radio :value="false" v-model="options.payment">No</b-form-radio>
            </b-form-group>
          </b-form-row>
          <b-form-row v-if="options.payment">
            <b-form-input placeholder="Price" v-model="options.price"></b-form-input>
          </b-form-row>
        </b-form-group>

        <b-button variant="darkgreen" @click="handleType('create')">Save Settings</b-button>
      </b-form>
    </b-container>

   <b-container class="p-0">
        <b-row class="p-3" v-if="type=='list'">
      <b-button variant="darkgreen" @click="handleType('option')">Create Form</b-button>
      
    </b-row>
   </b-container>
    <Creation v-if="type=='create'" :options="options" />

    <List v-if="type=='list'" :options="options" />
  </div>
</template>

<script>
import Creation from "./create";
import List from "./list";
export default {
  data() {
    return {
      options: {
        title: "",
        description: "",
        app_group: "",
        step: {
          title: "",
          description: "",
          purpose: "",
          feedback: "",
        },
        phase: "",
        feedback: {
          type: "",
          title: "",
          text: "",
          purpose: "",
        },
        signature: false,
        payment: false,
        price: null,
      },
      type: "list",
      appGroups: [],
    };
  },
  components: {
    Creation,
    List,
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
  },
};
</script>

<style scoped lang="scss">



.container {
  padding: 50px 0;
}
.form-group {
  margin-bottom: 24px;
}
</style>