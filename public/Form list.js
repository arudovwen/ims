(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Form list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/formList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navigation/navigation */ "./resources/js/components/navigation/navigation.vue");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../footer/footer */ "./resources/js/components/footer/footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: []
    };
  },
  components: {
    Navigation: _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"]
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-7be7192a] {\n  min-height: 70vh;\n  padding: 50px 15px;\n  width: 60%;\n  margin:0 auto;\n}\n.coll[data-v-7be7192a] {\n  width: 100%;\n  height: 200px;\n  background: green;\n  margin: 10px;\n}\n.icon[data-v-7be7192a] {\n  font-size: 65px;\n  margin-bottom: 20px;\n}\na[data-v-7be7192a] {\n  text-align: center;\n  text-decoration: none;\n  color:#0f7a8a;\n  cursor: pointer;\n  text-transform:uppercase;\n}\na[data-v-7be7192a]:hover{\n  font-weight: bold;\n}\n.tab[data-v-7be7192a] {\n  background-image: linear-gradient(\n    to right,\n    #0f7a8a,\n    #0e6d7b,\n    #0c616d,\n    #0b555f,\n    #094952\n  );\n  height: auto;\n  width: 24%;\n  padding: 15px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.tab:hover .icon[data-v-7be7192a] {\n  transform: scale(1.04);\n  transition: all 0.4s;\n}\n.mc1[data-v-7be7192a] {\n  color: transparent;\n}\n@media(max-width:425px){\n.container[data-v-7be7192a]{\n    width:100%;\n}\na[data-v-7be7192a]{\n    text-transform: capitalize;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=template&id=7be7192a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appForms/formList.vue?vue&type=template&id=7be7192a&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("Navigation"),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _c(
            "b-row",
            {},
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-list-group",
                    [
                      _c(
                        "b-list-group-item",
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/forms/revalidation" } },
                            [
                              _vm._v(
                                "Enumeration, Revalidation/Recertification of Schools in Imo State"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/forms/school-registration" } },
                            [_vm._v("Registration of New Schools in Imo State")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.items, function(item, idx) {
                        return _c(
                          "b-list-group-item",
                          { key: idx },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "FormTemplate",
                                    params: {
                                      id: item.id
                                    }
                                  }
                                }
                              },
                              [_vm._v(" " + _vm._s(item.title))]
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
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
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/appForms/formList.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/appForms/formList.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formList_vue_vue_type_template_id_7be7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formList.vue?vue&type=template&id=7be7192a&scoped=true& */ "./resources/js/components/user/appForms/formList.vue?vue&type=template&id=7be7192a&scoped=true&");
/* harmony import */ var _formList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formList.vue?vue&type=script&lang=js& */ "./resources/js/components/user/appForms/formList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _formList_vue_vue_type_style_index_0_id_7be7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css& */ "./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _formList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formList_vue_vue_type_template_id_7be7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formList_vue_vue_type_template_id_7be7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7be7192a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/appForms/formList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/appForms/formList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/formList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_style_index_0_id_7be7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=style&index=0&id=7be7192a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_style_index_0_id_7be7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_style_index_0_id_7be7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_style_index_0_id_7be7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_style_index_0_id_7be7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_style_index_0_id_7be7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/appForms/formList.vue?vue&type=template&id=7be7192a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/user/appForms/formList.vue?vue&type=template&id=7be7192a&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_template_id_7be7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formList.vue?vue&type=template&id=7be7192a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appForms/formList.vue?vue&type=template&id=7be7192a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_template_id_7be7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formList_vue_vue_type_template_id_7be7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);