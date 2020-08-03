(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/directory/principalPhone.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      all: false,
      search: "",
      filter: "",
      row_number: 1,
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      total: 0,
      items: [],
      fields: ["sn", {
        key: "name",
        sortable: true
      }, {
        key: "present_posting",
        sortable: true
      }, "sect", "lga", {
        key: "zone",
        sortable: true
      }, "phone_no", "remarks"]
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  watch: {
    all: "getAllData"
  },
  computed: {
    filtered: function filtered() {
      var _this = this;

      return this.items.filter(function (i) {
        if (_this.filter == "name") {
          return i.name.toLowerCase().includes(_this.search.toLowerCase());
        } else {
          return i.present_posting.toLowerCase().includes(_this.search.toLowerCase());
        }
      });
    }
  },
  methods: {
    getAllData: function getAllData() {
      var _this2 = this;

      if (this.all) {
        axios.get("/api/all-principal-phone").then(function (res) {
          if (res.status == 200) {
            _this2.items = res.data;
            _this2.next_page = "";
            _this2.prev_page = "";
            _this2.row_number = _this2.items.length;
          }
        })["catch"]();
      } else {
        this.getData();
      }
    },
    getData: function getData() {
      var _this3 = this;

      axios.get("/api/principal-phone").then(function (res) {
        if (res.status == 200) {
          _this3.items = res.data.data;
          _this3.total = res.data.total;
          _this3.row_number = res.data.per_page;
          _this3.last_page = res.data.last_page_url;
          _this3.first_page = res.data.first_page_url;
          _this3.next_page = res.data.next_page_url;
          _this3.prev_page = res.data.prev_page_url;
          _this3.current_page = res.data.current_page;
        }
      })["catch"]();
    },
    firstPage: function firstPage() {
      var _this4 = this;

      axios.get(this.first_page).then(function (res) {
        _this4.next_page = res.data.next_page_url;
        _this4.prev_page = res.data.prev_page_url;
        _this4.current_page = res.data.current_page;
        _this4.items = res.data.data;
      });
    },
    lastPage: function lastPage() {
      var _this5 = this;

      axios.get(this.last_page).then(function (res) {
        _this5.next_page = res.data.next_page_url;
        _this5.prev_page = res.data.prev_page_url;
        _this5.current_page = res.data.current_page;
        _this5.items = res.data.data;
      });
    },
    next: function next() {
      var _this6 = this;

      if (this.next_page) {
        axios.get(this.next_page).then(function (res) {
          _this6.next_page = res.data.next_page_url;
          _this6.prev_page = res.data.prev_page_url;
          _this6.current_page = res.data.current_page;
          _this6.items = res.data.data;
        });
      }
    },
    prev: function prev() {
      var _this7 = this;

      if (this.prev_page) {
        axios.get(this.prev_page).then(function (res) {
          _this7.next_page = res.data.next_page_url;
          _this7.prev_page = res.data.prev_page_url;
          _this7.current_page = res.data.current_page;
          _this7.items = res.data.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-fluid[data-v-f18bd36a] {\n  padding: 40px 30px;\n}\nh5[data-v-f18bd36a] {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n.wit[data-v-f18bd36a] {\n    min-width: 150px;\n}\n.container-fluid[data-v-f18bd36a] {\n    padding: 40px 0;\n}\n.fs14[data-v-f18bd36a] {\n    font-size: 14px;\n}\n.p0[data-v-f18bd36a] {\n    padding: 0 !important;\n    margin: 0 !important;\n    text-align: center;\n}\n.t-header[data-v-f18bd36a] {\n    min-width: 150px;\n}\n}\n@media (max-width: 425px) {\n.wit[data-v-f18bd36a] {\n    min-width: 150px;\n}\n.container-fluid[data-v-f18bd36a] {\n    padding: 40px 10px;\n}\n.fs14[data-v-f18bd36a] {\n    font-size: 12px;\n}\n  /* .mb-1 {\n    margin-bottom: 0 !important;\n  } */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/directory/principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "b-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "b-row",
        { staticClass: "justify-content-between align-items-center mb-4" },
        [
          _c("b-col", { attrs: { cols: "12", sm: "8" } }, [
            _c("span", { staticClass: "mr-2 fs14" }, [
              _vm._v("Page no: " + _vm._s(_vm.current_page))
            ]),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "mr-2 fs14", on: { click: _vm.firstPage } },
              [
                _c("i", {
                  staticClass: "fa fa-angle-double-left",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "mr-2 fs14", on: { click: _vm.prev } }, [
              _c("i", {
                staticClass: "fa fa-angle-left",
                attrs: { "aria-hidden": "true" }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "mr-2 fs14", on: { click: _vm.next } }, [
              _c("i", {
                staticClass: "fa fa-angle-right",
                attrs: { "aria-hidden": "true" }
              })
            ]),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "mr-2 fs14", on: { click: _vm.lastPage } },
              [
                _c("i", {
                  staticClass: "fa fa-angle-double-right",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "mr-2 fs14" }, [
              _vm._v("Page: " + _vm._s(_vm.current_page))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "mr-2 fs14" }, [
              _vm._v("Per page: " + _vm._s(_vm.row_number))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "fs14" }, [
              _vm._v("Total: " + _vm._s(_vm.total))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12", sm: "4" } },
            [
              _c(
                "b-form-row",
                { staticClass: "align-items-center w-100" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-center align-items-center mb-3 w-100"
                    },
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          staticClass: "pr-3 fs14",
                          model: {
                            value: _vm.all,
                            callback: function($$v) {
                              _vm.all = $$v
                            },
                            expression: "all"
                          }
                        },
                        [_vm._v("Show all")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center "
                        },
                        [
                          _c("label", { staticClass: "mr-2 fs14 mb-1" }, [
                            _vm._v("Search by:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-radio",
                            {
                              staticClass: "mr-2 fs14",
                              attrs: {
                                value: "name",
                                name: "name",
                                label: "Name"
                              },
                              model: {
                                value: _vm.filter,
                                callback: function($$v) {
                                  _vm.filter = $$v
                                },
                                expression: "filter"
                              }
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-radio",
                            {
                              staticClass: "mr-3 fs14",
                              attrs: {
                                value: "present posting",
                                name: "present posting",
                                label: "Present Possting"
                              },
                              model: {
                                value: _vm.filter,
                                callback: function($$v) {
                                  _vm.filter = $$v
                                },
                                expression: "filter"
                              }
                            },
                            [_vm._v("Present Posting")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "fs14",
                    attrs: { placeholder: "Search by " + _vm.filter },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
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
          _c("b-table", {
            attrs: { responsive: "", fields: _vm.fields, items: _vm.filtered },
            scopedSlots: _vm._u([
              {
                key: "cell(sn)",
                fn: function(data) {
                  return [_vm._v(_vm._s(data.item.id))]
                }
              },
              {
                key: "cell(remarks)",
                fn: function(data) {
                  return [
                    _vm._v(
                      _vm._s(data.item.remarks == "" ? "-" : data.item.remarks)
                    )
                  ]
                }
              },
              {
                key: "cell(name)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "t-header" }, [
                      _vm._v(_vm._s(data.item.name))
                    ])
                  ]
                }
              },
              {
                key: "cell(present_posting)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "t-header" }, [
                      _vm._v(_vm._s(data.item.present_posting))
                    ])
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
        "b-row",
        [
          _c("b-col", [
            _c(
              "div",
              { staticClass: "navigation" },
              [
                _vm.prev_page
                  ? _c(
                      "b-button",
                      {
                        staticClass: "prev_button mr-3",
                        attrs: { type: "button" },
                        on: { click: _vm.prev }
                      },
                      [_vm._v("Prev")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.next_page
                  ? _c(
                      "b-button",
                      { staticClass: "next_button", on: { click: _vm.next } },
                      [_vm._v("Next")]
                    )
                  : _vm._e()
              ],
              1
            )
          ])
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

/***/ "./resources/js/components/user/directory/principalPhone.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/user/directory/principalPhone.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _principalPhone_vue_vue_type_template_id_f18bd36a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true& */ "./resources/js/components/user/directory/principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true&");
/* harmony import */ var _principalPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principalPhone.vue?vue&type=script&lang=js& */ "./resources/js/components/user/directory/principalPhone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _principalPhone_vue_vue_type_style_index_0_id_f18bd36a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css& */ "./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _principalPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _principalPhone_vue_vue_type_template_id_f18bd36a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _principalPhone_vue_vue_type_template_id_f18bd36a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f18bd36a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/directory/principalPhone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/directory/principalPhone.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user/directory/principalPhone.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./principalPhone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_style_index_0_id_f18bd36a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=style&index=0&id=f18bd36a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_style_index_0_id_f18bd36a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_style_index_0_id_f18bd36a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_style_index_0_id_f18bd36a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_style_index_0_id_f18bd36a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_style_index_0_id_f18bd36a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/directory/principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/user/directory/principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_template_id_f18bd36a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/directory/principalPhone.vue?vue&type=template&id=f18bd36a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_template_id_f18bd36a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_principalPhone_vue_vue_type_template_id_f18bd36a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);