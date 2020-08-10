(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Single forms"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/newSchool.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      nursery: 40000,
      primary: 70000,
      secondary: 100000,
      unpaid: true,
      years: [],
      appFields: ["description", "nursery", "primary", "secondary"],
      appItems: [{
        description: "Establishment/Site Inspection",
        nursery: "N40,000",
        primary: "N70,000",
        secondary: "N100,000"
      }, {
        description: "Approval Inspection",
        nursery: "N45,000",
        primary: "N70,000",
        secondary: "N80,000"
      }, {
        description: "Addition of primary six class",
        nursery: "-",
        primary: "N50,000",
        secondary: "-"
      }, {
        description: "Upgrading to senior secondary school status",
        nursery: "-",
        primary: "-",
        secondary: "N50,000"
      }, {
        description: "Registration",
        nursery: "N80,000",
        primary: "N100,000",
        secondary: "N120,000"
      }, {
        description: "Annual Renewal",
        nursery: "N30,000",
        primary: "N40,000",
        secondary: "N50,000"
      }, {
        description: "Re-Inspection",
        nursery: "N10,000",
        primary: "N20,000",
        secondary: "N30,000"
      }, {
        description: "Departmental handling Fees",
        nursery: "N30,000",
        primary: "N30,000",
        secondary: "N30,000"
      }, {
        description: "Enumeration, Revalidation, Recertification",
        nursery: "N10,000",
        primary: "N10,000",
        secondary: "N20,000"
      }],
      fields: ["sn", "name", "qualifications", "subjects_teaching", "phone_number", "email"],
      data: {
        school: "",
        full_address: "",
        lga: "",
        category: [],
        ownership: "",
        contact_person: {
          first_name: "",
          last_name: "",
          qualification: "",
          address: "",
          email: "",
          phone_no: ""
        },
        documents: [{
          name: "",
          file: ""
        }],
        items: []
      },
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      lgas: [],
      id: null
    };
  },
  components: {
    Payment: _paystack__WEBPACK_IMPORTED_MODULE_1__["default"],
    Upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.getLga();
    this.getYears();
  },
  methods: {
    addRenew: function addRenew() {
      this.data.status.renewal.push({
        annual_renewal_year: "",
        annual_renewal_amount: ""
      });
    },
    removeRenew: function removeRenew() {
      this.data.status.renewal.pop();
    },
    addDoc: function addDoc() {
      this.data.documents.push({
        name: "",
        file: ""
      });
    },
    removeDoc: function removeDoc() {
      this.data.documents.pop();
    },
    getResponse: function getResponse(res) {
      if (res.status == "success") {
        var data = {
          ref: res.trxref,
          price: this.sortAmount(),
          status: res.status,
          name: this.data.school,
          type: "School registration"
        };
        this.unpaid = false;
        axios.put("/api/revalidation/".concat(this.id), data).then(function (res) {});
      }
    },
    addTab: function addTab() {
      this.data.staff_info.push({
        establishment: "",
        approved: "",
        inspection: "",
        jsce: "",
        sss: "",
        ssce_neco: "",
        last_ssce: "",
        physics: "",
        chemistry: "",
        biology: "",
        annual_renewal_year: "",
        annual_renewal_amount: ""
      });
    },
    removeTab: function removeTab() {
      this.data.staff_info.pop();
    },
    handleSwitch: function handleSwitch(key) {
      switch (key) {
        case "one":
          this.one = "true";
          this.two = this.three = this.four = this.five = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "two":
          this.two = "true";
          this.one = this.three = this.four = this.five = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "three":
          this.three = "true";
          this.two = this.one = this.four = this.five = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "four":
          this.four = "true";
          this.two = this.three = this.one = this.five = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "five":
          this.five = "true";
          this.two = this.three = this.four = this.one = this.six = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "six":
          this.six = "true";
          this.two = this.three = this.four = this.five = this.one = this.seven = false;
          window.scrollTo(0, 0);
          break;

        case "seven":
          this.seven = "true";
          this.two = this.three = this.four = this.five = this.one = this.six = false;
          window.scrollTo(0, 0);
          break;

        default:
          break;
      }
    },
    getLga: function getLga() {
      var _this = this;

      axios.get("/api/show-lgas").then(function (res) {
        if (res.status == 200) {
          _this.lgas = res.data;
        }
      });
    },
    getUploadDetails: function getUploadDetails(id, res) {
      this.data.documents[id].file = res.secure_url;
    },
    sortAmount: function sortAmount() {
      var amount = 0;

      if (this.data.category.includes('nursery')) {
        amount = this.nursery;
      }

      if (this.data.category.includes('nursery') && this.data.category.includes('primary')) {
        amount = this.primary;
      }

      if (this.data.category.includes('nursery') && this.data.category.includes('primary') && this.data.category.includes('secondary')) {
        amount = this.secondary;
      }

      if (this.data.category.includes('nursery') && this.data.category.includes('secondary')) {
        amount = this.secondary;
      }

      if (this.data.category.includes('primary') && this.data.category.includes('secondary')) {
        amount = this.secondary;
      }

      return amount;
    },
    submit: function submit() {
      var _this2 = this;

      var data = {
        school: this.data.school,
        category: "School Registration",
        detail: this.data
      };
      axios.post("/api/revalidation", data).then(function (res) {
        if (res.status == 201) {
          _this2.id = res.data.id;

          _this2.handleSwitch("seven");
        }
      });
    },
    getYears: function getYears() {
      var today = new Date().getFullYear();
      var min = today - 100;

      for (var i = min; i < today + 1; i++) {
        this.years.push(i);
      }

      this.years.reverse();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/revalidation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      unpaid: true,
      years: [],
      fields: ["sn", "name", "qualifications", "subjects_teaching", "phone_number", "email"],
      data: {
        school: "",
        full_address: "",
        lga: "",
        category: [],
        ownership: "",
        contact_person: {
          first_name: "",
          last_name: "",
          qualification: "",
          address: "",
          email: "",
          phone_no: ""
        },
        status: {
          establishment: "",
          approved: "",
          inspection: "",
          jsce: "",
          sss: "",
          ssce_neco: "",
          last_ssce: "",
          physics: "",
          chemistry: "",
          biology: "",
          renewal: [{
            annual_renewal_year: "",
            annual_renewal_amount: ""
          }]
        },
        documents: [{
          name: "",
          file: ""
        }],
        staff_info: [{
          name: "",
          qualifications: "",
          subjects_teaching: "",
          phone_number: "",
          email: ""
        }],
        items: []
      },
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      lgas: [],
      id: null
    };
  },
  components: {
    Payment: _paystack__WEBPACK_IMPORTED_MODULE_1__["default"],
    Upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.getLga();
    this.getYears();
  },
  methods: {
    addRenew: function addRenew() {
      this.data.status.renewal.push({
        annual_renewal_year: "",
        annual_renewal_amount: ""
      });
    },
    removeRenew: function removeRenew() {
      this.data.status.renewal.pop();
    },
    addDoc: function addDoc() {
      this.data.documents.push({
        name: "",
        file: ""
      });
    },
    removeDoc: function removeDoc() {
      this.data.documents.pop();
    },
    getResponse: function getResponse(res) {
      if (res.status == "success") {
        var data = {
          ref: res.trxref,
          price: this.sortAmount(),
          status: res.status,
          name: this.data.school,
          type: "revalidation"
        };
        this.unpaid = false;
        axios.put("/api/revalidation/".concat(this.id), data).then(function (res) {});
      }
    },
    addTab: function addTab() {
      this.data.staff_info.push({
        establishment: "",
        approved: "",
        inspection: "",
        jsce: "",
        sss: "",
        ssce_neco: "",
        last_ssce: "",
        physics: "",
        chemistry: "",
        biology: "",
        annual_renewal_year: "",
        annual_renewal_amount: ""
      });
    },
    removeTab: function removeTab() {
      this.data.staff_info.pop();
    },
    handleSwitch: function handleSwitch(key) {
      switch (key) {
        case "one":
          this.one = "true";
          this.two = this.three = this.four = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "two":
          this.two = "true";
          this.one = this.three = this.four = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "three":
          this.three = "true";
          this.two = this.one = this.four = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "four":
          this.four = "true";
          this.two = this.three = this.one = this.five = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "five":
          this.five = "true";
          this.two = this.three = this.four = this.one = this.six = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "six":
          this.six = "true";
          this.two = this.three = this.four = this.five = this.one = this.seven = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "seven":
          this.seven = "true";
          this.two = this.three = this.four = this.five = this.six = this.one = this.eight = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "eight":
          this.eight = "true";
          this.two = this.three = this.four = this.five = this.six = this.seven = this.one = this.nine = false;
          window.scrollTo(0, 0);
          break;

        case "nine":
          this.nine = "true";
          this.two = this.three = this.four = this.five = this.six = this.seven = this.one = this.eight = false;
          window.scrollTo(0, 0);
          break;

        default:
          break;
      }
    },
    getLga: function getLga() {
      var _this = this;

      axios.get("/api/show-lgas").then(function (res) {
        if (res.status == 200) {
          _this.lgas = res.data;
        }
      });
    },
    getUploadDetails: function getUploadDetails(id, res) {
      this.data.documents[id].file = res.secure_url;
    },
    sortAmount: function sortAmount() {
      var amount = 0;
      this.data.category.forEach(function (item) {
        if (item == "nursery") {
          amount = amount + 10000;
        }

        if (item == "secondary") {
          amount = amount + 20000;
        }

        if (item == "primary") {
          amount = amount + 10000;
        }
      });
      return amount;
    },
    submit: function submit() {
      var _this2 = this;

      var data = {
        school: this.data.school,
        category: 'Revalidation',
        detail: this.data
      };
      axios.post("/api/revalidation", data).then(function (res) {
        if (res.status == 201) {
          _this2.id = res.data.id;

          _this2.handleSwitch("nine");
        }
      });
    },
    getYears: function getYears() {
      var today = new Date().getFullYear();
      var min = today - 100;

      for (var i = min; i < today + 1; i++) {
        this.years.push(i);
      }

      this.years.reverse();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/single.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navigation/navigation */ "./resources/js/components/navigation/navigation.vue");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../footer/footer */ "./resources/js/components/footer/footer.vue");
