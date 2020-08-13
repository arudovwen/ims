<template>
  <div class="body">
    <b-form @submit.prevent="submit">
      <b-container>
        <b-row class="py-3 justify-content-end">
          <b-button class="mr-3" variant="outline-darkgreen" pill v-b-modal.modal-1>Review</b-button>
          <b-button type="submit" variant="darkgreen" pill>Publish</b-button>
        </b-row>
        <b-row class="py-3">
          <b-button @click="addSection" class="mr-3">Add section</b-button>
        </b-row>
        <section v-for="(section,index) in form" :key="index" class="border p-2 mb-2">
          <div class="py-2 d-flex justify-content-between">
            <h5>{{section.title==''?'Section':section.title}}</h5>

            <div>
              <span
                @click="hideSection(index)"
                class="mr-2 cpointer"
              >{{opened.includes(index)?'Hide':'Show'}}</span>

              <span @click="removeSection(index)">
                <i class="fa fa-times-circle cpointer" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <div v-if="opened.includes(index)" class="m-4">
            <b-row class="mb-5 border-bottom py-3">
              <b-col cols="9">
                <b-form-group>
                  <label for="section">Section Title</label>
                  <b-form-input label="section" v-model="section.title" placeholder="Enter title"></b-form-input>
                </b-form-group>
                <b-form-group>
                  <label for="section">Section Description</label>
                  <app-editor
                    v-model="section.description"
                    apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
                    :init="{
                         selector: 'textarea',
                            toolbar_mode: 'floating',
                            plugins: 'advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ',
                            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table',
                            image_title: true,
                            height: 200,
                            file_picker_types: 'image',
                            automatic_uploads:false,
                            relative_urls:false,
                           convert_urls:false,
                           images_upload_handler: function (blobInfo, success, failure) {
                                 upload_handler( blobInfo, success, failure)
                           },
                            file_picker_callback:function(callback, value, meta) {
                                  loadFile(callback, value,meta)

                        },
                        images_dataimg_filter: function(img) {
                            return img.hasAttribute('internal-blob');
                            }
                      }"
                    class="form-control"
                  ></app-editor>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" class="p-0">
                <h5>Questions</h5>
              </b-col>
            </b-row>
            <b-row class="py-3">
              <b-button @click="addQuestion(index)" class="mr-3">
                <i class="fas fa-plus-circle" aria-hidden="true"></i>
              </b-button>
              <b-button @click="removeQuestion(index)">
                <i class="fas fa-times-circle" aria-hidden="true"></i>
              </b-button>
            </b-row>
            <b-row v-for="(question,idx) in section.question" :key="idx" class="border p-2">
              <b-col cols="12" class="d-flex justify-content-between">
                <div v-if="!openedQuestion.includes(idx)">{{idx+1}} {{question.title}}</div>
                <div @click="toggleQuestion(idx)" class="ml-auto">
                  <i class="fa fa-minus-circle" aria-hidden="true"></i>
                </div>
              </b-col>
              <div v-if="openedQuestion.includes(idx)" class="d-flex w-100">
                <b-col cols="3">
                  <b-form-row>
                    <b-col cols="12">
                      <b-form-group>
                        <label for>Type Question</label>
                        <b-textarea placeholder="Question" v-model="question.title"></b-textarea>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group>
                        <label for>Question guide (Optional)</label>
                        <b-form-input placeholder="Question guide" v-model="question.guide"></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-form-row>
                </b-col>
                <b-col cols="3">
                  <b-form-group>
                    <label for>Answer Format</label>
                    <b-form-select v-model="question.answer_format">
                      <b-form-select-option value>Select Format</b-form-select-option>
                      <b-form-select-option value="multi choice">Multi Choice</b-form-select-option>
                      <b-form-select-option value="single choice">Single Choice</b-form-select-option>
                      <b-form-select-option value="text box">Text box</b-form-select-option>
                      <b-form-select-option value="long text">Long Text</b-form-select-option>
                      <b-form-select-option value="number">Number</b-form-select-option>
                      <b-form-select-option value="multi text">Multi Text</b-form-select-option>
                      <b-form-select-option value="date">Date</b-form-select-option>
                      <b-form-select-option value="time">Time</b-form-select-option>
                      <b-form-select-option value="email">Email</b-form-select-option>
                      <b-form-select-option value="lga">Lga</b-form-select-option>
                    </b-form-select>
                  </b-form-group>
                  <!-- multi choice options  -->
                  <b-form-group
                    v-if="question.answer_format=='text box' || question.answer_format=='number'"
                  >
                    <label for>Placeholder value</label>
                    <b-form-input placeholder="Placeholder value" v-model="question.placeholder"></b-form-input>
                  </b-form-group>
                  <div
                    v-if="question.answer_format=='text box' || question.answer_format=='number'"
                  >
                    <b-form-input
                      type="number"
                      placeholder="Character limit"
                      v-model="question.limit"
                    ></b-form-input>
                  </div>
                  <div
                    v-if="question.answer_format=='multi choice' || question.answer_format=='single choice'"
                  >
                    <div v-for="(option,idxx) in question.options" :key="idxx">
                      <b-form-input placeholder="Options" v-model="option.name"></b-form-input>
                    </div>
                    <b-row class="p-3">
                      <b-button @click="addOption(index,idx)" class="mr-3">Add</b-button>
                      <b-button @click="removeOption(index,idx)">Remove</b-button>
                    </b-row>
                  </div>
                </b-col>
                <b-col cols="6">
                  <label>Select Tool</label>
                  <div role="tablist">
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle="idx.toString()" variant="info">Tools</b-button>
                      </b-card-header>
                      <b-collapse :id="idx.toString()" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-row>
                            <b-col cols="12">
                              <b-form-group>
                                <b-form-checkbox v-model="question.tools" value="table">Table</b-form-checkbox>

                                <b-form-checkbox v-model="question.tools" value="docs">Document</b-form-checkbox>
                                <b-form-checkbox v-model="question.tools" value=" media">Media</b-form-checkbox>
                              </b-form-group>
                              <div v-if="question.tools.includes('table')">
                                <b-input-group>
                                  <b-form-input placeholder="Table field" v-model="field"></b-form-input>

                                  <b-input-group-append>
                                    <b-button @click="addField(field,index,idx)" class="mr-3">
                                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>

                                <b-form-group class="p-2 py-3">
                                  <b-row>
                                    <b-col
                                      cols="3"
                                      class="border p-2 text-center"
                                      v-for="(field,idxxx) in question.fields"
                                      :key="idxxx"
                                    >
                                      {{field}}
                                      <i
                                        class="fa fa-times-circle"
                                        @click="removeField(index,idx,idxxx)"
                                        aria-hidden="true"
                                      ></i>
                                    </b-col>
                                  </b-row>
                                </b-form-group>

                                <b-row class="p-3">
                                  <b-button class @click="handleTable(index,idx)">Submit fields</b-button>
                                </b-row>
                              </div>
                            </b-col>

                            <b-col cols="12">
                              <b-form-group>
                                <label for>Tool Description</label>
                                <app-editor
                                  v-model="question.tools_description"
                                  apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
                                  :init="{
                             selector: 'textarea',
                            toolbar_mode: 'floating',
                            plugins: 'advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ',
                            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table',
                            image_title: true,
                            height: 200,
                            file_picker_types: 'image',
                            automatic_uploads:false,
                            relative_urls:false,
                           convert_urls:false,
                           images_upload_handler: function (blobInfo, success, failure) {
                                 upload_handler( blobInfo, success, failure)
                           },
                            file_picker_callback:function(callback, value, meta) {
                                  loadFile(callback, value,meta)

                        },
                        images_dataimg_filter: function(img) {
                            return img.hasAttribute('internal-blob');
                            }
                      }"
                                  class="form-control"
                                ></app-editor>
                              </b-form-group>
                            </b-col>
                          </b-row>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-col>
              </div>
            </b-row>
          </div>
        </section>
      </b-container>
    </b-form>

    <div>
      <b-modal id="modal-1" title="Review" size="lg" hide-footer>
        <Review :options="options" :form="form" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import Review from "./review";
