(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SchoolDirectory"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/school/viewSchool.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      school: {}
    };
  },
  components: {},
  mounted: function mounted() {
    this.viewSchool();
  },
  methods: {
    viewSchool: function viewSchool(id) {
      var _this = this;

      axios.get("/api/get-school/".concat(this.$route.params.id)).then(function (res) {
        if (res.status == 200) {
          _this.school = res.data;
        }
      })["catch"](function (err) {
        console.log("edit -> err", err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main-content[data-v-1ed99ebb] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.container[data-v-1ed99ebb] {\n  padding: 30px 15px;\n  height: 100%;\n   background: #f7f8fa;\n   margin-top: 30px;\n}\n.info[data-v-1ed99ebb] {\n  display: flex;\n}\n.info_1[data-v-1ed99ebb],\n.info_2[data-v-1ed99ebb] {\n  width: 50%;\n  padding: 15px;\n}\nli[data-v-1ed99ebb]{\n    margin-bottom: 24px;\n    font-size: 16px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/school/viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main-content" }, [
    _c("div", { staticClass: "container" }, [
      _c("h3", [_vm._v(_vm._s(_vm.school.name))]),
      _vm._v(" "),
      _c("p", { staticClass: "mb-5" }, [
        _vm._v(_vm._s(_vm.school.sector) + " School")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info" }, [
        _c("div", { staticClass: "info_1" }, [
          _c("h4", { staticClass: "mb-3 text-muted" }, [
            _vm._v("School Information")
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_vm._v("Level : " + _vm._s(_vm.school.level))]),
            _vm._v(" "),
            _c("li", [_vm._v("LGA : " + _vm._s(_vm.school.lga))]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Accreditation : " + _vm._s(_vm.school.accreditation))
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Type : " + _vm._s(_vm.school.type))]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Ownership : " +
                  _vm._s(
                    _vm.school.ownership == "individual"
                      ? "Individually Owned"
                      : "Faith Based"
                  )
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info_2" }, [
          _c("h4", { staticClass: "mb-3 text-muted" }, [
            _vm._v("Contact Information")
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_vm._v("Email : " + _vm._s(_vm.school.email))]),
            _vm._v(" "),
            _c("li", [_vm._v("Phone number : " + _vm._s(_vm.school.phone_no))]),
            _vm._v(" "),
            _c("li", [_vm._v("Address : " + _vm._s(_vm.school.address))]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/school/viewSchool.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/school/viewSchool.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewSchool_vue_vue_type_template_id_1ed99ebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true& */ "./resources/js/components/user/school/viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true&");
/* harmony import */ var _viewSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewSchool.vue?vue&type=script&lang=js& */ "./resources/js/components/user/school/viewSchool.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _viewSchool_vue_vue_type_style_index_0_id_1ed99ebb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css& */ "./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _viewSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewSchool_vue_vue_type_template_id_1ed99ebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewSchool_vue_vue_type_template_id_1ed99ebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ed99ebb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/school/viewSchool.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/school/viewSchool.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/school/viewSchool.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewSchool.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_style_index_0_id_1ed99ebb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=style&index=0&id=1ed99ebb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_style_index_0_id_1ed99ebb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_style_index_0_id_1ed99ebb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_style_index_0_id_1ed99ebb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_style_index_0_id_1ed99ebb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_style_index_0_id_1ed99ebb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/school/viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/user/school/viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_template_id_1ed99ebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/school/viewSchool.vue?vue&type=template&id=1ed99ebb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_template_id_1ed99ebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSchool_vue_vue_type_template_id_1ed99ebb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);