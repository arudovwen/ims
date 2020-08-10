<template>
  <div>
    <b-container fluid v-if="form && options">
      <b-form @submit.prevent="submit" class="border p-3">
        <legend class="text-center mb-5">{{form.name}}</legend>

        <section v-if="num < template.length">
          <b-form-row>
            <b-col cols="12">
              <h5>{{template[num].title}}</h5>
              <p v-html="template[num].description"></p>
            </b-col>
          </b-form-row>
          <b-form-row v-for="(question,idx) in template[num].question" :key="idx">
            <b-col cols="12">
              <b-form-group v-if="question.answer_format=='text box'">
                <label for>{{question.title}}</label>
                <b-form-input
                  readonly
                  type="text"
                  v-model="question.answer"
                  :placeholder="question.placeholder"
                  :max="question.limit"
                ></b-form-input>
              </b-form-group>
              <b-form-group v-if="question.answer_format=='lga'">
                <label for>LGA</label>
                <b-form-select readonly disabled v-model="question.answer">
                  <b-form-select-option value="" disabled>Select Lga</b-form-select-option>
                  <b-form-select-option
                    readonly
                    v-for="(item,idx) in lgas"
                    :key="idx"
                    :value="item.name"
                  >{{item.name}}</b-form-select-option>
                </b-form-select>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='email'">
                <label for>{{question.title}}</label>
                <b-form-input
                  readonly
                  type="email"
                  v-model="question.answer"
                  :placeholder="question.placeholder"
                ></b-form-input>
              </b-form-group>
              <b-form-group v-if="question.answer_format=='number'">
                <label for>{{question.title}}</label>
                <b-form-input
                  readonly
                  type="number"
                  v-model="question.answer"
                  :placeholder="question.placeholder"
                  :max="question.limit"
                ></b-form-input>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='long text'">
                <label for>{{question.title}}</label>
                <b-form-textarea
                  readonly
                  :placeholder="question.placeholder"
                  v-model="question.answer"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='multi choice'">
                <label for>{{question.title}}</label>

                <b-form-checkbox
                  readonly
                  disabled
                  v-model="question.answers"
                  v-for="(opt,id) in question.options"
                  :key="id"
                  :value="opt.name"
                >{{opt.name}}</b-form-checkbox>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='single choice'">
                <label for>{{question.title}}</label>
                <b-form-radio
                  readonly
                  disabled
                  v-model="question.answer"
                  v-for="(opt,id) in question.options"
                  :key="id"
                  :value="opt.name"
                >{{opt.name}}</b-form-radio>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='date'">
                <label for>{{question.title}}</label>
                <br />
                <b-calendar readonly v-model="question.answer"></b-calendar>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='time'">
                <label for>{{question.title}}</label>
                <br />
                <b-time readonly v-model="question.answer"></b-time>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='multi text'">
                <div v-for="(item,i) in question.answers" :key="i">
                  <b-form-input readonly v-model="item.answer"></b-form-input>
                </div>
              </b-form-group>
            </b-col>
          </b-form-row>
          <div v-if="template[num].tools.length">
            <b-form-row v-if="template[num].tools.includes('table')">
              <b-col cols="12">
                <b-table :fields="template[num].fields" :items="template[num].items"></b-table>
              </b-col>
            </b-form-row>

            <b-form-row
              v-if="template[num].tools.includes('docs') || template[num].tools.includes('media')"
            >
              <b-col cols="12">
                <b-form-row>
                  <b-col
                    cols="3"
                    class="border p-2 upload"
                    v-for="(doc,idx) in template[num].documents"
                    :key="idx"
                  >
                    <div>
                      <b-form-input readonly v-model="doc.name" type="text" placeholder="File name"></b-form-input>
                      <Upload :index="num" :id="doc.name" @getUploadDetails="getUploadDetails" />

                      <!-- <div
                        class="form-control"
                        v-if="doc.name !== '' ||doc.name !== null"
                      >File Name: {{doc.name}}</div>-->
                    </div>
                  </b-col>
                </b-form-row>
              </b-col>
            </b-form-row>
          </div>
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
                  <strong>Price: {{options.price}}</strong>
                </p>
                <b-form-row>
                  <b-col cols="1">
                    <label for>
                      <strong>Email:</strong>
                    </label>
                  </b-col>
                  <b-col cols="6">
                    <b-form-input
                      readonly
                      v-model="email"
                      placeholder="example@email.com"
                      type="email"
                    ></b-form-input>
                  </b-col>
                </b-form-row>
              </b-col>
            </b-row>
          </section>
        </div>
        <b-row class="justify-content-between px-3 my-3" >
          <b-button @click="prev">Previous</b-button>
          <b-button v-if="num < template.length" @click="next">Next</b-button>
        </b-row>
      </b-form>
    </b-container>
   
  </div>
</template>

<script>
import Upload from "../../upload";

import Payment from "../../paystack";
export default {
  props: ["id"],
  data() {
    return {
      email: "",
      form: {},
      num: 0,
      template: [],
      options: {},
      show: false,
      lgas: [],
    };
  },
  components: {
    Upload,
    Payment,
  },
  mounted() {
    this.getItems(this.$props.id);
    this.getLga();
  },
  methods: {
    closeForm() {
      this.$router.push("/forms");
    },
    getResponse(res) {
      if (res.status == "success") {
        let data = {
          ref: res.trxref,
          payment: this.options.payment,
          price: this.options.price,
          response: this.template,
          payment_status: res.status,
          phase: this.options.phase,
          name: this.options.title,
          group: this.options.app_group,
        };

        axios.post(`/api/application`, data).then((res) => {
          if (res.status == 201) {
            this.$bvModal.show("modal-1");
          }
        });
      }
    },

    submit() {
      let data = {
        ref: "Non Payment",
        payment: this.options.payment,
        price: "Non Payment",
        response: this.template,
        payment_status: "None",
        phase: this.options.phase,
        name: this.options.title,
        group: this.options.app_group,
      };

      axios.post(`/api/application`, data).then((res) => {
        if (res.status == 201) {
          this.$bvModal.show("modal-1");
        }
      });
    },
    getLga() {
      axios.get("/api/show-lgas").then((res) => {
        if (res.status == 200) {
          this.lgas = res.data;
        }
      });
    },
    getUploadDetails(id, res) {
      this.data.documents[id].file = res.secure_url;
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
      this.show = !this.show;
    },
    getItems(id) {
      axios.get(`/api/application/${id}`).then((res) => {
        if (res.status == 200) {
          this.form = res.data;
          this.template = JSON.parse(res.data.response);
        }
      });
    },
    addMore(id) {
      this.template[this.num].question[id].answers.push({
        answer: "",
      });
    },
    addDoc() {
      this.template[this.num].documents.push({
        name: "",
        file: "",
      });
    },
    removeDoc() {
      this.template[this.num].documents.pop();
    },
  },
};
</script>

<style scoped>
.upload {
  background: #f7f8fa;
}
</style>