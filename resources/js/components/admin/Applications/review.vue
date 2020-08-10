<template>
  <div>
    <b-container v-if="form">
      <b-form>
        <legend class="text-center mb-5">{{options.title}}</legend>
       
        <section v-if=" num < form.length">
          <b-form-row>
            <b-col cols="12">
              <h5>{{form[num].title}}</h5>
              <p>{{form[num].description}}</p>
            </b-col>
          </b-form-row>
          <b-form-row v-for="(question,idx) in form[num].question" :key="idx">
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
              <!-- <b-form-group >
                            <label for=""></label>
                            <b-form-input type="tel" placeholder=""></b-form-input>
              </b-form-group>-->
          <b-form-group v-if="question.answer_format=='lga'">
                  <label for>LGA</label>
                  <b-form-select   v-model="question.answer">
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
                <div v-for="(item,i) in question.answers" :key="i">
                  <b-form-input v-model="item.answer"></b-form-input>
                </div>

               
              </b-form-group>
            </b-col>
          </b-form-row>
          <div v-if="form[num].tools.length">
            <b-form-row v-if="form[num].tools.includes('table')">
              <b-col cols="12">
                <b-table :fields="form[num].fields" :items="form[num].items"></b-table>
              </b-col>
            </b-form-row>

            <b-form-row
              v-if="form[num].tools.includes('docs') || form[num].tools.includes('media')"
            >
              <b-col cols="12">
               
                <b-form-row>
                  <b-col
                    cols="3"
                    class="border p-2"
                    v-for="(doc,idx) in form[num].documents"
                    :key="idx"
                  >
                    <div>
                      <b-form-input v-model="doc.name" type="text" placeholder="File name"></b-form-input>
                      <Upload :index="num" :id="doc.name" @getUploadDetails="getUploadDetails" />

                      <div
                        class="form-control"
                        v-if="doc.name !== '' ||doc.name !== null"
                      >File Name: {{doc.name}}</div>
                    </div>
                  </b-col>
                </b-form-row>
              </b-col>
            </b-form-row>
          </div>
        </section>
      
      <b-row class="justify-content-between w-100 my-3" >
        <b-button @click="prev">Previous</b-button>
        <b-button v-if="num <form.length +1" @click="next">Next</b-button>
        <b-button v-if="num > form.length" type="submit">Continue to payment</b-button>
      </b-row>
    
      </b-form>

    </b-container>
  </div>
</template>

<script>
import Upload from "../../upload";

export default {
  props:['form','options'],
  data() {
    return {
      lgas:[],
      num: 0,
      show: false,
    };
  },
  components: {
    Upload,
  },
 mounted() {
   this.getLga()
 },
  methods: {
     getLga() {
      axios.get("/api/show-lgas").then((res) => {
        if (res.status == 200) {
          this.lgas = res.data;
        }
      });
    },
     handleShow() {
      this.show = !this.show;
    },
    next() {
      this.num++;
    },
    prev() {
      if (this.num !== 0) {
        this.num--;
      }
    },
  
  },
};
</script>

<style scoped>
</style>