import Editor from "@tinymce/tinymce-vue";
export default {
  props: ["options"],
  data() {
    return {
      obj: {},
      field: "",
      busy: true,
      opened: [],
      openedQuestion: [],
      form: [
        {
          title: "",
          description: "",

          question: [
            {
              title: "",
              guide: "",
              answer_format: "",
              answer: "",
              answers: [{ answer: "" }],
              limit: "",
              placeholder: "",

              options: [
                {
                  name: "",
                },
              ],
              tools: [],
              tools_description: "",
              fields: [],
              items: [],
              documents: [
                {
                  name: "",
                  file: "",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    processUpload(file) {
      let that = this;
      this.start = true;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      var cloudName = this.cloudinary.cloudName;
      var upload_preset = this.cloudinary.uploadPreset;
      formData.append("file", file);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset); // REQUIRED
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/" + cloudName + "/upload"
      );
      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          that.progress = Math.round((e.loaded / e.total) * 100) + "%";
        }
      };
      xhr.upload.onloadstart = function (e) {
        this.progress = "Starting...";
      };
      xhr.upload.onloadend = function (e) {
        this.progress = "Completing..";
      };
      xhr.onload = (progressEvent) => {
        if (xhr.status === 200) {
          // Success! You probably want to save the URL somewhere
          this.progress = "Completed";
          setTimeout(() => {
            this.start = false;
          }, 1000);
          var response = JSON.parse(xhr.response);
          this.uploadedFileUrl = response.secure_url; // https address of uploaded file
          this.post.coverImage = response.secure_url;
        } else {
          this.start = false;
          alert("Upload failed. Please try again.");
        }
      };
      xhr.send(formData);
    },
    upload_handler(blobInfo, success, failure) {
      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", "/api/image-upload");
      xhr.onload = function () {
        var json;

        if (xhr.status != 200) {
          failure("HTTP Error: " + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != "string") {
          failure("Invalid JSON: " + xhr.responseText);
          return;
        }
        success(json.location);
      };
      formData = new FormData();
      formData.append("file", blobInfo.blob());
      xhr.send(formData);
    },
    loadFile(cb, value, mt) {
      var input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.onchange = function () {
        var file = this.files[0];

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          var id = "blobid" + new Date().getTime();
          var blobCache = tinymce.activeEditor.editorUpload.blobCache;
          var base64 = reader.result.split(",")[1];
          var blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);
          cb(blobInfo.blobUri(), { title: file.name });
        };
      };
      input.click();
    },
    submit() {
      let data = {
        title: this.$props.options.title,
        group: this.$props.options.app_group,
        phase: this.$props.options.phase,
        options: this.$props.options,
        template: this.form,
      };
      axios.post("/api/form-template", data).then((res) => {
        if (res.status == 201) {
          window.location.reload();
        }
      });
    },
    addSection() {
      this.form.push({
        title: "",
        description: "",

        question: [
          {
            title: "",
            guide: "",
            answer_format: "",
            answer: "",
            answers: [{ answer: "" }],
            limit: "",
            placeholder: "",

            options: [
              {
                name: "",
              },
            ],
            tools: [],
            tools_description: "",
            fields: [
              "sn",
              {
                key: "",
              },
            ],
            items: [
              {
                key: "",
              },
            ],
            documents: [
              {
                name: "",
                file: "",
              },
            ],
          },
        ],
      });

      // this.opened.push(this.form.length - 1);
    },
    removeSection(index) {
      this.form.splice(index, 1);
      let ele = this.opened.indexOf(index);
      this.opened.splice(ele, 1);
    },
    hideSection(id) {
      if (this.opened.includes(id)) {
        let ele = this.opened.indexOf(id);

        this.opened.splice(ele, 1);
      } else {
        this.opened.push(id);
      }
    },
    toggleQuestion(id) {
      if (this.openedQuestion.includes(id)) {
        this.openedQuestion.splice(this.openedQuestion.indexOf(id), 1);
      } else {
        this.openedQuestion.push(id);
      }
    },
    addQuestion(index) {
      // this.openedQuestion.push(index);
      this.form[index].question.push({
        title: "",
        guide: "",
        answer_format: "",
        answer: "",
        answers: [{ answer: "" }],
        limit: "",
        placeholder: "",

        options: [
          {
            name: "",
          },
        ],
        tools: [],
        tools_description: "",
        fields: [
          "sn",
          {
            key: "",
          },
        ],
        items: [
          {
            key: "",
          },
        ],
        documents: [
          {
            name: "",
            file: "",
          },
        ],
      });
    },
    removeQuestion(index) {
      this.form[index].question.pop();
    },
    addOption(index, id) {
      this.form[index].question[id].options.push({
        name: "",
      });
    },
    removeOption(index) {
      this.form[index].question[id].options.pop();
    },
    addField(e, index, id) {
      if (this.field !== "") {
        this.form[index].question[id].fields.push(e);
        this.field = "";
      } else {
        this.$toasted.error("Field empty");
      }
    },

    handleTable(index, id) {
      this.obj = {};
        this.form[index].question[id].items = []
      this.form[index].question[id].fields.forEach((item) => {
        this.obj[item] = "";
      });
      this.form[index].question[id].items.push(this.obj);
       this.$toasted.info("Table fields created");
      
    },
    removeField(index, id, i) {
      this.form[index].question[id].fields.splice(i, 1);
    },
  },
  components: {
    Review,
    "app-editor": Editor,
  },
};
</script>

<style scoped>
.container {
  padding: 50px 0;
}

.main-box {
  padding: 20px;
  background: #f7f8fa;
  position: relative;
}
section {
  background: #fff;
}
.top-box {
  margin: 0 auto;
  background: white;
  height: auto;
}
.bottom-box {
  margin: 0 auto;
  background: white;
}
.hide {
  height: 120px;
  overflow: hidden;
}
.btn-sm {
  padding: 0.1rem 0.4rem;
  font-size: 0.4rem;
  line-height: 1.5;
}
</style>