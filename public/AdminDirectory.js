(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminDirectory"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/adminDirectory.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      search: "",
      filter_item: "",
      lga: "selected",
      lgas: [],
      items: [],
      item: false,
      row_number: 1,
      schools: [],
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      total_schools: 0,
      admin: true,
      showlga: false,
      filter: false,
      filterOpen: false,
      lga_name: ""
    };
  },
  mounted: function mounted() {
    this.retrieveSchools();
    this.getLgas();

    if (window.innerWidth < 768) {
      this.filterOpen = true;
    }
  },
  watch: {
    search: "handleSearch",
    lga: "handleLga",
    item: "selectAll"
  },
  methods: {
    reset: function reset() {
      this.filter_item = "";
    },
    getLgas: function getLgas() {
      var _this = this;

      axios.get("/api/show-lgas").then(function (res) {
        if (res.status == 200) {
          _this.lgas = res.data;
        }
      })["catch"](function (err) {});
    },
    lgaShow: function lgaShow() {
      this.showlga = !this.showlga;
    },
    addLga: function addLga() {
      var _this2 = this;

      var data = {
        lga: this.lga_name
      };

      if (this.lga_name.length !== "") {
        axios.post("/api/create-lga", data).then(function (res) {
          if (res.status == 201) {
            _this2.getLgas();

            _this2.$toasted.info("Successful");

            _this2.showlga = false;
          }
        });
      }
    },
    handleFilter: function handleFilter() {
      this.filter = !this.filter;
      this.filterOpen = !this.filterOpen;
    },
    firstPage: function firstPage() {
      var _this3 = this;

      axios.get(this.first_page).then(function (res) {
        _this3.next_page = res.data.next_page_url;
        _this3.prev_page = res.data.prev_page_url;
        _this3.current_page = res.data.current_page;
        _this3.schools = res.data.data;
      });
    },
    lastPage: function lastPage() {
      var _this4 = this;

      axios.get(this.last_page).then(function (res) {
        _this4.next_page = res.data.next_page_url;
        _this4.prev_page = res.data.prev_page_url;
        _this4.current_page = res.data.current_page;
        _this4.schools = res.data.data;
      });
    },
    next: function next() {
      var _this5 = this;

      if (this.next_page) {
        axios.get(this.next_page).then(function (res) {
          _this5.next_page = res.data.next_page_url;
          _this5.prev_page = res.data.prev_page_url;
          _this5.current_page = res.data.current_page;
          _this5.schools = res.data.data;
        });
      }
    },
    prev: function prev() {
      var _this6 = this;

      if (this.prev_page) {
        axios.get(this.prev_page).then(function (res) {
          _this6.next_page = res.data.next_page_url;
          _this6.prev_page = res.data.prev_page_url;
          _this6.current_page = res.data.current_page;
          _this6.schools = res.data.data;
        });
      }
    },
    selectAll: function selectAll() {
      var _this7 = this;

      if (this.item) {
        this.items = [];
        this.schools.forEach(function (it) {
          _this7.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    handleClick: function handleClick(type) {
      this.filter_item = type;
      this.search = "";
      this.lga = "selected";
    },
    handleSearch: function handleSearch() {
      this.filter_item = this.search;
      this.lga = "selected";
    },
    handleLga: function handleLga() {
      this.filter_item = this.lga;
      this.search = "";
    },
    retrieveSchools: function retrieveSchools() {
      var _this8 = this;

      axios.get("/api/get-schools").then(function (res) {
        if (res.status == 200) {
          _this8.schools = res.data.data;
          _this8.total_schools = res.data.total;
          _this8.row_number = res.data.per_page;
          _this8.last_page = res.data.last_page_url;
          _this8.first_page = res.data.first_page_url;
          _this8.next_page = res.data.next_page_url;
          _this8.prev_page = res.data.prev_page_url;
          _this8.current_page = res.data.current_page;
        }
      })["catch"](function (err) {
        console.log("retrieveSchools -> err", err);
      });
    },
    editSchool: function editSchool(id) {
      var _this9 = this;

      axios.get("/api/get-school/".concat(id)).then(function (res) {
        if (res.status == 200) {
          _this9.$router.push("/admin/school/edit?id=".concat(id));
        }
      })["catch"](function (err) {
        console.log("edit -> err", err);
      });
    },
    viewSchool: function viewSchool(id) {
      var _this10 = this;

      axios.get("/api/get-school/".concat(id)).then(function (res) {
        if (res.status == 200) {
          _this10.$router.push("/admin/school/view?id=".concat(id));
        }
      })["catch"](function (err) {
        console.log("edit -> err", err);
      });
    },
    deleteSchool: function deleteSchool(id) {
      var del = confirm("Are you sure about this?");

      if (del) {
        axios["delete"]("/api/delete-school/".concat(id)).then(function (res) {
          if (res.status == 200) {}
        })["catch"](function (err) {
          console.log("del -> err", err);
        });
      }
    },
    deleteSchools: function deleteSchools() {
      var del = confirm("Are you sure about this?");

      if (del) {
        axios.post("/api/mass-delete", this.items).then(function (res) {
          if (res.status == 200) {}
        })["catch"](function (err) {
          console.log("del -> err", err);
        });
      }
    }
  },
  computed: {
    sortedSchools: function sortedSchools() {
      var _this11 = this;

      if (this.filter_item == "nursery" || this.filter_item == "primary" || this.filter_item == "secondary" || this.filter_item == "tertiary") {
        return this.schools.filter(function (item) {
          return item.level.toLowerCase() == _this11.filter_item.toLowerCase();
        });
      }

      if (this.filter_item == "boarding" || this.filter_item == "day") {
        return this.schools.filter(function (item) {
          return item.type.toLowerCase() == _this11.filter_item.toLowerCase();
        });
      }

      if (this.filter_item == "private" || this.filter_item == "public") {
        return this.schools.filter(function (item) {
          return item.sector.toLowerCase() == _this11.filter_item.toLowerCase();
        });
      }

      if (this.filter_item == "individual" || this.filter_item == "faith") {
        return this.schools.filter(function (item) {
          return item.ownership.toLowerCase() == _this11.filter_item.toLowerCase();
        });
      }

      if (this.filter_item == "accredited" || this.filter_item == "non-accredited") {
        return this.schools.filter(function (item) {
          return item.accreditation.toLowerCase() == _this11.filter_item.toLowerCase();
        });
      }

      if (this.lga !== "selected") {
        return this.schools.filter(function (item) {
          return item.lga.toLowerCase() == _this11.filter_item.toLowerCase();
        });
      }

      if (this.search !== "") {
        return this.schools.filter(function (item) {
          return item.name.toLowerCase().includes(_this11.search.toLowerCase());
        });
      }

      return this.schools;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.container-fluid[data-v-7082e869] {\n  background: #f7f8fa;\n}\n.main-content[data-v-7082e869] {\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  padding: 15px 0px;\n}\n.mobile-filter[data-v-7082e869] {\n  display: none;\n}\n.filter_item[data-v-7082e869] {\n  text-transform: capitalize;\n}\n.action[data-v-7082e869] {\n  width: 1%;\n}\n.action_icon[data-v-7082e869] {\n  font-size: 13px;\n}\nth[data-v-7082e869] {\n  color: #0F7A8A;\n}\n.navigation[data-v-7082e869] {\n  display: flex;\n  width: 20%;\n  margin: 0 auto;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.prev[data-v-7082e869],\n.next[data-v-7082e869] {\n  font-size: 14px;\n}\n.prev_button[data-v-7082e869],\n.next_button[data-v-7082e869] {\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  font-size: 12px;\n}\nh6[data-v-7082e869] {\n  color: #0F7A8A;\n}\n.fa-minus-circle[data-v-7082e869]:before {\n  content: \"\\F056\";\n  color: #dc3545;\n}\n.button[data-v-7082e869] {\n  padding: 8px 32px;\n  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);\n  line-height: 1.25;\n  background: #dc3545;\n  text-decoration: none;\n  color: white;\n  font-size: 13px;\n  letter-spacing: 0.08em;\n  text-transform: initial;\n  position: relative;\n  transition: background-color 0.6s ease;\n  overflow: hidden;\n}\n.button[data-v-7082e869]:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 50%;\n  left: 50%;\n  transform-style: flat;\n  transform: translate3d(-50%, -50%, 0);\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  transition: width 0.3s ease, height 0.3s ease;\n}\n.button[data-v-7082e869]:focus, .button[data-v-7082e869]:hover {\n  background: #ca2333;\n}\n.button[data-v-7082e869]:active:after {\n  width: 200px;\n  height: 200px;\n}\n.top_bar[data-v-7082e869] {\n  padding: 5px 10px;\n  background: #f7fafa;\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  align-items: center;\n}\n.row_numb[data-v-7082e869] {\n  width: 30px;\n}\n.row_numb[data-v-7082e869]::-webkit-input-placeholder {\n  text-align: center;\n}\n.row_numb[data-v-7082e869]::-moz-placeholder {\n  text-align: center;\n}\n.row_numb[data-v-7082e869]:-ms-input-placeholder {\n  text-align: center;\n}\n.row_numb[data-v-7082e869]::-ms-input-placeholder {\n  text-align: center;\n}\n.row_numb[data-v-7082e869]::placeholder {\n  text-align: center;\n}\n.reset[data-v-7082e869] {\n  cursor: pointer;\n}\n.bar[data-v-7082e869] {\n  position: relative;\n  padding-right: 15px;\n}\n.left_side[data-v-7082e869] {\n  width: 20%;\n  height: 100vh;\n}\n.side_bar[data-v-7082e869] {\n  background: white;\n  border-radius: 5px;\n  height: 100vh;\n  width: 93%;\n  padding: 20px 0;\n}\n.search_bar[data-v-7082e869] {\n  position: relative;\n  margin-bottom: 0;\n}\n.search_input[data-v-7082e869] {\n  border-color: #f7f8fa;\n  height: 25px;\n  font-size: 13px;\n}\n.form-control[data-v-7082e869]::-webkit-input-placeholder {\n  font-size: 13px;\n}\n.form-control[data-v-7082e869]::-moz-placeholder {\n  font-size: 13px;\n}\n.form-control[data-v-7082e869]:-ms-input-placeholder {\n  font-size: 13px;\n}\n.form-control[data-v-7082e869]::-ms-input-placeholder {\n  font-size: 13px;\n}\n.form-control[data-v-7082e869]::placeholder {\n  font-size: 13px;\n}\n.fa-search[data-v-7082e869] {\n  position: absolute;\n  font-size: 12px;\n  right: 14px;\n  top: 50%;\n  margin-top: -6px;\n  color: rgba(0, 0, 0, 0.44);\n}\nul h6[data-v-7082e869] {\n  padding: 10px 15px;\n}\nli p[data-v-7082e869] {\n  font-size: 15px;\n  font-weight: 200;\n  padding: 6px 40px;\n  margin: 0;\n}\nli p[data-v-7082e869]:hover {\n  background: #f7f8fa;\n  cursor: pointer;\n}\nli[data-v-7082e869] {\n  border-bottom: 1px solid #f7f8fa;\n}\n.right_side[data-v-7082e869] {\n  width: 80%;\n  height: 100vh;\n  background: white;\n  padding: 15px;\n  border-radius: 5px;\n  overflow: scroll;\n}\n@media (max-width: 768px) {\n.side_bar[data-v-7082e869] {\n    height: auto;\n    overflow: hidden;\n    min-height: auto;\n    padding: 15px 10px;\n    width: 100%;\n    background: #f7f8fa;\n    position: relative;\n}\n.left_side[data-v-7082e869] {\n    width: 100%;\n    position: fixed;\n    height: auto;\n    z-index: 99;\n    bottom: 0;\n}\n.right_side[data-v-7082e869] {\n    width: 100%;\n    z-index: 1;\n}\n.mobile-filter[data-v-7082e869] {\n    display: block;\n    text-align: center;\n}\n.container-fluid[data-v-7082e869] {\n    padding: 0;\n}\n.main-content[data-v-7082e869] {\n    padding-top: 0;\n}\n.mobile-filter-option[data-v-7082e869] {\n    position: absolute;\n    right: 80px;\n    top: 70px;\n    width: 40%;\n}\n.top_bar[data-v-7082e869] {\n    flex-direction: column;\n}\n.bar[data-v-7082e869] {\n    margin-bottom: 10px;\n    border: none !important;\n}\nli p[data-v-7082e869] {\n    font-size: 14px;\n}\nul[data-v-7082e869] {\n    width: 50%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=template&id=7082e869&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/adminDirectory.vue?vue&type=template&id=7082e869&scoped=true& ***!
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "main-content" }, [
      _c("div", { staticClass: "left_side" }, [
        _c("div", { staticClass: "side_bar" }, [
          _c(
            "div",
            { staticClass: "mobile-filter", on: { click: _vm.handleFilter } },
            [_vm._m(0)]
          ),
          _vm._v(" "),
          _vm.filter
            ? _c("div", { staticClass: "mobile-filter-option text-right" }, [
                _c("input", {
                  staticClass: "form-control",
                  staticStyle: { "text-transform": "capitalize" },
                  attrs: { type: "text", readonly: "" },
                  domProps: { value: _vm.filter_item }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "button-green ml-auto",
                    attrs: { type: "button" },
                    on: { click: _vm.handleFilter }
                  },
                  [_vm._v("Apply")]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.filterOpen
            ? _c("ul", [
                _c("h6", [_vm._v("Category")]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("")
                        }
                      }
                    },
                    [_vm._v("All")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("nursery")
                        }
                      }
                    },
                    [_vm._v("Nursery")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("primary")
                        }
                      }
                    },
                    [_vm._v("Primary")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("secondary")
                        }
                      }
                    },
                    [_vm._v("Secondary")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("tertiary")
                        }
                      }
                    },
                    [_vm._v("Tertiary")]
                  )
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("Filter")]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("boarding")
                        }
                      }
                    },
                    [_vm._v("Boarding")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("day")
                        }
                      }
                    },
                    [_vm._v("Day")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("private")
                        }
                      }
                    },
                    [_vm._v("Private")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("public")
                        }
                      }
                    },
                    [_vm._v("Public")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("individual")
                        }
                      }
                    },
                    [_vm._v("Individually Owned")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("faith")
                        }
                      }
                    },
                    [_vm._v("Faith Based")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("accredited")
                        }
                      }
                    },
                    [_vm._v("Accredited")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleClick("non-accredited")
                        }
                      }
                    },
                    [_vm._v("Non-accredited")]
                  )
                ]),
                _vm._v(" "),
                _c("h6", [_vm._v("LGAs")]),
                _vm._v(" "),
                _c("li", [
                  _c("div", { staticClass: "form-group px-2 text-center" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.lga,
                            expression: "lga"
                          }
                        ],
                        staticClass: "custom-select mb-2",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.lga = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "selected" } }, [
                          _vm._v("Select one")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.lgas, function(lga, index) {
                          return _c(
                            "option",
                            {
                              key: index,
                              staticClass: "lga_name",
                              domProps: { value: lga.name.toLowerCase() }
                            },
                            [_vm._v(_vm._s(lga.name))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    !_vm.showlga
                      ? _c(
                          "button",
                          {
                            staticClass: "button-green",
                            on: { click: _vm.lgaShow }
                          },
                          [_vm._v("Add new")]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.showlga
                    ? _c(
                        "div",
                        { staticClass: "form-group px-2 text-center" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.lga_name,
                                expression: "lga_name"
                              }
                            ],
                            staticClass: "form-control mb-2",
                            attrs: {
                              type: "text",
                              "aria-describedby": "helpId",
                              placeholder: "Enter lga name"
                            },
                            domProps: { value: _vm.lga_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.lga_name = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-green",
                              on: { click: _vm.addLga }
                            },
                            [_vm._v("Add")]
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right_side" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-between align-items-center mb-4"
          },
          [
            _c("h4", { staticClass: "filter_item mb-3" }, [
              _vm._v(_vm._s(_vm.filter_item) + " Schools")
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("router-link", { attrs: { to: "/admin/school/add" } }, [
                  _c("button", { staticClass: "button-green mr-3" }, [
                    _vm._v("Add school")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "small",
                  { staticClass: "reset", on: { click: _vm.reset } },
                  [_vm._v("Reset filter")]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "top_bar" }, [
          _c("div", { staticClass: "bar border-right" }, [
            _vm.first_page
              ? _c("i", {
                  staticClass: "fa fa-angle-double-left pr-2",
                  attrs: { "aria-hidden": "true" },
                  on: { click: _vm.firstPage }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.prev_page
              ? _c("i", {
                  staticClass: "fas fa-angle-left pr-2",
                  on: { click: _vm.prev }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.current_page,
                  expression: "current_page"
                }
              ],
              staticClass: "row_numb pl-2",
              attrs: { type: "number" },
              domProps: { value: _vm.current_page },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.current_page = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm.next_page
              ? _c("i", {
                  staticClass: "fas fa-angle-right pl-2",
                  attrs: { "aria-hidden": "true" },
                  on: { click: _vm.next }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.last_page
              ? _c("i", {
                  staticClass: "fa fa-angle-double-right pl-2",
                  attrs: { "aria-hidden": "true" },
                  on: { click: _vm.lastPage }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bar border-right" }, [
            _vm._v("Number of rows " + _vm._s(_vm.row_number))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bar border-right" }, [
            _vm._v("Total Schools " + _vm._s(_vm.total_schools))
          ]),
          _vm._v(" "),
          _vm.admin
            ? _c("div", { staticClass: "bar" }, [
                _c(
                  "label",
                  { staticClass: "custom-control custom-checkbox m-0" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.item,
                          expression: "item"
                        }
                      ],
                      attrs: { type: "checkbox", value: "checkedValue" },
                      domProps: {
                        checked: Array.isArray(_vm.item)
                          ? _vm._i(_vm.item, "checkedValue") > -1
                          : _vm.item
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.item,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "checkedValue",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.item = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.item = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.item = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "custom-control-indicator" }, [
                      _vm._v("Select all")
                    ])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "bar" }, [
            _c("div", { staticClass: "form-group search_bar" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "form-control search_input rounded-pill",
                attrs: {
                  type: "text",
                  "aria-describedby": "helpId",
                  placeholder: "Search row"
                },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-search",
                attrs: { "aria-hidden": "true" }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-hover" }, [
            _c("thead", { staticClass: "thead-inverse" }, [
              _c("tr", [
                _c("th", [_vm._v("#")]),
                _vm._v(" "),
                _c("th", [_vm._v("Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Address")]),
                _vm._v(" "),
                _c("th", [_vm._v("Phone")]),
                _vm._v(" "),
                _c("th", [_vm._v("Email")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")]),
                _vm._v(" "),
                _vm.admin
                  ? _c("th", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item,
                            expression: "item"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.item)
                            ? _vm._i(_vm.item, null) > -1
                            : _vm.item
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.item,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.item = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.item = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.item = $$c
                            }
                          }
                        }
                      })
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.sortedSchools, function(school, idx) {
                return _c("tr", { key: idx }, [
                  _c("td", { attrs: { scope: "row" } }, [
                    _vm._v(_vm._s(school.id))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(school.name != "null" ? school.name : "-"))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(school.address != "null" ? school.address : "-")
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(school.phone_no != "null" ? school.phone_no : "-")
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(school.email != "null" ? school.email : "-"))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "action" }, [
                    _c("tr", { staticClass: "border-0" }, [
                      _vm.admin
                        ? _c("td", { staticClass: "border-0 py-0" }, [
                            _c(
                              "i",
                              {
                                staticClass: "fas fa-edit action_icon",
                                on: {
                                  click: function($event) {
                                    return _vm.editSchool(school.id)
                                  }
                                }
                              },
                              [_vm._v("Edit")]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", { staticClass: "border-0 py-0" }, [
                        _c(
                          "i",
                          {
                            staticClass: "fa fa-eye",
                            on: {
                              click: function($event) {
                                return _vm.viewSchool(school.id)
                              }
                            }
                          },
                          [_vm._v("View")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.admin
                        ? _c("td", { staticClass: "border-0 py-0" }, [
                            _c(
                              "i",
                              {
                                staticClass: "fa fa-minus-circle text-red",
                                attrs: { "aria-hidden": "true" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteSchool(school.id)
                                  }
                                }
                              },
                              [_vm._v("Drop")]
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.admin
                    ? _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.items,
                              expression: "items"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            value: school.id,
                            checked: Array.isArray(_vm.items)
                              ? _vm._i(_vm.items, school.id) > -1
                              : _vm.items
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.items,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = school.id,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 && (_vm.items = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.items = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.items = $$c
                              }
                            }
                          }
                        })
                      ])
                    : _vm._e()
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _vm.items.length
            ? _c("div", { staticClass: "text-right mt-2" }, [
                _c("button", { staticClass: "button" }, [_vm._v("Remove all")])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "navigation" }, [
            _vm.prev_page
              ? _c(
                  "button",
                  {
                    staticClass: "prev_button",
                    attrs: { type: "button" },
                    on: { click: _vm.prev }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-arrow-circle-left mc1 prev",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(" Prev\n          ")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.next_page
              ? _c(
                  "button",
                  { staticClass: "next_button", on: { click: _vm.next } },
                  [
                    _vm._v("\n            Next\n            "),
                    _c("i", {
                      staticClass: "fa fa-arrow-circle-right mc1 next",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("\n            Filters\n            "),
      _c("i", {
        staticClass: "fa fa-long-arrow-up",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/adminDirectory.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/adminDirectory.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adminDirectory_vue_vue_type_template_id_7082e869_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminDirectory.vue?vue&type=template&id=7082e869&scoped=true& */ "./resources/js/components/admin/adminDirectory.vue?vue&type=template&id=7082e869&scoped=true&");
/* harmony import */ var _adminDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminDirectory.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/adminDirectory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _adminDirectory_vue_vue_type_style_index_0_id_7082e869_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss& */ "./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adminDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminDirectory_vue_vue_type_template_id_7082e869_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminDirectory_vue_vue_type_template_id_7082e869_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7082e869",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/adminDirectory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/adminDirectory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/adminDirectory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDirectory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_style_index_0_id_7082e869_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=style&index=0&id=7082e869&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_style_index_0_id_7082e869_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_style_index_0_id_7082e869_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_style_index_0_id_7082e869_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_style_index_0_id_7082e869_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_style_index_0_id_7082e869_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/adminDirectory.vue?vue&type=template&id=7082e869&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/adminDirectory.vue?vue&type=template&id=7082e869&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_template_id_7082e869_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDirectory.vue?vue&type=template&id=7082e869&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/adminDirectory.vue?vue&type=template&id=7082e869&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_template_id_7082e869_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDirectory_vue_vue_type_template_id_7082e869_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);