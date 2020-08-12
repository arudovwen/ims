<template>
  <div>

    <b-row>
      <router-link to="/forms">
        <b-button variant="outline-darkgreen" class="m-2 mx-5">Back</b-button>
      </router-link>
    </b-row>
    <b-container v-if="form && options">
      <b-form @submit.prevent="" class="border p-3">
        <legend class="text-center mb-5">{{form.title}}</legend>
        <b-row class="p-4" v-if="!show">
          <b-col cols="4">
            <b-form-group>
              <label for>Full name</label>
              <b-form-input v-model="full_name" type="text" placeholder="Enter name"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="5">
            <b-form-group>
              <label for>Email</label>
              <b-form-input v-model="email" type="email" placeholder="Enter email address"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group>
              <label for>Phone number</label>
              <b-form-input v-model="phone" type="number" max="11" placeholder="Enter phone number"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <section class="text-center" v-if="!show">
          <b-form-row>
            <b-col class="text-center">
              <p v-html="options.description"></p>
            </b-col>
          </b-form-row>
          <b-form-row class="justify-content-center">
            <b-button @click="handleShow">Begin Application</b-button>
          </b-form-row>
        </section>
        <section v-if="show && num < template.length">
          <b-form-row>
            <b-col cols="12">
              <h5>{{template[num].title}}</h5>
              <p v-html="template[num].description"></p>
            </b-col>
          </b-form-row>
          <b-form-row>
            <ol class="w-100">
              <li v-for="(question,idx) in template[num].question" :key="idx">
                <b-col cols="12">
                  <b-form-group v-if="question.answer_format=='text box'">
                    <label for>{{question.title}}</label>
                    <b-form-input
                      type="text"
                      v-model="question.answer"
                      :placeholder="question.placeholder"
                      :max="question.limit"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group v-if="question.answer_format=='lga'">
                    <label for>Lga</label>
                    <b-form-select v-model="question.answer">
                      <b-form-select-option value>Select Lga</b-form-select-option>
                      <b-form-select-option
                        v-for="(item,idx) in lgas"
                        :key="idx"
                        :value="item.name"
                      >{{item.name}}</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group v-if="question.answer_format=='email'">
                    <label for>{{question.title}}</label>
                    <b-form-input
                      type="email"
                      v-model="question.answer"
                      :placeholder="question.placeholder"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group v-if="question.answer_format=='number'">
                    <label for>{{question.title}}</label>
                    <b-form-input
                      type="number"
                      v-model="question.answer"
                      :placeholder="question.placeholder"
                      :max="question.limit"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group v-if="question.answer_format=='long text'">
                    <label for>{{question.title}}</label>
                    <b-form-textarea :placeholder="question.placeholder" v-model="question.answer"></b-form-textarea>
                  </b-form-group>

                  <b-form-group v-if="question.answer_format=='multi choice'">
                    <label for>{{question.title}}</label>

                    <b-form-checkbox
                      v-model="question.answers"
                      v-for="(opt,id) in question.options"
                      :key="id"
                      :value="opt.name"
                    >{{opt.name}}</b-form-checkbox>
                  </b-form-group>

                  <b-form-group v-if="question.answer_format=='single choice'">
                    <label for>{{question.title}}</label>
                    <b-form-radio
                      v-model="question.answer"
                      v-for="(opt,id) in question.options"
                      :key="id"
                      :value="opt.name"
                    >{{opt.name}}</b-form-radio>
                  </b-form-group>

                  <b-form-group v-if="question.answer_format=='date'">
                    <label for>{{question.title}}</label>
                    <br />
                    <b-calendar v-model="question.answer"></b-calendar>
                  </b-form-group>

                  <b-form-group v-if="question.answer_format=='time'">
                    <label for>{{question.title}}</label>
                    <br />
                    <b-time v-model="question.answer"></b-time>
                  </b-form-group>

                  <b-form-group v-if="question.answer_format=='multi text'">
                    <label class="mb-3" for>{{question.title}}</label>
                    <div v-for="(item,i) in question.answers" :key="i">
                      <b-form-input v-model="item.answer"></b-form-input>
                    </div>

                    <div>
                      <b-button @click="addMore(idx)" class="mr-3">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                      </b-button>
                      <b-button @click="removeMore(idx)" v-if="question.answers.length> 1">
                        <i class="fa fa-minus-circle" aria-hidden="true"></i>
                      </b-button>
                    </div>
                  </b-form-group>
                </b-col>

                <b-col>
                  <div v-if="question.tools.length">
                    <b-form-row v-if="question.tools.includes('table')">
                      <b-col cols="12">
                        <b-button class="mb-2" @click="addRow(idx)">Add row</b-button>  <b-button class="mb-2" @click="removeRow(idx)" v-if="question.items.length>1">Remove row</b-button>
                        <b-table :fields="Object.keys(question.items[0])" :items="question.items" bordered>
                           <template v-for="(field,ide) in question.fields" v-slot:[`cell(${field})`]="data" >
                           
                              <b-form-input placeholder="type" v-model="data.item[field]" ></b-form-input>
                           </template>
                        </b-table>
                         
                       
                      </b-col>
                    </b-form-row>

                    <b-form-row
                      v-if="question.tools.includes('docs') || question.tools.includes('media')"
                    >
                      <b-col cols="12">
                        <label class="mb-3" for>{{question.title}}</label>
                        <small v-html="question.tools_description"></small>
                        <div class="my-2">
                          <b-button @click="addDoc(idx)" class="mr-3">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                          </b-button>
                          <b-button v-if="question.documents.length>1" @click="removeDoc(idx)">
                            <i class="fa fa-times-circle" aria-hidden="true"></i>
                          </b-button>
                        </div>
                        <b-form-row class="w-100">
                          <b-col
                            cols="3"
                            class="p-2"
                            v-for="(doc,ind) in question.documents"
                            :key="ind"
                          >
                            <div class="border upload">
                              <b-form-input v-model="doc.name" type="text" placeholder="File name"></b-form-input>
                              <Upload
                                :index="idx"
                                :id="ind"
                                :label="doc.name"
                                @getUploadDetails="getUploadDetails"
                              />
                              <b-img
                                v-if="question.tools.includes('media')"
                                rounded
                                fluid
                                width="150px"
                                :src="doc.file"
                              ></b-img>
                            </div>
                          </b-col>
                        </b-form-row>
                      </b-col>
                    </b-form-row>
                  </div>
                </b-col>
              </li>
            </ol>
          </b-form-row>
        </section>
        <div v-if="options.signature">
          <section v-if="show && num >= template.length">
            <b-row>
              <b-col cols="12">
                <h5>SIGNATURE</h5>
                <p>
                  <strong>I certify that the information submitted in this application is true and correct to the best of my knowledge.</strong>
                </p>

                <p>I further understand that any false statements may result in denial or revocation of the approval.</p>

                <p>Full Name :</p>
                <p>Date :</p>
              </b-col>
            </b-row>
            <hr />
            <b-row v-if="options.payment">
              <b-col cols="12">
                <p>
                  <strong>Price: &#8358; {{options.price}}.00</strong>
                </p>
              </b-col>
            </b-row>
          </section>
        </div>
        <b-row class="justify-content-between px-3 my-3" v-if="show">
          <b-button @click="prev">Previous</b-button>
          <b-button v-if="num < template.length" @click="next">Next</b-button>

          <div v-if="options.payment && num >= template.length">
            <Payment  />
          </div>
          <div v-if="!options.payment && num >= template.length">
            <b-button type="submit">Submit</b-button>
          </div>
        </b-row>
      </b-form>
    </b-container>
    <b-modal id="modal-1" size="lg" hide-footer v-if="options.feedback">
      <div class="text-center" v-if="options.feedback">
        <h5>{{options.feedback.title}}</h5>
        <p>{{options.feedback.text}}</p>
        <b-button variant="outline-darkgreen" @click="closeForm">Close</b-button>
      </div>
    </b-modal>

    <b-modal id="modal-2" size="lg" hide-footer >
      <div class="text-center" >
        <h5>Application Error <i class="fa fa-exclamation-circle" aria-hidden="true"></i> </h5>
        <p>You previous application needs to be approved before you can proceed</p>
        <b-button variant="outline-darkgreen" @click="closeForm">Close</b-button>
      </div>
    </b-modal>
   
  </div>