/* harmony import */ var _revalidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revalidation */ "./resources/js/components/user/appForms/revalidation.vue");
/* harmony import */ var _newSchool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newSchool */ "./resources/js/components/user/appForms/newSchool.vue");
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
  components: {
    Navigation: _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"],
    Revalidation: _revalidation__WEBPACK_IMPORTED_MODULE_2__["default"],
    NewSchool: _newSchool__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-52926bbc] {\n  min-height: 70vh;\n  padding: 50px 15px;\n}\nform[data-v-52926bbc] {\n  border: 1px solid #ccc;\n  padding: 40px;\n  border-radius: 10px;\n}\n.coll[data-v-52926bbc] {\n  width: 100%;\n  height: 200px;\n  background: green;\n  margin: 10px;\n}\n.icon[data-v-52926bbc] {\n  font-size: 65px;\n  margin-bottom: 20px;\n}\na[data-v-52926bbc] {\n  text-align: center;\n  text-decoration: none;\n}\n.tab[data-v-52926bbc] {\n  background-image: linear-gradient(\n    to right,\n    #0f7a8a,\n    #0e6d7b,\n    #0c616d,\n    #0b555f,\n    #094952\n  );\n  height: auto;\n  width: 24%;\n  padding: 15px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.tab:hover .icon[data-v-52926bbc] {\n  transform: scale(1.04);\n  transition: all 0.4s;\n}\n.mc1[data-v-52926bbc] {\n  color: transparent;\n}\nli[data-v-52926bbc] {\n  padding: 10px 0;\n}\nol[data-v-52926bbc] {\n  list-style: lower-alpha;\n}\n@media (max-width: 425px) {\nform[data-v-52926bbc] {\n    padding: 40px 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-4fa60f94] {\n  min-height: 70vh;\n  padding: 50px 15px;\n}\nform[data-v-4fa60f94] {\n  border: 1px solid #ccc;\n  padding: 40px;\n  border-radius: 10px;\n}\n.coll[data-v-4fa60f94] {\n  width: 100%;\n  height: 200px;\n  background: green;\n  margin: 10px;\n}\n.icon[data-v-4fa60f94] {\n  font-size: 65px;\n  margin-bottom: 20px;\n}\na[data-v-4fa60f94] {\n  text-align: center;\n  text-decoration: none;\n}\n.tab[data-v-4fa60f94] {\n  background-image: linear-gradient(\n    to right,\n    #0f7a8a,\n    #0e6d7b,\n    #0c616d,\n    #0b555f,\n    #094952\n  );\n  height: auto;\n  width: 24%;\n  padding: 15px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.tab:hover .icon[data-v-4fa60f94] {\n  transform: scale(1.04);\n  transition: all 0.4s;\n}\n.mc1[data-v-4fa60f94] {\n  color: transparent;\n}\nli[data-v-4fa60f94] {\n  padding: 10px 0;\n}\nol[data-v-4fa60f94] {\n  list-style: lower-alpha;\n}\n@media(max-width:425px){\nform[data-v-4fa60f94]{\n    padding:40px 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-a2134220] {\n  min-height: 70vh;\n  padding: 50px 15px;\n}\nform[data-v-a2134220] {\n  border: 1px solid #ccc;\n  padding: 40px;\n  border-radius: 10px;\n}\n.coll[data-v-a2134220] {\n  width: 100%;\n  height: 200px;\n  background: green;\n  margin: 10px;\n}\n.icon[data-v-a2134220] {\n  font-size: 65px;\n  margin-bottom: 20px;\n}\na[data-v-a2134220] {\n  text-align: center;\n  text-decoration: none;\n}\n.tab[data-v-a2134220] {\n  background-image: linear-gradient(\n    to right,\n    #0f7a8a,\n    #0e6d7b,\n    #0c616d,\n    #0b555f,\n    #094952\n  );\n  height: auto;\n  width: 24%;\n  padding: 15px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.tab:hover .icon[data-v-a2134220] {\n  transform: scale(1.04);\n  transition: all 0.4s;\n}\n.mc1[data-v-a2134220] {\n  color: transparent;\n}\nli[data-v-a2134220] {\n  padding: 10px 0;\n}\nol[data-v-a2134220] {\n  list-style: lower-alpha;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=template&id=52926bbc&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/newSchool.vue?vue&type=template&id=52926bbc&scoped=true& ***!
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
          _c(
            "b-row",
            {},
            [
              _c(
                "b-col",
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
                      _c("h3", { staticClass: "text-center mb-5" }, [
                        _vm._v("REGISTRATION OF NEW SCHOOLS IN IMO STATE")
                      ]),
                      _vm._v(" "),
                      _vm.one
                        ? _c(
                            "b-form-row",
                            { staticClass: "justify-content-center" },
                            [
                              _c(
                                "b-form-group",
                                { staticClass: "text-center" },
                                [
                                  _c("p", [
                                    _vm._v(
                                      "Thank you for working with us to make education in Imo State better, this is the first part of a multi-phase application process."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Before you begin your application, please take the time to review the table below, which captures all applicable fees."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("b-table", {
                                    attrs: {
                                      fields: _vm.appFields,
                                      items: _vm.appItems,
                                      responsive: "",
                                      hover: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("two")
                                        }
                                      }
                                    },
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
                      _vm.two
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("GENERAL INFORMATION")]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Proposed Name of School")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "Harolds Nursery and primary school"
                                        },
                                        model: {
                                          value: _vm.data.school,
                                          callback: function($$v) {
                                            _vm.$set(_vm.data, "school", $$v)
                                          },
                                          expression: "data.school"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Full Address")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          type: "text",
                                          placeholder: "No 1, Orlu"
                                        },
                                        model: {
                                          value: _vm.data.full_address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.data,
                                              "full_address",
                                              $$v
                                            )
                                          },
                                          expression: "data.full_address"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("LGA")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-select",
                                        {
                                          model: {
                                            value: _vm.data.lga,
                                            callback: function($$v) {
                                              _vm.$set(_vm.data, "lga", $$v)
                                            },
                                            expression: "data.lga"
                                          }
                                        },
                                        [
                                          _c(
                                            "b-form-select-option",
                                            { attrs: { value: "" } },
                                            [_vm._v("Select Lga")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.lgas, function(item, idx) {
                                            return _c(
                                              "b-form-select-option",
                                              {
                                                key: idx,
                                                attrs: { value: item.name }
                                              },
                                              [_vm._v(_vm._s(item.name))]
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
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("School Category")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-checkbox",
                                        {
                                          attrs: { value: "nursery" },
                                          model: {
                                            value: _vm.data.category,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "category",
                                                $$v
                                              )
                                            },
                                            expression: "data.category"
                                          }
                                        },
                                        [_vm._v("Nursery")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-checkbox",
                                        {
                                          attrs: { value: "primary" },
                                          model: {
                                            value: _vm.data.category,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "category",
                                                $$v
                                              )
                                            },
                                            expression: "data.category"
                                          }
                                        },
                                        [_vm._v("Primary")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-checkbox",
                                        {
                                          attrs: { value: "secondary" },
                                          model: {
                                            value: _vm.data.category,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "category",
                                                $$v
                                              )
                                            },
                                            expression: "data.category"
                                          }
                                        },
                                        [_vm._v("Secondary")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("School Ownership")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-radio",
                                        {
                                          attrs: { value: "private" },
                                          model: {
                                            value: _vm.data.ownership,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "ownership",
                                                $$v
                                              )
                                            },
                                            expression: "data.ownership"
                                          }
                                        },
                                        [_vm._v("Private")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-radio",
                                        {
                                          attrs: {
                                            value: "faith_based_mission_schools"
                                          },
                                          model: {
                                            value: _vm.data.ownership,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "ownership",
                                                $$v
                                              )
                                            },
                                            expression: "data.ownership"
                                          }
                                        },
                                        [_vm._v("Faith-based/Mission Schools")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-radio",
                                        {
                                          attrs: { value: "corporate" },
                                          model: {
                                            value: _vm.data.ownership,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "ownership",
                                                $$v
                                              )
                                            },
                                            expression: "data.ownership"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Corporate (Military, Police, Paramilitary etc.)"
                                          )
                                        ]
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
                                {
                                  staticClass:
                                    "justify-content-between w-100 my-3"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("one")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("three")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.three
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("CONTACT PERSON")]),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Name of Proprietor")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "text",
                                                placeholder: "First name"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person
                                                    .first_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "first_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.first_name"
                                              }
                                            },
                                            [_vm._v("First Name/Last Name")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "text",
                                                placeholder: "Last name"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person
                                                    .last_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "last_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.last_name"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Name of Proprietor— First Name/Last Name"
                                              )
                                            ]
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
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              "Principal/Proprietor’s Educational Qualification"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "text",
                                              placeholder: "PhD,Msc ..."
                                            },
                                            model: {
                                              value:
                                                _vm.data.contact_person
                                                  .qualification,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.data.contact_person,
                                                  "qualification",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "data.contact_person.qualification"
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
                                    "b-form-row",
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Address")
                                          ]),
                                          _vm._v(" "),
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "text",
                                              placeholder: "address"
                                            },
                                            model: {
                                              value:
                                                _vm.data.contact_person.address,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.data.contact_person,
                                                  "address",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "data.contact_person.address"
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
                                    "b-form-row",
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Phone Number")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "tel",
                                                placeholder: "0810XXXXXXX"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person
                                                    .phone_no,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "phone_no",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.phone_no"
                                              }
                                            },
                                            [_vm._v("Phone Number")]
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
                                    { staticClass: "mb-4" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Email")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "email",
                                                placeholder: "example@email.com"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person.email,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "email",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.email"
                                              }
                                            },
                                            [_vm._v("Email")]
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
                                "b-form-row",
                                {
                                  staticClass:
                                    "justify-content-between w-100 my-3"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("two")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("four")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.four
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("SUPPORTING DOCUMENTS")]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Please attach scanned copies of the following supporting documents (jpg, pdf, png)"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("ul", { staticClass: "p-2 px-3" }, [
                                    _c("li", [
                                      _vm._v(
                                        "CAC Certificate & Memorandum of Association"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _vm._v(
                                        "Tax Clearance Certificate for 3 years"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _vm._v(
                                        "Certificate of Occupancy of Land/Evidence of Ownership"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _vm._v("Survey Plan of Proposed Site")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "mr-3",
                                          on: { click: _vm.addDoc }
                                        },
                                        [_vm._v("Add")]
                                      ),
                                      _vm._v(" "),
                                      _vm.data.documents.length > 0
                                        ? _c(
                                            "b-button",
                                            { on: { click: _vm.removeDoc } },
                                            [_vm._v("Remove")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    _vm._l(_vm.data.documents, function(
                                      doc,
                                      idx
                                    ) {
                                      return _c(
                                        "b-col",
                                        {
                                          key: idx,
                                          staticClass: "border p-2",
                                          attrs: { cols: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Document name"
                                                },
                                                model: {
                                                  value: doc.name,
                                                  callback: function($$v) {
                                                    _vm.$set(doc, "name", $$v)
                                                  },
                                                  expression: "doc.name"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("Upload", {
                                                attrs: {
                                                  index: idx,
                                                  id: doc.name
                                                },
                                                on: {
                                                  getUploadDetails:
                                                    _vm.getUploadDetails
                                                }
                                              }),
                                              _vm._v(" "),
                                              doc.name !== ""
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-control"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Document Name: " +
                                                          _vm._s(doc.name)
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    }),
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-row",
                                {
                                  staticClass:
                                    "justify-content-between w-100 my-3"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("three")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("five")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.five
                        ? _c(
                            "b-form-row",
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
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "12" } }, [
                                _c("h5", [_vm._v("REVIEW")]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "Before you proceed, kindly note the applicable fees:"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                Nursery Schools—\n                "
                                  ),
                                  _c("strong", [
                                    _vm._v("N" + _vm._s(_vm.nursery))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                Primary School —\n                "
                                  ),
                                  _c("strong", [
                                    _vm._v("N" + _vm._s(_vm.primary))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                Secondary Schools —\n                "
                                  ),
                                  _c("strong", [
                                    _vm._v("N" + _vm._s(_vm.secondary))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-form-row",
                                {
                                  staticClass:
                                    "justify-content-between w-100 my-3"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("four")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("six")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.six
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("REVIEW APPLICATION")]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Note that total to be paid will be calculated based on categories selected"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    {
                                      staticClass:
                                        "justify-content-between w-100 my-3"
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.handleSwitch("five")
                                            }
                                          }
                                        },
                                        [_vm._v("Previous")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        { attrs: { type: "submit" } },
                                        [_vm._v("Continue to payment")]
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
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.seven
                        ? _c(
                            "b-form-row",
                            [
                              _c("b-col", { staticClass: "text-center" }, [
                                !_vm.unpaid
                                  ? _c("div", [
                                      _c("h5", [_vm._v("FEEDBACK")]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "Thank you for working with us to make education in Imo State better. Your application has been received. Kindly check your email for confirmation and allow up to Fifteen (15) working days for us to verify the information provided by you. Our representatives will be in touch shortly."
                                        )
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "mb-3" },
                                  [
                                    _vm.unpaid
                                      ? _c("Payment", {
                                          attrs: {
                                            amount1: _vm.sortAmount(),
                                            email1:
                                              _vm.data.contact_person.email
                                          },
                                          on: { getResponse: _vm.getResponse }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "outline-secondary" },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleSwitch("six")
                                          }
                                        }
                                      },
                                      [_vm._v("Cancel")]
                                    )
                                  ],
                                  1
                                )
                              ])
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
            ],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=template&id=4fa60f94&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/revalidation.vue?vue&type=template&id=4fa60f94&scoped=true& ***!
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
          _c(
            "b-row",
            {},
            [
              _c(
                "b-col",
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
                      _c("h3", { staticClass: "text-center mb-5" }, [
                        _vm._v("Revalidation Form")
                      ]),
                      _vm._v(" "),
                      _vm.one
                        ? _c(
                            "b-form-row",
                            { staticClass: "justify-content-center" },
                            [
                              _c(
                                "b-form-group",
                                { staticClass: "text-center" },
                                [
                                  _c("p", [
                                    _vm._v(
                                      "The Enumeration, Revalidation/Recertification of Schools exercise is part of the ministry’s effort to digitize the education sector in the state."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "The purpose of this exercise is to capture and maintain accurate and updated data of schools in Imo State."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _c("strong", [
                                      _vm._v(
                                        "Kindly note the applicable fees, below:"
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Nursery Schools—\n                "
                                    ),
                                    _c("strong", [_vm._v("N10,000")])
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Primary School —\n                "
                                    ),
                                    _c("strong", [_vm._v("N10,000")])
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Secondary Schools —\n                "
                                    ),
                                    _c("strong", [_vm._v("N20,000")])
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("two")
                                        }
                                      }
                                    },
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
                      _vm.two
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("GENERAL INFORMATION")]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Name of School")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "Harolds Nursery and primary school"
                                        },
                                        model: {
                                          value: _vm.data.school,
                                          callback: function($$v) {
                                            _vm.$set(_vm.data, "school", $$v)
                                          },
                                          expression: "data.school"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Full Address")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          type: "text",
                                          placeholder: "No 1, Orlu"
                                        },
                                        model: {
                                          value: _vm.data.full_address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.data,
                                              "full_address",
                                              $$v
                                            )
                                          },
                                          expression: "data.full_address"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("LGA")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-select",
                                        {
                                          model: {
                                            value: _vm.data.lga,
                                            callback: function($$v) {
                                              _vm.$set(_vm.data, "lga", $$v)
                                            },
                                            expression: "data.lga"
                                          }
                                        },
                                        [
                                          _c(
                                            "b-form-select-option",
                                            { attrs: { value: "" } },
                                            [_vm._v("Select Lga")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.lgas, function(item, idx) {
                                            return _c(
                                              "b-form-select-option",
                                              {
                                                key: idx,
                                                attrs: { value: item.name }
                                              },
                                              [_vm._v(_vm._s(item.name))]
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
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("School Category")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-checkbox",
                                        {
                                          attrs: { value: "nursery" },
                                          model: {
                                            value: _vm.data.category,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "category",
                                                $$v
                                              )
                                            },
                                            expression: "data.category"
                                          }
                                        },
                                        [_vm._v("Nursery")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-checkbox",
                                        {
                                          attrs: { value: "primary" },
                                          model: {
                                            value: _vm.data.category,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "category",
                                                $$v
                                              )
                                            },
                                            expression: "data.category"
                                          }
                                        },
                                        [_vm._v("Primary")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-checkbox",
                                        {
                                          attrs: { value: "secondary" },
                                          model: {
                                            value: _vm.data.category,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "category",
                                                $$v
                                              )
                                            },
                                            expression: "data.category"
                                          }
                                        },
                                        [_vm._v("Secondary")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("School Ownership")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-radio",
                                        {
                                          attrs: { value: "private" },
                                          model: {
                                            value: _vm.data.ownership,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "ownership",
                                                $$v
                                              )
                                            },
                                            expression: "data.ownership"
                                          }
                                        },
                                        [_vm._v("Private")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-radio",
                                        {
                                          attrs: {
                                            value: "faith_based_mission_schools"
                                          },
                                          model: {
                                            value: _vm.data.ownership,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "ownership",
                                                $$v
                                              )
                                            },
                                            expression: "data.ownership"
                                          }
                                        },
                                        [_vm._v("Faith-based/Mission Schools")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-radio",
                                        {
                                          attrs: { value: "corporate" },
                                          model: {
                                            value: _vm.data.ownership,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.data,
                                                "ownership",
                                                $$v
                                              )
                                            },
                                            expression: "data.ownership"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Corporate (Military, Police, Paramilitary etc.)"
                                          )
                                        ]
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
                                {
                                  staticClass: "justify-content-between w-100"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("one")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("three")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.three
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("CONTACT PERSON")]),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Name of Proprietor")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "text",
                                                placeholder: "First name"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person
                                                    .first_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "first_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.first_name"
                                              }
                                            },
                                            [_vm._v("First Name/Last Name")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        [
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "text",
                                                placeholder: "Last name"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person
                                                    .last_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "last_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.last_name"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Name of Proprietor— First Name/Last Name"
                                              )
                                            ]
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
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              "Principal/Proprietor’s Educational Qualification"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "text",
                                              placeholder: "PhD,Msc ..."
                                            },
                                            model: {
                                              value:
                                                _vm.data.contact_person
                                                  .qualification,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.data.contact_person,
                                                  "qualification",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "data.contact_person.qualification"
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
                                    "b-form-row",
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Address")
                                          ]),
                                          _vm._v(" "),
                                          _c("b-form-input", {
                                            attrs: {
                                              type: "text",
                                              placeholder: "address"
                                            },
                                            model: {
                                              value:
                                                _vm.data.contact_person.address,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.data.contact_person,
                                                  "address",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "data.contact_person.address"
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
                                    "b-form-row",
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Phone Number")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "tel",
                                                placeholder: "0810XXXXXXX"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person
                                                    .phone_no,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "phone_no",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.phone_no"
                                              }
                                            },
                                            [_vm._v("Phone Number")]
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
                                    { staticClass: "mb-4" },
                                    [
                                      _c(
                                        "b-col",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Email")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-input",
                                            {
                                              attrs: {
                                                type: "email",
                                                placeholder: "example@email.com"
                                              },
                                              model: {
                                                value:
                                                  _vm.data.contact_person.email,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.data.contact_person,
                                                    "email",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.contact_person.email"
                                              }
                                            },
                                            [_vm._v("Email")]
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
                                "b-form-row",
                                {
                                  staticClass: "justify-content-between w-100"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("two")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("four")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.four
                        ? _c(
                            "b-form-row",
                            [
                              _c("b-col", { attrs: { cols: "12" } }, [
                                _c("h5", [_vm._v("STATUS OF SCHOOL")]),
                                _vm._v(" "),
                                _c("ol", [
                                  _c(
                                    "li",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Date/Year of establishment")
                                          ]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c("b-calendar", {
                                            model: {
                                              value:
                                                _vm.data.status.establishment,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.data.status,
                                                  "establishment",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "data.status.establishment"
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
                                    "li",
                                    [
                                      _c(
                                        "b-form-row",
                                        [
                                          _c(
                                            "b-form-group",
                                            { staticClass: "mr-3" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: { value: "approved" },
                                                  model: {
                                                    value:
                                                      _vm.data.status.approval,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "approval",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.approval"
                                                  }
                                                },
                                                [_vm._v("Approved")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-group",
                                            { staticClass: "mr-3" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    value: "unapproved"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.data.status.approval,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "approval",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.approval"
                                                  }
                                                },
                                                [_vm._v("Unapproved")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "(If approved, provide date of approval)"
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    [
                                      _c(
                                        "b-form-row",
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _vm._v(
                                                "Site Inspection conducted (If yes, provide date of inspection)"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  staticClass: "mr-3",
                                                  attrs: { value: "yes" },
                                                  model: {
                                                    value:
                                                      _vm.data.status
                                                        .inspection,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "inspection",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.inspection"
                                                  }
                                                },
                                                [_vm._v("Yes")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: { value: "no" },
                                                  model: {
                                                    value:
                                                      _vm.data.status
                                                        .inspection,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "inspection",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.inspection"
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
                                    "li",
                                    [
                                      _c(
                                        "b-form-row",
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [
                                                  _vm._v(
                                                    "Do you have approval for JSCE? (If approved, provide date of approval)"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  staticClass: "mr-3",
                                                  attrs: { value: "yes" },
                                                  model: {
                                                    value: _vm.data.status.jsce,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "jsce",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.jsce"
                                                  }
                                                },
                                                [_vm._v("Yes")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: { value: "no" },
                                                  model: {
                                                    value: _vm.data.status.jsce,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "jsce",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.jsce"
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
                                    "li",
                                    [
                                      _c(
                                        "b-form-row",
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [
                                                  _vm._v(
                                                    "Do you have approval for upgrading to SSS? (If approved, provide date of approval)"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  staticClass: "mr-3",
                                                  attrs: { value: "yes" },
                                                  model: {
                                                    value: _vm.data.status.sss,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "sss",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.sss"
                                                  }
                                                },
                                                [_vm._v("Yes")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: { value: "no" },
                                                  model: {
                                                    value: _vm.data.status.sss,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "sss",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.sss"
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
                                    "li",
                                    [
                                      _c(
                                        "b-form-row",
                                        [
                                          _c("b-col", [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [
                                                _vm._v(
                                                  "Do you have approval for SSCE/NECO? (If approved, provide date of approval)"
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  staticClass: "mr-3",
                                                  attrs: { value: "yes" },
                                                  model: {
                                                    value:
                                                      _vm.data.status.ssce_neco,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "ssce_neco",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.ssce_neco"
                                                  }
                                                },
                                                [_vm._v("Yes")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: { value: "no" },
                                                  model: {
                                                    value:
                                                      _vm.data.status.ssce_neco,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.data.status,
                                                        "ssce_neco",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "data.status.ssce_neco"
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
                                    "li",
                                    [
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
                                                    [
                                                      _vm._v(
                                                        "Kindly provide number of candidates that registered for the last SSCE Examination (2020)"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("b-form-input", {
                                                    staticClass: "w-25",
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value:
                                                        _vm.data.status
                                                          .last_ssce,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.data.status,
                                                          "last_ssce",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "data.status.last_ssce"
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
                                    "li",
                                    [
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
                                                    [
                                                      _vm._v(
                                                        "Kindly provide the number of candidates that registered for the following subjects:"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-form-row",
                                                    [
                                                      _c(
                                                        "b-col",
                                                        {
                                                          attrs: { cols: "2" }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              attrs: { for: "" }
                                                            },
                                                            [_vm._v("Physics")]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-col",
                                                        [
                                                          _c("b-form-input", {
                                                            staticClass: "w-25",
                                                            attrs: {
                                                              type: "number"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.data.status
                                                                  .physics,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.data
                                                                    .status,
                                                                  "physics",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "data.status.physics"
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
                                                    "b-form-row",
                                                    [
                                                      _c(
                                                        "b-col",
                                                        {
                                                          attrs: { cols: "2" }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              attrs: { for: "" }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Chemistry"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-col",
                                                        [
                                                          _c("b-form-input", {
                                                            staticClass: "w-25",
                                                            attrs: {
                                                              type: "number"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.data.status
                                                                  .chemistry,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.data
                                                                    .status,
                                                                  "chemistry",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "data.status.chemistry"
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
                                                    "b-form-row",
                                                    [
                                                      _c(
                                                        "b-col",
                                                        {
                                                          attrs: { cols: "2" }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              attrs: { for: "" }
                                                            },
                                                            [_vm._v("Biology")]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-col",
                                                        [
                                                          _c("b-form-input", {
                                                            staticClass: "w-25",
                                                            attrs: {
                                                              type: "number"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.data.status
                                                                  .biology,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.data
                                                                    .status,
                                                                  "biology",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "data.status.biology"
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
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              "Annual Renewal Fees Payment, (State the years paid)"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "mb-2" },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "mr-3",
                                                  on: { click: _vm.addRenew }
                                                },
                                                [_vm._v("Add")]
                                              ),
                                              _vm._v(" "),
                                              _vm.data.status.renewal.length > 0
                                                ? _c(
                                                    "b-button",
                                                    {
                                                      on: {
                                                        click: _vm.removeRenew
                                                      }
                                                    },
                                                    [_vm._v("Remove")]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.data.status.renewal,
                                            function(da, index) {
                                              return _c(
                                                "b-form-row",
                                                { key: index },
                                                [
                                                  _c(
                                                    "b-col",
                                                    { attrs: { cols: "2" } },
                                                    [
                                                      _c(
                                                        "b-form-select",
                                                        {
                                                          model: {
                                                            value:
                                                              da.annual_renewal_year,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                da,
                                                                "annual_renewal_year",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "da.annual_renewal_year"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "b-form-select-option",
                                                            {
                                                              attrs: {
                                                                value: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Select year"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            _vm.years,
                                                            function(
                                                              item,
                                                              idx
                                                            ) {
                                                              return _c(
                                                                "b-form-select-option",
                                                                {
                                                                  key: idx,
                                                                  attrs: {
                                                                    value: item
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(item)
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        ],
                                                        2
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-col",
                                                    [
                                                      _c("b-form-input", {
                                                        staticClass: "w-25",
                                                        attrs: {
                                                          type: "number"
                                                        },
                                                        model: {
                                                          value:
                                                            da.annual_renewal_ammount,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              da,
                                                              "annual_renewal_ammount",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "da.annual_renewal_ammount"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            }
                                          )
                                        ],
                                        2
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-form-row",
                                {
                                  staticClass: "justify-content-between w-100"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("three")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("five")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.five
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("SUPPORTING DOCUMENTS")]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Please attach scanned copies of payment receipt and the supporting documents (jpg, pdf, png)"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-2" },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "mr-3",
                                          on: { click: _vm.addDoc }
                                        },
                                        [_vm._v("Add")]
                                      ),
                                      _vm._v(" "),
                                      _vm.data.documents.length > 0
                                        ? _c(
                                            "b-button",
                                            { on: { click: _vm.removeDoc } },
                                            [_vm._v("Remove")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    _vm._l(_vm.data.documents, function(
                                      doc,
                                      idx
                                    ) {
                                      return _c(
                                        "b-col",
                                        {
                                          key: idx,
                                          staticClass: "border p-2",
                                          attrs: { cols: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Document name"
                                                },
                                                model: {
                                                  value: doc.name,
                                                  callback: function($$v) {
                                                    _vm.$set(doc, "name", $$v)
                                                  },
                                                  expression: "doc.name"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("Upload", {
                                                attrs: {
                                                  index: idx,
                                                  id: doc.name
                                                },
                                                on: {
                                                  getUploadDetails:
                                                    _vm.getUploadDetails
                                                }
                                              }),
                                              _vm._v(" "),
                                              doc.name !== ""
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-control"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Document Name: " +
                                                          _vm._s(doc.name)
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    }),
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-row",
                                {
                                  staticClass: "justify-content-between w-100"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("four")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("six")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.six
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("STAFF INFORMATION")]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    { staticClass: "mb-3" },
                                    [
                                      _vm.data.staff_info.length > 1
                                        ? _c(
                                            "b-button",
                                            {
                                              staticClass: "mr-3",
                                              on: { click: _vm.removeTab }
                                            },
                                            [_vm._v("Remove")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "mr-5",
                                          on: { click: _vm.addTab }
                                        },
                                        [_vm._v("Add")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-table", {
                                    attrs: {
                                      fields: _vm.fields,
                                      items: _vm.data.staff_info
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "cell(sn)",
                                          fn: function(data) {
                                            return [
                                              _vm._v(_vm._s(data.index + 1))
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(name)",
                                          fn: function(data) {
                                            return [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Teacher name"
                                                },
                                                model: {
                                                  value: data.item.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      data.item,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "data.item.name"
                                                }
                                              })
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(email)",
                                          fn: function(data) {
                                            return [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "email",
                                                  placeholder: "Teacher email"
                                                },
                                                model: {
                                                  value: data.item.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      data.item,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "data.item.email"
                                                }
                                              })
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(qualifications)",
                                          fn: function(data) {
                                            return [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Qualification"
                                                },
                                                model: {
                                                  value:
                                                    data.item.qualifications,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      data.item,
                                                      "qualifications",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "data.item.qualifications"
                                                }
                                              })
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(subjects_teaching)",
                                          fn: function(data) {
                                            return [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Subjects.."
                                                },
                                                model: {
                                                  value:
                                                    data.item.subjects_teaching,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      data.item,
                                                      "subjects_teaching",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "data.item.subjects_teaching"
                                                }
                                              })
                                            ]
                                          }
                                        },
                                        {
                                          key: "cell(phone_number)",
                                          fn: function(data) {
                                            return [
                                              _c("b-form-input", {
                                                attrs: { type: "tel" },
                                                model: {
                                                  value: data.item.phone_number,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      data.item,
                                                      "phone_number",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "data.item.phone_number"
                                                }
                                              })
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      3074788676
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-row",
                                {
                                  staticClass: "justify-content-between w-100"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("five")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("seven")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.seven
                        ? _c(
                            "b-form-row",
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
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "12" } }, [
                                _c("h5", [_vm._v("REVIEW")]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "Before you proceed, kindly note the applicable fees:"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                Nursery Schools—\n                "
                                  ),
                                  _c("strong", [_vm._v("N10,000")])
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                Primary School —\n                "
                                  ),
                                  _c("strong", [_vm._v("N10,000")])
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                Secondary Schools —\n                "
                                  ),
                                  _c("strong", [_vm._v("N20,000")])
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-form-row",
                                {
                                  staticClass: "justify-content-between w-100"
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("six")
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.handleSwitch("eight")
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.eight
                        ? _c(
                            "b-form-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h5", [_vm._v("REVIEW APPLICATION")]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Note that total to be paid will be calculated based on categories selected"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    {
                                      staticClass:
                                        "justify-content-between w-100"
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.handleSwitch("seven")
                                            }
                                          }
                                        },
                                        [_vm._v("Previous")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        { attrs: { type: "submit" } },
                                        [_vm._v("Continue to payment")]
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
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.nine
                        ? _c(
                            "b-form-row",
                            [
                              _c("b-col", { staticClass: "text-center" }, [
                                !_vm.unpaid
                                  ? _c("div", [
                                      _c("h5", [_vm._v("FEEDBACK")]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "Thank you for working with us to make education in Imo State better. Your application has been received. Kindly check your email for confirmation and allow up to Fifteen (15) working days for us to verify the information provided by you. Our representatives will be in touch shortly."
                                        )
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "mb-3" },
                                  [
                                    _vm.unpaid
                                      ? _c("Payment", {
                                          attrs: {
                                            amount1: _vm.sortAmount(),
                                            email1:
                                              _vm.data.contact_person.email
                                          },
                                          on: { getResponse: _vm.getResponse }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "outline-secondary" },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleSwitch("eight")
                                          }
                                        }
                                      },
                                      [_vm._v("Cancel")]
                                    )
                                  ],
                                  1
                                )
                              ])
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
            ],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=template&id=a2134220&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/single.vue?vue&type=template&id=a2134220&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _vm.$route.params.name == "revalidation" ? _c("Revalidation") : _vm._e(),
      _vm._v(" "),
      _vm.$route.params.name == "school-registration"
        ? _c("NewSchool")
        : _vm._e(),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/appForms/newSchool.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/user/appForms/newSchool.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newSchool_vue_vue_type_template_id_52926bbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newSchool.vue?vue&type=template&id=52926bbc&scoped=true& */ "./resources/js/components/user/appForms/newSchool.vue?vue&type=template&id=52926bbc&scoped=true&");
/* harmony import */ var _newSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newSchool.vue?vue&type=script&lang=js& */ "./resources/js/components/user/appForms/newSchool.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _newSchool_vue_vue_type_style_index_0_id_52926bbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css& */ "./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _newSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newSchool_vue_vue_type_template_id_52926bbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newSchool_vue_vue_type_template_id_52926bbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52926bbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/appForms/newSchool.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/appForms/newSchool.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/newSchool.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newSchool.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_style_index_0_id_52926bbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=style&index=0&id=52926bbc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_style_index_0_id_52926bbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_style_index_0_id_52926bbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_style_index_0_id_52926bbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_style_index_0_id_52926bbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_style_index_0_id_52926bbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/appForms/newSchool.vue?vue&type=template&id=52926bbc&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/newSchool.vue?vue&type=template&id=52926bbc&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_template_id_52926bbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newSchool.vue?vue&type=template&id=52926bbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/newSchool.vue?vue&type=template&id=52926bbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_template_id_52926bbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newSchool_vue_vue_type_template_id_52926bbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/appForms/revalidation.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/user/appForms/revalidation.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _revalidation_vue_vue_type_template_id_4fa60f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revalidation.vue?vue&type=template&id=4fa60f94&scoped=true& */ "./resources/js/components/user/appForms/revalidation.vue?vue&type=template&id=4fa60f94&scoped=true&");
/* harmony import */ var _revalidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revalidation.vue?vue&type=script&lang=js& */ "./resources/js/components/user/appForms/revalidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _revalidation_vue_vue_type_style_index_0_id_4fa60f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css& */ "./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _revalidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _revalidation_vue_vue_type_template_id_4fa60f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _revalidation_vue_vue_type_template_id_4fa60f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fa60f94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/appForms/revalidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/appForms/revalidation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/revalidation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./revalidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_style_index_0_id_4fa60f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=style&index=0&id=4fa60f94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_style_index_0_id_4fa60f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_style_index_0_id_4fa60f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_style_index_0_id_4fa60f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_style_index_0_id_4fa60f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_style_index_0_id_4fa60f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/appForms/revalidation.vue?vue&type=template&id=4fa60f94&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/revalidation.vue?vue&type=template&id=4fa60f94&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_template_id_4fa60f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./revalidation.vue?vue&type=template&id=4fa60f94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/revalidation.vue?vue&type=template&id=4fa60f94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_template_id_4fa60f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_revalidation_vue_vue_type_template_id_4fa60f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/appForms/single.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/user/appForms/single.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _single_vue_vue_type_template_id_a2134220_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single.vue?vue&type=template&id=a2134220&scoped=true& */ "./resources/js/components/user/appForms/single.vue?vue&type=template&id=a2134220&scoped=true&");
/* harmony import */ var _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.vue?vue&type=script&lang=js& */ "./resources/js/components/user/appForms/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _single_vue_vue_type_style_index_0_id_a2134220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css& */ "./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _single_vue_vue_type_template_id_a2134220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _single_vue_vue_type_template_id_a2134220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a2134220",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/appForms/single.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/appForms/single.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/appForms/single.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_a2134220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=style&index=0&id=a2134220&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_a2134220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_a2134220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_a2134220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_a2134220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_a2134220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/appForms/single.vue?vue&type=template&id=a2134220&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/single.vue?vue&type=template&id=a2134220&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_a2134220_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=template&id=a2134220&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/single.vue?vue&type=template&id=a2134220&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_a2134220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_a2134220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);