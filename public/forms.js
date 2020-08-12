(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/applist.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./resources/js/components/admin/Applications/template.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: ["sn", "full_name", 'phone', "group", "phase", "name", "price", "status", "action"],
      items: [],
      id: null
    };
  },
  components: {
    Review: _template__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.getItems();
  },
  methods: {
    handleStatus: function handleStatus(id, stat) {
      var _this = this;

      var data = {
        status: stat
      };
      axios.put("/api/application/".concat(id), data).then(function (res) {
        if (res.status == 200) {
          _this.getItems();
        }
      });
    },
    getItems: function getItems() {
      var _this2 = this;

      axios.get("/api/application").then(function (res) {
        if (res.status == 200) {
          _this2.items = res.data;
        }
      });
    },
    view: function view(id) {
      this.id = id;
      this.$bvModal.show('modal-1'); //   const { id, title } = data;
      //   this.$router.push(`/form/${id}/${title.replace(/ /g, "-")}`);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review */ "./resources/js/components/admin/Applications/review.vue");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["options"],
  data: function data() {
    return {
      obj: {},
      field: "",
      busy: true,
      opened: [],
      openedQuestion: [],
      form: [{
        title: "",
        description: "",
        question: [{
          title: "",
          guide: "",
          answer_format: "",
          answer: "",
          answers: [{
            answer: ""
          }],
          limit: "",
          placeholder: "",
          options: [{
            name: ""
          }],
          tools: [],
          tools_description: "",
          fields: [],
          items: [],
          documents: [{
            name: "",
            file: ""
          }]
        }]
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    processUpload: function processUpload(file) {
      var _this = this;

      var that = this;
      this.start = true;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      var cloudName = this.cloudinary.cloudName;
      var upload_preset = this.cloudinary.uploadPreset;
      formData.append("file", file);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset); // REQUIRED

      xhr.open("POST", "https://api.cloudinary.com/v1_1/" + cloudName + "/upload");

      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          that.progress = Math.round(e.loaded / e.total * 100) + "%";
        }
      };

      xhr.upload.onloadstart = function (e) {
        this.progress = "Starting...";
      };

      xhr.upload.onloadend = function (e) {
        this.progress = "Completing..";
      };

      xhr.onload = function (progressEvent) {
        if (xhr.status === 200) {
          // Success! You probably want to save the URL somewhere
          _this.progress = "Completed";
          setTimeout(function () {
            _this.start = false;
          }, 1000);
          var response = JSON.parse(xhr.response);
          _this.uploadedFileUrl = response.secure_url; // https address of uploaded file

          _this.post.coverImage = response.secure_url;
        } else {
          _this.start = false;
          alert("Upload failed. Please try again.");
        }
      };

      xhr.send(formData);
    },
    upload_handler: function upload_handler(blobInfo, success, failure) {
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
    loadFile: function loadFile(cb, value, mt) {
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
          cb(blobInfo.blobUri(), {
            title: file.name
          });
        };
      };

      input.click();
    },
    submit: function submit() {
      var data = {
        title: this.$props.options.title,
        group: this.$props.options.app_group,
        phase: this.$props.options.phase,
        options: this.$props.options,
        template: this.form
      };
      axios.post("/api/form-template", data).then(function (res) {
        if (res.status == 201) {
          window.location.reload();
        }
      });
    },
    addSection: function addSection() {
      this.form.push({
        title: "",
        description: "",
        question: [{
          title: "",
          guide: "",
          answer_format: "",
          answer: "",
          answers: [{
            answer: ""
          }],
          limit: "",
          placeholder: "",
          options: [{
            name: ""
          }],
          tools: [],
          tools_description: "",
          fields: ["sn", {
            key: ""
          }],
          items: [{
            key: ""
          }],
          documents: [{
            name: "",
            file: ""
          }]
        }]
      }); // this.opened.push(this.form.length - 1);
    },
    removeSection: function removeSection(index) {
      this.form.splice(index, 1);
      var ele = this.opened.indexOf(index);
      this.opened.splice(ele, 1);
    },
    hideSection: function hideSection(id) {
      if (this.opened.includes(id)) {
        var ele = this.opened.indexOf(id);
        this.opened.splice(ele, 1);
      } else {
        this.opened.push(id);
      }
    },
    toggleQuestion: function toggleQuestion(id) {
      if (this.openedQuestion.includes(id)) {
        this.openedQuestion.splice(this.openedQuestion.indexOf(id), 1);
      } else {
        this.openedQuestion.push(id);
      }
    },
    addQuestion: function addQuestion(index) {
      // this.openedQuestion.push(index);
      this.form[index].question.push({
        title: "",
        guide: "",
        answer_format: "",
        answer: "",
        answers: [{
          answer: ""
        }],
        limit: "",
        placeholder: "",
        options: [{
          name: ""
        }],
        tools: [],
        tools_description: "",
        fields: ["sn", {
          key: ""
        }],
        items: [{
          key: ""
        }],
        documents: [{
          name: "",
          file: ""
        }]
      });
    },
    removeQuestion: function removeQuestion(index) {
      this.form[index].question.pop();
    },
    addOption: function addOption(index, id) {
      this.form[index].question[id].options.push({
        name: ""
      });
    },
    removeOption: function removeOption(index) {
      this.form[index].question[id].options.pop();
    },
    addField: function addField(e, index, id) {
      if (this.field !== "") {
        this.form[index].question[id].fields.push(e);
        this.field = "";
      } else {
        this.$toasted.error("Field empty");
      }
    },
    handleTable: function handleTable(index, id) {
      var _this2 = this;

      this.obj = {};
      this.form[index].question[id].items = [];
      this.form[index].question[id].fields.forEach(function (item) {
        _this2.obj[item] = "";
      });
      this.form[index].question[id].items.push(this.obj);
      this.$toasted.info("Table fields created");
    },
    removeField: function removeField(index, id, i) {
      this.form[index].question[id].fields.splice(i, 1);
    }
  },
  components: {
    Review: _review__WEBPACK_IMPORTED_MODULE_0__["default"],
    "app-editor": _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      type: "",
      appFields: ["sn", "title", "description", "purpose", "phases", "action"],
      appGroups: [],
      group: {
        title: "",
        description: "",
        purpose: "",
        phase: ""
      }
    };
  },
  mounted: function mounted() {
    this.getGroups();
  },
  methods: {
    drop: function drop(data) {
      var _this = this;

      axios["delete"]("/api/app-group/".concat(data.id)).then(function (res) {
        if (res.status == 200) {
          _this.getGroups();

          _this.$toasted.info('Deleted');
        }
      });
    },
    handleType: function handleType(value) {
      this.type = value;
    },
    getGroups: function getGroups() {
      var _this2 = this;

      axios.get("/api/app-group").then(function (res) {
        if (res.status == 200) {
          _this2.appGroups = res.data;
        }
      });
    },
    addGroup: function addGroup() {
      var _this3 = this;

      axios.post("/api/app-group", this.group).then(function (res) {
        if (res.status == 201) {
          _this3.getGroups();

          _this3.group = {
            title: "",
            description: "",
            purpose: "",
            phase: ""
          };
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: ["sn", "title", "group", "phase", "action"],
      items: []
    };
  },
  mounted: function mounted() {
    this.getItems();
  },
  methods: {
    getItems: function getItems() {
      var _this = this;

      axios.get("/api/form-template").then(function (res) {
        if (res.status == 200) {
          _this.items = res.data;
        }
      });
    },
    drop: function drop(id) {
      var _this2 = this;

      axios["delete"]("/api/form-template/".concat(id)).then(function (res) {
        if (res.status == 200) {
          _this2.getItems();

          _this2.$toasted.info('Deleted');
        }
      });
    },
    view: function view(data) {
      var id = data.id,
          title = data.title;
      this.$router.push("/admin/form/template/".concat(id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/options.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./resources/js/components/admin/Applications/create.vue");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./resources/js/components/admin/Applications/list.vue");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      options: {
        title: "",
        description: "",
        app_group: "",
        step: {
          title: "",
          description: "",
          purpose: "",
          feedback: ""
        },
        phase: "",
        feedback: {
          type: "",
          title: "",
          text: "",
          purpose: ""
        },
        signature: false,
        payment: false,
        price: null
      },
      type: "list",
      appGroups: []
    };
  },
  components: {
    Creation: _create__WEBPACK_IMPORTED_MODULE_0__["default"],
    List: _list__WEBPACK_IMPORTED_MODULE_1__["default"],
    "app-editor": _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.getGroups();
  },
  methods: {
    handleType: function handleType(value) {
      this.type = value;

      if (value == 'create') {
        this.$toasted.success('Settings saved');
      }
    },
    getGroups: function getGroups() {
      var _this = this;

      axios.get("/api/app-group").then(function (res) {
        if (res.status == 200) {
          _this.appGroups = res.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/review.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/review.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../upload */ "./resources/js/components/upload.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["form", "options"],
  data: function data() {
    return {
      lgas: [],
      num: 0,
      show: false
    };
  },
  components: {
    Upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.getLga();
  },
  methods: {
    getLga: function getLga() {
      var _this = this;

      axios.get("/api/show-lgas").then(function (res) {
        if (res.status == 200) {
          _this.lgas = res.data;
        }
      });
    },
    handleShow: function handleShow() {
      this.show = !this.show;
    },
    next: function next() {
      this.num++;
    },
    prev: function prev() {
      if (this.num !== 0) {
        this.num--;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/template.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../upload */ "./resources/js/components/upload.vue");
/* harmony import */ var _paystack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../paystack */ "./resources/js/components/paystack.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: "",
      phone: null,
      full_name: "",
      form: {},
      num: 0,
      template: [],
      options: {},
      show: false,
      show_feedback: false
    };
  },
  components: {
    Upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"],
    Payment: _paystack__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getItems(this.$route.params.id);
    this.getLga();
  },
  methods: {
    closeForm: function closeForm() {
      this.$router.push("/forms");
    },
    getLga: function getLga() {
      var _this = this;

      axios.get("/api/show-lgas").then(function (res) {
        if (res.status == 200) {
          _this.lgas = res.data;
        }
      });
    },
    getUploadDetails: function getUploadDetails(index, id, res) {
      this.template[this.num].question[index].documents[id].file = res.secure_url;
    },
    next: function next() {
      this.num++;
    },
    prev: function prev() {
      if (this.num !== 0) {
        this.num--;
      }
    },
    handleShow: function handleShow() {
      var _this2 = this;

      if (this.email !== '' && this.full_name !== '') {
        var data = {
          group: this.options.app_group,
          full_name: this.full_name,
          email: this.email,
          phone: this.phone,
          phase: this.options.phase
        };
        axios.post("/api/check-phase", data).then(function (res) {
          if (res.status == 200) {
            if (res.data.status == "approved") {
              _this2.show = !_this2.show;
            } else {
              _this2.$bvModal.show("modal-2");
            }
          }
        });
      } else {
        this.$toasted.info('Fill all fields');
      }
    },
    getItems: function getItems(id) {
      var _this3 = this;

      axios.get("/api/form-template/".concat(id)).then(function (res) {
        if (res.status == 200) {
          _this3.form = res.data;
          _this3.template = JSON.parse(res.data.template);
          _this3.options = JSON.parse(res.data.options);
        }
      });
    },
    removeMore: function removeMore(id) {
      this.template[this.num].question[id].answers.pop();
    },
    addMore: function addMore(id) {
      this.template[this.num].question[id].answers.push({
        answer: ""
      });
    },
    addDoc: function addDoc(id) {
      this.template[this.num].question[id].documents.push({
        name: "",
        file: ""
      });
    },
    removeDoc: function removeDoc(id) {
      this.template[this.num].question[id].documents.pop();
    },
    handleObj: function handleObj() {},
    addRow: function addRow(id) {
      //  Object.assign(this.obj,  this.template[this.num].question[id].items[0])
      var obj = {};
      this.template[this.num].question[id].fields.forEach(function (item) {
        obj[item] = "";
        console.log("addRow -> item", item);
      });
      this.template[this.num].question[id].items.push(obj);
    },
    removeRow: function removeRow(id) {
      this.template[this.num].question[id].items.pop();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review */ "./resources/js/components/forms/review.vue");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["options"],
  data: function data() {
    return {
      busy: true,
      opened: [],
      openedQuestion: [],
      form: [{
        title: "",
        description: "",
        tools: [],
        fields: ["sn", {
          key: ""
        }],
        items: [{
          key: ""
        }],
        documents: [{
          name: "",
          file: ""
        }],
        question: [{
          title: "",
          guide: "",
          answer_format: "",
          answer: "",
          answers: [{
            answer: ""
          }],
          limit: "",
          placeholder: "",
          options: [{
            name: ""
          }]
        }]
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    processUpload: function processUpload(file) {
      var _this = this;

      var that = this;
      this.start = true;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      var cloudName = this.cloudinary.cloudName;
      var upload_preset = this.cloudinary.uploadPreset;
      formData.append("file", file);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset); // REQUIRED

      xhr.open("POST", "https://api.cloudinary.com/v1_1/" + cloudName + "/upload");

      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          that.progress = Math.round(e.loaded / e.total * 100) + "%";
        }
      };

      xhr.upload.onloadstart = function (e) {
        this.progress = "Starting...";
      };

      xhr.upload.onloadend = function (e) {
        this.progress = "Completing..";
      };

      xhr.onload = function (progressEvent) {
        if (xhr.status === 200) {
          // Success! You probably want to save the URL somewhere
          _this.progress = "Completed";
          setTimeout(function () {
            _this.start = false;
          }, 1000);
          var response = JSON.parse(xhr.response);
          _this.uploadedFileUrl = response.secure_url; // https address of uploaded file

          _this.post.coverImage = response.secure_url;
        } else {
          _this.start = false;
          alert("Upload failed. Please try again.");
        }
      };

      xhr.send(formData);
    },
    upload_handler: function upload_handler(blobInfo, success, failure) {
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
    loadFile: function loadFile(cb, value, mt) {
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
          cb(blobInfo.blobUri(), {
            title: file.name
          });
        };
      };

      input.click();
    },
    submit: function submit() {
      var data = {
        title: this.$props.options.title,
        group: this.$props.options.app_group,
        phase: this.$props.options.phase,
        options: this.$props.options,
        template: this.form
      };
      axios.post("/api/form-template", data).then(function (res) {
        if (res.status == 201) {
          window.location.reload();
        }
      });
    },
    addSection: function addSection() {
      this.form.push({
        title: "",
        description: "",
        tools: [],
        fields: [{
          key: ""
        }],
        items: ["sn", {
          key: ""
        }],
        documents: [{
          name: "",
          file: ""
        }],
        question: [{
          title: "",
          guide: "",
          answer_format: "",
          answer: "",
          answers: [],
          options: [{
            name: ""
          }]
        }]
      }); // this.opened.push(this.form.length - 1);
    },
    removeSection: function removeSection(index) {
      this.form.splice(index, 1);
      var ele = this.opened.indexOf(index);
      this.opened.splice(ele, 1);
    },
    hideSection: function hideSection(id) {
      if (this.opened.includes(id)) {
        var ele = this.opened.indexOf(id);
        this.opened.splice(ele, 1);
      } else {
        this.opened.push(id);
      }
    },
    toggleQuestion: function toggleQuestion(id) {
      if (this.openedQuestion.includes(id)) {
        this.openedQuestion.splice(this.openedQuestion.indexOf(id), 1);
      } else {
        this.openedQuestion.push(id);
      }
    },
    addQuestion: function addQuestion(index) {
      this.openedQuestion.push(index);
      this.form[index].question.push({
        title: "",
        guide: "",
        answer_format: "",
        answer: "",
        answers: [],
        options: [{
          name: ""
        }],
        tools: [],
        fields: [{
          key: ""
        }]
      });
    },
    removeQuestion: function removeQuestion(index) {
      this.form[index].question.pop();
    },
    addOption: function addOption(index, id) {
      this.form[index].question[id].options.push({
        name: ""
      });
    },
    removeOption: function removeOption(index) {
      this.form[index].question[id].options.pop();
    },
    addField: function addField(index) {
      this.form[index].fields.push({
        key: ""
      });
      this.form[index].items.push({
        key: ""
      });
    },
    removeField: function removeField(index) {
      this.form[index].fields.pop();
    }
  },
  components: {
    Review: _review__WEBPACK_IMPORTED_MODULE_0__["default"],
    "app-editor": _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      type: "",
      appFields: ["sn", "title", "description", "purpose", "phases", "action"],
      appGroups: [],
      group: {
        title: "",
        description: "",
        purpose: "",
        phase: ""
      }
    };
  },
  mounted: function mounted() {
    this.getGroups();
  },
  methods: {
    handleType: function handleType(value) {
      this.type = value;
    },
    getGroups: function getGroups() {
      var _this = this;

      axios.get("/api/app-group").then(function (res) {
        if (res.status == 200) {
          _this.appGroups = res.data;
        }
      });
    },
    addGroup: function addGroup() {
      var _this2 = this;

      axios.post("/api/app-group", this.group).then(function (res) {
        if (res.status == 201) {
          _this2.getGroups();

          _this2.group = {
            title: "",
            description: "",
            purpose: "",
            phase: ""
          };
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: ['sn', 'title', 'group', 'phase', 'action'],
      items: []
    };
  },
  mounted: function mounted() {
    this.getItems();
  },
  methods: {
    getItems: function getItems() {
      var _this = this;

      axios.get("/api/form-template").then(function (res) {
        if (res.status == 200) {
          _this.items = res.data;
        }
      });
    },
    view: function view(data) {
      var id = data.id,
          title = data.title;
      this.$router.push("/form/".concat(id, "/").concat(title.replace(/ /g, '-')));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/options.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./resources/js/components/forms/create.vue");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./resources/js/components/forms/list.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      options: {
        title: "",
        description: "",
        app_group: "",
        step: {
          title: "",
          description: "",
          purpose: "",
          feedback: ""
        },
        phase: "",
        feedback: {
          type: "",
          title: "",
          text: "",
          purpose: ""
        },
        signature: false,
        payment: false,
        price: null
      },
      type: "list",
      appGroups: []
    };
  },
  components: {
    Creation: _create__WEBPACK_IMPORTED_MODULE_0__["default"],
    List: _list__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getGroups();
  },
  methods: {
    handleType: function handleType(value) {
      this.type = value;
    },
    getGroups: function getGroups() {
      var _this = this;

      axios.get("/api/app-group").then(function (res) {
        if (res.status == 200) {
          _this.appGroups = res.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/review.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/review.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upload */ "./resources/js/components/upload.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['form', 'options'],
  data: function data() {
    return {
      num: 0,
      show: false
    };
  },
  components: {
    Upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.getLga();
  },
  methods: {
    getLga: function getLga() {
      var _this = this;

      axios.get("/api/show-lgas").then(function (res) {
        if (res.status == 200) {
          _this.lgas = res.data;
        }
      });
    },
    handleShow: function handleShow() {
      this.show = !this.show;
    },
    next: function next() {
      this.num++;
    },
    prev: function prev() {
      if (this.num !== 0) {
        this.num--;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/template.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upload */ "./resources/js/components/upload.vue");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation */ "./resources/js/components/navigation/navigation.vue");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer */ "./resources/js/components/footer/footer.vue");
/* harmony import */ var _paystack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paystack */ "./resources/js/components/paystack.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: "",
      phone: null,
      full_name: "",
      form: {},
      num: 0,
      template: [],
      options: {},
      show: false,
      show_feedback: false
    };
  },
  components: {
    Upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"],
    Navigation: _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Payment: _paystack__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    this.getItems(this.$route.params.id);
    this.getLga();
  },
  methods: {
    closeForm: function closeForm() {
      this.$router.push("/forms");
    },
    getResponse: function getResponse(res) {
      var _this = this;

      if (res.status == "success") {
        var data = {
          ref: res.trxref,
          payment: this.options.payment,
          price: this.options.price,
          response: this.template,
          payment_status: res.status,
          phase: this.options.phase,
          name: this.options.title,
          group: this.options.app_group,
          full_name: this.full_name,
          email: this.email,
          phone: this.phone
        };
        axios.post("/api/application", data).then(function (res) {
          if (res.status == 201) {
            _this.$bvModal.show("modal-1");
          }
        });
      }
    },
    submit: function submit() {
      var _this2 = this;

      if (!this.options.payment) {
        var data = {
          ref: "Non Payment",
          payment: this.options.payment,
          price: "Non Payment",
          response: this.template,
          payment_status: "None",
          phase: this.options.phase,
          name: this.options.title,
          group: this.options.app_group,
          full_name: this.full_name,
          email: this.email,
          phone: this.phone
        };
        axios.post("/api/application", data).then(function (res) {
          if (res.status == 201) {
            _this2.$bvModal.show("modal-1");
          }
        });
      }
    },
    getLga: function getLga() {
      var _this3 = this;

      axios.get("/api/show-lgas").then(function (res) {
        if (res.status == 200) {
          _this3.lgas = res.data;
        }
      });
    },
    getUploadDetails: function getUploadDetails(index, id, res) {
      this.template[this.num].question[index].documents[id].file = res.secure_url;
    },
    next: function next() {
      this.num++;
    },
    prev: function prev() {
      if (this.num !== 0) {
        this.num--;
      }
    },
    handleShow: function handleShow() {
      var _this4 = this;

      if (this.email !== '' && this.full_name !== '') {
        var data = {
          group: this.options.app_group,
          full_name: this.full_name,
          email: this.email,
          phone: this.phone,
          phase: this.options.phase
        };
        axios.post("/api/check-phase", data).then(function (res) {
          if (res.status == 200) {
            if (res.data.status == "approved") {
              _this4.show = !_this4.show;
            } else {
              _this4.$bvModal.show("modal-2");
            }
          }
        });
      } else {
        this.$toasted.info('Fill all fields');
      }
    },
    getItems: function getItems(id) {
      var _this5 = this;

      axios.get("/api/form-template/".concat(id)).then(function (res) {
        if (res.status == 200) {
          _this5.form = res.data;
          _this5.template = JSON.parse(res.data.template);
          _this5.options = JSON.parse(res.data.options);
        }
      });
    },
    removeMore: function removeMore(id) {
      this.template[this.num].question[id].answers.pop();
    },
    addMore: function addMore(id) {
      this.template[this.num].question[id].answers.push({
        answer: ""
      });
    },
    addDoc: function addDoc(id) {
      this.template[this.num].question[id].documents.push({
        name: "",
        file: ""
      });
    },
    removeDoc: function removeDoc(id) {
      this.template[this.num].question[id].documents.pop();
    },
    handleObj: function handleObj() {},
    addRow: function addRow(id) {
      //  Object.assign(this.obj,  this.template[this.num].question[id].items[0])
      var obj = {};
      this.template[this.num].question[id].fields.forEach(function (item) {
        obj[item] = "";
        console.log("addRow -> item", item);
      });
      this.template[this.num].question[id].items.push(obj);
    },
    removeRow: function removeRow(id) {
      this.template[this.num].question[id].items.pop();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-v-e25d5bc6] {\n  padding: 50px 0;\n}\n.form-group[data-v-e25d5bc6] {\n  margin-bottom: 24px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-v-bdc204fa] {\n  padding: 50px 0;\n}\n.form-group[data-v-bdc204fa] {\n  margin-bottom: 24px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-1c12453e] {\n  padding: 50px 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-1d00c4cd] {\n  padding: 50px 0;\n}\n.main-box[data-v-1d00c4cd] {\n  padding: 20px;\n  background: #f7f8fa;\n  position: relative;\n}\nsection[data-v-1d00c4cd] {\n  background: #f7f8fa;\n}\n.top-box[data-v-1d00c4cd] {\n  margin: 0 auto;\n  background: white;\n  height: auto;\n}\n.bottom-box[data-v-1d00c4cd] {\n  margin: 0 auto;\n  background: white;\n}\n.hide[data-v-1d00c4cd] {\n  height: 120px;\n  overflow: hidden;\n}\n.btn-sm[data-v-1d00c4cd] {\n  padding: 0.1rem 0.4rem;\n  font-size: 0.4rem;\n  line-height: 1.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-73448811] {\n  padding: 50px 15px;\n  height: 100vh;\n}\n.box[data-v-73448811]{\n  height: 200px;\n  width: 32%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bg-lightwhite[data-v-73448811]{\n  background:#fff;\n  padding:15px;\n  border-radius: 15px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-44e5adaf] {\n  padding: 50px 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-edbdd1ea] {\n  min-height: 70vh;\n  padding: 50px 0;\n}\n.upload[data-v-edbdd1ea] {\n  background: #f7f8fa;\n}\nlabel[data-v-edbdd1ea] {\n  font-weight: bold;\n}\n.border[data-v-edbdd1ea] {\n  border-radius: 15px;\n}\nli[data-v-edbdd1ea] {\n  margin-left: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-9b85d6b2] {\n  padding: 50px 0;\n}\n.main-box[data-v-9b85d6b2] {\n  padding: 20px;\n  background: #f7f8fa;\n  position: relative;\n}\nsection[data-v-9b85d6b2]{\n  background: #f7f8fa;\n}\n.top-box[data-v-9b85d6b2] {\n  margin: 0 auto;\n  background: white;\n  height: auto;\n}\n.bottom-box[data-v-9b85d6b2] {\n  margin: 0 auto;\n  background: white;\n}\n.hide[data-v-9b85d6b2] {\n  height: 120px;\n  overflow: hidden;\n}\n.btn-sm[data-v-9b85d6b2] {\n  padding: 0.1rem 0.4rem;\n  font-size: 0.4rem;\n  line-height: 1.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-289c5612] {\n  padding: 50px 15px;\n  height: 100vh;\n}\n.box[data-v-289c5612]{\n  height: 200px;\n  width: 32%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bg-lightwhite[data-v-289c5612]{\n  background:#f7f8fa;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-48c82c09]{\n    padding:50px 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-7eee4f36] {\n  min-height: 70vh;\n  padding: 50px 0;\n}\n.upload[data-v-7eee4f36] {\n  background: #f7f8fa;\n}\nlabel[data-v-7eee4f36] {\n  font-weight: bold;\n}\n.border[data-v-7eee4f36] {\n  border-radius: 15px;\n}\nli[data-v-7eee4f36] {\n  margin-left: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=template&id=1c12453e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/applist.vue?vue&type=template&id=1c12453e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        [
          _c("b-col", { attrs: { cols: "12" } }, [
            _c(
              "div",
              { staticClass: "text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/admin/forms" } },
                  [
                    _c(
                      "b-button",
                      { attrs: { variant: "outline-darkgreen" } },
                      [_vm._v("Back")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("h5", { staticClass: "mb-4" }, [_vm._v("Applications")]),
          _vm._v(" "),
          _c("b-table", {
            attrs: { items: _vm.items, fields: _vm.fields, bordered: "" },
            scopedSlots: _vm._u([
              {
                key: "cell(sn)",
                fn: function(data) {
                  return [_c("div", [_vm._v(_vm._s(data.index + 1))])]
                }
              },
              {
                key: "cell(action)",
                fn: function(data) {
                  return [
                    _c(
                      "div",
                      {
                        staticClass: "tab d-flex justify-content-between stat"
                      },
                      [
                        _c(
                          "span",
                          {
                            on: {
                              click: function($event) {
                                return _vm.view(data.item.id)
                              }
                            }
                          },
                          [_vm._v("View")]
                        ),
                        _vm._v(" "),
                        data.item.status.toLowerCase() == "pending"
                          ? _c("span", [
                              _c(
                                "span",
                                {
                                  staticClass: "mr-4 cpointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.handleStatus(
                                        data.item.id,
                                        "approved"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              Approve\n              "
                                  ),
                                  _c("i", {
                                    staticClass: "fa fa-check text-success",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "cpointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.handleStatus(
                                        data.item.id,
                                        "declined"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              Decline\n              "
                                  ),
                                  _c("i", {
                                    staticClass: "fa fa-times text-danger",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        { attrs: { id: "modal-1", size: "lg", "hide-footer": "" } },
        [_c("Review", { attrs: { id: _vm.id } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=template&id=1d00c4cd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/create.vue?vue&type=template&id=1d00c4cd&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "body" },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "b-container",
            [
              _c(
                "b-row",
                { staticClass: "py-3 justify-content-end" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-1",
                          modifiers: { "modal-1": true }
                        }
                      ],
                      staticClass: "mr-3",
                      attrs: { variant: "outline-darkgreen", pill: "" }
                    },
                    [_vm._v("Review")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { type: "submit", variant: "darkgreen", pill: "" }
                    },
                    [_vm._v("Publish")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "py-3" },
                [
                  _c(
                    "b-button",
                    { staticClass: "mr-3", on: { click: _vm.addSection } },
                    [_vm._v("Add section")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.form, function(section, index) {
                return _c(
                  "section",
                  { key: index, staticClass: "border p-2 mb-2" },
                  [
                    _c(
                      "div",
                      { staticClass: "py-2 d-flex justify-content-between" },
                      [
                        _c("h5", [
                          _vm._v(
                            _vm._s(
                              section.title == "" ? "Section" : section.title
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              staticClass: "mr-2 cpointer",
                              on: {
                                click: function($event) {
                                  return _vm.hideSection(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.opened.includes(index) ? "Hide" : "Show"
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.removeSection(index)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-times-circle cpointer",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.opened.includes(index)
                      ? _c(
                          "div",
                          { staticClass: "m-4" },
                          [
                            _c(
                              "b-row",
                              { staticClass: "mb-5 border-bottom py-3" },
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "9" } },
                                  [
                                    _c(
                                      "b-form-group",
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "section" } },
                                          [_vm._v("Section Title")]
                                        ),
                                        _vm._v(" "),
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "section",
                                            placeholder: "Enter title"
                                          },
                                          model: {
                                            value: section.title,
                                            callback: function($$v) {
                                              _vm.$set(section, "title", $$v)
                                            },
                                            expression: "section.title"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-group",
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "section" } },
                                          [_vm._v("Section Description")]
                                        ),
                                        _vm._v(" "),
                                        _c("app-editor", {
                                          staticClass: "form-control",
                                          attrs: {
                                            apiKey:
                                              "a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7",
                                            init: {
                                              selector: "textarea",
                                              toolbar_mode: "floating",
                                              plugins:
                                                "advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ",
                                              toolbar:
                                                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table",
                                              image_title: true,
                                              height: 200,
                                              file_picker_types: "image",
                                              automatic_uploads: false,
                                              relative_urls: false,
                                              convert_urls: false,
                                              images_upload_handler: function(
                                                blobInfo,
                                                success,
                                                failure
                                              ) {
                                                _vm.upload_handler(
                                                  blobInfo,
                                                  success,
                                                  failure
                                                )
                                              },
                                              file_picker_callback: function(
                                                callback,
                                                value,
                                                meta
                                              ) {
                                                _vm.loadFile(
                                                  callback,
                                                  value,
                                                  meta
                                                )
                                              },
                                              images_dataimg_filter: function(
                                                img
                                              ) {
                                                return img.hasAttribute(
                                                  "internal-blob"
                                                )
                                              }
                                            }
                                          },
                                          model: {
                                            value: section.description,
                                            callback: function($$v) {
                                              _vm.$set(
                                                section,
                                                "description",
                                                $$v
                                              )
                                            },
                                            expression: "section.description"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-row",
                              [
                                _c(
                                  "b-col",
                                  { staticClass: "p-0", attrs: { cols: "12" } },
                                  [_c("h5", [_vm._v("Questions")])]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-row",
                              { staticClass: "py-3" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "mr-3",
                                    on: {
                                      click: function($event) {
                                        return _vm.addQuestion(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-plus-circle",
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.removeQuestion(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-times-circle",
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(section.question, function(question, idx) {
                              return _c(
                                "b-row",
                                { key: idx, staticClass: "border p-2" },
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      !_vm.openedQuestion.includes(idx)
                                        ? _c("div", [
                                            _vm._v(
                                              _vm._s(idx + 1) +
                                                " " +
                                                _vm._s(question.title)
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "ml-auto",
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleQuestion(idx)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-minus-circle",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.openedQuestion.includes(idx)
                                    ? _c(
                                        "div",
                                        { staticClass: "d-flex w-100" },
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c(
                                                "b-form-row",
                                                [
                                                  _c(
                                                    "b-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c(
                                                        "b-form-group",
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              attrs: { for: "" }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Type Question"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("b-textarea", {
                                                            attrs: {
                                                              placeholder:
                                                                "Question"
                                                            },
                                                            model: {
                                                              value:
                                                                question.title,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  question,
                                                                  "title",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "question.title"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-col",
                                                    [
                                                      _c(
                                                        "b-form-group",
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              attrs: { for: "" }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Question guide (Optional)"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              placeholder:
                                                                "Question guide"
                                                            },
                                                            model: {
                                                              value:
                                                                question.guide,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  question,
                                                                  "guide",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "question.guide"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c(
                                                "b-form-group",
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "" } },
                                                    [_vm._v("Answer Format")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-form-select",
                                                    {
                                                      model: {
                                                        value:
                                                          question.answer_format,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            question,
                                                            "answer_format",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "question.answer_format"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: { value: "" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Select Format"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value:
                                                              "multi choice"
                                                          }
                                                        },
                                                        [_vm._v("Multi Choice")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value:
                                                              "single choice"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Single Choice"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "text box"
                                                          }
                                                        },
                                                        [_vm._v("Text box")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "long text"
                                                          }
                                                        },
                                                        [_vm._v("Long Text")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "number"
                                                          }
                                                        },
                                                        [_vm._v("Number")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "multi text"
                                                          }
                                                        },
                                                        [_vm._v("Multi Text")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "date"
                                                          }
                                                        },
                                                        [_vm._v("Date")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "time"
                                                          }
                                                        },
                                                        [_vm._v("Time")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "email"
                                                          }
                                                        },
                                                        [_vm._v("Email")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "lga"
                                                          }
                                                        },
                                                        [_vm._v("Lga")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              question.answer_format ==
                                                "text box" ||
                                              question.answer_format == "number"
                                                ? _c(
                                                    "b-form-group",
                                                    [
                                                      _c(
                                                        "label",
                                                        { attrs: { for: "" } },
                                                        [
                                                          _vm._v(
                                                            "Placeholder value"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          placeholder:
                                                            "Placeholder value"
                                                        },
                                                        model: {
                                                          value:
                                                            question.placeholder,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "placeholder",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.placeholder"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              question.answer_format ==
                                                "text box" ||
                                              question.answer_format == "number"
                                                ? _c(
                                                    "div",
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          type: "number",
                                                          placeholder:
                                                            "Character limit"
                                                        },
                                                        model: {
                                                          value: question.limit,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "limit",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.limit"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              question.answer_format ==
                                                "multi choice" ||
                                              question.answer_format ==
                                                "single choice"
                                                ? _c(
                                                    "div",
                                                    [
                                                      _vm._l(
                                                        question.options,
                                                        function(option, idxx) {
                                                          return _c(
                                                            "div",
                                                            { key: idxx },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    placeholder:
                                                                      "Options"
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      option.name,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        option,
                                                                        "name",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "option.name"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-row",
                                                        { staticClass: "p-3" },
                                                        [
                                                          _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "mr-3",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.addOption(
                                                                    index,
                                                                    idx
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Add")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-button",
                                                            {
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.removeOption(
                                                                    index,
                                                                    idx
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Remove")]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    2
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("label", [
                                                _vm._v("Select Tool")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { attrs: { role: "tablist" } },
                                                [
                                                  _c(
                                                    "b-card",
                                                    {
                                                      staticClass: "mb-1",
                                                      attrs: { "no-body": "" }
                                                    },
                                                    [
                                                      _c(
                                                        "b-card-header",
                                                        {
                                                          staticClass: "p-1",
                                                          attrs: {
                                                            "header-tag":
                                                              "header",
                                                            role: "tab"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "b-button",
                                                            {
                                                              directives: [
                                                                {
                                                                  name:
                                                                    "b-toggle",
                                                                  rawName:
                                                                    "v-b-toggle",
                                                                  value: idx.toString(),
                                                                  expression:
                                                                    "idx.toString()"
                                                                }
                                                              ],
                                                              attrs: {
                                                                block: "",
                                                                variant: "info"
                                                              }
                                                            },
                                                            [_vm._v("Tools")]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-collapse",
                                                        {
                                                          attrs: {
                                                            id: idx.toString(),
                                                            accordion:
                                                              "my-accordion",
                                                            role: "tabpanel"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "b-card-body",
                                                            [
                                                              _c(
                                                                "b-row",
                                                                [
                                                                  _c(
                                                                    "b-col",
                                                                    {
                                                                      attrs: {
                                                                        cols:
                                                                          "12"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "b-form-group",
                                                                        [
                                                                          _c(
                                                                            "b-form-checkbox",
                                                                            {
                                                                              attrs: {
                                                                                value:
                                                                                  "table"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  question.tools,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    question,
                                                                                    "tools",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "question.tools"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Table"
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "b-form-checkbox",
                                                                            {
                                                                              attrs: {
                                                                                value:
                                                                                  "docs"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  question.tools,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    question,
                                                                                    "tools",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "question.tools"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Document"
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "b-form-checkbox",
                                                                            {
                                                                              attrs: {
                                                                                value:
                                                                                  " media"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  question.tools,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    question,
                                                                                    "tools",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "question.tools"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Media"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      question.tools.includes(
                                                                        "table"
                                                                      )
                                                                        ? _c(
                                                                            "div",
                                                                            [
                                                                              _c(
                                                                                "b-input-group",
                                                                                [
                                                                                  _c(
                                                                                    "b-form-input",
                                                                                    {
                                                                                      attrs: {
                                                                                        placeholder:
                                                                                          "Table field"
                                                                                      },
                                                                                      model: {
                                                                                        value:
                                                                                          _vm.field,
                                                                                        callback: function(
                                                                                          $$v
                                                                                        ) {
                                                                                          _vm.field = $$v
                                                                                        },
                                                                                        expression:
                                                                                          "field"
                                                                                      }
                                                                                    }
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "b-input-group-append",
                                                                                    [
                                                                                      _c(
                                                                                        "b-button",
                                                                                        {
                                                                                          staticClass:
                                                                                            "mr-3",
                                                                                          on: {
                                                                                            click: function(
                                                                                              $event
                                                                                            ) {
                                                                                              return _vm.addField(
                                                                                                _vm.field,
                                                                                                index,
                                                                                                idx
                                                                                              )
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "i",
                                                                                            {
                                                                                              staticClass:
                                                                                                "fa fa-plus-circle",
                                                                                              attrs: {
                                                                                                "aria-hidden":
                                                                                                  "true"
                                                                                              }
                                                                                            }
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    ],
                                                                                    1
                                                                                  )
                                                                                ],
                                                                                1
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "b-form-group",
                                                                                {
                                                                                  staticClass:
                                                                                    "p-2 py-3"
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "b-row",
                                                                                    _vm._l(
                                                                                      question.fields,
                                                                                      function(
                                                                                        field,
                                                                                        idxxx
                                                                                      ) {
                                                                                        return _c(
                                                                                          "b-col",
                                                                                          {
                                                                                            key: idxxx,
                                                                                            staticClass:
                                                                                              "border p-2 text-center",
                                                                                            attrs: {
                                                                                              cols:
                                                                                                "3"
                                                                                            }
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "\n                                    " +
                                                                                                _vm._s(
                                                                                                  field
                                                                                                ) +
                                                                                                "\n                                    "
                                                                                            ),
                                                                                            _c(
                                                                                              "i",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "fa fa-times-circle",
                                                                                                attrs: {
                                                                                                  "aria-hidden":
                                                                                                    "true"
                                                                                                },
                                                                                                on: {
                                                                                                  click: function(
                                                                                                    $event
                                                                                                  ) {
                                                                                                    return _vm.removeField(
                                                                                                      index,
                                                                                                      idx,
                                                                                                      idxxx
                                                                                                    )
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      }
                                                                                    ),
                                                                                    1
                                                                                  )
                                                                                ],
                                                                                1
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "b-row",
                                                                                {
                                                                                  staticClass:
                                                                                    "p-3"
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "b-button",
                                                                                    {
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.handleTable(
                                                                                            index,
                                                                                            idx
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "Submit fields"
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                ],
                                                                                1
                                                                              )
                                                                            ],
                                                                            1
                                                                          )
                                                                        : _vm._e()
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "b-col",
                                                                    {
                                                                      attrs: {
                                                                        cols:
                                                                          "12"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "b-form-group",
                                                                        [
                                                                          _c(
                                                                            "label",
                                                                            {
                                                                              attrs: {
                                                                                for:
                                                                                  ""
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Tool Description"
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "app-editor",
                                                                            {
                                                                              staticClass:
                                                                                "form-control",
                                                                              attrs: {
                                                                                apiKey:
                                                                                  "a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7",
                                                                                init: {
                                                                                  selector:
                                                                                    "textarea",
                                                                                  toolbar_mode:
                                                                                    "floating",
                                                                                  plugins:
                                                                                    "advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ",
                                                                                  toolbar:
                                                                                    "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table",
                                                                                  image_title: true,
                                                                                  height: 200,
                                                                                  file_picker_types:
                                                                                    "image",
                                                                                  automatic_uploads: false,
                                                                                  relative_urls: false,
                                                                                  convert_urls: false,
                                                                                  images_upload_handler: function(
                                                                                    blobInfo,
                                                                                    success,
                                                                                    failure
                                                                                  ) {
                                                                                    _vm.upload_handler(
                                                                                      blobInfo,
                                                                                      success,
                                                                                      failure
                                                                                    )
                                                                                  },
                                                                                  file_picker_callback: function(
                                                                                    callback,
                                                                                    value,
                                                                                    meta
                                                                                  ) {
                                                                                    _vm.loadFile(
                                                                                      callback,
                                                                                      value,
                                                                                      meta
                                                                                    )
                                                                                  },
                                                                                  images_dataimg_filter: function(
                                                                                    img
                                                                                  ) {
                                                                                    return img.hasAttribute(
                                                                                      "internal-blob"
                                                                                    )
                                                                                  }
                                                                                }
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  question.tools_description,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    question,
                                                                                    "tools_description",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "question.tools_description"
                                                                              }
                                                                            }
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      : _vm._e()
                  ]
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-modal",
            {
              attrs: {
                id: "modal-1",
                title: "Review",
                size: "lg",
                "hide-footer": ""
              }
            },
            [_c("Review", { attrs: { options: _vm.options, form: _vm.form } })],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=template&id=73448811&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/index.vue?vue&type=template&id=73448811&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        [
          _vm.type == ""
            ? _c(
                "b-row",
                {
                  staticClass: "h-100 justify-content-center align-items-center"
                },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "box shadow icon-text mc1",
                      on: {
                        click: function($event) {
                          return _vm.handleType("group")
                        }
                      }
                    },
                    [_vm._v("Application Group")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "box shadow" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-text mc1",
                          attrs: { to: "/admin/form" }
                        },
                        [_vm._v("Forms")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "box shadow" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-text mc1",
                          attrs: { to: "/admin/app/list" }
                        },
                        [_vm._v("Applications")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.type == "group"
            ? _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "12" } }, [
                    _c(
                      "div",
                      { staticClass: "text-right " },
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "outline-darkgreen" },
                            on: {
                              click: function($event) {
                                return _vm.handleType("")
                              }
                            }
                          },
                          [_vm._v("Back")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-row", [
                        _c("h4", { staticClass: "mb-4 icon-text" }, [
                          _vm._v("Application Groups")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mb-3" },
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "9" } },
                            [
                              _c("b-table", {
                                attrs: {
                                  items: _vm.appGroups,
                                  fields: _vm.appFields,
                                  bordered: "",
                                  hover: ""
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "cell(sn)",
                                      fn: function(data) {
                                        return [
                                          _c("div", [
                                            _vm._v(_vm._s(data.index + 1))
                                          ])
                                        ]
                                      }
                                    },
                                    {
                                      key: "cell(action)",
                                      fn: function(data) {
                                        return [
                                          _c(
                                            "div",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.drop(data.item)
                                                }
                                              }
                                            },
                                            [_vm._v("Drop")]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  1385761491
                                )
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "bg-lightwhite shadow-sm",
                              attrs: { cols: "3" }
                            },
                            [
                              _c(
                                "b-form",
                                [
                                  _c("div", { staticClass: "text-center" }, [
                                    _c("strong", [_vm._v("New Group")])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Title")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-input", {
                                                staticClass: "mb-3",
                                                attrs: { placeholder: "Title" },
                                                model: {
                                                  value: _vm.group.title,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "title",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "group.title"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Phases")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-input", {
                                                staticClass: "mb-3",
                                                attrs: {
                                                  placeholder: "4",
                                                  type: "number"
                                                },
                                                model: {
                                                  value: _vm.group.phase,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "phase",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "group.phase"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Description")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-textarea", {
                                                model: {
                                                  value: _vm.group.description,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "description",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "group.description"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Purpose")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-textarea", {
                                                model: {
                                                  value: _vm.group.purpose,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "purpose",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "group.purpose"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                { on: { click: _vm.addGroup } },
                                                [_vm._v("Create")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=template&id=44e5adaf&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/list.vue?vue&type=template&id=44e5adaf&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        [
          _c("b-table", {
            attrs: { items: _vm.items, fields: _vm.fields, bordered: "" },
            scopedSlots: _vm._u([
              {
                key: "cell(sn)",
                fn: function(data) {
                  return [_c("div", [_vm._v(_vm._s(data.index + 1))])]
                }
              },
              {
                key: "cell(action)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "d-flex" }, [
                      _c(
                        "div",
                        {
                          staticClass: "mr-4",
                          on: {
                            click: function($event) {
                              return _vm.view(data.item)
                            }
                          }
                        },
                        [_vm._v("view")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          on: {
                            click: function($event) {
                              return _vm.drop(data.item.id)
                            }
                          }
                        },
                        [_vm._v("drop")]
                      )
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=template&id=e25d5bc6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/options.vue?vue&type=template&id=e25d5bc6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.type == "option"
        ? _c(
            "b-container",
            [
              _c("h4", { staticClass: "text-center mb-5" }, [
                _vm._v("Form Settings")
              ]),
              _vm._v(" "),
              _c(
                "b-form",
                [
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("General Information")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Form Title")
                              ]),
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: { placeholder: "title" },
                                model: {
                                  value: _vm.options.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options, "title", $$v)
                                  },
                                  expression: "options.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Application Group")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-form-select",
                                {
                                  model: {
                                    value: _vm.options.app_group,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "app_group", $$v)
                                    },
                                    expression: "options.app_group"
                                  }
                                },
                                [
                                  _c(
                                    "b-form-select-option",
                                    { attrs: { value: "", disabled: "" } },
                                    [_vm._v("Select Group")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.appGroups, function(item, idx) {
                                    return _c(
                                      "b-form-select-option",
                                      {
                                        key: idx,
                                        attrs: { value: item.title }
                                      },
                                      [_vm._v(_vm._s(item.title))]
                                    )
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "12" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Form Description")
                              ]),
                              _vm._v(" "),
                              _c("app-editor", {
                                staticClass: "form-control",
                                attrs: {
                                  apiKey:
                                    "a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7",
                                  init: {
                                    selector: "textarea",
                                    toolbar_mode: "floating",
                                    plugins:
                                      "advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ",
                                    toolbar:
                                      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table",
                                    image_title: true,
                                    height: 200,
                                    file_picker_types: "image",
                                    automatic_uploads: false,
                                    relative_urls: false,
                                    convert_urls: false,
                                    images_upload_handler: function(
                                      blobInfo,
                                      success,
                                      failure
                                    ) {
                                      _vm.upload_handler(
                                        blobInfo,
                                        success,
                                        failure
                                      )
                                    },
                                    file_picker_callback: function(
                                      callback,
                                      value,
                                      meta
                                    ) {
                                      _vm.loadFile(callback, value, meta)
                                    },
                                    images_dataimg_filter: function(img) {
                                      return img.hasAttribute("internal-blob")
                                    }
                                  }
                                },
                                model: {
                                  value: _vm.options.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options, "description", $$v)
                                  },
                                  expression: "options.description"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Form Phase")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c("b-form-input", {
                            staticClass: "w-25",
                            attrs: {
                              type: "number",
                              placeholder: "Phase number"
                            },
                            model: {
                              value: _vm.options.phase,
                              callback: function($$v) {
                                _vm.$set(_vm.options, "phase", $$v)
                              },
                              expression: "options.phase"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Feedback")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "12" } },
                            [
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: "manual" },
                                  model: {
                                    value: _vm.options.feedback.type,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.options.feedback,
                                        "type",
                                        $$v
                                      )
                                    },
                                    expression: "options.feedback.type"
                                  }
                                },
                                [_vm._v("Manual")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: "automatic" },
                                  model: {
                                    value: _vm.options.feedback.type,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.options.feedback,
                                        "type",
                                        $$v
                                      )
                                    },
                                    expression: "options.feedback.type"
                                  }
                                },
                                [_vm._v("Automatic")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "12" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Title")
                              ]),
                              _vm._v(" "),
                              _c("b-form-input", {
                                model: {
                                  value: _vm.options.feedback.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options.feedback, "title", $$v)
                                  },
                                  expression: "options.feedback.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Text")
                              ]),
                              _vm._v(" "),
                              _c("b-form-textarea", {
                                model: {
                                  value: _vm.options.feedback.text,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options.feedback, "text", $$v)
                                  },
                                  expression: "options.feedback.text"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Purpose")
                              ]),
                              _vm._v(" "),
                              _c("b-form-textarea", {
                                model: {
                                  value: _vm.options.feedback.purpose,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.options.feedback,
                                      "purpose",
                                      $$v
                                    )
                                  },
                                  expression: "options.feedback.purpose"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Signature")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-form-group",
                            [
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: true },
                                  model: {
                                    value: _vm.options.signature,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "signature", $$v)
                                    },
                                    expression: "options.signature"
                                  }
                                },
                                [_vm._v("Yes")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: false },
                                  model: {
                                    value: _vm.options.signature,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "signature", $$v)
                                    },
                                    expression: "options.signature"
                                  }
                                },
                                [_vm._v("No")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Payment")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-form-group",
                            [
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: true },
                                  model: {
                                    value: _vm.options.payment,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "payment", $$v)
                                    },
                                    expression: "options.payment"
                                  }
                                },
                                [_vm._v("Yes")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: false },
                                  model: {
                                    value: _vm.options.payment,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "payment", $$v)
                                    },
                                    expression: "options.payment"
                                  }
                                },
                                [_vm._v("No")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.options.payment
                        ? _c(
                            "b-form-row",
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "Price" },
                                model: {
                                  value: _vm.options.price,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options, "price", $$v)
                                  },
                                  expression: "options.price"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "darkgreen" },
                      on: {
                        click: function($event) {
                          return _vm.handleType("create")
                        }
                      }
                    },
                    [_vm._v("Save Settings")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "p-0" },
        [
          _vm.type == "list"
            ? _c(
                "b-row",
                { staticClass: "p-3  justify-content-between" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/admin/forms" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-darkgreen" } },
                        [_vm._v("Back ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "darkgreen" },
                      on: {
                        click: function($event) {
                          return _vm.handleType("option")
                        }
                      }
                    },
                    [_vm._v("Create Form")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.type == "create"
        ? _c("Creation", { attrs: { options: _vm.options } })
        : _vm._e(),
      _vm._v(" "),
      _vm.type == "list"
        ? _c("List", { attrs: { options: _vm.options } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/review.vue?vue&type=template&id=5a5f8d29&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/review.vue?vue&type=template&id=5a5f8d29&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.form
        ? _c(
            "b-container",
            [
              _c(
                "b-form",
                [
                  _c("legend", { staticClass: "text-center mb-5" }, [
                    _vm._v(_vm._s(_vm.options.title))
                  ]),
                  _vm._v(" "),
                  _vm.num < _vm.form.length
                    ? _c(
                        "section",
                        [
                          _c(
                            "b-form-row",
                            [
                              _c("b-col", { attrs: { cols: "12" } }, [
                                _c("h5", [
                                  _vm._v(_vm._s(_vm.form[_vm.num].title))
                                ]),
                                _vm._v(" "),
                                _c("p", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.form[_vm.num].description
                                    )
                                  }
                                })
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.form[_vm.num].question, function(
                            question,
                            idx
                          ) {
                            return _c(
                              "b-form-row",
                              { key: idx },
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    question.answer_format == "text box"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  question.placeholder,
                                                max: question.limit
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "lga"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("LGA")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-form-select",
                                              {
                                                model: {
                                                  value: question.answer,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      question,
                                                      "answer",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "question.answer"
                                                }
                                              },
                                              [
                                                _c(
                                                  "b-form-select-option",
                                                  { attrs: { value: "" } },
                                                  [_vm._v("Select Lga")]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(_vm.lgas, function(
                                                  item,
                                                  idx
                                                ) {
                                                  return _c(
                                                    "b-form-select-option",
                                                    {
                                                      key: idx,
                                                      attrs: {
                                                        value: item.name
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(item.name))]
                                                  )
                                                })
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "email"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "email",
                                                placeholder:
                                                  question.placeholder
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "number"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "number",
                                                placeholder:
                                                  question.placeholder,
                                                max: question.limit
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "long text"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-textarea", {
                                              attrs: {
                                                placeholder:
                                                  question.placeholder
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "multi choice"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(question.options, function(
                                              opt,
                                              id
                                            ) {
                                              return _c(
                                                "b-form-checkbox",
                                                {
                                                  key: id,
                                                  attrs: { value: opt.name },
                                                  model: {
                                                    value: question.answers,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answers",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answers"
                                                  }
                                                },
                                                [_vm._v(_vm._s(opt.name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "single choice"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(question.options, function(
                                              opt,
                                              id
                                            ) {
                                              return _c(
                                                "b-form-radio",
                                                {
                                                  key: id,
                                                  attrs: { value: opt.name },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                },
                                                [_vm._v(_vm._s(opt.name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "date"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("b-calendar", {
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "time"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("b-time", {
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "multi text"
                                      ? _c(
                                          "b-form-group",
                                          _vm._l(question.answers, function(
                                            item,
                                            i
                                          ) {
                                            return _c(
                                              "div",
                                              { key: i },
                                              [
                                                _c("b-form-input", {
                                                  model: {
                                                    value: item.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("b-col", [
                                  question.tools.length
                                    ? _c(
                                        "div",
                                        [
                                          question.tools.includes("table")
                                            ? _c(
                                                "b-form-row",
                                                [
                                                  _c(
                                                    "b-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c("b-table", {
                                                        attrs: {
                                                          fields:
                                                            question.fields,
                                                          items: question.items
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          question.tools.includes("docs") ||
                                          question.tools.includes("media")
                                            ? _c(
                                                "b-form-row",
                                                [
                                                  _c(
                                                    "b-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c(
                                                        "b-form-row",
                                                        _vm._l(
                                                          question.documents,
                                                          function(doc, idx) {
                                                            return _c(
                                                              "b-col",
                                                              {
                                                                key: idx,
                                                                staticClass:
                                                                  "border p-2",
                                                                attrs: {
                                                                  cols: "3"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  [
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          type:
                                                                            "text",
                                                                          placeholder:
                                                                            "File name"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            doc.name,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              doc,
                                                                              "name",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "doc.name"
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c("Upload")
                                                                  ],
                                                                  1
                                                                )
                                                              ]
                                                            )
                                                          }
                                                        ),
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ])
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "justify-content-between w-100 my-3" },
                    [
                      _c("b-button", { on: { click: _vm.prev } }, [
                        _vm._v("Previous")
                      ]),
                      _vm._v(" "),
                      _vm.num < _vm.form.length + 1
                        ? _c("b-button", { on: { click: _vm.next } }, [
                            _vm._v("Next")
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=template&id=edbdd1ea&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Applications/template.vue?vue&type=template&id=edbdd1ea&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "router-link",
            { attrs: { to: "/forms" } },
            [
              _c(
                "b-button",
                {
                  staticClass: "m-2 mx-5",
                  attrs: { variant: "outline-darkgreen" }
                },
                [_vm._v("Back")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.form && _vm.options
        ? _c(
            "b-container",
            [
              _c(
                "b-form",
                {
                  staticClass: "border p-3",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("legend", { staticClass: "text-center mb-5" }, [
                    _vm._v(_vm._s(_vm.form.title))
                  ]),
                  _vm._v(" "),
                  !_vm.show
                    ? _c(
                        "b-row",
                        { staticClass: "p-4" },
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Full name")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter name"
                                    },
                                    model: {
                                      value: _vm.full_name,
                                      callback: function($$v) {
                                        _vm.full_name = $$v
                                      },
                                      expression: "full_name"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { cols: "5" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Email")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "email",
                                      placeholder: "Enter email address"
                                    },
                                    model: {
                                      value: _vm.email,
                                      callback: function($$v) {
                                        _vm.email = $$v
                                      },
                                      expression: "email"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { cols: "3" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Phone number")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "number",
                                      max: "11",
                                      placeholder: "Enter phone number"
                                    },
                                    model: {
                                      value: _vm.phone,
                                      callback: function($$v) {
                                        _vm.phone = $$v
                                      },
                                      expression: "phone"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.show
                    ? _c(
                        "section",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "b-form-row",
                            [
                              _c("b-col", { staticClass: "text-center" }, [
                                _c("p", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.options.description)
                                  }
                                })
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-row",
                            { staticClass: "justify-content-center" },
                            [
                              _c(
                                "b-button",
                                { on: { click: _vm.handleShow } },
                                [_vm._v("Begin Application")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.show && _vm.num < _vm.template.length
                    ? _c(
                        "section",
                        [
                          _c(
                            "b-form-row",
                            [
                              _c("b-col", { attrs: { cols: "12" } }, [
                                _c("h5", [
                                  _vm._v(_vm._s(_vm.template[_vm.num].title))
                                ]),
                                _vm._v(" "),
                                _c("p", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.template[_vm.num].description
                                    )
                                  }
                                })
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-row", [
                            _c(
                              "ol",
                              { staticClass: "w-100" },
                              _vm._l(_vm.template[_vm.num].question, function(
                                question,
                                idx
                              ) {
                                return _c(
                                  "li",
                                  { key: idx },
                                  [
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        question.answer_format == "text box"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-input", {
                                                  attrs: {
                                                    type: "text",
                                                    placeholder:
                                                      question.placeholder,
                                                    max: question.limit
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "lga"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [_vm._v("Lga")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-select",
                                                  {
                                                    model: {
                                                      value: question.answer,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          question,
                                                          "answer",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "question.answer"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "b-form-select-option",
                                                      { attrs: { value: "" } },
                                                      [_vm._v("Select Lga")]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(_vm.lgas, function(
                                                      item,
                                                      idx
                                                    ) {
                                                      return _c(
                                                        "b-form-select-option",
                                                        {
                                                          key: idx,
                                                          attrs: {
                                                            value: item.name
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(item.name)
                                                          )
                                                        ]
                                                      )
                                                    })
                                                  ],
                                                  2
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "email"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-input", {
                                                  attrs: {
                                                    type: "email",
                                                    placeholder:
                                                      question.placeholder
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "number"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-input", {
                                                  attrs: {
                                                    type: "number",
                                                    placeholder:
                                                      question.placeholder,
                                                    max: question.limit
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "long text"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-textarea", {
                                                  attrs: {
                                                    placeholder:
                                                      question.placeholder
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "multi choice"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  question.options,
                                                  function(opt, id) {
                                                    return _c(
                                                      "b-form-checkbox",
                                                      {
                                                        key: id,
                                                        attrs: {
                                                          value: opt.name
                                                        },
                                                        model: {
                                                          value:
                                                            question.answers,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "answers",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.answers"
                                                        }
                                                      },
                                                      [_vm._v(_vm._s(opt.name))]
                                                    )
                                                  }
                                                )
                                              ],
                                              2
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format ==
                                        "single choice"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  question.options,
                                                  function(opt, id) {
                                                    return _c(
                                                      "b-form-radio",
                                                      {
                                                        key: id,
                                                        attrs: {
                                                          value: opt.name
                                                        },
                                                        model: {
                                                          value:
                                                            question.answer,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "answer",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.answer"
                                                        }
                                                      },
                                                      [_vm._v(_vm._s(opt.name))]
                                                    )
                                                  }
                                                )
                                              ],
                                              2
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "date"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("b-calendar", {
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "time"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("b-time", {
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "multi text"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass: "mb-3",
                                                    attrs: { for: "" }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  question.answers,
                                                  function(item, i) {
                                                    return _c(
                                                      "div",
                                                      { key: i },
                                                      [
                                                        _c("b-form-input", {
                                                          model: {
                                                            value: item.answer,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "answer",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.answer"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  [
                                                    _c(
                                                      "b-button",
                                                      {
                                                        staticClass: "mr-3",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.addMore(
                                                              idx
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-plus-circle",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    question.answers.length > 1
                                                      ? _c(
                                                          "b-button",
                                                          {
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.removeMore(
                                                                  idx
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-minus-circle",
                                                              attrs: {
                                                                "aria-hidden":
                                                                  "true"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              ],
                                              2
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-col", [
                                      question.tools.length
                                        ? _c(
                                            "div",
                                            [
                                              question.tools.includes("table")
                                                ? _c(
                                                    "b-form-row",
                                                    [
                                                      _c(
                                                        "b-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "mb-2",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.addRow(
                                                                    idx
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Add row")]
                                                          ),
                                                          _vm._v(" "),
                                                          question.items
                                                            .length > 1
                                                            ? _c(
                                                                "b-button",
                                                                {
                                                                  staticClass:
                                                                    "mb-2",
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.removeRow(
                                                                        idx
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Remove row"
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c("b-table", {
                                                            attrs: {
                                                              fields: Object.keys(
                                                                question
                                                                  .items[0]
                                                              ),
                                                              items:
                                                                question.items,
                                                              bordered: ""
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                _vm._l(
                                                                  question.fields,
                                                                  function(
                                                                    field,
                                                                    ide
                                                                  ) {
                                                                    return {
                                                                      key:
                                                                        "cell(" +
                                                                        field +
                                                                        ")",
                                                                      fn: function(
                                                                        data
                                                                      ) {
                                                                        return [
                                                                          _c(
                                                                            "b-form-input",
                                                                            {
                                                                              attrs: {
                                                                                placeholder:
                                                                                  "type"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  data
                                                                                    .item[
                                                                                    field
                                                                                  ],
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    data.item,
                                                                                    field,
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "data.item[field]"
                                                                              }
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              null,
                                                              true
                                                            )
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              question.tools.includes("docs") ||
                                              question.tools.includes("media")
                                                ? _c(
                                                    "b-form-row",
                                                    [
                                                      _c(
                                                        "b-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "mb-3",
                                                              attrs: { for: "" }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  question.title
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("small", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                question.tools_description
                                                              )
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "my-2"
                                                            },
                                                            [
                                                              _c(
                                                                "b-button",
                                                                {
                                                                  staticClass:
                                                                    "mr-3",
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.addDoc(
                                                                        idx
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fa fa-plus-circle",
                                                                    attrs: {
                                                                      "aria-hidden":
                                                                        "true"
                                                                    }
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              question.documents
                                                                .length > 1
                                                                ? _c(
                                                                    "b-button",
                                                                    {
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.removeDoc(
                                                                            idx
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "fa fa-times-circle",
                                                                        attrs: {
                                                                          "aria-hidden":
                                                                            "true"
                                                                        }
                                                                      })
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-row",
                                                            {
                                                              staticClass:
                                                                "w-100"
                                                            },
                                                            _vm._l(
                                                              question.documents,
                                                              function(
                                                                doc,
                                                                ind
                                                              ) {
                                                                return _c(
                                                                  "b-col",
                                                                  {
                                                                    key: ind,
                                                                    staticClass:
                                                                      "p-2",
                                                                    attrs: {
                                                                      cols: "3"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "border upload"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "b-form-input",
                                                                          {
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              placeholder:
                                                                                "File name"
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                doc.name,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  doc,
                                                                                  "name",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "doc.name"
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "Upload",
                                                                          {
                                                                            attrs: {
                                                                              index: idx,
                                                                              id: ind,
                                                                              label:
                                                                                doc.name
                                                                            },
                                                                            on: {
                                                                              getUploadDetails:
                                                                                _vm.getUploadDetails
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        question.tools.includes(
                                                                          "media"
                                                                        )
                                                                          ? _c(
                                                                              "b-img",
                                                                              {
                                                                                attrs: {
                                                                                  rounded:
                                                                                    "",
                                                                                  fluid:
                                                                                    "",
                                                                                  width:
                                                                                    "150px",
                                                                                  src:
                                                                                    doc.file
                                                                                }
                                                                              }
                                                                            )
                                                                          : _vm._e()
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.options.signature
                    ? _c("div", [
                        _vm.show && _vm.num >= _vm.template.length
                          ? _c(
                              "section",
                              [
                                _c(
                                  "b-row",
                                  [
                                    _c("b-col", { attrs: { cols: "12" } }, [
                                      _c("h5", [_vm._v("SIGNATURE")]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _c("strong", [
                                          _vm._v(
                                            "I certify that the information submitted in this application is true and correct to the best of my knowledge."
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "I further understand that any false statements may result in denial or revocation of the approval."
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Full Name :")]),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Date :")])
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _vm.options.payment
                                  ? _c(
                                      "b-row",
                                      [
                                        _c("b-col", { attrs: { cols: "12" } }, [
                                          _c("p", [
                                            _c("strong", [
                                              _vm._v(
                                                "Price: ₦ " +
                                                  _vm._s(_vm.options.price) +
                                                  ".00"
                                              )
                                            ])
                                          ])
                                        ])
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.show
                    ? _c(
                        "b-row",
                        { staticClass: "justify-content-between px-3 my-3" },
                        [
                          _c("b-button", { on: { click: _vm.prev } }, [
                            _vm._v("Previous")
                          ]),
                          _vm._v(" "),
                          _vm.num < _vm.template.length
                            ? _c("b-button", { on: { click: _vm.next } }, [
                                _vm._v("Next")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.options.payment && _vm.num >= _vm.template.length
                            ? _c("div", [_c("Payment")], 1)
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.options.payment && _vm.num >= _vm.template.length
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "b-button",
                                    { attrs: { type: "submit" } },
                                    [_vm._v("Submit")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.options.feedback
        ? _c(
            "b-modal",
            { attrs: { id: "modal-1", size: "lg", "hide-footer": "" } },
            [
              _vm.options.feedback
                ? _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("h5", [_vm._v(_vm._s(_vm.options.feedback.title))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.options.feedback.text))]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "outline-darkgreen" },
                          on: { click: _vm.closeForm }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        { attrs: { id: "modal-2", size: "lg", "hide-footer": "" } },
        [
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("h5", [
                _vm._v("Application Error "),
                _c("i", {
                  staticClass: "fa fa-exclamation-circle",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "You previous application needs to be approved before you can proceed"
                )
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "outline-darkgreen" },
                  on: { click: _vm.closeForm }
                },
                [_vm._v("Close")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=template&id=9b85d6b2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/create.vue?vue&type=template&id=9b85d6b2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "body" },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "b-container",
            [
              _c(
                "b-row",
                { staticClass: "py-3 justify-content-end" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-1",
                          modifiers: { "modal-1": true }
                        }
                      ],
                      staticClass: "mr-3",
                      attrs: { variant: "outline-darkgreen", pill: "" }
                    },
                    [_vm._v("Review")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { type: "submit", variant: "darkgreen", pill: "" }
                    },
                    [_vm._v("Publish")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "py-3" },
                [
                  _c(
                    "b-button",
                    { staticClass: "mr-3", on: { click: _vm.addSection } },
                    [_vm._v("Add section")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.form, function(section, index) {
                return _c(
                  "section",
                  { key: index, staticClass: "border p-2 mb-2" },
                  [
                    _c(
                      "div",
                      { staticClass: "py-2 d-flex justify-content-between" },
                      [
                        _c("h5", [
                          _vm._v(
                            _vm._s(
                              section.title == "" ? "Section" : section.title
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              staticClass: "mr-2 cpointer",
                              on: {
                                click: function($event) {
                                  return _vm.hideSection(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.opened.includes(index) ? "Hide" : "Show"
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.removeSection(index)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-times-circle cpointer",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.opened.includes(index)
                      ? _c(
                          "div",
                          { staticClass: "m-4" },
                          [
                            _c(
                              "b-row",
                              { staticClass: "mb-5 border py-3" },
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "8" } },
                                  [
                                    _c(
                                      "b-form-group",
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "section" } },
                                          [_vm._v("Section Title")]
                                        ),
                                        _vm._v(" "),
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "section",
                                            placeholder: "Enter title"
                                          },
                                          model: {
                                            value: section.title,
                                            callback: function($$v) {
                                              _vm.$set(section, "title", $$v)
                                            },
                                            expression: "section.title"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-group",
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "section" } },
                                          [_vm._v("Section Description")]
                                        ),
                                        _vm._v(" "),
                                        _c("app-editor", {
                                          staticClass: "form-control",
                                          attrs: {
                                            apiKey:
                                              "a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7",
                                            init: {
                                              selector: "textarea",
                                              toolbar_mode: "floating",
                                              plugins:
                                                "advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ",
                                              toolbar:
                                                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table",
                                              image_title: true,
                                              height: 300,
                                              file_picker_types: "image",
                                              automatic_uploads: false,
                                              relative_urls: false,
                                              convert_urls: false,
                                              images_upload_handler: function(
                                                blobInfo,
                                                success,
                                                failure
                                              ) {
                                                _vm.upload_handler(
                                                  blobInfo,
                                                  success,
                                                  failure
                                                )
                                              },
                                              file_picker_callback: function(
                                                callback,
                                                value,
                                                meta
                                              ) {
                                                _vm.loadFile(
                                                  callback,
                                                  value,
                                                  meta
                                                )
                                              },
                                              images_dataimg_filter: function(
                                                img
                                              ) {
                                                return img.hasAttribute(
                                                  "internal-blob"
                                                )
                                              }
                                            }
                                          },
                                          model: {
                                            value: section.description,
                                            callback: function($$v) {
                                              _vm.$set(
                                                section,
                                                "description",
                                                $$v
                                              )
                                            },
                                            expression: "section.description"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-col",
                                  [
                                    _c(
                                      "b-form-group",
                                      [
                                        _c("label", { attrs: { for: "" } }, [
                                          _vm._v("Add Tools")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          {
                                            attrs: { value: "table" },
                                            model: {
                                              value: section.tools,
                                              callback: function($$v) {
                                                _vm.$set(section, "tools", $$v)
                                              },
                                              expression: "section.tools"
                                            }
                                          },
                                          [_vm._v("Table")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          {
                                            attrs: { value: "docs" },
                                            model: {
                                              value: section.tools,
                                              callback: function($$v) {
                                                _vm.$set(section, "tools", $$v)
                                              },
                                              expression: "section.tools"
                                            }
                                          },
                                          [_vm._v("Attach Docs")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          {
                                            attrs: { value: " media" },
                                            model: {
                                              value: section.tools,
                                              callback: function($$v) {
                                                _vm.$set(section, "tools", $$v)
                                              },
                                              expression: "section.tools"
                                            }
                                          },
                                          [_vm._v("Attach Media")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    section.tools.includes("table")
                                      ? _c(
                                          "div",
                                          [
                                            _vm._l(section.fields, function(
                                              field,
                                              idxxx
                                            ) {
                                              return _c(
                                                "div",
                                                { key: idxxx },
                                                [
                                                  _c("b-form-input", {
                                                    attrs: {
                                                      placeholder:
                                                        "Table fields"
                                                    },
                                                    model: {
                                                      value: field.key,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          field,
                                                          "key",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "field.key"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "b-row",
                                              { staticClass: "p-3" },
                                              [
                                                _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "mr-3",
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.addField(
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Add")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-button",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.removeField(
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Remove")]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-row",
                              [
                                _c(
                                  "b-col",
                                  { staticClass: "p-0", attrs: { cols: "12" } },
                                  [_c("h5", [_vm._v("Questions")])]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-row",
                              { staticClass: "py-3" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "mr-3",
                                    on: {
                                      click: function($event) {
                                        return _vm.addQuestion(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-plus-circle",
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.removeQuestion(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-times-circle",
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(section.question, function(question, idx) {
                              return _c(
                                "b-row",
                                { key: idx, staticClass: "border p-2" },
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      !_vm.openedQuestion.includes(idx)
                                        ? _c("div", [
                                            _vm._v(_vm._s(question.title))
                                          ])
                                        : _vm._e(),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "ml-auto",
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleQuestion(idx)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-minus-circle",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.openedQuestion.includes(idx)
                                    ? _c(
                                        "div",
                                        { staticClass: "d-flex w-100" },
                                        [
                                          _c(
                                            "b-col",
                                            [
                                              _c(
                                                "b-form-row",
                                                [
                                                  _c(
                                                    "b-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c(
                                                        "b-form-group",
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              attrs: { for: "" }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Type Question"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              placeholder:
                                                                "Question"
                                                            },
                                                            model: {
                                                              value:
                                                                question.title,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  question,
                                                                  "title",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "question.title"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-col",
                                                    [
                                                      _c(
                                                        "b-form-group",
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              attrs: { for: "" }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Question guide (Optional)"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              placeholder:
                                                                "Question guide"
                                                            },
                                                            model: {
                                                              value:
                                                                question.guide,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  question,
                                                                  "guide",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "question.guide"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            [
                                              _c(
                                                "b-form-group",
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "" } },
                                                    [_vm._v("Answer Format")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-form-select",
                                                    {
                                                      model: {
                                                        value:
                                                          question.answer_format,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            question,
                                                            "answer_format",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "question.answer_format"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: { value: "" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Select Format"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value:
                                                              "multi choice"
                                                          }
                                                        },
                                                        [_vm._v("Multi Choice")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value:
                                                              "single choice"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Single Choice"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "text box"
                                                          }
                                                        },
                                                        [_vm._v("Text box")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "long text"
                                                          }
                                                        },
                                                        [_vm._v("Long Text")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "number"
                                                          }
                                                        },
                                                        [_vm._v("Number")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "multi text"
                                                          }
                                                        },
                                                        [_vm._v("Multi Text")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "date"
                                                          }
                                                        },
                                                        [_vm._v("Date")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "time"
                                                          }
                                                        },
                                                        [_vm._v("Time")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "time"
                                                          }
                                                        },
                                                        [_vm._v("Email")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-select-option",
                                                        {
                                                          attrs: {
                                                            value: "lga"
                                                          }
                                                        },
                                                        [_vm._v("LGAs")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              question.answer_format ==
                                                "text box" ||
                                              question.answer_format == "number"
                                                ? _c(
                                                    "b-form-group",
                                                    [
                                                      _c(
                                                        "label",
                                                        { attrs: { for: "" } },
                                                        [
                                                          _vm._v(
                                                            "Placeholder value"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          placeholder:
                                                            "Placeholder value"
                                                        },
                                                        model: {
                                                          value:
                                                            question.placeholder,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "placeholder",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.placeholder"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              question.answer_format ==
                                                "text box" ||
                                              question.answer_format == "number"
                                                ? _c(
                                                    "div",
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          type: "number",
                                                          placeholder:
                                                            "Character limit"
                                                        },
                                                        model: {
                                                          value: question.limit,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "limit",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.limit"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              question.answer_format ==
                                                "multi choice" ||
                                              question.answer_format ==
                                                "single choice"
                                                ? _c(
                                                    "div",
                                                    [
                                                      _vm._l(
                                                        question.options,
                                                        function(option, idxx) {
                                                          return _c(
                                                            "div",
                                                            { key: idxx },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    placeholder:
                                                                      "Options"
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      option.name,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        option,
                                                                        "name",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "option.name"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-row",
                                                        { staticClass: "p-3" },
                                                        [
                                                          _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "mr-3",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.addOption(
                                                                    index,
                                                                    idx
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Add")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-button",
                                                            {
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.removeOption(
                                                                    index,
                                                                    idx
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Remove")]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    2
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      : _vm._e()
                  ]
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-modal",
            {
              attrs: {
                id: "modal-1",
                title: "Review",
                size: "lg",
                "hide-footer": ""
              }
            },
            [_c("Review", { attrs: { options: _vm.options, form: _vm.form } })],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=template&id=289c5612&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/index.vue?vue&type=template&id=289c5612&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        [
          _vm.type == ""
            ? _c(
                "b-row",
                {
                  staticClass: "h-100 justify-content-center align-items-center"
                },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "box shadow",
                      on: {
                        click: function($event) {
                          return _vm.handleType("group")
                        }
                      }
                    },
                    [_vm._v("Application Group")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "box shadow" },
                    [
                      _c("router-link", { attrs: { to: "/form-create" } }, [
                        _vm._v("Forms")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "box shadow",
                      on: {
                        click: function($event) {
                          return _vm.handleType("applications")
                        }
                      }
                    },
                    [_vm._v("Applications")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.type == "group"
            ? _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      _c("b-row", [
                        _c("h4", { staticClass: "mb-4" }, [
                          _vm._v("Application Groups")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mb-3" },
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "9" } },
                            [
                              _c("b-table", {
                                attrs: {
                                  items: _vm.appGroups,
                                  fields: _vm.appFields
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "cell(sn)",
                                      fn: function(data) {
                                        return [
                                          _c("div", [
                                            _vm._v(_vm._s(data.index + 1))
                                          ])
                                        ]
                                      }
                                    },
                                    {
                                      key: "cell(action)",
                                      fn: function(data) {
                                        return [_c("div", [_vm._v("Edit")])]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  493339137
                                )
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "bg-lightwhite p-2",
                              attrs: { cols: "3" }
                            },
                            [
                              _c(
                                "b-form",
                                [
                                  _c("div", { staticClass: "text-center" }, [
                                    _c("strong", [_vm._v("New Group")])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Title")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-input", {
                                                staticClass: "mb-3",
                                                attrs: { placeholder: "Title" },
                                                model: {
                                                  value: _vm.group.title,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "title",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "group.title"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Phases")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-input", {
                                                staticClass: "mb-3",
                                                attrs: {
                                                  placeholder: "4",
                                                  type: "number"
                                                },
                                                model: {
                                                  value: _vm.group.phase,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "phase",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "group.phase"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Description")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-textarea", {
                                                model: {
                                                  value: _vm.group.description,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "description",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "group.description"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Purpose")]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-textarea", {
                                                model: {
                                                  value: _vm.group.purpose,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.group,
                                                      "purpose",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "group.purpose"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                { on: { click: _vm.addGroup } },
                                                [_vm._v("Create")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=template&id=48c82c09&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/list.vue?vue&type=template&id=48c82c09&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        [
          _c("b-table", {
            attrs: { items: _vm.items, fields: _vm.fields, bordered: "" },
            scopedSlots: _vm._u([
              {
                key: "cell(sn)",
                fn: function(data) {
                  return [
                    _c("div", [
                      _vm._v(
                        "\n                    " +
                          _vm._s(data.index + 1) +
                          "\n                "
                      )
                    ])
                  ]
                }
              },
              {
                key: "cell(action)",
                fn: function(data) {
                  return [
                    _c(
                      "div",
                      {
                        on: {
                          click: function($event) {
                            return _vm.view(data.item)
                          }
                        }
                      },
                      [_vm._v("\n                   view\n                ")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=template&id=bdc204fa&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/options.vue?vue&type=template&id=bdc204fa&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.type == "option"
        ? _c(
            "b-container",
            [
              _c("h4", { staticClass: "text-center mb-5" }, [
                _vm._v("Form Settings")
              ]),
              _vm._v(" "),
              _c(
                "b-form",
                [
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("General Information")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Form Title")
                              ]),
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: { placeholder: "title" },
                                model: {
                                  value: _vm.options.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options, "title", $$v)
                                  },
                                  expression: "options.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Application Group")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-form-select",
                                {
                                  model: {
                                    value: _vm.options.app_group,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "app_group", $$v)
                                    },
                                    expression: "options.app_group"
                                  }
                                },
                                [
                                  _c(
                                    "b-form-select-option",
                                    { attrs: { value: "", disabled: "" } },
                                    [_vm._v("Select Group")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.appGroups, function(item, idx) {
                                    return _c(
                                      "b-form-select-option",
                                      {
                                        key: idx,
                                        attrs: { value: item.title }
                                      },
                                      [_vm._v(_vm._s(item.title))]
                                    )
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "12" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Form Description")
                              ]),
                              _vm._v(" "),
                              _c("b-form-textarea", {
                                model: {
                                  value: _vm.options.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options, "description", $$v)
                                  },
                                  expression: "options.description"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Form Phase")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c("b-form-input", {
                            staticClass: "w-25",
                            attrs: {
                              type: "number",
                              placeholder: "Phase number"
                            },
                            model: {
                              value: _vm.options.phase,
                              callback: function($$v) {
                                _vm.$set(_vm.options, "phase", $$v)
                              },
                              expression: "options.phase"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Feedback")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "12" } },
                            [
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: "manual" },
                                  model: {
                                    value: _vm.options.feedback.type,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.options.feedback,
                                        "type",
                                        $$v
                                      )
                                    },
                                    expression: "options.feedback.type"
                                  }
                                },
                                [_vm._v("Manual")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: "automatic" },
                                  model: {
                                    value: _vm.options.feedback.type,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.options.feedback,
                                        "type",
                                        $$v
                                      )
                                    },
                                    expression: "options.feedback.type"
                                  }
                                },
                                [_vm._v("Automatic")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "12" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Title")
                              ]),
                              _vm._v(" "),
                              _c("b-form-input", {
                                model: {
                                  value: _vm.options.feedback.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options.feedback, "title", $$v)
                                  },
                                  expression: "options.feedback.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Text")
                              ]),
                              _vm._v(" "),
                              _c("b-form-textarea", {
                                model: {
                                  value: _vm.options.feedback.text,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options.feedback, "text", $$v)
                                  },
                                  expression: "options.feedback.text"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-3", attrs: { cols: "6" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Purpose")
                              ]),
                              _vm._v(" "),
                              _c("b-form-textarea", {
                                model: {
                                  value: _vm.options.feedback.purpose,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.options.feedback,
                                      "purpose",
                                      $$v
                                    )
                                  },
                                  expression: "options.feedback.purpose"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Signature")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-form-group",
                            [
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: true },
                                  model: {
                                    value: _vm.options.signature,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "signature", $$v)
                                    },
                                    expression: "options.signature"
                                  }
                                },
                                [_vm._v("Yes")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: false },
                                  model: {
                                    value: _vm.options.signature,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "signature", $$v)
                                    },
                                    expression: "options.signature"
                                  }
                                },
                                [_vm._v("No")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("h5", [_vm._v("Payment")]),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-form-group",
                            [
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: true },
                                  model: {
                                    value: _vm.options.payment,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "payment", $$v)
                                    },
                                    expression: "options.payment"
                                  }
                                },
                                [_vm._v("Yes")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-radio",
                                {
                                  attrs: { value: false },
                                  model: {
                                    value: _vm.options.payment,
                                    callback: function($$v) {
                                      _vm.$set(_vm.options, "payment", $$v)
                                    },
                                    expression: "options.payment"
                                  }
                                },
                                [_vm._v("No")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.options.payment
                        ? _c(
                            "b-form-row",
                            [
                              _c("b-form-input", {
                                attrs: { placeholder: "Price" },
                                model: {
                                  value: _vm.options.price,
                                  callback: function($$v) {
                                    _vm.$set(_vm.options, "price", $$v)
                                  },
                                  expression: "options.price"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "darkgreen" },
                      on: {
                        click: function($event) {
                          return _vm.handleType("create")
                        }
                      }
                    },
                    [_vm._v("Save Settings")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "p-0" },
        [
          _vm.type == "list"
            ? _c(
                "b-row",
                { staticClass: "p-3" },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "darkgreen" },
                      on: {
                        click: function($event) {
                          return _vm.handleType("option")
                        }
                      }
                    },
                    [_vm._v("Create Form")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.type == "create"
        ? _c("Creation", { attrs: { options: _vm.options } })
        : _vm._e(),
      _vm._v(" "),
      _vm.type == "list"
        ? _c("List", { attrs: { options: _vm.options } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/review.vue?vue&type=template&id=20c845fa&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/review.vue?vue&type=template&id=20c845fa&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.form
        ? _c(
            "b-container",
            [
              _c(
                "b-form",
                [
                  _c("legend", { staticClass: "text-center mb-5" }, [
                    _vm._v(_vm._s(_vm.options.title))
                  ]),
                  _vm._v(" "),
                  _vm.num < _vm.form.length
                    ? _c(
                        "section",
                        [
                          _c(
                            "b-form-row",
                            [
                              _c("b-col", { attrs: { cols: "12" } }, [
                                _c("h5", [
                                  _vm._v(_vm._s(_vm.form[_vm.num].title))
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(_vm._s(_vm.form[_vm.num].description))
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.form[_vm.num].question, function(
                            question,
                            idx
                          ) {
                            return _c(
                              "b-form-row",
                              { key: idx },
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    question.answer_format == "text box"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  question.placeholder,
                                                max: question.limit
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "lga"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("LGA")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-form-select",
                                              {
                                                model: {
                                                  value: question.answer,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      question,
                                                      "answer",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "question.answer"
                                                }
                                              },
                                              [
                                                _c(
                                                  "b-form-select-option",
                                                  { attrs: { value: "" } },
                                                  [_vm._v("Select Lga")]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(_vm.lgas, function(
                                                  item,
                                                  idx
                                                ) {
                                                  return _c(
                                                    "b-form-select-option",
                                                    {
                                                      key: idx,
                                                      attrs: {
                                                        value: item.name
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(item.name))]
                                                  )
                                                })
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "email"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "email",
                                                placeholder:
                                                  question.placeholder
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "number"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "number",
                                                placeholder:
                                                  question.placeholder,
                                                max: question.limit
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "long text"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("b-form-textarea", {
                                              attrs: {
                                                placeholder:
                                                  question.placeholder
                                              },
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "multi choice"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(question.options, function(
                                              opt,
                                              id
                                            ) {
                                              return _c(
                                                "b-form-checkbox",
                                                {
                                                  key: id,
                                                  attrs: { value: opt.name },
                                                  model: {
                                                    value: question.answers,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answers",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answers"
                                                  }
                                                },
                                                [_vm._v(_vm._s(opt.name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "single choice"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(question.options, function(
                                              opt,
                                              id
                                            ) {
                                              return _c(
                                                "b-form-radio",
                                                {
                                                  key: id,
                                                  attrs: { value: opt.name },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                },
                                                [_vm._v(_vm._s(opt.name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "date"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("b-calendar", {
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "time"
                                      ? _c(
                                          "b-form-group",
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v(_vm._s(question.title))]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("b-time", {
                                              model: {
                                                value: question.answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    question,
                                                    "answer",
                                                    $$v
                                                  )
                                                },
                                                expression: "question.answer"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.answer_format == "multi text"
                                      ? _c(
                                          "b-form-group",
                                          _vm._l(question.answers, function(
                                            item,
                                            i
                                          ) {
                                            return _c(
                                              "div",
                                              { key: i },
                                              [
                                                _c("b-form-input", {
                                                  model: {
                                                    value: item.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _vm.form[_vm.num].tools.length
                            ? _c(
                                "div",
                                [
                                  _vm.form[_vm.num].tools.includes("table")
                                    ? _c(
                                        "b-form-row",
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("b-table", {
                                                attrs: {
                                                  fields:
                                                    _vm.form[_vm.num].fields,
                                                  items: _vm.form[_vm.num].items
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.form[_vm.num].tools.includes("docs") ||
                                  _vm.form[_vm.num].tools.includes("media")
                                    ? _c(
                                        "b-form-row",
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "b-form-row",
                                                _vm._l(
                                                  _vm.form[_vm.num].documents,
                                                  function(doc, idx) {
                                                    return _c(
                                                      "b-col",
                                                      {
                                                        key: idx,
                                                        staticClass:
                                                          "border p-2",
                                                        attrs: { cols: "3" }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                type: "text",
                                                                placeholder:
                                                                  "File name"
                                                              },
                                                              model: {
                                                                value: doc.name,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    doc,
                                                                    "name",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "doc.name"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c("Upload", {
                                                              attrs: {
                                                                index: _vm.num,
                                                                id: doc.name
                                                              },
                                                              on: {
                                                                getUploadDetails:
                                                                  _vm.getUploadDetails
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            doc.name !== "" ||
                                                            doc.name !== null
                                                              ? _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "form-control"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "File Name: " +
                                                                        _vm._s(
                                                                          doc.name
                                                                        )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    )
                                                  }
                                                ),
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.show
                    ? _c(
                        "b-row",
                        { staticClass: "justify-content-between w-100 my-3" },
                        [
                          _c("b-button", { on: { click: _vm.prev } }, [
                            _vm._v("Previous")
                          ]),
                          _vm._v(" "),
                          _vm.num < _vm.form.length + 1
                            ? _c("b-button", { on: { click: _vm.next } }, [
                                _vm._v("Next")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.num > _vm.form.length
                            ? _c("b-button", { attrs: { type: "submit" } }, [
                                _vm._v("Continue to payment")
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=template&id=7eee4f36&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/template.vue?vue&type=template&id=7eee4f36&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navigation"),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "router-link",
            { attrs: { to: "/forms" } },
            [
              _c(
                "b-button",
                {
                  staticClass: "m-2 mx-5",
                  attrs: { variant: "outline-darkgreen" }
                },
                [_vm._v("Back")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.form && _vm.options
        ? _c(
            "b-container",
            [
              _c(
                "b-form",
                {
                  staticClass: "border p-3",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("legend", { staticClass: "text-center mb-5" }, [
                    _vm._v(_vm._s(_vm.form.title))
                  ]),
                  _vm._v(" "),
                  !_vm.show
                    ? _c(
                        "b-row",
                        { staticClass: "p-4" },
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Full name")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter name"
                                    },
                                    model: {
                                      value: _vm.full_name,
                                      callback: function($$v) {
                                        _vm.full_name = $$v
                                      },
                                      expression: "full_name"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { cols: "5" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Email")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "email",
                                      placeholder: "Enter email address"
                                    },
                                    model: {
                                      value: _vm.email,
                                      callback: function($$v) {
                                        _vm.email = $$v
                                      },
                                      expression: "email"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { cols: "3" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Phone number")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "number",
                                      max: "11",
                                      placeholder: "Enter phone number"
                                    },
                                    model: {
                                      value: _vm.phone,
                                      callback: function($$v) {
                                        _vm.phone = $$v
                                      },
                                      expression: "phone"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.show
                    ? _c(
                        "section",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "b-form-row",
                            [
                              _c("b-col", { staticClass: "text-center" }, [
                                _c("p", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.options.description)
                                  }
                                })
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-row",
                            { staticClass: "justify-content-center" },
                            [
                              _c(
                                "b-button",
                                { on: { click: _vm.handleShow } },
                                [_vm._v("Begin Application")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.show && _vm.num < _vm.template.length
                    ? _c(
                        "section",
                        [
                          _c(
                            "b-form-row",
                            [
                              _c("b-col", { attrs: { cols: "12" } }, [
                                _c("h5", [
                                  _vm._v(_vm._s(_vm.template[_vm.num].title))
                                ]),
                                _vm._v(" "),
                                _c("p", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.template[_vm.num].description
                                    )
                                  }
                                })
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-row", [
                            _c(
                              "ol",
                              { staticClass: "w-100" },
                              _vm._l(_vm.template[_vm.num].question, function(
                                question,
                                idx
                              ) {
                                return _c(
                                  "li",
                                  { key: idx },
                                  [
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        question.answer_format == "text box"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-input", {
                                                  attrs: {
                                                    type: "text",
                                                    placeholder:
                                                      question.placeholder,
                                                    max: question.limit
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "lga"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [_vm._v("Lga")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-select",
                                                  {
                                                    model: {
                                                      value: question.answer,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          question,
                                                          "answer",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "question.answer"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "b-form-select-option",
                                                      { attrs: { value: "" } },
                                                      [_vm._v("Select Lga")]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(_vm.lgas, function(
                                                      item,
                                                      idx
                                                    ) {
                                                      return _c(
                                                        "b-form-select-option",
                                                        {
                                                          key: idx,
                                                          attrs: {
                                                            value: item.name
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(item.name)
                                                          )
                                                        ]
                                                      )
                                                    })
                                                  ],
                                                  2
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "email"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-input", {
                                                  attrs: {
                                                    type: "email",
                                                    placeholder:
                                                      question.placeholder
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "number"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-input", {
                                                  attrs: {
                                                    type: "number",
                                                    placeholder:
                                                      question.placeholder,
                                                    max: question.limit
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "long text"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("b-form-textarea", {
                                                  attrs: {
                                                    placeholder:
                                                      question.placeholder
                                                  },
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "multi choice"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  question.options,
                                                  function(opt, id) {
                                                    return _c(
                                                      "b-form-checkbox",
                                                      {
                                                        key: id,
                                                        attrs: {
                                                          value: opt.name
                                                        },
                                                        model: {
                                                          value:
                                                            question.answers,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "answers",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.answers"
                                                        }
                                                      },
                                                      [_vm._v(_vm._s(opt.name))]
                                                    )
                                                  }
                                                )
                                              ],
                                              2
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format ==
                                        "single choice"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  question.options,
                                                  function(opt, id) {
                                                    return _c(
                                                      "b-form-radio",
                                                      {
                                                        key: id,
                                                        attrs: {
                                                          value: opt.name
                                                        },
                                                        model: {
                                                          value:
                                                            question.answer,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              question,
                                                              "answer",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "question.answer"
                                                        }
                                                      },
                                                      [_vm._v(_vm._s(opt.name))]
                                                    )
                                                  }
                                                )
                                              ],
                                              2
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "date"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("b-calendar", {
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "time"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  { attrs: { for: "" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("b-time", {
                                                  model: {
                                                    value: question.answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.answer"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        question.answer_format == "multi text"
                                          ? _c(
                                              "b-form-group",
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass: "mb-3",
                                                    attrs: { for: "" }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(question.title)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  question.answers,
                                                  function(item, i) {
                                                    return _c(
                                                      "div",
                                                      { key: i },
                                                      [
                                                        _c("b-form-input", {
                                                          model: {
                                                            value: item.answer,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "answer",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.answer"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  [
                                                    _c(
                                                      "b-button",
                                                      {
                                                        staticClass: "mr-3",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.addMore(
                                                              idx
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-plus-circle",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    question.answers.length > 1
                                                      ? _c(
                                                          "b-button",
                                                          {
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.removeMore(
                                                                  idx
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-minus-circle",
                                                              attrs: {
                                                                "aria-hidden":
                                                                  "true"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              ],
                                              2
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-col", [
                                      question.tools.length
                                        ? _c(
                                            "div",
                                            [
                                              question.tools.includes("table")
                                                ? _c(
                                                    "b-form-row",
                                                    [
                                                      _c(
                                                        "b-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "mb-2",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.addRow(
                                                                    idx
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Add row")]
                                                          ),
                                                          _vm._v(" "),
                                                          question.items
                                                            .length > 1
                                                            ? _c(
                                                                "b-button",
                                                                {
                                                                  staticClass:
                                                                    "mb-2",
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.removeRow(
                                                                        idx
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Remove row"
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c("b-table", {
                                                            attrs: {
                                                              fields: Object.keys(
                                                                question
                                                                  .items[0]
                                                              ),
                                                              items:
                                                                question.items,
                                                              bordered: ""
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                _vm._l(
                                                                  question.fields,
                                                                  function(
                                                                    field,
                                                                    ide
                                                                  ) {
                                                                    return {
                                                                      key:
                                                                        "cell(" +
                                                                        field +
                                                                        ")",
                                                                      fn: function(
                                                                        data
                                                                      ) {
                                                                        return [
                                                                          _c(
                                                                            "b-form-input",
                                                                            {
                                                                              attrs: {
                                                                                placeholder:
                                                                                  "type"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  data
                                                                                    .item[
                                                                                    field
                                                                                  ],
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    data.item,
                                                                                    field,
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "data.item[field]"
                                                                              }
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              null,
                                                              true
                                                            )
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              question.tools.includes("docs") ||
                                              question.tools.includes("media")
                                                ? _c(
                                                    "b-form-row",
                                                    [
                                                      _c(
                                                        "b-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "mb-3",
                                                              attrs: { for: "" }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  question.title
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("small", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                question.tools_description
                                                              )
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "my-2"
                                                            },
                                                            [
                                                              _c(
                                                                "b-button",
                                                                {
                                                                  staticClass:
                                                                    "mr-3",
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.addDoc(
                                                                        idx
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fa fa-plus-circle",
                                                                    attrs: {
                                                                      "aria-hidden":
                                                                        "true"
                                                                    }
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              question.documents
                                                                .length > 1
                                                                ? _c(
                                                                    "b-button",
                                                                    {
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.removeDoc(
                                                                            idx
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "fa fa-times-circle",
                                                                        attrs: {
                                                                          "aria-hidden":
                                                                            "true"
                                                                        }
                                                                      })
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-row",
                                                            {
                                                              staticClass:
                                                                "w-100"
                                                            },
                                                            _vm._l(
                                                              question.documents,
                                                              function(
                                                                doc,
                                                                ind
                                                              ) {
                                                                return _c(
                                                                  "b-col",
                                                                  {
                                                                    key: ind,
                                                                    staticClass:
                                                                      "p-2",
                                                                    attrs: {
                                                                      cols: "3"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "border upload"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "b-form-input",
                                                                          {
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              placeholder:
                                                                                "File name"
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                doc.name,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  doc,
                                                                                  "name",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "doc.name"
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "Upload",
                                                                          {
                                                                            attrs: {
                                                                              index: idx,
                                                                              id: ind,
                                                                              label:
                                                                                doc.name
                                                                            },
                                                                            on: {
                                                                              getUploadDetails:
                                                                                _vm.getUploadDetails
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        question.tools.includes(
                                                                          "media"
                                                                        )
                                                                          ? _c(
                                                                              "b-img",
                                                                              {
                                                                                attrs: {
                                                                                  rounded:
                                                                                    "",
                                                                                  fluid:
                                                                                    "",
                                                                                  width:
                                                                                    "150px",
                                                                                  src:
                                                                                    doc.file
                                                                                }
                                                                              }
                                                                            )
                                                                          : _vm._e()
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.options.signature
                    ? _c("div", [
                        _vm.show && _vm.num >= _vm.template.length
                          ? _c(
                              "section",
                              [
                                _c(
                                  "b-row",
                                  [
                                    _c("b-col", { attrs: { cols: "12" } }, [
                                      _c("h5", [_vm._v("SIGNATURE")]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _c("strong", [
                                          _vm._v(
                                            "I certify that the information submitted in this application is true and correct to the best of my knowledge."
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "I further understand that any false statements may result in denial or revocation of the approval."
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Full Name :")]),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Date :")])
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _vm.options.payment
                                  ? _c(
                                      "b-row",
                                      [
                                        _c("b-col", { attrs: { cols: "12" } }, [
                                          _c("p", [
                                            _c("strong", [
                                              _vm._v(
                                                "Price: ₦" +
                                                  _vm._s(_vm.options.price) +
                                                  ".00"
                                              )
                                            ])
                                          ])
                                        ])
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.show
                    ? _c(
                        "b-row",
                        { staticClass: "justify-content-between px-3 my-3" },
                        [
                          _c("b-button", { on: { click: _vm.prev } }, [
                            _vm._v("Previous")
                          ]),
                          _vm._v(" "),
                          _vm.num < _vm.template.length
                            ? _c("b-button", { on: { click: _vm.next } }, [
                                _vm._v("Next")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.options.payment && _vm.num >= _vm.template.length
                            ? _c(
                                "div",
                                [
                                  _c("Payment", {
                                    attrs: {
                                      amount: Number(_vm.options.price),
                                      email: _vm.email
                                    },
                                    on: { getResponse: _vm.getResponse }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.options.payment && _vm.num >= _vm.template.length
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "b-button",
                                    { attrs: { type: "submit" } },
                                    [_vm._v("Submit")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.options.feedback
        ? _c(
            "b-modal",
            { attrs: { id: "modal-1", size: "lg", "hide-footer": "" } },
            [
              _vm.options.feedback
                ? _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("h5", [_vm._v(_vm._s(_vm.options.feedback.title))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.options.feedback.text))]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "outline-darkgreen" },
                          on: { click: _vm.closeForm }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        { attrs: { id: "modal-2", size: "lg", "hide-footer": "" } },
        [
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("h5", [
                _vm._v("Application Error "),
                _c("i", {
                  staticClass: "fa fa-exclamation-circle",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "You previous application needs to be approved before you can proceed"
                )
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "outline-darkgreen" },
                  on: { click: _vm.closeForm }
                },
                [_vm._v("Close")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Applications/applist.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/Applications/applist.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applist_vue_vue_type_template_id_1c12453e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applist.vue?vue&type=template&id=1c12453e&scoped=true& */ "./resources/js/components/admin/Applications/applist.vue?vue&type=template&id=1c12453e&scoped=true&");
/* harmony import */ var _applist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applist.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Applications/applist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _applist_vue_vue_type_style_index_0_id_1c12453e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css& */ "./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _applist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _applist_vue_vue_type_template_id_1c12453e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _applist_vue_vue_type_template_id_1c12453e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c12453e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Applications/applist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Applications/applist.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/applist.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_style_index_0_id_1c12453e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=style&index=0&id=1c12453e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_style_index_0_id_1c12453e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_style_index_0_id_1c12453e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_style_index_0_id_1c12453e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_style_index_0_id_1c12453e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_style_index_0_id_1c12453e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/applist.vue?vue&type=template&id=1c12453e&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/applist.vue?vue&type=template&id=1c12453e&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_template_id_1c12453e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applist.vue?vue&type=template&id=1c12453e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/applist.vue?vue&type=template&id=1c12453e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_template_id_1c12453e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_applist_vue_vue_type_template_id_1c12453e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Applications/create.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/Applications/create.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_1d00c4cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=1d00c4cd&scoped=true& */ "./resources/js/components/admin/Applications/create.vue?vue&type=template&id=1d00c4cd&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Applications/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_id_1d00c4cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css& */ "./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_1d00c4cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_1d00c4cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1d00c4cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Applications/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Applications/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1d00c4cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=style&index=0&id=1d00c4cd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1d00c4cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1d00c4cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1d00c4cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1d00c4cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1d00c4cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/create.vue?vue&type=template&id=1d00c4cd&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/create.vue?vue&type=template&id=1d00c4cd&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1d00c4cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=1d00c4cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/create.vue?vue&type=template&id=1d00c4cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1d00c4cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1d00c4cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Applications/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/admin/Applications/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_73448811_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=73448811&scoped=true& */ "./resources/js/components/admin/Applications/index.vue?vue&type=template&id=73448811&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Applications/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_73448811_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css& */ "./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_73448811_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_73448811_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73448811",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Applications/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Applications/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73448811_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=style&index=0&id=73448811&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73448811_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73448811_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73448811_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73448811_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73448811_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/index.vue?vue&type=template&id=73448811&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/index.vue?vue&type=template&id=73448811&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73448811_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=73448811&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/index.vue?vue&type=template&id=73448811&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73448811_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73448811_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Applications/list.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/Applications/list.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_44e5adaf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=44e5adaf&scoped=true& */ "./resources/js/components/admin/Applications/list.vue?vue&type=template&id=44e5adaf&scoped=true&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Applications/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_vue_vue_type_style_index_0_id_44e5adaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css& */ "./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_44e5adaf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_44e5adaf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44e5adaf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Applications/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Applications/list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_44e5adaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=style&index=0&id=44e5adaf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_44e5adaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_44e5adaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_44e5adaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_44e5adaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_44e5adaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/list.vue?vue&type=template&id=44e5adaf&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/list.vue?vue&type=template&id=44e5adaf&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_44e5adaf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=44e5adaf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/list.vue?vue&type=template&id=44e5adaf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_44e5adaf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_44e5adaf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Applications/options.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/Applications/options.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_vue_vue_type_template_id_e25d5bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.vue?vue&type=template&id=e25d5bc6&scoped=true& */ "./resources/js/components/admin/Applications/options.vue?vue&type=template&id=e25d5bc6&scoped=true&");
/* harmony import */ var _options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Applications/options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _options_vue_vue_type_style_index_0_id_e25d5bc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss& */ "./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _options_vue_vue_type_template_id_e25d5bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _options_vue_vue_type_template_id_e25d5bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e25d5bc6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Applications/options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Applications/options.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/options.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_e25d5bc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=style&index=0&id=e25d5bc6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_e25d5bc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_e25d5bc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_e25d5bc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_e25d5bc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_e25d5bc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/options.vue?vue&type=template&id=e25d5bc6&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/options.vue?vue&type=template&id=e25d5bc6&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_e25d5bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=template&id=e25d5bc6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/options.vue?vue&type=template&id=e25d5bc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_e25d5bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_e25d5bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Applications/review.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/Applications/review.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _review_vue_vue_type_template_id_5a5f8d29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.vue?vue&type=template&id=5a5f8d29&scoped=true& */ "./resources/js/components/admin/Applications/review.vue?vue&type=template&id=5a5f8d29&scoped=true&");
/* harmony import */ var _review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Applications/review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _review_vue_vue_type_template_id_5a5f8d29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _review_vue_vue_type_template_id_5a5f8d29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a5f8d29",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Applications/review.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Applications/review.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/review.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./review.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/review.vue?vue&type=template&id=5a5f8d29&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/review.vue?vue&type=template&id=5a5f8d29&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_template_id_5a5f8d29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./review.vue?vue&type=template&id=5a5f8d29&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/review.vue?vue&type=template&id=5a5f8d29&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_template_id_5a5f8d29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_template_id_5a5f8d29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Applications/template.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/admin/Applications/template.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_vue_vue_type_template_id_edbdd1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.vue?vue&type=template&id=edbdd1ea&scoped=true& */ "./resources/js/components/admin/Applications/template.vue?vue&type=template&id=edbdd1ea&scoped=true&");
/* harmony import */ var _template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Applications/template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _template_vue_vue_type_style_index_0_id_edbdd1ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css& */ "./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _template_vue_vue_type_template_id_edbdd1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _template_vue_vue_type_template_id_edbdd1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "edbdd1ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Applications/template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Applications/template.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/template.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_edbdd1ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=style&index=0&id=edbdd1ea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_edbdd1ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_edbdd1ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_edbdd1ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_edbdd1ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_edbdd1ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Applications/template.vue?vue&type=template&id=edbdd1ea&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Applications/template.vue?vue&type=template&id=edbdd1ea&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_template_id_edbdd1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=template&id=edbdd1ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Applications/template.vue?vue&type=template&id=edbdd1ea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_template_id_edbdd1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_template_id_edbdd1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/create.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/forms/create.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_9b85d6b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=9b85d6b2&scoped=true& */ "./resources/js/components/forms/create.vue?vue&type=template&id=9b85d6b2&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_id_9b85d6b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css& */ "./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_9b85d6b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_9b85d6b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9b85d6b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/forms/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_9b85d6b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=style&index=0&id=9b85d6b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_9b85d6b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_9b85d6b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_9b85d6b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_9b85d6b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_9b85d6b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/create.vue?vue&type=template&id=9b85d6b2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/forms/create.vue?vue&type=template&id=9b85d6b2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_9b85d6b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=9b85d6b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/create.vue?vue&type=template&id=9b85d6b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_9b85d6b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_9b85d6b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/forms/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_289c5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=289c5612&scoped=true& */ "./resources/js/components/forms/index.vue?vue&type=template&id=289c5612&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_289c5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css& */ "./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_289c5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_289c5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "289c5612",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_289c5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=style&index=0&id=289c5612&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_289c5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_289c5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_289c5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_289c5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_289c5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/index.vue?vue&type=template&id=289c5612&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/forms/index.vue?vue&type=template&id=289c5612&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_289c5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=289c5612&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/index.vue?vue&type=template&id=289c5612&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_289c5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_289c5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/list.vue":
/*!************************************************!*\
  !*** ./resources/js/components/forms/list.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_48c82c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=48c82c09&scoped=true& */ "./resources/js/components/forms/list.vue?vue&type=template&id=48c82c09&scoped=true&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_vue_vue_type_style_index_0_id_48c82c09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css& */ "./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_48c82c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_48c82c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48c82c09",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/list.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/forms/list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_48c82c09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=style&index=0&id=48c82c09&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_48c82c09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_48c82c09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_48c82c09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_48c82c09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_48c82c09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/list.vue?vue&type=template&id=48c82c09&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/forms/list.vue?vue&type=template&id=48c82c09&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_48c82c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=48c82c09&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/list.vue?vue&type=template&id=48c82c09&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_48c82c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_48c82c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/options.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/forms/options.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_vue_vue_type_template_id_bdc204fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.vue?vue&type=template&id=bdc204fa&scoped=true& */ "./resources/js/components/forms/options.vue?vue&type=template&id=bdc204fa&scoped=true&");
/* harmony import */ var _options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _options_vue_vue_type_style_index_0_id_bdc204fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss& */ "./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _options_vue_vue_type_template_id_bdc204fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _options_vue_vue_type_template_id_bdc204fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bdc204fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/options.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/forms/options.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_bdc204fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=style&index=0&id=bdc204fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_bdc204fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_bdc204fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_bdc204fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_bdc204fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_bdc204fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/options.vue?vue&type=template&id=bdc204fa&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/forms/options.vue?vue&type=template&id=bdc204fa&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_bdc204fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./options.vue?vue&type=template&id=bdc204fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/options.vue?vue&type=template&id=bdc204fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_bdc204fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_template_id_bdc204fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/review.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/forms/review.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _review_vue_vue_type_template_id_20c845fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.vue?vue&type=template&id=20c845fa&scoped=true& */ "./resources/js/components/forms/review.vue?vue&type=template&id=20c845fa&scoped=true&");
/* harmony import */ var _review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _review_vue_vue_type_template_id_20c845fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _review_vue_vue_type_template_id_20c845fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20c845fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/review.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/review.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/forms/review.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./review.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/review.vue?vue&type=template&id=20c845fa&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/forms/review.vue?vue&type=template&id=20c845fa&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_template_id_20c845fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./review.vue?vue&type=template&id=20c845fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/review.vue?vue&type=template&id=20c845fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_template_id_20c845fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_review_vue_vue_type_template_id_20c845fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/template.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/forms/template.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_vue_vue_type_template_id_7eee4f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.vue?vue&type=template&id=7eee4f36&scoped=true& */ "./resources/js/components/forms/template.vue?vue&type=template&id=7eee4f36&scoped=true&");
/* harmony import */ var _template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _template_vue_vue_type_style_index_0_id_7eee4f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css& */ "./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _template_vue_vue_type_template_id_7eee4f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _template_vue_vue_type_template_id_7eee4f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7eee4f36",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/template.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/template.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_7eee4f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=style&index=0&id=7eee4f36&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_7eee4f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_7eee4f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_7eee4f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_7eee4f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_style_index_0_id_7eee4f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/template.vue?vue&type=template&id=7eee4f36&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/forms/template.vue?vue&type=template&id=7eee4f36&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_template_id_7eee4f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./template.vue?vue&type=template&id=7eee4f36&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/template.vue?vue&type=template&id=7eee4f36&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_template_id_7eee4f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_template_vue_vue_type_template_id_7eee4f36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);