</template>

<script>
import Upload from "../../upload";

import Payment from "../../paystack";
export default {
  data() {
    return {
      email: "",
      phone: null,
      full_name: "",
      form: {},
      num: 0,
      template: [],
      options: {},
      show: false,
      show_feedback: false,
    };
  },
  components: {
    Upload,
    Payment,
  },
  mounted() {
    this.getItems(this.$route.params.id);
    this.getLga();
  },
  methods: {
    closeForm() {
      this.$router.push("/forms");
    },
   
    getLga() {
      axios.get("/api/show-lgas").then((res) => {
        if (res.status == 200) {
          this.lgas = res.data;
        }
      });
    },
    getUploadDetails(index, id, res) {
      this.template[this.num].question[index].documents[id].file =
        res.secure_url;
    },
    next() {
      this.num++;
    },
    prev() {
      if (this.num !== 0) {
        this.num--;
      }
    },
    handleShow() {
     if (this.email !=='' && this.full_name !== '') {
         let data = {
        group: this.options.app_group,
        full_name: this.full_name,
        email: this.email,
        phone: this.phone,
        phase: this.options.phase,
      };
      axios.post("/api/check-phase", data).then((res) => {
        if (res.status == 200) {
          if (res.data.status == "approved") {
             this.show = !this.show;
          }else{
             this.$bvModal.show("modal-2");
          }
        }
      });
     
     }else{
       this.$toasted.info('Fill all fields')
     }
    },
    getItems(id) {
      axios.get(`/api/form-template/${id}`).then((res) => {
        if (res.status == 200) {
          this.form = res.data;
          this.template = JSON.parse(res.data.template);
          this.options = JSON.parse(res.data.options);
        }
      });
    },
    removeMore(id) {
      this.template[this.num].question[id].answers.pop();
    },
    addMore(id) {
      this.template[this.num].question[id].answers.push({
        answer: "",
      });
    },
    addDoc(id) {
      this.template[this.num].question[id].documents.push({
        name: "",
        file: "",
      });
    },
    removeDoc(id) {
      this.template[this.num].question[id].documents.pop();
    },
    handleObj(){

    },
     addRow(id) {
      
      //  Object.assign(this.obj,  this.template[this.num].question[id].items[0])
      let obj = {}
       this.template[this.num].question[id].fields.forEach((item) => {
       obj[item] = "";
       console.log("addRow -> item", item)
      });
      this.template[this.num].question[id].items.push(obj);

      
    },
    removeRow(id) {
      this.template[this.num].question[id].items.pop();
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 70vh;
  padding: 50px 0;
}
.upload {
  background: #f7f8fa;
}
label {
  font-weight: bold;
}
.border {
  border-radius: 15px;
}
li {
  margin-left: 30px;
}
</style>