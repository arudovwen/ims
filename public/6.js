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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: "",
      filter: '',
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
      }, "phone_no", 'remarks']
    };
  },
  mounted: function mounted() {},
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/api/principal-phone').then(function (res) {
        if (res.status == 200) {
          _this.items = res.data.data;
          _this.total = res.data.total;
          _this.row_number = res.data.per_page;
          _this.last_page = res.data.last_page_url;
          _this.first_page = res.data.first_page_url;
          _this.next_page = res.data.next_page_url;
          _this.prev_page = res.data.prev_page_url;
          _this.current_page = res.data.current_page;
        }
      })["catch"]();
    },
    firstPage: function firstPage() {
      var _this2 = this;

      axios.get(this.first_page).then(function (res) {
        _this2.next_page = res.data.next_page_url;
        _this2.prev_page = res.data.prev_page_url;
        _this2.current_page = res.data.current_page;
        _this2.items = res.data.data;
      });
    },
    lastPage: function lastPage() {
      var _this3 = this;

      axios.get(this.last_page).then(function (res) {
        _this3.next_page = res.data.next_page_url;
        _this3.prev_page = res.data.prev_page_url;
        _this3.current_page = res.data.current_page;
        _this3.items = res.data.data;
      });
    },
    next: function next() {
      var _this4 = this;

      if (this.next_page) {
        axios.get(this.next_page).then(function (res) {
          _this4.next_page = res.data.next_page_url;
          _this4.prev_page = res.data.prev_page_url;
          _this4.current_page = res.data.current_page;
          _this4.items = res.data.data;
        });
      }
    },
    prev: function prev() {
      var _this5 = this;

      if (this.prev_page) {
        axios.get(this.prev_page).then(function (res) {
          _this5.next_page = res.data.next_page_url;
          _this5.prev_page = res.data.prev_page_url;
          _this5.current_page = res.data.current_page;
          _this5.items = res.data.data;
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
exports.push([module.i, "\n.container-fluid[data-v-f18bd36a]{\n  padding: 40px 30px;\n}\n", ""]);

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
          _c("b-col", [
            _c("span", { staticClass: "mr-4" }, [
              _vm._v("Current page:" + _vm._s(_vm.current_page))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "mr-4" }, [
              _vm._v("Row per page :" + _vm._s(_vm.row_number))
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Total No : " + _vm._s(_vm.total))])
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c(
                "b-form-group",
                [
                  _c("b-form-select", {
                    model: {
                      value: _vm.filter,
                      callback: function($$v) {
                        _vm.filter = $$v
                      },
                      expression: "filter"
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
                  _c("b-form-input", {
                    attrs: { placeholder: "search" },
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
      _c("b-row", [_c("b-table", { attrs: { fields: _vm.fields } })], 1)
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